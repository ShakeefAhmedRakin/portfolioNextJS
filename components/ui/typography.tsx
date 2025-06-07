import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

export const headingVariants = cva("tracking-tight", {
  variants: {
    level: {
      h1: "text-4xl xl:text-5xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-lg",
      h5: "text-sm xl:text-base",
    },
    weight: {
      normal: "font-normal",
      light: "font-light",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    level: "h3",
    weight: "semibold",
  },
});

export const paragraphVariants = cva("leading-6 md:leading-7", {
  variants: {
    level: {
      small: "text-xs md:text-xs",
      default: "text-xs md:text-base",
    },
  },
  defaultVariants: {
    level: "default",
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

export function TypographyH1({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(headingVariants({ level: "h1" }), className)}
      {...props}
    />
  );
}

export function TypographyH2({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(headingVariants({ level: "h2" }), className)}
      {...props}
    />
  );
}

export function TypographyH3({ className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn(headingVariants({ level: "h3" }), className)}
      {...props}
    />
  );
}
export function TypographyH4({ className, ...props }: HeadingProps) {
  return (
    <h4
      className={cn(headingVariants({ level: "h4" }), className)}
      {...props}
    />
  );
}

export function TypographyH5({ className, ...props }: HeadingProps) {
  return (
    <h5
      className={cn(headingVariants({ level: "h5" }), className)}
      {...props}
    />
  );
}

export function TypographyP({
  className,
  level = "default",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { level?: "small" | "default" }) {
  return (
    <p className={cn(paragraphVariants({ level }), className)} {...props} />
  );
}

export function TypographyLink({ ...props }: LinkProps) {
  return (
    <Link
      className={cn(
        "text-primary/90 hover:text-primary/100 font-medium underline underline-offset-4 duration-300",
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

export function TypographyBlockquote({
  className,
  level = "default",
  ...props
}: { level?: "small" | "default" } & HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "border-l-primary bg-primary/5 w-fit border-l py-[0.1px] pr-3 pl-4 italic",
        paragraphVariants({ level: level }),
        className,
      )}
      {...props}
    />
  );
}

export function TypographyOrderedList({
  className,
  level = "default",
  ...props
}: { level?: "default" | "small" } & HTMLAttributes<HTMLUListElement>) {
  return (
    <ol
      className={cn(
        "ml-4 list-decimal lg:ml-5 [&>li]:my-2",
        paragraphVariants({ level }),
        className,
      )}
      {...props}
    />
  );
}
export function TypographyUnOrderedList({
  className,
  level = "default",
  ...props
}: { level?: "default" | "small" } & HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn(
        "ml-4 list-disc lg:ml-5 [&>li]:my-2",
        paragraphVariants({ level }),
        className,
      )}
      {...props}
    />
  );
}
