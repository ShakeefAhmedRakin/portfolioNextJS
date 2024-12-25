import React from "react";
import workData from "../_data/work.json";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";
import { Person, WithContext } from "schema-dts";

// Helper function to format date
const formatDate = (date: string | null | undefined) => {
  return date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Present";
};

const getElapsedTime = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // Use current date if endDate is null

  // Calculate difference in months
  const monthsElapsed =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(monthsElapsed / 12); // Years
  const months = monthsElapsed % 12; // Remaining months

  // Return formatted time string
  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ${
      months > 0 ? `${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  }
  if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  }
  return "0 months";
};

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
const renderPositions = (positions: WorkItem[], isActive: boolean) => (
  <div className="space-y-10">
    {positions.map((item, index) => (
      <div className="relative max-w-4xl" key={index}>
        <div
          className={`absolute h-5 w-5 ${
            isActive ? "bg-primary" : "bg-secondary"
          } rounded-full -left-2.5 border-4 border-backgroundDark`}
        />
        <div className="ml-4">
          <div className="pt-0.5 flex items-center gap-2">
            <p
              className={`font-body font-bold italic ${
                isActive ? "text-primary" : "text-secondary"
              } text-[10px] md:text-xs`}
            >
              {formatDate(item.startDate)} - {formatDate(item.endDate)}
            </p>
            <p
              className={`font-body font-bold italic text-[9px] text-text opacity-60 md:text-[10px]`}
            >
              {getElapsedTime(item.startDate, item.endDate)}
            </p>
          </div>
          <h3 className="text-xs lg:text-sm font-semibold font-heading text-text mt-1 whitespace-nowrap">
            {item.position}
          </h3>
          <div className="flex items-center gap-1 my-1.5">
            {item.companyLogo && (
              <>
                <Image
                  src={item.companyLogo}
                  alt={`${item.company}-logo`}
                  height={22}
                  width={22}
                  className="rounded aspect-square object-scale-down"
                ></Image>
              </>
            )}
            {item.companyLink ? (
              <>
                <Link
                  href={item.companyLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline hover:cursor-pointer w-fit"
                >
                  <h4 className="font-body font-light text-text italic text-xs lg:text-sm">
                    {item.company}
                  </h4>
                  <FaExternalLinkAlt className="text-[10px] text-text" />
                </Link>
              </>
            ) : (
              <>
                <h4 className="font-body font-light text-text italic text-xs lg:text-sm">
                  {item.company}
                </h4>
              </>
            )}
          </div>

          <p className="font-body font-light text-text text-xs lg:text-sm">
            {item.description}
          </p>
          {item.projects.length > 0 && item.projects && (
            <ul className="max-w-2xl ml-3 md:ml-5">
              {item.projects.map((project) => (
                <li key={project.name} className="my-5">
                  <div className="flex items-center gap-2">
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt={`Logo for ${project.name}`}
                        width={22}
                        height={22}
                        className="rounded aspect-square object-scale-down"
                      ></Image>
                    )}
                    <h5 className="font-heading text-xs lg:text-sm flex items-center font-medium  text-text gap-2">
                      {project.link ? (
                        <>
                          <Link
                            href={project.link}
                            className="flex items-center gap-2 hover:underline hover:cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.name}
                            <FaExternalLinkAlt className="text-[10px]" />
                          </Link>
                        </>
                      ) : (
                        <>{project.name}</>
                      )}
                    </h5>
                  </div>
                  <p className="mt-2 font-body font-light text-text text-[11px] lg:text-[12.5px]">
                    {project.description}
                  </p>
                  <ul className="mt-3 list-disc list-inside">
                    {project.responsibilities.map((responsibility, index) => (
                      <li
                        key={`${project.name}-${index}`}
                        className="font-body font-light text-text text-[11px] lg:text-[12.5px] my-1"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
);

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

export default function Work() {
  const parseDate = (dateStr: string | null | undefined): Date => {
    return dateStr ? new Date(dateStr) : new Date();
  };

  // Filter and sort positions into active and past ones
  const activePositions: WorkItem[] = workData
    .filter((item) => item.isActive)
    .sort(
      (a, b) =>
        parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
    );

  const pastPositions: WorkItem[] = workData
    .filter((item) => !item.isActive)
    .sort(
      (a, b) =>
        parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
    );

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

  return (
    <section className="bg-backgroundDark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
        <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-4">
          Work <span className="text-primary">Experience</span>
        </h1>

        {/* Current Positions Section */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full">
            <h2 className="font-heading text-text font-bold text-md md:text-lg xl:text-2xl mb-2">
              Current Positions
            </h2>
            <hr className="mb-2" />
            <div className="border-l">
              {renderPositions(activePositions, true)}
            </div>
          </div>
        </div>

        {/* Past Positions Section */}
        {pastPositions.length > 0 && (
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="w-full">
              <h2 className="font-heading text-text font-bold text-md md:text-lg xl:text-2xl mb-2">
                Past Positions
              </h2>
              <hr className="mb-2" />
              <div className="border-l">
                {renderPositions(pastPositions, false)}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
