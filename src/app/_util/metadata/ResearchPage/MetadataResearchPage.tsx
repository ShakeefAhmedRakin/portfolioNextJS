import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";

export const MetadataResearchPage: Metadata = {
  title: `Research | ${personalData.Person.FullName}`,
  description: `Explore the research of ${personalData.Person.FullName}, showcasing various fields of machine learning and more.`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/research`,
  },
  openGraph: {
    title: `Research | ${personalData.Person.FullName}`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}/research`,
    images: [
      {
        url: "/og_images/researchpage.png",
        alt: `Research | ${personalData.Person.FullName}`,
      },
    ],
    description: `Explore the research of ${personalData.Person.FullName}, showcasing various fields of machine learning and more.`,
  },
  twitter: {
    title: `Research | ${personalData.Person.FullName}`,
    images: [
      {
        url: "/og_images/achievementspage.png",
        alt: `Research | ${personalData.Person.FullName}`,
      },
    ],
    description: `Explore the research of ${personalData.Person.FullName}, showcasing various fields of machine learning and more.`,
  },
};
