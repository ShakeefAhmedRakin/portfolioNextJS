import Link from "next/link";
import Logo from "../branding/logo";
import { TypographyP } from "../ui/typography";
import { FooterWrapper } from "../ui/wrappers";
import { siteSocials } from "@/content/site-socials";
import { buttonVariants } from "../ui/button";
import { siteNavigation } from "@/content/site-navigation";
import SiteFooterNavigation from "./site-footer-navigation";
import SiteConfig from "@/content/site-config";

export default function SiteFooter() {
  return (
    <FooterWrapper innerClassName="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once">
      <div className="flex flex-col justify-between gap-x-10 gap-y-5 md:flex-row">
        <section className="max-w-sm">
          <Logo />
          <TypographyP
            className="text-foreground/65 my-3 leading-5"
            level="small"
          >
            {SiteConfig.footerDescription}
          </TypographyP>
          <div>
            {siteSocials.map((link) => (
              <Link
                href={link.url}
                key={`hero-${link.title}`}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                title={link.title}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </section>
        {/* Navigation Links */}
        <section className="grid grid-cols-2 gap-x-16 xl:col-span-2">
          <SiteFooterNavigation
            links={siteNavigation.filter((link) => link.isShownOnFooterNav)}
            label="Navigation"
          />
          <SiteFooterNavigation
            links={siteNavigation.filter(
              (link) => link.isShownOnFooterResources,
            )}
            label="Resources"
          />
        </section>
      </div>
      <hr className="border-primary/50 my-5" />
      <section className="flex flex-col justify-between gap-5 md:flex-row">
        <TypographyP
          level="small"
          className="text-foreground/65 text-center md:text-left"
        >
          &copy; {new Date().getFullYear()} {SiteConfig.fullName}. All rights
          reserved.
        </TypographyP>
        <TypographyP
          level="small"
          className="text-foreground/65 text-center md:text-right"
        >
          Built with Next.js, Shadcn UI & Velite.
        </TypographyP>
      </section>
    </FooterWrapper>
  );
}
