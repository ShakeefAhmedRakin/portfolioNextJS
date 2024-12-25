import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import awards from "../../_data/awards.json";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";
import { Metadata } from "next";
import BlogNotFound from "@/app/_components/errors/blognotfound";
import { BlogPosting, WithContext } from "schema-dts";

export async function generateStaticParams() {
  return awards.map((award) => ({
    id: award.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params; // Extract 'id' after resolving the promise
  const award = awards.find((award) => award.id === id);

  return {
    metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
    // GOOGLE INDEXING SEO TAGS
    title: award?.seo?.googleIndexing?.title || "Achievement Details",
    description:
      award?.seo?.googleIndexing?.description ||
      "Explore details about this achievement.",
    keywords: award?.seo?.googleIndexing?.keywords || "Achievement, Details",
    publisher: "Shakeef Ahmed Rakin",
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/achievements/${award?.id}`,
    },
    robots: "index, follow",

    // PREVIEW TAGS FOR SOCIAL MEDIA
    openGraph: {
      title: award?.seo?.openGraphCard?.title || award?.blog?.title,
      type: "article",
      description:
        award?.seo?.openGraphCard?.description || award?.blog?.summary,
      authors: award?.people?.map((person) => person.name) || [],
      url: `${process.env.WEBSITE_URL}/achievements/${award?.id}`,
      images: [
        {
          url:
            award?.seo?.openGraphCard?.image ||
            award?.mainImage?.url ||
            award?.photo ||
            "/logos/logo.png",
          alt:
            award?.seo?.openGraphCard?.imgAlt ||
            award?.mainImage?.alt ||
            "Achievement Image",
        },
      ],
      siteName: "Shakeef Ahmed Rakin - Portfolio",
    },
    twitter: {
      title: award?.seo?.twitterCard?.title || award?.blog?.title,
      description: award?.seo?.twitterCard?.description || award?.blog?.summary,
      images: [
        {
          url:
            award?.seo?.twitterCard?.image ||
            award?.mainImage?.url ||
            award?.photo ||
            "/logos/logo.png",
          alt:
            award?.seo?.twitterCard?.imgAlt ||
            award?.mainImage?.alt ||
            "Achievement Image",
        },
      ],
    },
  };
}

export default async function AchievementDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const award = awards.find((award) => award.id === id);

  if (!award) {
    return BlogNotFound();
  }

  // Prepare JSON-LD
  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: award.blog?.title,
    description:
      award.blog?.summary || "Explore details about this achievement.",
    datePublished: award.date,
    dateModified: award.date,
    image: {
      "@type": "ImageObject",
      url: award.mainImage?.url || award.photo,
    },
    author: {
      "@type": "Person",
      name: "Shakeef Ahmed Rakin",
    },
    url: `${process.env.WEBSITE_URL}/achievements/${award?.id}`,
    publisher: {
      "@type": "Organization",
      name: "Shakeef Ahmed Rakin",
      logo: {
        "@type": "ImageObject",
        url: "https://shakeefahmedrakin.vercel.app/logos/logo.png",
      },
    },
    creator: "Shakeef Ahmed Rakin",
    maintainer: "Shakeef Ahmed Rakin",
    mainEntityOfPage: `${process.env.WEBSITE_URL}/achievements/${award?.id}`,
    keywords: award.seo?.googleIndexing?.keywords?.join(", "),
    articleBody:
      award?.blog?.summary +
      " " +
      award.blog?.content
        .map((section) => {
          if (section.type === "text") {
            return section.content;
          }
          if (section.type === "title") {
            return section.content;
          }
        })
        .join(" "),
    articleSection: [
      "Achievements",
      "Details",
      "Hackathon",
      "Competition",
      "Datathon",
    ],
    abstract: award?.blog?.summary,
  };

  return (
    <section className="bg-backgroundDark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16 flex flex-col md:flex-row gap-5">
        <article className="flex-1">
          {/* HEADER */}
          <header>
            <span className="text-secondary font-bold font-body text-sm">
              {new Date(award.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-4">
              {award.blog?.title}
            </h1>
          </header>

          {/* DESCRIPTION */}
          <p className="mb-4 font-body font-light text-text text-xs lg:text-base">
            {award.blog?.summary}
          </p>

          {/* MAIN IMAGE */}
          {award?.mainImage && (
            <>
              <figure className="mx-auto my-4 bg-background flex items-center flex-col rounded-xl shadow">
                <Image
                  src={award.mainImage.url}
                  alt={award.mainImage.alt}
                  draggable={false}
                  sizes="100vw"
                  width={0}
                  height={0}
                  fill={false}
                  className="object-contain max-w-xl max-h-[400px] w-full"
                />
                <figcaption className="text-center text-[9px] md:text-xs flex items-center justify-center gap-2 bg-background rounded-full shadow-sm mt-1 text-text">
                  <span>{award?.mainImage?.label}</span>
                  {award?.mainImage?.source && (
                    <Link
                      href={award?.mainImage?.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the image for ${award.title} in full size`}
                    >
                      <CgExternal className="text-text text-lg" />
                    </Link>
                  )}
                </figcaption>
              </figure>
            </>
          )}

          {/* CONTENT SECTIONS */}
          {award.blog?.content.map((section, index) => {
            switch (section.type) {
              case "text":
                if (typeof section.content === "string") {
                  return (
                    <p
                      className="my-3 font-body font-light text-text text-xs lg:text-base"
                      key={index}
                    >
                      {section.content}
                    </p>
                  );
                }
                return null; // Safeguard against unexpected content type

              case "image":
                if (
                  typeof section.content === "object" &&
                  section.content.url
                ) {
                  return (
                    <figure
                      className="my-3 mx-auto bg-background flex items-center flex-col rounded-xl shadow"
                      key={index}
                    >
                      <Image
                        src={section.content.url}
                        alt={section.content.alt}
                        draggable={false}
                        sizes="100vw"
                        width={0}
                        height={0}
                        fill={false}
                        className="object-contain max-w-xl max-h-[400px] w-full"
                      />
                      <figcaption className="text-center text-[9px] md:text-xs flex justify-center items-center gap-2 bg-background rounded-full shadow-sm mt-1 pb-1 text-text">
                        <span>{section.content.label}</span>
                        {section.content.source && (
                          <Link
                            href={section.content.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View the image for ${section.content.label} in full size`}
                          >
                            <CgExternal className="text-text text-lg" />
                          </Link>
                        )}
                      </figcaption>
                    </figure>
                  );
                }
                return null;

              case "title":
                if (typeof section.content === "string") {
                  return (
                    <h2
                      className="my-3 font-heading text-text font-bold text-md md:text-lg xl:text-xl"
                      key={index}
                    >
                      {section.content}
                    </h2>
                  );
                }
                return null;

              default:
                return null; // Handle unknown types if needed
            }
          })}
        </article>

        {/* RIGHT SIDE STICKY CARD */}
        <div className="w-full md:max-w-[280px] lg:max-w-xs xl:max-w-sm">
          <div className="bg-background p-6 rounded-2xl shadow">
            <div className="text-center mb-4">
              {/* Award Image */}
              <Image
                src={award.photo}
                width={128}
                draggable={false}
                height={128}
                alt={`Logo for ${award.title} award`}
                className="mx-auto mt-4 w-[80px] lg:w-[128px] object-contain"
              />
              {/* Award Title */}
              <h2 className="font-heading flex-1 text-xs text-center font-medium text-text mb-2">
                {award.title}
              </h2>
              {/* Award Position */}
              <h3 className="text-center text-xs font-heading my-1 text-primary font-bold">
                {award.position}
              </h3>
              {/* Award Date */}
              <p className="text-center font-body text-[9px] italic text-text mb-4">
                {new Date(award.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <hr className="my-5" />
            {/* List of People */}
            <div className="flex flex-col space-y-2">
              {award?.people?.map((person, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {/* Person's Avatar */}
                  <BsPerson className="text-text" />
                  {/* Person's Name */}
                  {person.link ? (
                    <>
                      <Link
                        href={person.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View information about ${person.name}`}
                        className="font-body text-xs text-text underline"
                      >
                        {person.name}
                      </Link>
                    </>
                  ) : (
                    <>
                      <p className="font-body text-xs text-text">
                        {person.name}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
