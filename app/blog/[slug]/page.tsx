import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx-components";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return {};
  }
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    authors: [{ name: SITE_NAME }],
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.excerpt,
      url,
      publishedTime: post.meta.date,
      tags: post.meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }
  const { meta, content } = post;

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        ← All posts
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
          {meta.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{meta.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>By {SITE_NAME}</span>
        </div>
        {meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag)}`}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 hover:bg-zinc-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="prose-blog mt-10">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { rehypePlugins: [rehypeHighlight] } }}
        />
      </div>
    </article>
  );
}
