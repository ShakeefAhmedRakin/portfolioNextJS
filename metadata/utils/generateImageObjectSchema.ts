import SiteConfig from "@/content/site-config";
import type { ImageObject } from "schema-dts";

export default function generateImageObjectSchema({
  id,
  title,
  src,
  pageUrl,
}: {
  id?: string;
  src: string;
  pageUrl?: string;
  title: string;
}): ImageObject {
  const imageObject: ImageObject = {
    "@type": "ImageObject",
    name: title,
    contentUrl: `${process.env.WEBSITE_URL}${src}`,
    caption: title,
    inLanguage: "en-US",
    creditText: SiteConfig.fullName,
    creator: SiteConfig.fullName,
    copyrightNotice: `© ${SiteConfig.fullName}`,
  };

  if (id) {
    imageObject["@id"] = id;
  }

  if (pageUrl) {
    imageObject["url"] = `${process.env.WEBSITE_URL}${pageUrl}`;
  }

  return imageObject;
}
