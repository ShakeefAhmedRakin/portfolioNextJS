import Image from "next/image";

interface Research {
  status: {
    label: string;
    color: string;
  };
  title: string;
  thumbnail: string;
  lastUpdatedDate?: string;
  abstract: string;
}

interface ResearchCardProps {
  research: Research;
}

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <div className="bg-background h-full rounded-lg shadow">
      <div className="aspect-video relative">
        <Image
          src={research.thumbnail}
          fill={true}
          priority
          alt={`${research.title} thumbnail`}
          draggable={false}
          className="object-cover"
        ></Image>
      </div>

      <div className="flex flex-col p-4">
        <div className="flex items-center gap-2 my-1">
          <span
            className={`text-xs font-heading font-bold uppercase py-0.5 px-1.5 bg-backgroundDark rounded-full w-fit -ml-1.5`}
            style={{ color: research.status.color }}
          >
            {research.status.label}
          </span>
        </div>
        <h4 className="font-heading text-secondary font-bold text-xs md:text-sm line-clamp-2">
          {research?.title}
        </h4>

        <p className="font-body text-text opacity-60 text-xs md:text-sm my-1">
          {new Date(research?.lastUpdatedDate ?? "").toLocaleDateString(
            "en-US",
            {
              month: "long",
              year: "numeric",
            }
          )}
        </p>

        <p className="text-[9px] md:text-xs font-body line-clamp-5 text-text">
          {research.abstract}
        </p>
      </div>
    </div>
  );
}
