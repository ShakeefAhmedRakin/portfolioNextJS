import Image from "next/image";
import Link from "next/link";

interface Research {
  status: {
    label: string;
    color: string;
  };
  id: string;
  title: string;
  thumbnail: string;
  lastUpdatedDate: string;
  abstract: string;
}

interface ResearchCardProps {
  research: Research;
}

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Link
      className="bg-background  h-full rounded-lg shadow hover:shadow-secondary duration-300 hover:cursor-pointer"
      href={`/research/${research.id}`}
      title={`View ${research.title}`}
      aria-label={`View ${research.title}`}
    >
      <div className="aspect-video relative">
        <Image
          src={research.thumbnail}
          fill={true}
          alt={`${research.title} thumbnail`}
          draggable={false}
          className="object-cover"
        ></Image>
      </div>

      <div className="flex flex-col p-4">
        <div className="flex items-center gap-2 my-1">
          <h3
            className={`text-xs font-heading font-bold uppercase py-0.5 px-1.5 bg-backgroundDark rounded-full w-fit -ml-1.5`}
            style={{ color: research.status.color }}
          >
            {research.status.label}
          </h3>
        </div>
        <h3 className="font-heading text-secondary font-bold text-xs md:text-sm line-clamp-2">
          {research?.title}
        </h3>

        <p className="font-body text-text opacity-60 text-xs md:text-sm my-1">
          {new Date(research?.lastUpdatedDate).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>

        <p className="text-[9px] md:text-xs font-body line-clamp-5 text-text">
          {research.abstract}
        </p>
      </div>
    </Link>
  );
}
