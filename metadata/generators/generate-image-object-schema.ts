import SiteConfig from "@/content/site-config";
import type { ImageObject } from "schema-dts";
import { getWebsiteUrl } from "@/lib/utils";

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
    contentUrl: `${getWebsiteUrl()}${src}`,
    caption: title,
    inLanguage: "en-US",
    creditText: SiteConfig.fullName,
    creator: {
      "@type": "Person",
      name: SiteConfig.fullName,
    },
    copyrightNotice: `© ${SiteConfig.fullName}`,
    license: `${getWebsiteUrl()}/license`,
    acquireLicensePage: `${getWebsiteUrl()}/license`,
  };

  if (id) {
    imageObject["@id"] = id;
  }

  if (pageUrl) {
    imageObject["url"] = `${getWebsiteUrl()}${pageUrl}`;
  }

  return imageObject;
}

export function buildImageList(
  main: { title: string; src: string },
  contentImages: { title: string; src: string }[],
  pageUrl: string,
): ImageObject[] {
  return [main, ...contentImages].map((image) =>
    generateImageObjectSchema({
      title: image.title,
      src: image.src,
      pageUrl,
    }),
  );
}
