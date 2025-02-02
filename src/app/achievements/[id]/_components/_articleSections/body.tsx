import Image from "next/image";
import achievements from "../../../../_data/achievements.json";

export default function Body({
  idOfCurrentAchievement,
}: {
  idOfCurrentAchievement: string;
}) {
  const achievement = achievements.find(
    (achievement) => achievement.id === idOfCurrentAchievement
  );

  return (
    <>
      {/* BODY */}
      <article className="space-y-3">
        {achievement?.blog?.content.map((section, index) => {
          switch (section.type) {
            case "text":
              if (typeof section.content === "string") {
                return (
                  <p
                    className="font-body font-light text-text text-xs lg:text-base"
                    key={index}
                  >
                    {section.content}
                  </p>
                );
              }
              return null; // Safeguard against unexpected content type

            case "image":
              if (typeof section.content === "object" && section.content.url) {
                return (
                  <figure
                    className="mx-auto bg-background flex items-center flex-col rounded-xl shadow"
                    key={index}
                  >
                    <Image
                      src={section.content.url}
                      alt={section.content.alt}
                      title="Content Image"
                      draggable={false}
                      sizes="100vw"
                      width={0}
                      height={0}
                      priority={true}
                      fill={false}
                      className="object-contain max-w-xl max-h-[400px] w-full"
                    />
                  </figure>
                );
              }
              return null;

            case "title":
              if (typeof section.content === "string") {
                return (
                  <h2
                    className="font-heading text-text font-bold text-md md:text-lg xl:text-xl"
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
    </>
  );
}
