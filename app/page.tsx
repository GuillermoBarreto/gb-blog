import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts();
  const latest = posts.slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Personal tech blog
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50">
          {SITE_NAME}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
          {SITE_DESCRIPTION}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
          >
            Read the blog
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:text-zinc-50 transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Latest posts */}
      <section className="pb-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-50">
            Latest posts
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all →
          </Link>
        </div>
        {latest.length === 0 ? (
          <p className="text-zinc-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid gap-5">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
