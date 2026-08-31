import { MetadataRoute } from "next";
import { getWebsiteUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all search engines
        allow: "/", // Allow all robots to crawl all pages
      },
    ],
    sitemap: `${getWebsiteUrl()}/sitemap.xml`,
  };
}
