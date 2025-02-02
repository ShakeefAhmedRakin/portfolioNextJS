import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";

export const MetadataProjectsPage: Metadata = {
  title: `Projects | ${personalData.Person.FullName}`,
  description: `Explore the projects of ${personalData.Person.FullName}, including full-stack development, machine learning, and more.`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/projects`,
  },
  openGraph: {
    title: `Projects | ${personalData.Person.FullName}`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}/projects`,
    images: [
      {
        url: "/og_images/projectspage.png",
        alt: `Projects | ${personalData.Person.FullName}`,
      },
    ],
    description: `Explore the projects of ${personalData.Person.FullName}, including full-stack development, machine learning, and more.`,
  },
  twitter: {
    title: `Projects | ${personalData.Person.FullName}`,
    images: [
      {
        url: "/og_images/projectspage.png",
        alt: `Projects | ${personalData.Person.FullName}`,
      },
    ],
    description: `Explore the projects of ${personalData.Person.FullName}, including full-stack development, machine learning, and more.`,
  },
};
