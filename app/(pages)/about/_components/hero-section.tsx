import { buttonVariants } from "@/components/ui/button";
import { ScrollLink } from "@/components/ui/scroll-link";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { SectionWrapper } from "@/components/ui/wrappers";
import SiteConfig from "@/content/site-config";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <SectionWrapper innerClassName="flex justify-between items-center flex-col lg:flex-row gap-8">
      <div className="animate-fade-up animate-ease animate-delay-200 animate-duration-[1500ms] animate-once relative flex items-center justify-center">
        <Image
          src={SiteConfig.gallery.aboutHeroImage.src}
          blurDataURL={SiteConfig.gallery.aboutHeroImage.blurURL}
          placeholder="blur"
          height={350}
          priority
          fetchPriority="high"
          width={350}
          sizes="(min-width: 1024px) 350px, 70vw"
          title={SiteConfig.gallery.aboutHeroImage.name}
          draggable={false}
          alt={SiteConfig.gallery.aboutHeroImage.name}
          className="aspect-square rounded-[50px] object-cover"
        />
      </div>
      <div className="animate-fade-up animate-ease animate-delay-800 animate-duration-[1500ms] animate-once flex-1 space-y-2.5">
        <TypographyH1 className="font-light">ABOUT ME</TypographyH1>
        <TypographyP className="text-foreground/65 mt-2">
          I&apos;m a{" "}
          <span className="text-foreground/80 font-semibold">
            {SiteConfig.title}
          </span>{" "}
          based in{" "}
          <span className="text-foreground/80 font-semibold">
            {SiteConfig.location}
          </span>
          . I specialize in scalable web, mobile, and desktop ecosystems,
          architecting end-to-end SaaS products, migrating legacy
          infrastructures, and shipping production-grade AI/ML pipelines.
          Outside of work, I&apos;m into music, gaming, and anime.
        </TypographyP>
        <div className="space-y-2 space-x-2">
          <ScrollLink
            to="experience"
            as="button"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-36 bg-transparent text-xs",
            })}
          >
            Work Experience
          </ScrollLink>
          <ScrollLink
            to="expertise"
            as="button"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-36 bg-transparent text-xs",
            })}
          >
            Technical Expertise
          </ScrollLink>
          <Link
            href={SiteConfig.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              className: "w-36 text-xs",
              variant: "default",
              size: "lg",
            })}
            title="Full Resume"
            aria-label="View Full Resume"
          >
            Full Resume
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
