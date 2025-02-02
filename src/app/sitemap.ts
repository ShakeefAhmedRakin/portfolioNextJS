import { MetadataRoute } from "next";
import achievements from "./_data/achievements.json";
import navigationLinks from "./_data/navigationLinks.json";
import projects from "./_data/projects.json";
import research from "./_data/research.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    // NAVIGATION LINKS
    ...navigationLinks.map((link) => ({
      url: `${process.env.WEBSITE_URL}${link.route}}|`,
      priority: link.route === "/" ? 1 : 0.8,
      lastModified: new Date().toISOString(),
    })),
    // PROJECTS
    ...projects.map((project) => ({
      url: `${process.env.WEBSITE_URL}/projects/${project.id}`,
      priority: 0.64,
      lastModified: new Date(project?.date).toISOString(),
    })),
    // AWARDS
    ...achievements.map((achievement) => ({
      url: `${process.env.WEBSITE_URL}/achievements/${achievement.id}`,
      priority: 0.64,
      lastModified: new Date(achievement?.date).toISOString(),
    })),
    // RESEARCH
    ...research.map((research) => ({
      url: `${process.env.WEBSITE_URL}/research/${research.id}`,
      priority: 0.64,
      lastModified: new Date(research?.lastUpdatedDate).toISOString(),
    })),
  ];
}
