import { Research } from "@/.velite";
import type { ScholarlyArticle } from "schema-dts";
import { extractImagesFromMDX } from "@/lib/utils";
import generateImageObjectSchema from "./generate-image-object-schema";
import { siteNavigationMap } from "@/content/site-navigation";

export default function GenerateResearchSchema(
  research: Research,
): ScholarlyArticle {
  const imagesInResearch = extractImagesFromMDX(research.content);

  return {
    "@type": "ScholarlyArticle",
    "@id": `${process.env.WEBSITE_URL}${research.permalink}`,
    url: `${process.env.WEBSITE_URL}${research.permalink}`,
    headline: research.title,
    name: research.title,
    isPartOf: {
      "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.RESEARCH.key}`,
    },
    keywords: research.keywords,
    abstract: research.abstract,
    dateCreated: research.date,
    ...(research.isPublished &&
      research.publisher && {
        publisher: {
          "@type": "Organization",
          name: research.publisher.name,
          department: research.publisher.department,
          url: research.publisher.link ?? undefined,
          sameAs: research.publisher.link ?? undefined,
        },
      }),
    author: research.authors.map((author) => {
      return {
        "@type": "Person",
        "@id": author.name,
        name: author.name,
        sameAs: author.link ?? undefined,
        url: author.link ?? undefined,
      };
    }),
    potentialAction: [
      ...research.authors
        .filter((author) => !!author.link)
        .map((author) => ({
          "@type": "FollowAction" as const,
          name: `Follow ${author.name}`,
          target: author.link!,
        })),
      ...(research.paperLinks?.link
        ? [
            {
              "@type": "FollowAction" as const,
              name: `Follow Paper Link`,
              target: research.paperLinks.link,
            },
          ]
        : []),
      ...(research.paperLinks?.linkToPDF
        ? [
            {
              "@type": "FollowAction" as const,
              name: `Follow Link To PDF`,
              target: research.paperLinks.linkToPDF,
            },
          ]
        : []),
      ...(research.isPublished && research.publisher && research.publisher.link
        ? [
            {
              "@type": "FollowAction" as const,
              name: `Follow Link To ${research.publisher.name}`,
              target: research.publisher.link,
            },
          ]
        : []),
    ],
    image: [
      ...imagesInResearch.map((image) =>
        generateImageObjectSchema({
          title: image.title,
          src: image.src,
          pageUrl: research.permalink,
        }),
      ),
    ],
  };
}
