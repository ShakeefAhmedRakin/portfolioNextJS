import SiteConfig from "@/content/site-config";
import type { Organization } from "schema-dts";
import { mainHeroImageId } from "./main-hero-image";
import { siteSocials } from "@/content/site-socials";

export const organizationId = `${process.env.WEBSITE_URL}/#organization`;

export const organizationJsonLd: Organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: SiteConfig.fullName,
  description: SiteConfig.heroDescription,
  contactPoint: {
    "@type": "ContactPoint",
    email: `mailto:${SiteConfig.email}`,
    contactType: "Customer Support",
  },
  sameAs: [
    ...[process.env.WEBSITE_URL].filter(
      (url): url is string => typeof url === "string",
    ),
    ...siteSocials.map((social) => social.url),
  ],
  url: process.env.WEBSITE_URL,
  email: `mailto:${SiteConfig.email}`,
  image: {
    "@id": mainHeroImageId,
  },
};
