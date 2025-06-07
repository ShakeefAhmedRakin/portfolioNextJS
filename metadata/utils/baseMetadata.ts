import SiteConfig from "@/content/site-config";
import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  authors: [
    {
      name: `${SiteConfig.fullName}`,
      url: `${process.env.WEBSITE_URL}`,
    },
  ],
  creator: `${SiteConfig.fullName}`,
  publisher: `${SiteConfig.fullName}`,
  robots: "index, follow",

  icons: [
    { rel: "icon", url: "/logos/logo.png" },
    { rel: "apple-touch-icon", url: "/logos/logo.png" },
  ],
};
