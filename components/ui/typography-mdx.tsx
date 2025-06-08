/* eslint-disable jsx-a11y/alt-text */
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
} from "./typography";
import { LinkProps } from "next/link";
import React from "react";

const MDXImage = (props: ImageProps) => (
  <div className="bg-primary/5 relative mb-6 aspect-video max-h-[450px] w-full overflow-hidden rounded">
    <Image
      {...props}
      title={props.alt}
      draggable={false}
      fill
      className="object-contain"
    />
  </div>
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
});
