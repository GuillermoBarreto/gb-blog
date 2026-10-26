import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostList } from "@/components/PostList";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts();
  const latest = posts.slice(0, 5);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <section className="py-12 sm:py-16">
        <Image
          src="/profile.jpg"
          alt="Guillermo Barreto"
          width={120}
          height={120}
          className="h-[120px] w-[120px] rounded-full object-cover ring-1 ring-zinc-700"
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-50">
          {SITE_NAME}
        </h1>
        <p className="mt-3 text-base font-medium text-zinc-300">
          Software Engineering student at WGU · IT Support Associate
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
          {SITE_DESCRIPTION} I&apos;m currently building Sentinel, a data-center
          monitoring tool.
        </p>
      </section>

      <section className="pb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-zinc-50">
            Latest
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all →
          </Link>
        </div>
        <PostList posts={latest} />
      </section>
    </div>
  );
}
