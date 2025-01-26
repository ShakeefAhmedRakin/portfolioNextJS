import {
  ButtonPrimaryFilled,
  ButtonSecondaryFilled,
} from "@/app/_components/ui/Buttons";
import { FaExternalLinkAlt } from "react-icons/fa";

interface PaperDetailsProps {
  keywords: string[];
  researchLink?: string;
  linkToPDF?: string;
  abstract: string;
}

export default function PaperDetails({
  keywords,
  researchLink,
  linkToPDF,
  abstract,
}: PaperDetailsProps) {
  return (
    <>
      <div className="mt-4 flex flex-col h-full">
        {/* KEYWORDS */}
        <h3
          className={`font-heading text-text font-semibold text-sm md:text-base xl:text-lg`}
        >
          Keywords
        </h3>
        <hr className="mb-2 mt-1" />
        <ul className="flex flex-wrap gap-1">
          {keywords.map((keyword, index) => (
            <li
              key={keyword}
              className="text-text font-body font-light capitalize text-xs md:text-sm"
            >
              {keyword}
              {index < keywords.length - 1 && ", "}
            </li>
          ))}
        </ul>
        {/* ABSTRACT */}
        <h3
          className={`font-heading text-text font-semibold text-sm md:text-base xl:text-lg mt-4`}
        >
          Abstract
        </h3>
        <hr className="mb-2 mt-1" />
        <p className="font-body font-light text-xs md:text-sm text-justify text-text">
          {abstract}
        </p>
        {/* PAPER LINKS */}
        <hr className="my-4" />
        <div className="flex items-end gap-2 flex-1">
          {researchLink && (
            <ButtonPrimaryFilled
              href={researchLink}
              ariaLabel={`View Paper`}
              className="w-full"
              openInNewTab
            >
              Learn More <FaExternalLinkAlt />
            </ButtonPrimaryFilled>
          )}
          {linkToPDF && (
            <ButtonSecondaryFilled
              href={linkToPDF}
              ariaLabel={`View PDF`}
              className="w-full"
              openInNewTab
            >
              View PDF <FaExternalLinkAlt />
            </ButtonSecondaryFilled>
          )}
        </div>
      </div>
    </>
  );
}
