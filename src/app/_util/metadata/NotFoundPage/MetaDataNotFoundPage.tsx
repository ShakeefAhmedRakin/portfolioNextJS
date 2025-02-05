import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";

export const MetadataNotFoundPage: Metadata = {
  title: `Page Doesn't Exist`,
  description: `Oops! The page you're looking for doesn't seem to exist`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}`,
  },
  robots: "noindex",
  openGraph: {
    title: `Page Doesn't Exist`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}`,
    images: [
      {
        url: "",
        alt: `Page Doesn't Exist.`,
      },
    ],
    description: `Oops! The page you're looking for doesn't seem to exist`,
  },
  twitter: {
    title: `Page Doesn't Exist`,
    creator: `${personalData.Person.FullName}`,
    images: [
      {
        url: "",
        alt: `Page Doesn't Exist.`,
      },
    ],
    description: `Oops! The page you're looking for doesn't seem to exist`,
  },
};
