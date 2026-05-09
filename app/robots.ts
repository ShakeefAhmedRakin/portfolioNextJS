import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // TEMPORARY: site-wide indexing disabled. To re-enable, restore the original block below.
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    // ORIGINAL (re-enable indexing):
    // rules: [
    //   {
    //     userAgent: "*", // Applies to all search engines
    //     allow: "/", // Allow all robots to crawl all pages
    //   },
    // ],
    // sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
  };
}
