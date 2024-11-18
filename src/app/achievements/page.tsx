import Image from "next/image";
import awards from "../_data/awards.json";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    // GOOGLE INDEXING SEO TAGS
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

    // PREVIEW TAGS FOR SOCIAL MEDIA
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
      <section className="bg-backgroundDark min-h-screen">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
          <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-2 md:mb-4">
            My <span className="text-primary">Achievements</span>
          </h1>
          <p className="my-4 font-body font-light text-text text-xs lg:text-base">
            As I approached the end of my university life, I actively
            participated in various competitions, which allowed me to gain
            hands-on experience in a wide array of fields, from full-stack web
            development to machine learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <div key={index}>
                <div className="flex flex-col h-full bg-background py-4 px-8 shadow rounded-xl">
                  <Image
                    src={award.photo}
                    width={128}
                    height={128}
                    draggable={false}
                    sizes="100vw"
                    alt={`${award.title} logo`}
                    className="mx-auto mb-2 w-[80px] lg:w-[128px] object-contain"
                  />
                  <h1 className="font-heading flex-1 text-xs text-center font-medium text-text">
                    {award.title}
                  </h1>
                  <h2 className="text-center text-xs font-heading my-1 text-primary font-bold">
                    {award.position}
                  </h2>
                  <h3 className="text-center font-body text-[9px] italic text-text">
                    {new Date(award.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <Link
                    href={`achievements/${award.id}`}
                    className="rounded-full mt-4"
                  >
                    <button className="btn btn-sm bg-transparent text-primary rounded-full border dark:border-gray-800 shadow-none relative font-body text-xs group hover:bg-primary hover:text-background hover:border-primary w-full underline">
                      Details
                      <IoIosArrowForward className="absolute right-2 text-lg opacity-0 group-hover:opacity-100 duration-[100ms]" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
