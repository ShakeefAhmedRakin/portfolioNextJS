import Link from "next/link";
import TitleMedium from "@/app/_components/ui/TitleMedium";
import { CgExternal } from "react-icons/cg";
export default function Projects() {
  return (
    <>
      <div>
        <Link
          className="flex items-center gap-2 w-fit hover:underline hover:text-text"
          href="/projects"
          target="_blank"
          title="Projects"
          aria-label="Projects"
          rel="noopener noreferrer"
        >
          <TitleMedium title="Projects"></TitleMedium>
          <CgExternal className="text-2xl -mt-2 text-text"></CgExternal>
        </Link>
        <hr className="mb-2" />
      </div>
    </>
  );
}
