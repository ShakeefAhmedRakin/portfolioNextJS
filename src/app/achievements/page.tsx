import awards from "../_data/awards.json";
import { Metadata } from "next";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import ArticleSection from "./_components/ArticleSection";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
    title: "Shakeef Ahmed Rakin - Achievements | Hackathons | Competitions",
    description:
      "Explore the achievements of Shakeef Ahmed Rakin, showcasing various competition experiences in full-stack development, machine learning, and more.",
    keywords: [
      "Shakeef Ahmed Rakin",
      "Achievements",
      "Portfolio",
      "Competitions",
      "Machine Learning",
      "Full-Stack Development",
      "Hackathons",
    ],
    publisher: "Shakeef Ahmed Rakin",
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/achievements`,
    },
    robots: "index, follow",
    openGraph: {
      title: "Achievements | Shakeef Ahmed Rakin",
      type: "website",
      description:
        "Explore the achievements of Shakeef Ahmed Rakin, showcasing various competition experiences in full-stack development, machine learning, and more.",
      url: `${process.env.WEBSITE_URL}/achievements`,
      images: [
        {
          url: "/og_images/achievementspage.png",
          alt: "Shakeef Ahmed Rakin - Achievements",
        },
      ],
      siteName: "Shakeef Ahmed Rakin - Portfolio",
    },
    twitter: {
      title: "Achievements | Shakeef Ahmed Rakin",
      description:
        "Showcasing the achievements of Shakeef Ahmed Rakin across fields like full-stack development, machine learning, and hackathons.",
      images: [
        {
          url: "/og_images/achievementspage.png",
          alt: "Shakeef Ahmed Rakin - Achievements",
        },
      ],
    },
  };
}

export default function Achievements() {
  return (
    <>
      <LayoutWrapper>
        <TitleLarge
          firstTitle="My"
          secondTitle="Achievements"
          isPrimary={true}
        />
        <div>
          {awards.map((award, index) => (
            <ArticleSection key={index} award={award} />
          ))}
        </div>
      </LayoutWrapper>
    </>
  );
}
