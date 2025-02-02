import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import achievements from "../../_data/achievements.json";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";
import { Metadata } from "next";
import AchievementBlogNotFound from "@/app/achievements/_components/achievementblognotfound";
import { generateMetadataForAchievementBlogPage } from "@/app/_util/metadata/AchievementsPage/AchievementBlogPage/MetadataAchievementBlogPage";
import { SetSchemaAchievementBlogPage } from "@/app/_util/metadata/AchievementsPage/AchievementBlogPage/SetSchemaAchievementBlogPage";

export async function generateStaticParams() {
  return achievements.map((achievement) => ({
    id: achievement.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return generateMetadataForAchievementBlogPage({ id });
}

export default async function AchievementDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const achievement = achievements.find((achievement) => achievement.id === id);

  if (!achievement) {
    return AchievementBlogNotFound();
  }

  return (
    <>
      <SetSchemaAchievementBlogPage id={id} />
      <section className="bg-backgroundDark min-h-screen">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16 flex flex-col md:flex-row gap-5">
          <article className="flex-1">
            {/* HEADER */}
            <header>
              <span className="text-secondary font-bold font-body text-sm">
                {new Date(achievement.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-4">
                {achievement.blog?.title}
              </h1>
            </header>

            {/* DESCRIPTION */}
            <p className="mb-4 font-body font-light text-text text-xs lg:text-base">
              {achievement.blog?.summary}
            </p>

            {/* MAIN IMAGE */}
            {achievement?.mainImage && (
              <>
                <figure className="mx-auto my-4 bg-background flex items-center flex-col rounded-xl shadow">
                  <Image
                    src={achievement.mainImage.url}
                    alt={achievement.mainImage.alt}
                    draggable={false}
                    sizes="100vw"
                    width={0}
                    height={0}
                    fill={false}
                    className="object-contain max-w-xl max-h-[400px] w-full"
                  />
                  <figcaption className="text-center text-[9px] md:text-xs flex items-center justify-center gap-2 bg-background rounded-full shadow-sm mt-1 text-text">
                    <span>{achievement?.mainImage?.label}</span>
                    {achievement?.mainImage?.source && (
                      <Link
                        href={achievement?.mainImage?.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View the image for ${achievement.title} in full size`}
                      >
                        <CgExternal className="text-text text-lg" />
                      </Link>
                    )}
                  </figcaption>
                </figure>
              </>
            )}

            {/* CONTENT SECTIONS */}
            {achievement.blog?.content.map((section, index) => {
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
                  src={achievement.photo}
                  width={128}
                  draggable={false}
                  height={128}
                  alt={`Logo for ${achievement.title} achievement`}
                  className="mx-auto mt-4 w-[80px] lg:w-[128px] object-contain"
                />
                {/* Award Title */}
                <h2 className="font-heading flex-1 text-xs text-center font-medium text-text mb-2">
                  {achievement.title}
                </h2>
                {/* Award Position */}
                <h3 className="text-center text-xs font-heading my-1 text-primary font-bold">
                  {achievement.position}
                </h3>
                {/* Award Date */}
                <p className="text-center font-body text-[9px] italic text-text mb-4">
                  {new Date(achievement.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <hr className="my-5" />
              {/* List of People */}
              <div className="flex flex-col space-y-2">
                {achievement?.people?.map((person, index) => (
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
    </>
  );
}
