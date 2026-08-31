import { Projects } from "@/.velite";
import { siteNavigationMap } from "@/content/site-navigation";
import { extractImagesFromMDX, getWebsiteUrl } from "@/lib/utils";
import { TechArticle } from "schema-dts";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import { buildImageList } from "./generate-image-object-schema";

export default function GenerateProjectSchema(project: Projects): TechArticle {
  const imagesInProject = extractImagesFromMDX(project.content);

  return {
    "@type": "TechArticle",
    "@id": `${getWebsiteUrl()}${project.permalink}`,
    url: `${getWebsiteUrl()}${project.permalink}`,
    name: project.title,
    headline: project.title,
    description: project.excerpt,
    dateModified: project.date,
    datePublished: project.date,
    isPartOf: {
      "@id": `${getWebsiteUrl()}/#${siteNavigationMap.PROJECTS.key}`,
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@id": `${getWebsiteUrl()}${project.permalink}`,
    },
    image: buildImageList(
      { title: project.title, src: project.thumbnail.src },
      imagesInProject,
      project.permalink,
    ),
  };
}
