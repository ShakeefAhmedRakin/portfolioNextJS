import { ButtonTertiaryFilled } from "@/app/_components/ui/Buttons";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoPodium } from "react-icons/io5";

interface Achievement {
  id: string;
  title: string;
  position: string;
  date: string;
  blog: {
    title: string;
    summary: string;
  };
  mainImage?: {
    url: string;
    alt?: string;
  };
}

export default function ArticleSection({
  achievement,
}: {
  achievement: Achievement;
}) {
  return (
    <article className="text-text" aria-labelledby={`${achievement.title}`}>
      <div className="rounded-lg flex flex-col md:flex-row gap-4">
        <div className="md:max-w-xs w-full aspect-video relative rounded-md shadow-md">
          <Image
            fill={true}
            src={achievement?.mainImage?.url ?? ""}
            priority={true}
            alt={achievement?.mainImage?.alt || "Achievement image"}
            draggable={false}
            className="object-cover rounded-md"
            title={achievement?.mainImage?.alt || "Achievement image"}
          ></Image>
        </div>
        <div className="flex-1 px-3 md:px-0 flex flex-col">
          <h2 className="font-heading font-bold mb-2 line-clamp-2">
            {achievement?.blog?.title}
          </h2>
          <div className="text-xs flex items-center gap-2 font-heading">
            <IoPodium className="text-green-500"></IoPodium>
            <span>{achievement.position}</span>
            <IoMdStar className="text-yellow-500 text-sm"></IoMdStar>
            <span>
              {new Date(achievement.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <p className="font-body text-sm font-light line-clamp-6 md:line-clamp-4 mt-2 mb-4">
            {achievement?.blog?.summary}
          </p>
          <div className="flex-1 flex items-end">
            <ButtonTertiaryFilled
              variant="white"
              href={`/achievements/${achievement.id}`}
              ariaLabel={`Read Story About ${achievement.title}`}
            >
              Read Story <FaArrowRight></FaArrowRight>
            </ButtonTertiaryFilled>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </article>
  );
}
