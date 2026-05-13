import { GetInTouchDialog } from "@/components/navigation/get-in-touch-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import SocialLinks from "@/components/ui/social-links";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

import { SectionWrapper } from "@/components/ui/wrappers";
import SiteConfig from "@/content/site-config";
import { siteNavigationMap } from "@/content/site-navigation";
import Image from "next/image";

import Link from "next/link";

export default function HeroSection() {
  return (
    <SectionWrapper
      innerClassName="flex justify-between items-center flex-col-reverse lg:flex-row gap-8"
      wrapperClassName=""
    >
      <div className="animate-fade-up animate-ease animate-delay-200 animate-duration-[1500ms] animate-once flex-1 space-y-2.5">
        {/* Single H1 for SEO (contains both title + name keywords),
            visually rendered as title-above-name to match the original look. */}
        <TypographyH1>
          <span className="text-foreground/65 mb-2 block text-2xl font-light -tracking-[0.6px]">
            {SiteConfig.title} <span className="sr-only"> | </span>
          </span>
          {SiteConfig.fullName}
        </TypographyH1>

        <SocialLinks className="flex gap-3" />
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
            title="About Me"
            href={siteNavigationMap.ABOUT.href}
          >
            About Me
          </Link>
          <GetInTouchDialog>
            <Button
              variant={"outline"}
              size={"lg"}
              title="Get In Touch"
              className="flex-1 bg-transparent text-xs"
            >
              Get In Touch
            </Button>
          </GetInTouchDialog>
        </div>
      </div>
      <div className="animate-fade-up animate-ease animate-delay-800 animate-duration-[1500ms] animate-once relative flex min-w-[50%] justify-center">
        <Image
          src={SiteConfig.gallery.mainHeroImage.src}
          priority
          fetchPriority="high"
          height={350}
          width={350}
          sizes="(min-width: 1024px) 350px, 70vw"
          blurDataURL={SiteConfig.gallery.mainHeroImage.blurURL}
          placeholder="blur"
          draggable={false}
          title={SiteConfig.gallery.mainHeroImage.name}
          alt={SiteConfig.gallery.mainHeroImage.name}
          className="aspect-square rounded-[50px] object-cover"
        />
      </div>
    </SectionWrapper>
  );
}
