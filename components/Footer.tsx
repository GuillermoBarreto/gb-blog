import { AUTHOR_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {AUTHOR_NAME}. All rights reserved.
        </p>
        <a
          href="/rss.xml"
          className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
        >
          Subscribe via RSS
        </a>
      </div>
    </footer>
  );
}
