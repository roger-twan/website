import Link from 'next/link';
import { Metadata } from 'next';
import { format } from 'date-fns';
import ClientImage from '@/components/ClientImage';
import IconDocument from '@public/icons/document.svg';
import IconChevronLeft from '@public/icons/chevron-left.svg';
import IconChevronRight from '@public/icons/chevron-right.svg';
import getPosts, { Post } from './blog.data';

export const revalidate = 3600;

const POSTS_PER_PAGE = 12;

export async function generateStaticParams() {
  const posts = await getPosts();
  const tags = [...new Set(posts.flatMap((post) => post.tags))];
  const allParams = [];

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  for (let page = 1; page <= totalPages; page++) {
    allParams.push({ page: page.toString() });
  }

  for (const tag of tags) {
    const filteredPosts = posts.filter((post) => post.tags.includes(tag));
    const tagPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;

    for (let page = 1; page <= tagPages; page++) {
      allParams.push({
        page: page.toString(),
        tag: tag,
      });
    }
  }

  return allParams;
}

type BlogListProps = {
  searchParams: Promise<{ page?: string; tag?: string }>;
};

interface Tags {
  [tagName: string]: number;
}

export const metadata: Metadata = {
  title: 'Blog | Roger Twan',
  description:
    'Thoughts, tutorials, and updates about web development, photography, and more.',
};

const getTags = (posts: Post[]) => {
  const allTags: Tags = {};
  const tags: Tags = {};

  for (const post of posts) {
    for (const tag of post.tags) {
      allTags[tag] = (allTags[tag] || 0) + 1;
    }
  }

  const sortedTags = Object.keys(allTags).sort((a, b) => {
    if (allTags[b] !== allTags[a]) {
      return allTags[b] - allTags[a];
    }
    return a.localeCompare(b);
  });

  for (const tag of sortedTags) {
    tags[tag] = allTags[tag];
  }

  return tags;
};

export default async function BlogList({ searchParams }: BlogListProps) {
  const blogPosts = await getPosts();
  const tags = getTags(blogPosts);
  const currentPage = Number((await searchParams).page) || 1;
  const selectedTag = (await searchParams).tag || '';

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const pageNumbers = [];
  const maxPageNumbers = 3;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

  if (endPage - startPage + 1 < maxPageNumbers) {
    startPage = Math.max(1, endPage - maxPageNumbers + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const getPageUrl = (page: number, tag?: string) => {
    const params = new URLSearchParams();
    if (tag) params.set('tag', tag);
    if (page > 1) params.set('page', page.toString());
    return `/blog${params.toString() ? `?${params.toString()}` : ''}`;
  };

  const getTagUrl = (tag: string) => {
    const params = new URLSearchParams();
    params.set('tag', tag);
    return `/blog?${params.toString()}`;
  };

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16 pb-8 sm:pt-24 sm:pb-16">
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
