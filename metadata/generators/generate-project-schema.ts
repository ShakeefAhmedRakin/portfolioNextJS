import { Projects } from "@/.velite";
import { siteNavigationMap } from "@/content/site-navigation";
import { extractImagesFromMDX } from "@/lib/utils";
import { TechArticle } from "schema-dts";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import generateImageObjectSchema from "./generate-image-object-schema";

export default function GenerateProjectSchema(project: Projects): TechArticle {
  const imagesInProject = extractImagesFromMDX(project.content);

  return {
    "@type": "TechArticle",
    "@id": `${process.env.WEBSITE_URL}${project.permalink}`,
    url: `${process.env.WEBSITE_URL}${project.permalink}`,
    name: project.title,
    headline: project.title,
    description: project.excerpt,
    dateModified: project.date,
    datePublished: project.date,
    isPartOf: {
      "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.PROJECTS.key}`,
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@id": `${process.env.WEBSITE_URL}${project.permalink}`,
    },
    image: [
      generateImageObjectSchema({
        title: project.title,
        src: project.thumbnail.src,
        pageUrl: project.permalink,
      }),
      ...imagesInProject.map((image) =>
        generateImageObjectSchema({
          title: image.title,
          src: image.src,
          pageUrl: project.permalink,
        }),
      ),
    ],
  };
}
