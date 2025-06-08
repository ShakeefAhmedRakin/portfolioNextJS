import { Achievements } from "@/.velite";
import type { CreativeWork } from "schema-dts";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteConfig from "@/content/site-config";

export default function GenerateAchievementSchema(
  achievement: Achievements,
): CreativeWork {
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
      "@id": `${process.env.WEBSITE_URL}/#achievementspage`,
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
    image: {
      "@type": "ImageObject",
      contentUrl: `${process.env.WEBSITE_URL}${achievement.mainCover.src}`,
      caption: achievement.title,
      inLanguage: "en-US",
      creditText: SiteConfig.fullName,
      copyrightNotice: `© ${SiteConfig.fullName}`,
    },
  };
}
