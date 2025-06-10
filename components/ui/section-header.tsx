import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "./typography";

interface SectionHeaderProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export function SectionHeader({
  title,
  description,
  linkText,
  linkHref,
}: SectionHeaderProps) {
  return (
    <>
      <div className="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once flex justify-between gap-4">
        <TypographyH2 className="max-w-3xl">{title}</TypographyH2>
        <Link
          href={linkHref}
          target={linkHref.startsWith("http") ? "_blank" : "_self"}
          rel={linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className={buttonVariants({
            variant: "outline",
            className: "bg-transparent text-xs",
          })}
          title={linkText}
          aria-label={linkText}
        >
          {linkText} <ChevronRight />
        </Link>
      </div>

      <TypographyP className="text-foreground/65 intersect:animate-delay-200 intersect-once intersect:animate-fade-up animate-ease animate-duration-[1500ms] max-w-3xl">
        {description}
      </TypographyP>
    </>
  );
}
