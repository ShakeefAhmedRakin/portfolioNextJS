"use client";
import { siteNavigation } from "@/content/site-navigation";
import { cn } from "@/lib/utils";
import { externalLinkProps, isNavActive } from "@/lib/utils/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationDesktop() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex gap-4 lg:gap-8">
        {siteNavigation
          .filter((link) => link.isShownOnNav)
          .map((link) => {
            const isActive = isNavActive(pathname, link);
            return (
              <li key={link.title}>
                <Link
                  href={link.href}
                  {...externalLinkProps(link.isExternal)}
                  className={cn(
                    "hover:border-b-primary border-b-[1px] px-0.5 pb-[1px] text-sm font-semibold duration-300",
                    isActive ? "border-b-primary" : "border-b-primary/10",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
