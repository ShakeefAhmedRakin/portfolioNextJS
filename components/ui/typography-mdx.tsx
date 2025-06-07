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
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <TypographyP
      className="text-foreground/80 mb-4"
      {...props}
      level={isSmall ? "small" : "default"}
    />
  ),
  a: (props: LinkProps) => <TypographyLink {...props} />,
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

  image: (props: ImageProps) => (
    <div className="mb-6 overflow-hidden rounded">
      <Image {...props} draggable={false} />
    </div>
  ),
});
