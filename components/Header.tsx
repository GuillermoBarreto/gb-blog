import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-50 hover:text-emerald-400 transition-colors"
        >
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/60 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/rss.xml"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/60 transition-colors"
            title="RSS feed"
          >
            RSS
          </a>
        </nav>
      </div>
    </header>
  );
}
