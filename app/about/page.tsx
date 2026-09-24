import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} — software engineering student and tech blogger.`,
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
        About
      </h1>
      <img
        src="/profile.jpg"
        alt="Guillermo Barreto"
        width={150}
        height={150}
        className="mt-8 h-[150px] w-[150px] rounded-full object-cover ring-1 ring-zinc-700"
      />
      <div className="prose-blog mt-8">
        <p>
          Hi, I&apos;m {SITE_NAME}. I&apos;m a software engineering student at
          Western Governors University, working my way through the craft of
          building software — one project, one bug, one lesson at a time.
        </p>
        <p>
          This blog is where I think out loud. I write about what&apos;s
          happening in tech — new tools, AI developments, shifts in the
          industry — and what those stories mean for people learning to build
          software. I also write about the fundamentals: reading code,
          debugging, and the unglamorous habits that make engineers effective.
        </p>
        <p>
          I&apos;m early in my journey, and I don&apos;t pretend otherwise.
          What you&apos;ll find here is honest thinking from someone in the
          middle of learning — which, if you ask me, is the most interesting
          place to write from.
        </p>
        <h2>What I write about</h2>
        <ul>
          <li>Tech news and what it means for working developers</li>
          <li>Lessons from learning software engineering</li>
          <li>Tools, workflows, and the craft of writing code</li>
        </ul>
        <p>
          Thanks for stopping by. If something here resonates — or you
          disagree — I&apos;d love to hear about it.
        </p>
      </div>
    </div>
  );
}
