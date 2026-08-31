import SiteConfig from "@/content/site-config";
import type { WebSite } from "schema-dts";
import { mainHeroImageId } from "./main-hero-image";
import { personId } from "./person";
import { organizationId } from "./organization";
import { siteNavigation } from "@/content/site-navigation";
import { achievements, projects, research } from "@/.velite";
import { getExpertiseAndSkillTerms } from "./site-links";
import { getWebsiteUrl } from "@/lib/utils";

export const websiteId = `${getWebsiteUrl()}/#website`;

export const websiteJsonLd: WebSite = {
  "@type": "WebSite",
  "@id": websiteId,
  name: SiteConfig.fullName,
  description: SiteConfig.heroDescription,
  about: {
    "@id": personId,
  },
  url: getWebsiteUrl(),
  author: {
    "@id": personId,
  },
  publisher: {
    "@id": organizationId,
  },
  creator: {
    "@id": personId,
  },
  editor: {
    "@id": personId,
  },
  image: {
    "@id": mainHeroImageId,
  },
  keywords: [
    SiteConfig.fullName,
    SiteConfig.title,
    ...getExpertiseAndSkillTerms(),
  ],
  inLanguage: "en-US",
  hasPart: [
    ...siteNavigation
      .filter((navItem) => !navItem.isExternal)
      .map((navItem) => {
        return {
          "@type": "WebPage",
          "@id": `${getWebsiteUrl()}/#${navItem.key}`,
          name: `${navItem.title} Page`,
        };
      }),
    ...achievements.map((achievement) => {
      return {
        "@type": "BlogPosting",
        name: `${achievement.title} Page`,
        "@id": `${getWebsiteUrl()}${achievement.permalink}`,
        headline: achievement.title,
        author: { "@id": personId },
        image: `${getWebsiteUrl()}${achievement.mainCover.src}`,
      };
    }),
    ...projects.map((project) => {
      return {
        "@type": "CollectionPage",
        name: `${project.title} Page`,
        "@id": `${getWebsiteUrl()}${project.permalink}`,
        headline: project.title,
        author: { "@id": personId },
        image: `${getWebsiteUrl()}${project.thumbnail.src}`,
      };
    }),
    ...research.map((paper) => {
      return {
        "@type": "ScholarlyArticle",
        name: `${paper.title} Page`,
        "@id": `${getWebsiteUrl()}${paper.permalink}`,
        headline: paper.title,
        author: { "@id": personId },
      };
    }),
  ],
};
