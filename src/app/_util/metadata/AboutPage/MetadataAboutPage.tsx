import { Metadata } from "next";

export const MetadataAboutPage: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: "About Me | Shakeef Ahmed Rakin",
  description:
    "Learn about Shakeef Ahmed Rakin, a full-stack engineer from Dhaka, Bangladesh. Explore his background, education and technical expertise.",
  authors: [
    {
      name: "Shakeef Ahmed Rakin",
      url: `${process.env.WEBSITE_URL}}`,
    },
  ],
  keywords: [
    "Shakeef Ahmed Rakin",
    "About Me",
    "Portfolio",
    "Machine Learning",
    "Full Stack Engineer",
  ],
  creator: "Shakeef Ahmed Rakin",
  publisher: "Shakeef Ahmed Rakin",
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/about`,
  },
  robots: "index, follow",
  openGraph: {
    title: "About Me | Shakeef Ahmed Rakin",
    siteName: "Shakeef Ahmed Rakin",
    type: "website",
    url: `${process.env.WEBSITE_URL}/about`,
    images: [
      {
        url: "/og_images/aboutme.png",
        alt: "About Me | Shakeef Ahmed Rakin",
      },
    ],
    description:
      "Learn about Shakeef Ahmed Rakin, a full-stack engineer from Dhaka, Bangladesh. Explore his background, education and technical expertise.",
  },
  twitter: {
    title: "About Me | Shakeef Ahmed Rakin",
    images: [
      {
        url: "/og_images/aboutme.png",
        alt: "About Me | Shakeef Ahmed Rakin",
      },
    ],
    description:
      "Learn about Shakeef Ahmed Rakin, a full-stack engineer from Dhaka, Bangladesh. Explore his background, education and technical expertise.",
  },
};
