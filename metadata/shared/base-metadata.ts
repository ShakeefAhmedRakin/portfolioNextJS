import SiteConfig from "@/content/site-config";
import { Metadata } from "next";
import { getWebsiteUrl } from "@/lib/utils";

export const baseMetadata: Metadata = {
  metadataBase: new URL(getWebsiteUrl()),
  authors: [
    {
      name: SiteConfig.fullName,
      url: getWebsiteUrl(),
    },
  ],
  creator: SiteConfig.fullName,
  publisher: SiteConfig.fullName,
  robots: "index, follow",

  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico", sizes: "any" },
      { url: "/images/favicon/32.png", sizes: "32x32" },
      { url: "/images/favicon/16.png", sizes: "16x16" },
    ],
    apple: [{ url: "/images/favicon/180.png", sizes: "180x180" }],
  },

  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};
