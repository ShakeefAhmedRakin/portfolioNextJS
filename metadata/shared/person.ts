import { achievements } from "@/.velite";
import SiteConfig from "@/content/site-config";
import { siteSocials } from "@/content/site-socials";
import type { Person } from "schema-dts";
import { mainHeroImageId } from "./main-hero-image";
import { expertiseContent } from "@/content/home/expertise-section";
import { skillSets } from "@/content/skills/skills";

export const personId = `${process.env.WEBSITE_URL}/#person`;

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": personId,
  name: SiteConfig.fullName,
  description: SiteConfig.heroDescription,
  jobTitle: SiteConfig.title,
  url: process.env.WEBSITE_URL,
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
  sameAs: [
    ...[process.env.WEBSITE_URL].filter(
      (url): url is string => typeof url === "string",
    ),
    ...siteSocials.map((social) => social.url),
  ],
  award: achievements.map((achievement) => achievement.title),
  knowsAbout: [
    ...expertiseContent.expertiseGroupOne.map((item) => item.title),
    ...expertiseContent.expertiseGroupTwo.map((item) => item.title),
    ...expertiseContent.expertiseGroupOne.flatMap((item) => item.points),
    ...expertiseContent.expertiseGroupTwo.flatMap((item) => item.points),
    ...skillSets.map((group) => group.title),
    ...skillSets.flatMap((group) => group.skills.map((skill) => skill.name)),
  ],
  knowsLanguage: SiteConfig.languages,
};
