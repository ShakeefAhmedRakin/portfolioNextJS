import { Achievements } from "@/.velite";
import type { BlogPosting } from "schema-dts";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import { extractImagesFromMDX, getWebsiteUrl } from "@/lib/utils";
import { buildImageList } from "./generate-image-object-schema";
import { siteNavigationMap } from "@/content/site-navigation";

export default function GenerateAchievementSchema(
  achievement: Achievements,
): BlogPosting {
  const imagesInBlog = extractImagesFromMDX(achievement.content);

  return {
    "@type": "BlogPosting",
    "@id": `${getWebsiteUrl()}${achievement.permalink}`,
    url: `${getWebsiteUrl()}${achievement.permalink}`,
    name: achievement.title,
    headline: achievement.title,
    description: achievement.excerpt,
    dateModified: achievement.date,
    datePublished: achievement.date,
    isPartOf: {
      "@id": `${getWebsiteUrl()}/#${siteNavigationMap.ACHIEVEMENTS.key}`,
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
      "@id": `${getWebsiteUrl()}${achievement.permalink}`,
    },
    image: buildImageList(
      { title: achievement.title, src: achievement.mainCover.src },
      imagesInBlog,
      achievement.permalink,
    ),
  };
}
