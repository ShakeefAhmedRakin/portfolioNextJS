"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinksProps {
  isDropDownLinks: boolean;
  handleLinkClick?: () => void; // Optional function prop
}

export default function NavigationLinks({
  isDropDownLinks,
  handleLinkClick = () => {},
}: NavigationLinksProps) {
  const pathname = usePathname(); // Get the current path

  const linkClasses = (path: string) =>
    `duration-200 ${isDropDownLinks && "text-xs md:text-base"} ${
      pathname === path && "text-primary bg-primary-lighter"
    } hover:bg-primary-lighter hover:text-primary font-medium p-2.5 rounded-full`;

  return (
    <>
      <Link
        href="/about"
        title="About"
        aria-label={isDropDownLinks ? "Navigate to About page" : "About Page"}
        onClick={handleLinkClick}
        className={linkClasses("/about")}
      >
        About
      </Link>
      <Link
        href="/projects"
        title="Projects"
        aria-label={
          isDropDownLinks ? "Navigate to Projects page" : "Projects Page"
        }
        onClick={handleLinkClick}
        className={linkClasses("/projects")}
      >
        Projects
      </Link>
      <Link
        href="/work"
        title="Work"
        aria-label={isDropDownLinks ? "Navigate to Work page" : "Work Page"}
        onClick={handleLinkClick}
        className={linkClasses("/work")}
      >
        Work
      </Link>
      <Link
        href="/research"
        title="Research"
        aria-label={
          isDropDownLinks ? "Navigate to Research page" : "Research Page"
        }
        onClick={handleLinkClick}
        className={linkClasses("/research")}
      >
        Research
      </Link>
      <Link
        href="/achievements"
        title="Achievements"
        aria-label={
          isDropDownLinks
            ? "Navigate to Achievements page"
            : "Achievements Page"
        }
        onClick={handleLinkClick}
        className={linkClasses("/achievements")}
      >
        Achievements
      </Link>
    </>
  );
}
