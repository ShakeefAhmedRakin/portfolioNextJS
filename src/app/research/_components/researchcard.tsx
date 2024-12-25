import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Research {
  status: {
    label: string;
    color: string;
  };
  title: string;
  link?: string;
  keywords: string[];
  abstract: string;
  journalOrOrg?: {
    name: string;
    image: string;
  } | null;
  authors: {
    name: string;
    link?: string | null;
    isSupervisor?: boolean;
  }[];
  lastUpdatedDate?: string;
}

interface ResearchCardProps {
  research: Research;
}

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <div className="p-6 bg-background flex flex-col lg:flex-row justify-between gap-4 shadow-md rounded-md text-text">
      {/* Info */}
      <div className="flex-1">
        {/* BADGE */}
        <h3
          className={`text-xs font-heading font-bold uppercase py-0.5 px-1.5 bg-backgroundDark rounded-full w-fit -ml-1.5`}
          style={{ color: research.status.color }}
        >
          {research.status.label}
        </h3>

        {/* TITLE AND LINK */}
        <h4 className="font-heading font-medium mb-4 text-sm md:text-base">
          {research.title}{" "}
          {research.link && (
            <Link
              href={research.link}
              className="hover:underline hover:cursor-pointer text-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaExternalLinkAlt className="inline text-sm mb-1 ml-1" />
            </Link>
          )}
        </h4>
        {/* KEYWORDS */}
        <h5 className="mt-4 font-heading text-xs md:text-sm">Keywords</h5>
        <hr className="my-1 md:my-2"></hr>
        <div className="flex gap-1 text-[9px] md:text-xs font-body max-w-[98%]">
          <ul className="flex items-center gap-1 flex-wrap">
            {research.keywords.map((keyword, index) => (
              <li
                key={index}
                className="rounded-full px-1.5 py-0.5 bg-backgroundDark"
              >
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        {/* ABSTRACT */}
        <h6 className="mt-4 font-heading text-xs md:text-sm">Abstract</h6>
        <hr className="my-1 md:my-2"></hr>
        <p className="text-[9px] md:text-xs font-body">{research.abstract}</p>
      </div>
      {/* Info */}
      <div className="lg:max-w-xs  w-full border-t pt-4 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-4">
        {/* JOURNAL/ORG */}
        {research.journalOrOrg && (
          <>
            <div className="flex flex-col items-center gap-2 mb-4">
              <Image
                src={research.journalOrOrg.image}
                alt={`${research.journalOrOrg.name}-logo`}
                width={100}
                className="rounded-full"
                height={100}
              ></Image>
              <h3>{research.journalOrOrg.name}</h3>
            </div>
            <hr className="my-1 md:my-2" />
          </>
        )}
        {/* AUTHORS */}
        <ul className="font-body text-xs font-light space-y-1 mt-2">
          {research.authors
            .sort((a, b) =>
              a.isSupervisor === b.isSupervisor ? 0 : a.isSupervisor ? -1 : 1
            )
            .map((author, index) => (
              <li key={index}>
                {author.link ? (
                  <>
                    <Link
                      href={author.link}
                      className="underline hover:cursor-pointer"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {author.name}
                    </Link>
                  </>
                ) : (
                  <>{author.name}</>
                )}{" "}
                {author.isSupervisor && "(Supervisor)"}
              </li>
            ))}
        </ul>
        {/* DATES */}
        <hr className="my-1 md:my-2" />
        <h4 className="text-xs font-body font-medium">
          Last Updated:{" "}
          {new Date(research?.lastUpdatedDate ?? "").toLocaleDateString(
            "en-US",
            {
              month: "long",
              year: "numeric",
            }
          )}
        </h4>
      </div>
    </div>
  );
}
