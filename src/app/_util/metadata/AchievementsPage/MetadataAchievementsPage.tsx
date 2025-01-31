import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";

export const MetadataAchievementsPage: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: `Achievements | ${personalData.Person.FullName}`,
  description: `Explore the achievements of ${personalData.Person.FullName}, showcasing various competition experiences in full-stack development, machine learning, and more.`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/achievements`,
  },
  openGraph: {
    title: `Achievements | ${personalData.Person.FullName}`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}/achievements`,
    images: [
      {
        url: "/og_images/achievementspage.png",
        alt: `Achievements | ${personalData.Person.FullName}`,
      },
    ],
    description: `Explore the achievements of ${personalData.Person.FullName}, showcasing various competition experiences in full-stack development, machine learning, and more.`,
  },
  twitter: {
    title: `Achievements | ${personalData.Person.FullName}`,
    images: [
      {
        url: "/og_images/achievementspage.png",
        alt: `Achievements | ${personalData.Person.FullName}`,
      },
    ],
    description: `Explore the achievements of ${personalData.Person.FullName}, showcasing various competition experiences in full-stack development, machine learning, and more.`,
  },
};
