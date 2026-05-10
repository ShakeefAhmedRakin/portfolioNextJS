import SiteConfig from "@/content/site-config";
import type { Organization } from "schema-dts";
import { mainHeroImageId } from "./main-hero-image";
import { siteSocials } from "@/content/site-socials";

export const organizationId = `${process.env.WEBSITE_URL}/#organization`;
export const organizationLogoId = `${process.env.WEBSITE_URL}/#organization-logo`;

export const organizationJsonLd: Organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: SiteConfig.fullName,
  description: SiteConfig.heroDescription,
  logo: {
    "@type": "ImageObject",
    "@id": organizationLogoId,
    url: `${process.env.WEBSITE_URL}/images/favicon/180.png`,
    contentUrl: `${process.env.WEBSITE_URL}/images/favicon/180.png`,
    width: "192",
    height: "192",
    caption: `${SiteConfig.fullName} logo`,
  },
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
