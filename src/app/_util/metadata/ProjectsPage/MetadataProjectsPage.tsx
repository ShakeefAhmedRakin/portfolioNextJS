import { Metadata } from "next";

export const MetadataProjectsPage: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: "Projects | Shakeef Ahmed Rakin",
  description:
    "Explore the projects of Shakeef Ahmed Rakin, including full-stack development, machine learning, and more.",
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/projects`,
  },
  openGraph: {
    title: "Projects | Shakeef Ahmed Rakin",
    siteName: "Shakeef Ahmed Rakin",
    type: "website",
    url: `${process.env.WEBSITE_URL}/projects`,
    images: [
      {
        url: "/og_images/projectspage.png",
        alt: "Projects | Shakeef Ahmed Rakin",
      },
    ],
    description:
      "Explore the projects of Shakeef Ahmed Rakin, including full-stack development, machine learning, and more.",
  },
  twitter: {
    title: "Projects | Shakeef Ahmed Rakin",
    images: [
      {
        url: "/og_images/projectspage.png",
        alt: "Projects | Shakeef Ahmed Rakin",
      },
    ],
    description:
      "Explore the projects of Shakeef Ahmed Rakin, including full-stack development, machine learning, and more.",
  },
};
