import SiteConfig from "@/content/site-config";
import { siteSocials } from "@/content/site-socials";
import type { WebSite } from "schema-dts";
import { mainHeroImageId } from "./main-hero-image";
import { personId } from "./person";
import { organizationId } from "./organization";
import { siteNavigation } from "@/content/site-navigation";
import { expertiseContent } from "@/content/home/expertise-section";
import { skillSets } from "@/content/skills/skills";
import { achievements } from "@/.velite";

export const websiteId = `${process.env.WEBSITE_URL}/#website`;

export const websiteJsonLd: WebSite = {
  "@type": "WebSite",
  "@id": websiteId,
  name: SiteConfig.fullName,
  description: SiteConfig.heroDescription,
  about: {
    "@id": personId,
  },
  url: process.env.WEBSITE_URL,
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
    ...expertiseContent.expertiseGroupOne.map((item) => item.title),
    ...expertiseContent.expertiseGroupTwo.map((item) => item.title),
    ...expertiseContent.expertiseGroupOne.flatMap((item) => item.points),
    ...expertiseContent.expertiseGroupTwo.flatMap((item) => item.points),
    ...skillSets.map((group) => group.title),
    ...skillSets.flatMap((group) => group.skills.map((skill) => skill.name)),
  ],
  inLanguage: "en-US",
  potentialAction: [
    ...siteNavigation.map((link) => ({
      "@type": "ViewAction" as const,
      name: `View ${link.label} Page`,
      target: link.isExternal
        ? link.href
        : `${process.env.WEBSITE_URL}${link.href}`,
    })),
    ...siteSocials.map((link) => ({
      "@type": "FollowAction" as const,
      name: `Follow ${link.name}`,
      target: link.url,
    })),
  ],
  hasPart: [
    ...siteNavigation
      .filter((navItem) => !navItem.isExternal)
      .map((navItem) => {
        return {
          "@type": "Webpage",
          "@id": `${process.env.WEBSITE_URL}/#${navItem.key}`,
          name: `${navItem.title} Page`,
        };
      }),
    ...achievements.map((achievement) => {
      return {
        "@type": "Webpage",
        name: `${achievement.title} Page`,
        "@id": `${process.env.WEBSITE_URL}${achievement.permalink}`,
      };
    }),
  ],
};
