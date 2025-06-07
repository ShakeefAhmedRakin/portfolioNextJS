import SiteConfig from "@/content/site-config";
import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  authors: [
    {
      name: SiteConfig.fullName,
      url: process.env.WEBSITE_URL,
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
};
