import { NavItem } from "@/content/site-navigation";
import { headingVariants, paragraphVariants } from "../ui/typography";
import Link from "next/link";
import { externalLinkProps } from "@/lib/utils/navigation";

export default function SiteFooterNavigation({
  links,
  label,
}: {
  links: NavItem[];
  label: string;
}) {
  return (
    <div className="space-y-2">
      <span className={headingVariants({ level: "h5" })}>{label}</span>
      <ul className="mt-1.5">
        {links.map((link) => (
          <li key={`footer-nav-${link.ariaLabel}`}>
            <Link
              href={link.href}
              {...externalLinkProps(link.isExternal)}
              className={paragraphVariants({
                level: "small",
                className:
                  "text-foreground/65 hover:text-foreground/80 duration-300 hover:underline",
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
