import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";

export const MetadataHomePage: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: `${personalData.Person.FullName} | ${personalData.Person.Title}`,
  description: `${personalData.Person.Description}`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}`,
  },
  openGraph: {
    title: `${personalData.Person.FullName} | ${personalData.Person.Title}`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}`,
    images: [
      {
        url: "/og_images/homepage.png",
        alt: `${personalData.Person.FullName} | ${personalData.Person.Title}`,
      },
    ],
    description: `${personalData.Person.Description}`,
  },
  twitter: {
    title: `${personalData.Person.FullName} | ${personalData.Person.Title}`,
    creator: `${personalData.Person.FullName}`,
    images: [
      {
        url: "/og_images/homepage.png",
        alt: `${personalData.Person.FullName} | ${personalData.Person.Title}`,
      },
    ],
    description: `${personalData.Person.Description}`,
  },
};
