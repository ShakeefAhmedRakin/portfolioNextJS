import { achievements, workExperiences } from "@/.velite";
import SiteConfig from "@/content/site-config";
import type { Person } from "schema-dts";
import { mainHeroImageId } from "./main-hero-image";
import { getExpertiseAndSkillTerms, getSiteSameAs } from "./site-links";
import { getWebsiteUrl } from "@/lib/utils";

export const personId = `${getWebsiteUrl()}/#person`;

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": personId,
  name: SiteConfig.fullName,
  description: SiteConfig.heroDescription,
  jobTitle: SiteConfig.title,
  url: getWebsiteUrl(),
  email: `mailto:${SiteConfig.email}`,
  image: {
    "@id": mainHeroImageId,
  },
  gender: SiteConfig.gender,
  birthPlace: {
    "@type": "Place",
    address: SiteConfig.birthPlace,
  },
  nationality: SiteConfig.nationality,
  homeLocation: {
    "@type": "Place",
    address: SiteConfig.location,
  },
  workLocation: {
    "@type": "Place",
    address: SiteConfig.location,
  },
  worksFor: workExperiences.map((work) => ({
    "@type": "Organization",
    name: work.company,
    ...(work.companyLink
      ? { sameAs: work.companyLink, url: work.companyLink }
      : {}),
  })),
  sameAs: getSiteSameAs(),
  award: achievements.map((achievement) => achievement.title),
  knowsAbout: getExpertiseAndSkillTerms(),
  knowsLanguage: SiteConfig.languages,
};
