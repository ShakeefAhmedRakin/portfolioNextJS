import { achievements, projects, research } from "@/.velite";
import { siteNavigation } from "@/content/site-navigation";
import { MetadataRoute } from "next";

// Frozen at build time so the sitemap reports a stable lastModified for static
// pages instead of "right now" on every crawl.
const BUILD_TIME = new Date().toISOString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    // NAVIGATION LINKS
    ...siteNavigation
      .filter((link) => !link.isExternal)
      .map((link) => ({
        url: `${process.env.WEBSITE_URL}${link.href}`,
        priority: link.href === "/" ? 1 : 0.8,
        lastModified: BUILD_TIME,
      })),
    // PROJECTS
    ...projects.map((project) => ({
      url: `${process.env.WEBSITE_URL}${project.permalink}`,
      priority: 0.64,
      lastModified: new Date(project?.date).toISOString(),
    })),
    // ACHIEVEMENTS
    ...achievements.map((achievement) => ({
      url: `${process.env.WEBSITE_URL}${achievement.permalink}`,
      priority: 0.64,
      lastModified: new Date(achievement?.date).toISOString(),
    })),
    // RESEARCH
    ...research.map((research) => ({
      url: `${process.env.WEBSITE_URL}${research.permalink}`,
      priority: 0.64,
      lastModified: new Date(research?.date).toISOString(),
    })),
  ];
}
