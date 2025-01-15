"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationLinks from "../../_data/navigationLinks.json";

interface NavigationLinksProps {
  isDropDownLinks: boolean;
  handleLinkClick?: () => void; // Optional function prop
}

export default function NavigationLinks({
  isDropDownLinks,
  handleLinkClick = () => {},
}: NavigationLinksProps) {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `duration-200 ${isDropDownLinks && "text-xs md:text-base"} ${
      pathname.includes(path) && "text-primary bg-primary-lighter"
    } hover:bg-primary-lighter hover:text-primary font-medium p-2.5 rounded-full`;

  return (
    <>
      {navigationLinks.map((link, index) => {
        if (link.isShownOnNav === false) return null;
        return (
          <Link
            key={`${link.title}-${index}`}
            href={link.route}
            title={link.title}
            aria-label={link["aria-label"]}
            onClick={handleLinkClick}
            className={linkClasses(link.route)}
          >
            <span>{link.label}</span>
          </Link>
        );
      })}
    </>
  );
}
