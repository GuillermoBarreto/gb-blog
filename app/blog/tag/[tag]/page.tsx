import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export async function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `Posts tagged "${decoded}"`,
    description: `All posts tagged ${decoded}.`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const knownTags = getAllTags().map((t) => t.tag);
  if (!knownTags.includes(decoded)) notFound();

  const posts = getPostsByTag(decoded);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        ← All posts
      </Link>
      <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
        Tagged <span className="text-emerald-400">“{decoded}”</span>
      </h1>
      <p className="mt-3 text-zinc-400">
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>
      <div className="mt-10 grid gap-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
