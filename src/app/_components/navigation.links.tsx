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
    `duration-300 ${pathname === path && "text-primary"}`;

  return (
    <>
      <Link
        href="/about"
        aria-label={isDropDownLinks ? "Navigate to About page" : "About Page"}
        onClick={handleLinkClick}
        className={linkClasses("/about")}
      >
        About
      </Link>
      <Link
        href="/projects"
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
        aria-label={isDropDownLinks ? "Navigate to Work page" : "Work Page"}
        onClick={handleLinkClick}
        className={linkClasses("/work")}
      >
        Work
      </Link>
      <Link
        href="/publications"
        aria-label={
          isDropDownLinks
            ? "Navigate to Publications page"
            : "Publications Page"
        }
        onClick={handleLinkClick}
        className={linkClasses("/publications")}
      >
        Publications
      </Link>
      <Link
        href="/achievements"
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
