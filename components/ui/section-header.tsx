import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "./typography";
import { cn } from "@/lib/utils";
import { ANIMATE_FADE_UP } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  shortLinkText?: string;
}

export function SectionHeader({
  title,
  description,
  linkText,
  linkHref,
  shortLinkText,
}: SectionHeaderProps) {
  return (
    <>
      <div className={cn(ANIMATE_FADE_UP, "flex justify-between gap-4")}>
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
          {shortLinkText ? (
            <span>
              {shortLinkText}{" "}
              <span className="sr-only md:not-sr-only">
                {linkText.replace(shortLinkText, "").trim()}
              </span>
            </span>
          ) : (
            linkText
          )}{" "}
          <ChevronRight />
        </Link>
      </div>

      <TypographyP className={cn(ANIMATE_FADE_UP, "text-foreground/65 max-w-3xl")}>
        {description}
      </TypographyP>
    </>
  );
}
