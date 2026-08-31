import SiteConfig from "@/content/site-config";
import { Metadata } from "next";
import { getWebsiteUrl } from "@/lib/utils";

export default function getMetadata({
  title,
  description,
  openGraphImageUrl,
  pathParam,
  robots,
}: {
  title: string;
  description: string;
  openGraphImageUrl: string;
  pathParam: string;
  robots?: string;
}): Metadata {
  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${getWebsiteUrl()}${pathParam}`,
    },
    ...(robots ? { robots } : {}),
    openGraph: {
      title: title,
      siteName: `${SiteConfig.fullName}`,
      type: "website",
      url: `${getWebsiteUrl()}${pathParam}`,
      locale: "en_US",
      images: [
        {
          url: openGraphImageUrl,
          alt: title,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
      description: description,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      creator: SiteConfig.twitterHandle,
      site: SiteConfig.twitterHandle,
      images: [
        {
          url: openGraphImageUrl,
          alt: title,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
      description: description,
    },
  };
}
