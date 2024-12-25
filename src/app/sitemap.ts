import { MetadataRoute } from "next";
// Achievements Data
import awards from "./_data/awards.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Dynamic Achievements Blog Id
  return [
    {
      url: `${process.env.WEBSITE_URL}/`,
      priority: 1,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.WEBSITE_URL}/about`,
      priority: 0.8,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.WEBSITE_URL}/projects`,
      priority: 0.8,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.WEBSITE_URL}/work`,
      priority: 0.8,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.WEBSITE_URL}/research`,
      priority: 0.8,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.WEBSITE_URL}/achievements`,
      priority: 0.8,
      lastModified: new Date().toISOString(),
    },
    ...awards.map((award) => ({
      url: `${process.env.WEBSITE_URL}/achievements/${award.id}`,
      priority: 0.64,
      lastModified: new Date(award?.date).toISOString(),
    })),
  ];
}
