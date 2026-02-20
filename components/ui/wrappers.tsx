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

function BaseWrapper({
  as: Element,
  children,
  wrapperClassName,
  innerClassName,
  innerProps,
  padding,
  ...wrapperProps
}: WrapperProps & { as: "section" | "header" | "footer" | "article" }) {
  return (
    <Element className={cn(wrapperClassName)} {...wrapperProps}>
      <div
        className={cn(innerContainerVariants({ padding }), innerClassName)}
        {...innerProps}
      >
        {children}
      </div>
    </Element>
  );
}

export function SectionWrapper({ padding = "section", ...props }: WrapperProps) {
  return <BaseWrapper as="section" padding={padding} {...props} />;
}

export function HeaderWrapper({ padding = "header", ...props }: WrapperProps) {
  return <BaseWrapper as="header" padding={padding} {...props} />;
}

export function FooterWrapper({ padding = "footer", ...props }: WrapperProps) {
  return <BaseWrapper as="footer" padding={padding} {...props} />;
}

export function ArticleWrapper({ padding = "article", ...props }: WrapperProps) {
  return <BaseWrapper as="article" padding={padding} {...props} />;
}
