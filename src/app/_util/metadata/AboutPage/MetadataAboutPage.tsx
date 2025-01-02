import { Metadata } from "next";

export const MetadataAboutPage: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: "About Me | Shakeef Ahmed Rakin",
  description:
    "Learn about Shakeef Ahmed Rakin, a full-stack engineer from Dhaka, Bangladesh. Explore his background, education and technical expertise.",
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/about`,
  },
  openGraph: {
    title: "About Me | Shakeef Ahmed Rakin",
    siteName: "Shakeef Ahmed Rakin",
    type: "website",
    url: `${process.env.WEBSITE_URL}/about`,
    images: [
      {
        url: "/og_images/aboutpage.png",
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
        url: "/og_images/aboutpage.png",
        alt: "About Me | Shakeef Ahmed Rakin",
      },
    ],
    description:
      "Learn about Shakeef Ahmed Rakin, a full-stack engineer from Dhaka, Bangladesh. Explore his background, education and technical expertise.",
  },
};
