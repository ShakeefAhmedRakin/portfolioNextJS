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
  Omit<VariantProps<typeof headingVariants>, "level">;

export function TypographyH1({ className, weight, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(headingVariants({ level: "h1", weight }), className)}
      {...props}
    />
  );
}

export function TypographyH2({ className, weight, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(headingVariants({ level: "h2", weight }), className)}
      {...props}
    />
  );
}

export function TypographyH3({ className, weight, ...props }: HeadingProps) {
  return (
    <h3
      className={cn(headingVariants({ level: "h3", weight }), className)}
      {...props}
    />
  );
}
export function TypographyH4({ className, weight, ...props }: HeadingProps) {
  return (
    <h4
      className={cn(headingVariants({ level: "h4", weight }), className)}
      {...props}
    />
  );
}

export function TypographyH5({ className, weight, ...props }: HeadingProps) {
  return (
    <h5
      className={cn(headingVariants({ level: "h5", weight }), className)}
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

export function TypographyLink({
  className,
  ...props
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={cn(
        "text-primary/90 hover:text-primary/100 underline underline-offset-4 duration-300",
        className,
      )}
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

export function TypographyTable({
  className,
  level = "default",
  ...props
}: { level?: "default" | "small" } & HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="scrollbar-hide mb-4 w-full overflow-x-auto">
      <table
        className={cn(
          "w-full border-collapse",
          paragraphVariants({ level }),
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function TypographyTableHead({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn("border-primary/30 border-b", className)}
      {...props}
    />
  );
}

export function TypographyTableBody({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("[&>tr]:border-primary/20", className)} {...props} />;
}

export function TypographyTableRow({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn("border-primary/20 border-b", className)}
      {...props}
    />
  );
}

export function TypographyTableHeaderCell({
  className,
  ...props
}: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "text-foreground px-3 py-2 text-left font-semibold",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyTableCell({
  className,
  ...props
}: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn("text-foreground/80 px-3 py-2", className)}
      {...props}
    />
  );
}
