import React, { ReactNode, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assumes a `cn` utility for class merging

const innerContainerVariants = cva(
  "container mx-auto px-4 md:px-10 lg:px-20 xl:px-40",
  {
    variants: {
      padding: {
        section: "py-12 lg:py-20 xl:py-24",
        header: "py-0",
        footer: "py-6 lg:py-10 xl:py-12",
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
