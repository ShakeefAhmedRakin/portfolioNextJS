import Image, { ImageProps } from "next/image";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyP,
  TypographyLink,
  TypographyBlockquote,
  TypographyUnOrderedList,
  TypographyOrderedList,
  paragraphVariants,
} from "./typography";
import { LinkProps } from "next/link";
import React from "react";
import { badgeVariants } from "./badge";
import { cn } from "@/lib/utils";
import { containerVariants } from "./container-variants";

export const MDXImage = (props: ImageProps) => (
  <figure
    className={cn(
      "relative mb-6 aspect-video max-h-[450px] w-full overflow-hidden rounded",
      containerVariants({ variant: "clear" }),
    )}
  >
    <Image
      {...props}
      alt={props.alt ?? ""}
      draggable={false}
      title={props.alt}
      fill
      className="object-contain"
    />
    <figcaption
      className={badgeVariants({
        className:
          "bg-secondary/80 absolute bottom-2 left-1/2 -translate-x-1/2 transform text-center text-xs",
      })}
    >
      {props.alt}
    </figcaption>
  </figure>
);

export const createMDXComponents = (isSmall = false) => ({
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <TypographyH1 className="mb-4" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <TypographyH2 className="mb-4" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <TypographyH3 className="mb-4" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <TypographyH4 className="mb-4" {...props} />
  ),
  h5: (props: React.ComponentPropsWithoutRef<"h5">) => (
    <TypographyH5 className="mb-4" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => {
    const children = props.children;

    const isImageBlock =
      React.Children.count(children) === 1 &&
      React.isValidElement(children) &&
      children.type === MDXImage;

    // TO PREVENT <img/> FROM RENDERING INSIDE OF <p> tag in final html.
    if (isImageBlock) {
      return children;
    }

    return (
      <TypographyP
        className="text-foreground/80 mb-4"
        {...props}
        level={isSmall ? "small" : "default"}
      />
    );
  },

  a: (props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <TypographyLink {...props} target="_blank" rel="noopener noreferrer" />
  ),

  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <TypographyBlockquote
      className="text-foreground/80 mb-4"
      {...props}
      level={isSmall ? "small" : "default"}
    />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <TypographyUnOrderedList
      {...props}
      level={isSmall ? "small" : "default"}
      className="text-foreground/80"
    />
  ),

  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <TypographyOrderedList
      {...props}
      level={isSmall ? "small" : "default"}
      className="text-foreground/80"
    />
  ),

  hr: () => <hr className="border-primary/30 mb-4" />,

  img: MDXImage,

  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className={paragraphVariants({
        level: isSmall ? "small" : "default",
        className:
          "bg-secondary scrollbar-hide w-fit max-w-full overflow-x-auto rounded-[5px] px-2",
      })}
      {...props}
    />
  ),

  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className={paragraphVariants({
        level: isSmall ? "small" : "default",
        className:
          "bg-secondary scrollbar-hide mb-2 w-fit max-w-full overflow-x-auto rounded-[5px] px-2",
      })}
    >
      <code {...props} />
    </pre>
  ),
});
