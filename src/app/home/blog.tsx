import getPosts from '@/app/blog/blog.data';
import BlogCard from '@/app/blog/blog-card';

export default async function BlogModule() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Posts</h2>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Check out my latest posts and articles on a variety of topics.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {posts.slice(0, 4).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
