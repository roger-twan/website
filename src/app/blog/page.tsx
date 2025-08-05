import Link from 'next/link';
import { Metadata } from 'next';
import { format } from 'date-fns';
import ClientImage from '@/components/ClientImage';
import IconDocument from '@public/icons/document.svg';
import IconChevronLeft from '@public/icons/chevron-left.svg';
import IconChevronRight from '@public/icons/chevron-right.svg';
import getPosts, { Post } from './blog.data';

type BlogListProps = {
  searchParams: Promise<{
    page?: string;
    tag?: string;
  }>;
};

interface Tags {
  [tagName: string]: number;
}

export const metadata: Metadata = {
  title: 'Blog | Roger Twan',
  description:
    'Thoughts, tutorials, and updates about web development, photography, and more.',
};

const POSTS_PER_PAGE = 12;

const getTags = (posts: Post[]) => {
  const allTags: Tags = {};
  const tags: Tags = {};

  for (const post of posts) {
    for (const tag of post.tags) {
      if (allTags[tag]) {
        allTags[tag] = ++allTags[tag];
      } else {
        allTags[tag] = 1;
      }
    }
  }

  const sortedTags: string[] = Object.keys(allTags).sort(
    (a: string, b: string) => {
      if (allTags[b] !== allTags[a]) {
        return allTags[b] - allTags[a];
      } else {
        return a.localeCompare(b);
      }
    },
  );

  for (const tag of sortedTags) {
    tags[tag] = allTags[tag];
  }

  return tags;
};

export default async function BlogList({ searchParams }: BlogListProps) {
  const blogPosts = await getPosts();
  const tags = getTags(blogPosts);

  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const selectedTag = resolvedSearchParams.tag || '';

  // Filter posts by tag if specified
  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag =
      !selectedTag || (post.tags && post.tags.includes(selectedTag));
    return matchesTag;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  // Generate page numbers for pagination
  const pageNumbers = [];
  const maxPageNumbers = 3; // Maximum number of page numbers to show
  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

  if (endPage - startPage + 1 < maxPageNumbers) {
    startPage = Math.max(1, endPage - maxPageNumbers + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Function to generate URL with updated query parameters
  const getPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (selectedTag) params.set('tag', selectedTag);
    if (page > 1) params.set('page', page.toString());
    return `/blog${params.toString() ? `?${params.toString()}` : ''}`;
  };

  // Function to generate URL for tag filter
  const getTagUrl = (tag: string) => {
    const params = new URLSearchParams();
    params.set('tag', tag);
    return `/blog?${params.toString()}`;
  };

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate__animated animate__fadeInDown">
              Blog
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl animate__animated animate__flipInX">
              Thoughts, tutorials, and updates about design, development, and
              other topics I&apos;m passionate about.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tag Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/blog"
                className={`px-3 py-1 rounded-full text-sm transition duration-300 ${
                  selectedTag === ''
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                All
                <span
                  className={`ml-2 ${selectedTag === '' ? 'text-white/80' : 'text-gray-500'}`}
                >
                  {blogPosts.length}
                </span>
              </Link>
              {Object.entries(tags).map(([tag, count]) => (
                <Link
                  key={tag}
                  href={getTagUrl(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition duration-300 ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                  <span
                    className={`ml-2 ${selectedTag === tag ? 'text-white/80' : 'text-gray-500'}`}
                  >
                    {count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-gray-100 rounded-lg shadow overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col h-full"
                  >
                    {post.thumbnail ? (
                      <ClientImage
                        className="h-64"
                        src={post.thumbnail}
                        alt={post.slug}
                      />
                    ) : (
                      <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <IconDocument className="size-20 text-gray-500" />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-700">
                          {format(new Date(post.date), 'LLL dd, yyyy')}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <h6 className="font-bold text-lg mb-0">{post.title}</h6>
                      </div>
                      <p className="mb-3 text-gray-700 text-sm text-ellipsis line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex gap-2 mt-auto">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl text-gray-600">
                  No posts found matching the criteria.
                </h3>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                {/* Previous Button */}
                <Link
                  href={getPageUrl(Math.max(1, currentPage - 1))}
                  className={`flex items-center justify-center w-10 h-10 rounded-md transition duration-300 ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-500 hover:bg-blue-600 hover:text-white'
                  }`}
                  aria-disabled={currentPage === 1}
                >
                  <span className="sr-only">Previous</span>
                  <IconChevronLeft className="size-6" />
                </Link>

                {/* Page Numbers */}
                {pageNumbers.map((page) => (
                  <Link
                    key={page}
                    href={getPageUrl(page)}
                    className={`flex items-center justify-center w-10 h-10 rounded-md transition duration-300 ${
                      page === currentPage
                        ? 'bg-blue-600 text-white cursor-not-allowed'
                        : 'text-gray-500 hover:bg-blue-600 hover:text-white'
                    }`}
                    aria-disabled={page === currentPage}
                  >
                    {page}
                  </Link>
                ))}

                {/* Next Button */}
                <Link
                  href={getPageUrl(Math.min(totalPages, currentPage + 1))}
                  className={`flex items-center justify-center w-10 h-10 rounded-md transition duration-300 ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-500 hover:bg-blue-600 hover:text-white'
                  }`}
                  aria-disabled={currentPage === totalPages}
                >
                  <span className="sr-only">Next</span>
                  <IconChevronRight className="size-6" />
                </Link>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
