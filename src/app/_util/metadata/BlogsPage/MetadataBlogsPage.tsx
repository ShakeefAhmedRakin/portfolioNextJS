import { Metadata } from "next";
import personalData from "../../../_data/personalData.json";

export const MetadataBlogsPage: Metadata = {
  title: `Blogs | ${personalData.Person.FullName}`,
  description: `View the latest published articles on ${personalData.Person.FullName}'s blog.`,
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/blogs`,
  },
  openGraph: {
    title: `Blogs | ${personalData.Person.FullName}`,
    siteName: `${personalData.Person.SiteName}`,
    type: "website",
    url: `${process.env.WEBSITE_URL}`,
    images: [
      {
        url: "/og_images/blogspage.png",
        alt: `Blogs | ${personalData.Person.FullName}`,
      },
    ],
    description: `View the latest published articles on ${personalData.Person.FullName}'s blog.`,
  },
  twitter: {
    title: `Blogs | ${personalData.Person.FullName}`,
    creator: `${personalData.Person.FullName}`,
    images: [
      {
        url: "/og_images/blogspage.png",
        alt: `Blogs | ${personalData.Person.FullName}`,
      },
    ],
    description: `View the latest published articles on ${personalData.Person.FullName}'s blog.`,
  },
};
