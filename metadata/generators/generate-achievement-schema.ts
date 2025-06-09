import { Achievements } from "@/.velite";
import type { BlogPosting } from "schema-dts";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import { extractImagesFromMDX } from "@/lib/utils";
import generateImageObjectSchema from "./generate-image-object-schema";
import { siteNavigationMap } from "@/content/site-navigation";

export default function GenerateAchievementSchema(
  achievement: Achievements,
): BlogPosting {
  const imagesInBlog = extractImagesFromMDX(achievement.content);

  return {
    "@type": "BlogPosting",
    "@id": `${process.env.WEBSITE_URL}${achievement.permalink}`,
    url: `${process.env.WEBSITE_URL}${achievement.permalink}`,
    name: achievement.title,
    headline: achievement.title,
    description: achievement.excerpt,
    dateModified: achievement.date,
    datePublished: achievement.date,
    isPartOf: {
      "@type": "Blog",
      "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.ACHIEVEMENTS.key}`,
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    award: achievement.awardTitle,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@id": `${process.env.WEBSITE_URL}${achievement.permalink}`,
    },
    image: [
      generateImageObjectSchema({
        title: achievement.title,
        src: achievement.mainCover.src,
        pageUrl: achievement.permalink,
      }),
      ...imagesInBlog.map((image) =>
        generateImageObjectSchema({
          title: image.title,
          src: image.src,
          pageUrl: achievement.permalink,
        }),
      ),
    ],
  };
}
