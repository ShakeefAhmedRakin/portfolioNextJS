import React, { ReactNode, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const innerContainerVariants = cva(
  "container mx-auto px-4 md:px-10 lg:px-20 xl:px-40",
  {
    variants: {
      padding: {
        article: "px-4 py-10 md:px-10 lg:px-32 xl:px-64",
        section: "py-12 lg:py-20 xl:py-24",
        header: "py-0",
        footer: "py-8 lg:py-12 xl:py-12",
      },
    },
    defaultVariants: {
      padding: "section",
    },
  },
);

interface WrapperProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof innerContainerVariants> {
  children: ReactNode;
  wrapperClassName?: string;
  innerClassName?: string;
  innerProps?: HTMLAttributes<HTMLDivElement>;
}

// Section
export function SectionWrapper({
  children,
  wrapperClassName,
  innerClassName,
  innerProps,
  padding = "section",

  ...wrapperProps
}: WrapperProps) {
  return (
    <section className={cn(wrapperClassName)} {...wrapperProps}>
      <div
        className={cn(innerContainerVariants({ padding }), innerClassName)}
        {...innerProps}
      >
        {children}
      </div>
    </section>
  );
}

// Header
export function HeaderWrapper({
  children,
  wrapperClassName,
  innerClassName,
  innerProps,
  padding = "header",

  ...wrapperProps
}: WrapperProps) {
  return (
    <header className={cn(wrapperClassName)} {...wrapperProps}>
      <div
        className={cn(innerContainerVariants({ padding }), innerClassName)}
        {...innerProps}
      >
        {children}
      </div>
    </header>
  );
}

// Footer
export function FooterWrapper({
  children,
  wrapperClassName,
  innerClassName,
  innerProps,
  padding = "footer",

  ...wrapperProps
}: WrapperProps) {
  return (
    <footer className={cn(wrapperClassName)} {...wrapperProps}>
      <div
        className={cn(innerContainerVariants({ padding }), innerClassName)}
        {...innerProps}
      >
        {children}
      </div>
    </footer>
  );
}

// Article
export function ArticleWrapper({
  children,
  wrapperClassName,
  innerClassName,
  innerProps,
  padding = "article",

  ...wrapperProps
}: WrapperProps) {
  return (
    <article className={cn(wrapperClassName)} {...wrapperProps}>
      <div
        className={cn(innerContainerVariants({ padding }), innerClassName)}
        {...innerProps}
      >
        {children}
      </div>
    </article>
  );
}
