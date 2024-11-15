import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectCards({
  projectTitle,
  projectDescription,
  projectTags,
  projectHref,
}: {
  projectTitle: string;
  projectDescription: string;
  projectTags: string[];
  projectHref: string;
}) {
  return (
    <Link
      href={projectHref}
      className="flex flex-col group h-full bg-background shadow p-5 hover:shadow-secondary duration-300 rounded-xl"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-text font-heading font-bold text-sm md:text-lg line-clamp-1 max-w-[90%]">
          {projectTitle}
        </h1>
        <FaArrowRightLong className="text-secondary text-sm md:text-xl opacity-0 group-hover:opacity-100 duration-300" />
      </div>
      <p className="text-text font-light font-body text-[10px] md:text-xs lg:text-sm flex-1 mt-1">
        {projectDescription}
      </p>
      <ul className="flex flex-wrap gap-1 mt-3">
        {projectTags.map((tag, index) => (
          <li
            key={index}
            className="py-0.5 px-1 bg-backgroundDark text-secondary rounded-full text-[9px] font-body font-medium"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
