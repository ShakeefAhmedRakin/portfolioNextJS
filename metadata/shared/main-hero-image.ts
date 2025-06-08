import SiteConfig from "@/content/site-config";

import type { ImageObject } from "schema-dts";

export const mainHeroImageId = `${process.env.WEBSITE_URL}/#main-hero-image`;

export const mainHeroImageJsonLd: ImageObject = {
  "@type": "ImageObject",
  "@id": mainHeroImageId,
  inLanguage: "en-US",
  contentUrl: SiteConfig.gallery.mainHeroImage.absoluteSrc,
  caption: SiteConfig.gallery.mainHeroImage.name,
  creditText: SiteConfig.fullName,
  copyrightNotice: `© ${SiteConfig.fullName}`,
};
