import { achievements, projects, research } from "@/.velite";
import { siteNavigation } from "@/content/site-navigation";
import { MetadataRoute } from "next";
import { getWebsiteUrl } from "@/lib/utils";

// Frozen at build time so the sitemap reports a stable lastModified for static
// pages instead of "right now" on every crawl.
const BUILD_TIME = new Date().toISOString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    // NAVIGATION LINKS
    ...siteNavigation
      .filter((link) => !link.isExternal)
      .map((link) => ({
        url: `${getWebsiteUrl()}${link.href}`,
        priority: link.href === "/" ? 1 : 0.8,
        lastModified: BUILD_TIME,
      })),
    // PROJECTS
    ...projects.map((project) => ({
      url: `${getWebsiteUrl()}${project.permalink}`,
      priority: 0.64,
      lastModified: new Date(project?.date).toISOString(),
    })),
    // ACHIEVEMENTS
    ...achievements.map((achievement) => ({
      url: `${getWebsiteUrl()}${achievement.permalink}`,
      priority: 0.64,
      lastModified: new Date(achievement?.date).toISOString(),
    })),
    // RESEARCH
    ...research.map((research) => ({
      url: `${getWebsiteUrl()}${research.permalink}`,
      priority: 0.64,
      lastModified: new Date(research?.date).toISOString(),
    })),
  ];
}
