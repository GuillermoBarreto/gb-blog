import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "All posts — notes on tech news and the craft of building software.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
        Blog
      </h1>
      <p className="mt-3 text-zinc-400">
        Notes on tech news and the craft of building software.
      </p>

      {tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/blog/tag/${encodeURIComponent(tag)}`}
              className="rounded-full border border-zinc-700 px-3.5 py-1.5 text-sm text-zinc-300 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors"
            >
              {tag} <span className="text-zinc-500">({count})</span>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-5">
        {posts.length === 0 ? (
          <p className="text-zinc-500">No posts yet. Check back soon.</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
