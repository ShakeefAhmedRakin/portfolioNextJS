import Link from "next/link";
import TitleMedium from "@/app/_components/ui/TitleMedium";
import { CgExternal } from "react-icons/cg";
export default function Research() {
  return (
    <>
      <div>
        <Link
          className="flex items-center gap-2 w-fit hover:underline hover:text-text"
          href="/research"
          target="_blank"
          title="Research"
          aria-label="Research"
          rel="noopener noreferrer"
        >
          <TitleMedium title="Research"></TitleMedium>
          <CgExternal className="text-2xl -mt-2 text-text"></CgExternal>
        </Link>
        <hr className="mb-2" />
      </div>
    </>
  );
}
