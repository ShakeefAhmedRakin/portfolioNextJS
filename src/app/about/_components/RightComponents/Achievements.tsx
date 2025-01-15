import Link from "next/link";
import TitleMedium from "@/app/_components/ui/TitleMedium";
import { CgExternal } from "react-icons/cg";
export default function Achievements() {
  return (
    <>
      <div>
        <Link
          className="flex items-center gap-2 w-fit hover:underline hover:text-text"
          href="/achievements"
          target="_blank"
          title="Achievements"
          aria-label="Achievements"
          rel="noopener noreferrer"
        >
          <TitleMedium title="Achievements"></TitleMedium>
          <CgExternal className="text-2xl -mt-2 text-text"></CgExternal>
        </Link>
        <hr className="mb-2" />
      </div>
    </>
  );
}
