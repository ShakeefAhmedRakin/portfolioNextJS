import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import awards from "../../_data/awards.json";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";
import { Metadata } from "next";

// Async function to generate metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const award = await awards.find((award) => award.id === id);

  return {
    // PAGE GOOGLE TITLE / DESCRIPTION
    title: award?.blog?.title,
    description: award?.blog?.summary,

    // OPEN GRAPH METADATA
    openGraph: {
      title: award?.blog?.title,
      type: "article",
      description: award?.blog?.summary,
      authors: award?.people?.map((person) => person.name),
      url: `${process.env.WEBSITE_URL}/achievements/${award?.id}`,
      images: [
        {
          url: award?.mainImage?.url || award?.photo || "/logos/logo.png",
        },
      ],
    },

    // TWITTER METADATA
    twitter: {
      title: award?.blog?.title,
      description: award?.blog?.summary,
      images: [
        {
          url: award?.mainImage?.url || award?.photo || "/logos/logo.png",
        },
      ],
    },
  };
}

export default async function AchievementDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const award = awards.find((award) => award.id === id);

  if (!award) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-backgroundDark min-h-screen">
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
            <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl">
              {award.blog?.title}
            </h1>
          </header>

          {/* DESCRIPTION */}
          <p className="my-4 font-body font-light text-text text-xs lg:text-base">
            {award.blog?.summary}
          </p>

          {/* MAIN IMAGE */}
          {award?.mainImage && (
            <>
              <figure className="max-w-xl mx-auto my-4">
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
                  <span> Caption: {award?.mainImage?.label}</span>
                  {award?.mainImage?.url && (
                    <Link
                      href={award.mainImage.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the image for ${award.blogTitle} in full size`}
                    >
                      <CgExternal className="text-text text-lg" />
                    </Link>
                  )}
                </figcaption>
              </figure>
            </>
          )}

          {/* CONTENT SECTIONS */}
          {award.blog?.content.map((section, index) => (
            <section key={index} className="mt-5">
              <h2 className="font-heading text-text font-bold text-md md:text-lg xl:text-xl">
                {section?.title}
              </h2>
              <p className="my-4 font-body font-light text-text text-xs lg:text-base">
                {section?.text}
              </p>
              {section?.image && (
                <>
                  <figure className="max-w-xl mx-auto my-4">
                    <Image
                      src={section?.image?.url}
                      alt={section?.image?.alt}
                      draggable={false}
                      sizes="100vw"
                      width={0}
                      height={0}
                      fill={false}
                      className="object-contain max-w-xl max-h-[400px] w-full"
                    />
                    <figcaption className="text-center text-[9px] md:text-xs flex justify-center items-center gap-2 bg-background rounded-full shadow-sm mt-1 text-text">
                      <span>Caption: {section?.image?.label}</span>
                      {section?.image?.source && (
                        <Link
                          href={section?.image?.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View the image for ${section?.text} in full size`}
                        >
                          <CgExternal className="text-text text-lg" />
                        </Link>
                      )}
                    </figcaption>
                  </figure>
                </>
              )}
            </section>
          ))}
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

            {/* List of People */}
            <div className="flex flex-col space-y-2">
              {award?.people?.map((person, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {/* Person's Avatar */}
                  <BsPerson className="text-text" />
                  {/* Person's Name */}
                  <p className="font-body text-xs text-text">{person.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
