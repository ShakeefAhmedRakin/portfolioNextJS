import SiteConfig from "@/content/site-config";
import { Metadata } from "next";

export default function setMetadata({
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
      canonical: `${process.env.WEBSITE_URL}${pathParam}`,
    },
    ...(robots ? { robots } : {}),
    openGraph: {
      title: title,
      siteName: `${SiteConfig.fullName}`,
      type: "website",
      url: `${process.env.WEBSITE_URL}${pathParam}`,
      images: [
        {
          url: openGraphImageUrl,
          alt: title,
        },
      ],
      description: description,
    },
    twitter: {
      title: title,
      creator: `${SiteConfig.fullName}`,
      images: [
        {
          url: openGraphImageUrl,
          alt: title,
        },
      ],
      description: description,
    },
  };
}
