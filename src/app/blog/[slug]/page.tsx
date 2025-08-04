import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

// This would be replaced with your actual data fetching function
async function getPost(slug: string): Promise<{
  title: string;
  date: string;
  content: string;
  readTime: string;
  tags?: string[];
} | null> {
  // Mock data - replace with your actual data source
  const posts = {
    'my-first-post': {
      title: 'My First Blog Post',
      date: '2023-10-15',
      readTime: '3 min read',
      tags: ['introduction', 'welcome'],
      content: `
        <h2 class="text-2xl font-bold mt-8 mb-4">Welcome to My Blog</h2>
        <p class="mb-4">
          Hello and welcome to my blog! I'm excited to share my thoughts, experiences, 
          and knowledge with you on various topics including web development, photography, 
          and technology.
        </p>
        <p class="mb-4">
          In this space, I'll be writing about my journey as a developer, sharing tutorials, 
          and discussing the latest trends in technology that excite me.
        </p>
        <h3 class="text-xl font-semibold mt-6 mb-3">What to Expect</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Web development tutorials and tips</li>
          <li>Project walkthroughs and case studies</li>
          <li>Technology reviews and recommendations</li>
          <li>Personal insights and experiences</li>
        </ul>
        <p class="mb-4">
          I hope you'll find the content valuable and engaging. Feel free to reach out 
          through the contact page if you have any questions or suggestions!
        </p>
      `,
    },
    'web-development-tips': {
      title: 'Web Development Tips and Tricks',
      date: '2023-11-02',
      readTime: '5 min read',
      tags: ['webdev', 'tutorial'],
      content: `
        <h2 class="text-2xl font-bold mt-8 mb-4">Essential Web Development Tips</h2>
        <p class="mb-4">
          After years of working in web development, I've gathered a collection of 
          tips and tricks that have made my development process smoother and more efficient.
        </p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Master the Browser DevTools</h3>
        <p class="mb-4">
          The browser's developer tools are incredibly powerful. Learn keyboard shortcuts, 
          how to debug JavaScript, analyze performance, and use the network tab effectively.
        </p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">2. Learn Keyboard Shortcuts</h3>
        <p class="mb-4">
          Whether it's your code editor, browser, or terminal, mastering keyboard shortcuts 
          can significantly speed up your workflow.
        </p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">3. Write Semantic HTML</h3>
        <p class="mb-4">
          Proper semantic structure improves accessibility, SEO, and makes your code 
          more maintainable. Use elements like <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;header&gt;</code>, 
          <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;nav&gt;</code>, and <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;article&gt;</code> appropriately.
        </p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">4. Mobile-First Development</h3>
        <p class="mb-6">
          Start with mobile styles and use media queries to progressively enhance the 
          layout for larger screens. This approach leads to better performance and 
          a more thoughtful design process.
        </p>
      `,
    },
  };

  // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | undefined' is not assignable to type 'string'.
  return posts[slug] || null;
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Roger's Blog`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full p-0">
      <div className="relative pt-24 pb-16">
        <div className="px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
          <article className="prose dark:prose-invert max-w-none">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <time dateTime={post.date} className="mr-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>{post.readTime}</span>

                {post.tags && post.tags.length > 0 && (
                  <div className="w-full mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Blog
                </Link>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Share on{' '}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://roger-twan.vercel.app/blog/${params.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
