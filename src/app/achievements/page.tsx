import Image from "next/image";
import awards from "../_data/awards.json";
import Link from "next/link";
import { Metadata } from "next";
import { CiClock1 } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";

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
    <main
      className="bg-backgroundDark min-h-screen"
      role="main"
      aria-labelledby="achievements-heading"
    >
      <section className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
        <h1
          id="achievements-heading"
          className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-2 md:mb-4"
        >
          My <span className="text-primary">Achievements</span>
        </h1>
        <div className="mt-8">
          {awards.map((award, index) => (
            <article
              key={index}
              className="mb-10"
              aria-labelledby={`award-title-${index}`}
            >
              <div className="flex md:flex-row flex-col-reverse gap-3 md:gap-10">
                <div className="text-text flex-1">
                  <h2
                    id={`award-title-${index}`}
                    className="font-heading font-semibold text-xs md:text-xl line-clamp-1"
                  >
                    {award.blog.title}
                  </h2>
                  <p className="line-clamp-4 md:line-clamp-3 lg:line-clamp-2 font-body text-[11px] md:text-sm mt-2 font-light text-gray-600 dark:text-gray-300">
                    {award.blog.summary}
                  </p>
                  <Link
                    href={`/achievements/${award.id}`}
                    className="rounded-lg"
                    aria-label={`Read the full story of ${award.blog.title}`}
                  >
                    <button
                      className="py-2 px-4 mb-5 md:mb-10 mt-3 md:mt-6 rounded-lg shadow hover:shadow-primary duration-150 border hover:border-primary active:scale-[0.98] font-heading text-[9px] md:text-xs font-semibold"
                      aria-label="Read Story"
                    >
                      Read Story
                    </button>
                  </Link>
                  <div className="flex items-center gap-4 font-heading">
                    <span
                      className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 dark:text-gray-300 font-bold"
                      aria-label="Estimated read time"
                    >
                      <CiClock1 className="text-sm md:text-lg text-text" />2 min
                      read
                    </span>
                    <span
                      className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 dark:text-gray-300 font-bold"
                      aria-label={`Published date: ${new Date(
                        award.date
                      ).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}`}
                    >
                      <BiCalendar className="text-sm md:text-lg" />
                      {new Date(award.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div
                  className="relative md:max-w-[250px] lg:max-w-xs w-full aspect-video rounded-2xl"
                  role="img"
                  aria-label={award?.mainImage?.alt || "Achievement image"}
                >
                  <Image
                    src={award?.mainImage?.url}
                    fill={true}
                    alt={award?.mainImage?.alt || "Achievement image"}
                    draggable={false}
                    className="h-full w-full object-cover rounded-2xl"
                    title={award?.mainImage?.alt || "Achievement image"}
                  />
                </div>
              </div>
              <hr className="my-10" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
