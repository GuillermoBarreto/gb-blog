import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-emerald-500/40 hover:bg-zinc-900/70">
      <Link href={`/blog/${post.slug}`} className="block">
        <h2 className="text-xl font-bold tracking-tight text-zinc-50 group-hover:text-emerald-400 transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
          {post.tags.length > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-800 px-2.5 py-0.5 font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            </>
          )}
        </div>
      </Link>
    </article>
  );
}
