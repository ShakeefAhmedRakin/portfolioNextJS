import { GetInTouchDialog } from "@/components/navigation/get-in-touch-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  headingVariants,
  TypographyH1,
  TypographyP,
} from "@/components/ui/typography";

import { SectionWrapper } from "@/components/ui/wrappers";
import SiteConfig from "@/content/site-config";
import { siteSocials } from "@/content/site-socials";
import Image from "next/image";

import Link from "next/link";

export default function HeroSection() {
  return (
    <SectionWrapper
      innerClassName="flex justify-between items-center flex-col-reverse lg:flex-row gap-8"
      wrapperClassName=""
    >
      <div className="animate-fade-up animate-ease animate-delay-200 animate-duration-[1500ms] animate-once flex-1 space-y-2.5">
        <span
          className={headingVariants({
            level: "h3",
            className: "text-foreground/65",
            weight: "light",
          })}
        >
          {SiteConfig.title}
        </span>
        <TypographyH1 className="mt-2">{SiteConfig.fullName}</TypographyH1>

        <div className="flex gap-3">
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
        <TypographyP className="text-foreground/65">
          {SiteConfig.heroDescription}
        </TypographyP>

        <div className="mt-5 flex w-full">
          <Link
            className={buttonVariants({
              className: "flex-1 bg-transparent text-xs",
              size: "lg",
              variant: "outline",
            })}
            href={"/about"}
          >
            About Me
          </Link>
          <GetInTouchDialog>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex-1 bg-transparent text-xs"
            >
              Get In Touch
            </Button>
          </GetInTouchDialog>
        </div>
      </div>
      <div className="animate-fade-up animate-ease animate-delay-800 animate-duration-[1500ms] animate-once relative flex min-w-[50%] justify-center">
        <Image
          src={SiteConfig.heroImage.split(process.env.WEBSITE_URL ?? "")[1]}
          priority
          height={350}
          width={350}
          blurDataURL={SiteConfig.heroImageBlurURL}
          placeholder="blur"
          draggable={false}
          title={`${SiteConfig.fullName}`}
          alt={`${SiteConfig.fullName}-hero`}
          className="aspect-square rounded-[50px] object-cover"
        />
      </div>
    </SectionWrapper>
  );
}
