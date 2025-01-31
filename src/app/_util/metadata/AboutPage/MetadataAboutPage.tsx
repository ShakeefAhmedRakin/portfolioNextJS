import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";
export const MetadataAboutPage: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: `About Me | ${personalData.Person.FullName}`,
  description: `Learn about ${personalData.Person.FullName}, a ${personalData.Person.Title} from ${personalData.Person.Location}. Explore his background, education and technical expertise.`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/about`,
  },
  openGraph: {
    title: `About Me | ${personalData.Person.FullName}`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}/about`,
    images: [
      {
        url: "/og_images/aboutpage.png",
        alt: `About Me | ${personalData.Person.FullName}`,
      },
    ],
    description: `Learn about ${personalData.Person.FullName}, a ${personalData.Person.Title} from ${personalData.Person.Location}. Explore his background, education and technical expertise.`,
  },
  twitter: {
    title: `About Me | ${personalData.Person.FullName}`,
    images: [
      {
        url: "/og_images/aboutpage.png",
        alt: `About Me | ${personalData.Person.FullName}`,
      },
    ],
    description: `Learn about ${personalData.Person.FullName}, a ${personalData.Person.Title} from ${personalData.Person.Location}. Explore his background, education and technical expertise.`,
  },
};
