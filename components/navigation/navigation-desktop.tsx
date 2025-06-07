"use client";
import { siteNavigation } from "@/content/site-navigation";
import { cn } from "@/lib/utils";
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
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                href={link.href}
                key={link.title}
                aria-label={link.ariaLabel}
                title={link.title}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "hover:border-b-primary border-b-[1px] px-0.5 pb-[1px] text-sm font-semibold duration-300",
                  isActive ? "border-b-primary" : "border-b-primary/10",
                )}
              >
                {link.label}
              </Link>
            );
          })}
      </ul>
    </nav>
  );
}
