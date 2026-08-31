import SiteConfig from "@/content/site-config";

import generateImageObjectSchema from "../generators/generate-image-object-schema";
import { siteNavigationMap } from "@/content/site-navigation";
import { getWebsiteUrl } from "@/lib/utils";

export const mainHeroImageId = `${getWebsiteUrl()}/#main-hero-image`;

export const mainHeroImageJsonLd = generateImageObjectSchema({
  id: mainHeroImageId,
  title: SiteConfig.gallery.mainHeroImage.name,
  src: SiteConfig.gallery.mainHeroImage.src,
  pageUrl: siteNavigationMap.HOME.href,
});
