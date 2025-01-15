import Link from "next/link";
import { IoIosDocument } from "react-icons/io";

export default function ViewResumeButton({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <Link
        className={`${className} rounded-full`}
        href={"/resume"}
        target="_blank"
        rel="noopener noreferrer"
        title="View Full Resume"
        aria-label="View Full Resume"
      >
        <button className="before:ease relative h-8 w-36 overflow-hidden border font-body font-medium text-sm border-white rounded-full bg-white text-primary shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-primary before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40 duration-300">
          <span className="relative z-10 flex items-center gap-2 justify-center">
            Full Resume <IoIosDocument className="text-lg" />
          </span>
        </button>
      </Link>
    </>
  );
}
