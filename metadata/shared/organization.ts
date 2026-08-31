import SiteConfig from "@/content/site-config";
import type { Organization } from "schema-dts";
import { mainHeroImageId } from "./main-hero-image";
import { getSiteSameAs } from "./site-links";
import { getWebsiteUrl } from "@/lib/utils";

export const organizationId = `${getWebsiteUrl()}/#organization`;
export const organizationLogoId = `${getWebsiteUrl()}/#organization-logo`;

export const organizationJsonLd: Organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: SiteConfig.fullName,
  description: SiteConfig.heroDescription,
  logo: {
    "@type": "ImageObject",
    "@id": organizationLogoId,
    url: `${getWebsiteUrl()}/images/favicon/180.png`,
    contentUrl: `${getWebsiteUrl()}/images/favicon/180.png`,
    width: "192",
    height: "192",
    caption: `${SiteConfig.fullName} logo`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: `mailto:${SiteConfig.email}`,
    contactType: "Customer Support",
  },
  sameAs: getSiteSameAs(),
  url: getWebsiteUrl(),
  email: `mailto:${SiteConfig.email}`,
  image: {
    "@id": mainHeroImageId,
  },
};
