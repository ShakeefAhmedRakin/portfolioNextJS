import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all search engines
        allow: "/", // Allow all robots to crawl all pages
      },
    ],
    sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
  };
}
