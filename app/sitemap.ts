import { achievements, projects, research } from "@/.velite";
import { siteNavigation } from "@/content/site-navigation";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    // NAVIGATION LINKS
    ...siteNavigation
      .filter((link) => !link.isExternal)
      .map((link) => ({
        url: `${process.env.WEBSITE_URL}${link.href}`,
        priority: link.href === "/" ? 1 : 0.8,
        lastModified: new Date().toISOString(),
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
