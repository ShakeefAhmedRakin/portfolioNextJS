import { MetadataRoute } from "next";
// Achievements Data
import awards from "./_data/awards.json";
import navigationLinks from "./_data/navigationLinks.json";
import projects from "./_data/projects.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Dynamic Achievements Blog Id
  return [
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
    ...awards.map((award) => ({
      url: `${process.env.WEBSITE_URL}/achievements/${award.id}`,
      priority: 0.64,
      lastModified: new Date(award?.date).toISOString(),
    })),
  ];
}
