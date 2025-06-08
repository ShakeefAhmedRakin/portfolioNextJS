import SiteConfig from "@/content/site-config";

import generateImageObjectSchema from "../utils/generateImageObjectSchema";

export const mainHeroImageId = `${process.env.WEBSITE_URL}/#main-hero-image`;

export const mainHeroImageJsonLd = generateImageObjectSchema({
  id: mainHeroImageId,
  title: SiteConfig.gallery.mainHeroImage.name,
  src: SiteConfig.gallery.mainHeroImage.src,
});
