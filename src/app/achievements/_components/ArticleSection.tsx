import TitleMedium from "@/app/_components/ui/TitleMedium";
import Image from "next/image";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";

interface Award {
  id: string;
  title: string;
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

export default function ArticleSection({ award }: { award: Award }) {
  return (
    <article className="mb-10" aria-labelledby={`${award.title}`}>
      <div className="flex md:flex-row flex-col-reverse gap-3 md:gap-10">
        <div className="text-text flex-1">
          <TitleMedium title={award.blog.title} />
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
              <CiClock1 className="text-sm md:text-lg text-text" />2 min read
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
            src={award?.mainImage?.url ?? ""}
            fill={true}
            sizes="100%"
            priority={true}
            alt={award?.mainImage?.alt || "Achievement image"}
            draggable={false}
            className="h-full w-full object-cover rounded-2xl"
            title={award?.mainImage?.alt || "Achievement image"}
          />
        </div>
      </div>
      <hr className="my-10" />
    </article>
  );
}
