# gb-blog — Guillermo Barreto's personal tech blog

🚀 **Live: [https://gb-blog.vercel.app](https://gb-blog.vercel.app)**

A personal tech blog built with **Next.js (App Router) + TypeScript + Tailwind CSS + MDX**. Dark, modern, responsive, and deployed to Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build   # production build
npm start       # serve the production build
```

## How to add a post

1. Create a new file in `content/posts/`, e.g. `content/posts/my-new-post.mdx`.
2. Start it with frontmatter:

```md
---
title: "My post title"
date: "2026-09-30"
excerpt: "One or two sentences shown on the listing pages."
tags: ["tech-news", "career"]
---

Your content here, in Markdown/MDX. Code blocks get syntax highlighting.
```

3. That's it — the post appears on the home page, `/blog`, its tag pages, the RSS feed, and the sitemap automatically.

## Project structure

```
app/
  page.tsx            # home: hero + latest posts
  blog/page.tsx       # all posts + tag chips
  blog/[slug]/page.tsx# individual post (MDX, reading time, OG metadata)
  blog/tag/[tag]/page.tsx # posts filtered by tag
  about/page.tsx      # about page
  rss.xml/route.ts    # RSS feed
  sitemap.ts          # sitemap.xml
  robots.ts           # robots.txt
  opengraph-image.tsx # generated OG social card
components/
  Header.tsx Footer.tsx PostCard.tsx mdx-components.tsx
content/posts/        # MDX posts live here
lib/
  posts.ts            # frontmatter parsing, sorting, tags
  site.ts             # SITE_URL, name, description — edit before deploying
```

## Before deploying

- Set the real domain in `lib/site.ts` (`SITE_URL`) — it drives metadata, sitemap, RSS, and robots.
- Posts are plain MDX files: edit, add, or delete them freely.

