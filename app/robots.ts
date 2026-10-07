import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // The robots "host" directive takes a bare hostname, not a full URL.
    host: new URL(SITE_URL).hostname,
  };
}
