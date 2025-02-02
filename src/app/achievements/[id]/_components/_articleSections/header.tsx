import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { IoPodium } from "react-icons/io5";
import achievements from "../../../../_data/achievements.json";

export default function Header({
  idOfCurrentAchievement,
}: {
  idOfCurrentAchievement: string;
}) {
  const achievement = achievements.find(
    (achievement) => achievement.id === idOfCurrentAchievement
  );

  return (
    <>
      {/* HEADER */}
      <header>
        {/* MAIN IMAGE */}
        {achievement?.mainImage && (
          <figure className="mx-auto bg-background flex items-center flex-col rounded-xl shadow">
            <Image
              src={achievement.mainImage.url}
              alt={achievement.mainImage.alt}
              title="Achievement Blog Main Image"
              draggable={false}
              sizes="100vw"
              width={0}
              height={0}
              priority={true}
              fill={false}
              className="object-contain max-w-xl max-h-[400px] w-full"
            />
          </figure>
        )}
        {/* POSITION DATE */}
        <div className="text-xs md:text-base flex text-text items-center gap-2 font-heading mt-2 md:mt-4">
          <IoPodium className="text-green-500" />
          <span>{achievement?.position}</span>
          <IoMdStar className="text-yellow-500" />
          <span>
            {new Date(achievement?.date || "").toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        {/* MAIN BLOG TITLE */}
        <h2 className="font-heading text-text mt-2 md:mt-4 font-bold text-lg md:text-2xl xl:text-3xl">
          {achievement?.blog?.title}
        </h2>
        {/* SUMMARY */}
        <p className="mt-2 md:mt-4 font-body font-light text-text text-xs lg:text-base">
          {achievement?.blog?.summary}
        </p>
        {/* DIVIDER */}
        <div className="h-4 bg-gradient-to-br from-primary to-secondary rounded-md shadow-md shadow-primary my-2 md:my-4"></div>
      </header>
    </>
  );
}
