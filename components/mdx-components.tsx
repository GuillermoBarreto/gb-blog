import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300">
      {children}
    </code>
  );
}

function Pre({ children }: { children: ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-sm leading-relaxed [&>code]:bg-transparent [&>code]:p-0">
      {children}
    </pre>
  );
}

function A(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href ?? "";
  const external = href.startsWith("http");
  return (
    <Link
      {...props}
      href={href}
      className="font-medium text-emerald-400 underline decoration-emerald-500/40 underline-offset-2 hover:decoration-emerald-400"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    />
  );
}

export const mdxComponents: MDXComponents = {
  code: Code,
  pre: Pre,
  a: A,
};
