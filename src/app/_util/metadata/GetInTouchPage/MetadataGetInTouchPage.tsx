import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";

export const MetadataGetInTouchPage: Metadata = {
  title: `Get In Touch | ${personalData.Person.FullName}`,
  description: `Contact ${personalData.Person.FullName} for inquiries related to full-stack development, machine learning, and more.`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/get-in-touch`,
  },
  openGraph: {
    title: `Get In Touch | ${personalData.Person.FullName}`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}/get-in-touch`,
    images: [
      {
        url: "/og_images/getintouchpage.png",
        alt: `Get In Touch | ${personalData.Person.FullName}`,
      },
    ],
    description: `Reach out to ${personalData.Person.FullName} for collaborations, inquiries, or any professional discussions.`,
  },
  twitter: {
    title: `Get In Touch | ${personalData.Person.FullName}`,
    images: [
      {
        url: "/og_images/getintouchpage.png",
        alt: `Get In Touch | ${personalData.Person.FullName}`,
      },
    ],
    description: `Reach out to ${personalData.Person.FullName} for collaborations, inquiries, or any professional discussions.`,
  },
};
