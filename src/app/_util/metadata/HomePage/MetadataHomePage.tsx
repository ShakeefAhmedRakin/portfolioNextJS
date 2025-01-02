import { Metadata } from "next";

export const MetadataHomePage: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: "Shakeef Ahmed Rakin | Full Stack Engineer",
  description:
    "Full Stack Engineer from Dhaka, Bangladesh, skilled in developing web applications and integrating AI solutions.",
  authors: [
    {
      name: "Shakeef Ahmed Rakin",
      url: `${process.env.WEBSITE_URL}}`,
    },
  ],
  creator: "Shakeef Ahmed Rakin",
  publisher: "Shakeef Ahmed Rakin",
  alternates: {
    canonical: `${process.env.WEBSITE_URL}`,
  },
  robots: "index, follow",
  openGraph: {
    title: "Shakeef Ahmed Rakin | Full Stack Engineer",
    siteName: "Shakeef Ahmed Rakin",
    type: "website",
    url: `${process.env.WEBSITE_URL}`,
    images: [
      {
        url: "/og_images/homepage.png",
        alt: "Shakeef Ahmed Rakin | Full Stack Engineer",
      },
    ],
    description:
      "Full Stack Engineer from Dhaka, Bangladesh, skilled in developing web applications and integrating AI solutions.",
  },
  twitter: {
    title: "Shakeef Ahmed Rakin | Full Stack Engineer",
    creator: "Shakeef Ahmed Rakin",
    images: [
      {
        url: "/og_images/homepage.png",
        alt: "Shakeef Ahmed Rakin | Full Stack Engineer",
      },
    ],
    description:
      "Full Stack Engineer from Dhaka, Bangladesh, skilled in developing web applications and integrating AI solutions.",
  },
};
