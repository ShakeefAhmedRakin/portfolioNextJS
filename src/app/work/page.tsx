import React from "react";
import workData from "../_data/work.json";
import { Metadata } from "next";
import { Person, WithContext } from "schema-dts";
import WorkPositionsList from "./_components/WorkPositionsList";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import TitleMedium from "../_components/ui/TitleMedium";

type WorkItem = {
  isActive: boolean;
  startDate: string;
  endDate: string | null;
  position: string;
  company: string;
  companyLink?: string | null;
  companyLogo?: string;
  description: string;
  projects: {
    name: string;
    logo: string;
    link?: string;
    description: string;
    responsibilities: string[];
  }[];
};
export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
    title: "Shakeef Ahmed Rakin - Work Experience",
    description:
      "Explore the work experience of Shakeef Ahmed Rakin, showcasing his current and past positions, along with the projects he has worked on.",
    keywords: [
      "Shakeef Ahmed Rakin",
      "Work Experience",
      "Full-stack Developer",
      "Machine Learning Engineer",
      "Software Engineer",
      "Web Developer",
    ],
    publisher: "Shakeef Ahmed Rakin",
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/work`,
    },
    robots: "index, follow",
    openGraph: {
      title: "Work Experience | Shakeef Ahmed Rakin",
      type: "website",
      description:
        "Explore the work experience of Shakeef Ahmed Rakin, showcasing his current and past positions, along with the projects he has worked on.",
      url: `${process.env.WEBSITE_URL}/work`,
      images: [
        {
          url: "/og_images/home.png",
          alt: "Shakeef Ahmed Rakin - Work Experience",
        },
      ],
      siteName: "Shakeef Ahmed Rakin - Portfolio",
    },
    twitter: {
      title: "Work Experience | Shakeef Ahmed Rakin",
      description:
        "Explore the work experience of Shakeef Ahmed Rakin, showcasing his current and past positions, along with the projects he has worked on.",
      images: [
        {
          url: "/og_images/home.png",
          alt: "Shakeef Ahmed Rakin - Work Experience",
        },
      ],
    },
  };
}

export default function WorkPage() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shakeef Ahmed Rakin",
    additionalName: "Rakin",
    affiliation: workData.map((item) => {
      return { "@type": "Organization", name: item.company };
    }),
    hasOccupation: workData.map((item) => {
      return {
        "@type": "Occupation",
        name: item.position,
        occupationLocation: item.companyLocation,
      };
    }),
    jobTitle: workData.map((item) => item.position),
    nationality: "Bangladeshi",
    worksFor: workData.map((item) => {
      return {
        "@type": "Organization",
        name: item.company,
        url: item.companyLink || undefined,
        location: item.companyLocation,
        description: item.description,
      };
    }),
    image: `${process.env.WEBSITE_URL}/hero.jpg`,
    url: `${process.env.WEBSITE_URL}/work`,
  };

  const { active: activePositions, past: pastPositions } =
    sortAndCategorizePositions(workData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LayoutWrapper>
        <TitleLarge
          firstTitle="Work"
          secondTitle="Experience"
          isPrimary={true}
        />

        {activePositions.length > 0 && (
          <section>
            <TitleMedium title="Current Positions" />
            <hr className="mb-2" />
            <WorkPositionsList positions={activePositions} isActive={true} />
          </section>
        )}

        {pastPositions.length > 0 && (
          <section>
            <TitleMedium title="Past Positions" />
            <hr className="mb-2" />
            <WorkPositionsList positions={pastPositions} isActive={false} />
          </section>
        )}
      </LayoutWrapper>
    </>
  );
}

const sortAndCategorizePositions = (workData: WorkItem[]) => {
  const parseDate = (dateStr: string | null | undefined): Date => {
    return dateStr ? new Date(dateStr) : new Date();
  };

  const categorizedPositions = workData.reduce(
    (acc, item) => {
      if (item.isActive) {
        acc.active.push(item);
      } else {
        acc.past.push(item);
      }
      return acc;
    },
    { active: [] as WorkItem[], past: [] as WorkItem[] }
  );

  // Sort the positions by start date
  categorizedPositions.active.sort(
    (a, b) =>
      parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
  );
  categorizedPositions.past.sort(
    (a, b) =>
      parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
  );

  return categorizedPositions;
};
