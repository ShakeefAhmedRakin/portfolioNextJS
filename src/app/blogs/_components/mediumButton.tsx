import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
export default function MediumButton() {
  return (
    <Link
      href={"https://medium.com/@shakeef.rakin321"}
      aria-label="Visit Medium Profile"
      title="Visit Medium Profile"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex flex-col gap-2 items-center group bg-background dark:bg-white rounded-lg p-4 border text-black shadow-inner shadow-gray-200 active:scale-[0.98] duration-300"
    >
      <FaMediumM className="text-xl" />
      <span className="flex items-center gap-2 text-xs font-heading group-hover:underline">
        Visit Medium Profile <FaExternalLinkAlt className="text-xs" />
      </span>
    </Link>
  );
}
