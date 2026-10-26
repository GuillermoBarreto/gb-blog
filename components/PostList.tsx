import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

/**
 * Plain dated post list: date + title, no cards, no excerpts, no tags,
 * no cover images. Used by the homepage and the all-posts page.
 */
export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-zinc-500">No posts yet. Check back soon.</p>;
  }

  return (
    <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <time
              dateTime={post.date}
              className="shrink-0 text-sm text-zinc-500 sm:w-32"
            >
              {formatDate(post.date)}
            </time>
            <span className="text-base font-medium text-zinc-100 transition-colors group-hover:text-emerald-400">
              {post.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
