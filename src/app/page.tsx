import { Metadata } from "next";
import Hero from "./_components/home/hero";
import Highlights from "./_components/home/highlights";
import FeaturedProjects from "./_components/home/featuredprojects";

export const metadata: Metadata = {
  title: "Shakeef Ahmed Rakin - Full Stack Engineer",
  description:
    "Full Stack Engineer from Dhaka, Bangladesh, skilled in developing web applications and integrating AI solutions. Experienced in machine learning projects, including natural language processing and computer vision. Currently working as a Full Stack Engineer at Twlick and as .NET software developer focusing on agricultural at HOLOS-IE.",
  keywords:
    "Full Stack Engineer, Web Development, AI, Machine Learning, Natural Language Processing, Computer Vision, .NET, Software Developer, Agricultural Software, HOLOS, Twlick, Shakeef Ahmed Rakin, Dhaka, Bangladesh",
  authors: "Shakeef Ahmed Rakin",
  openGraph: {
    title: "Shakeef Ahmed Rakin - Full Stack Engineer",
    description:
      "Full Stack Engineer from Dhaka, Bangladesh, skilled in developing web applications and integrating AI solutions. Experienced in machine learning projects, including natural language processing and computer vision. Currently working as a Full Stack Engineer at Twlick and as .NET software developer focusing on agricultural at HOLOS-IE.",
    url: "https://yourwebsite.com",
    siteName: "Shakeef Ahmed Rakin",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Shakeef Ahmed Rakin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Shakeef Ahmed Rakin - Full Stack Engineer",
    description:
      "Full Stack Engineer from Dhaka, Bangladesh, skilled in developing web applications and integrating AI solutions. Experienced in machine learning projects, including natural language processing and computer vision. Currently working as a Full Stack Engineer at Twlick and as .NET software developer focusing on agricultural at HOLOS-IE.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Shakeef Ahmed Rakin",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProjects />
    </>
  );
}
