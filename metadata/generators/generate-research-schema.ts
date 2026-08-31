import { Research } from "@/.velite";
import type { FollowAction, ScholarlyArticle } from "schema-dts";
import { extractImagesFromMDX, getWebsiteUrl } from "@/lib/utils";
import generateImageObjectSchema from "./generate-image-object-schema";
import { siteNavigationMap } from "@/content/site-navigation";
import { mainHeroImageId } from "../shared/main-hero-image";

function buildFollowAction(
  name: string,
  target: string | null | undefined,
): FollowAction | null {
  return target ? { "@type": "FollowAction", name, target } : null;
}

export default function GenerateResearchSchema(
  research: Research,
): ScholarlyArticle {
  const imagesInResearch = extractImagesFromMDX(research.content);

  return {
    "@type": "ScholarlyArticle",
    "@id": `${getWebsiteUrl()}${research.permalink}`,
    url: `${getWebsiteUrl()}${research.permalink}`,
    headline: research.title,
    name: research.title,
    isPartOf: {
      "@id": `${getWebsiteUrl()}/#${siteNavigationMap.RESEARCH.key}`,
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
        url:
          author.link ?? `${getWebsiteUrl()}${research.permalink}`,
      };
    }),
    potentialAction: [
      ...research.authors.map((author) =>
        buildFollowAction(`Follow ${author.name}`, author.link),
      ),
      buildFollowAction("Follow Paper Link", research.paperLinks?.link),
      buildFollowAction("Follow Link To PDF", research.paperLinks?.linkToPDF),
      buildFollowAction(
        `Follow Link To ${research.publisher?.name}`,
        research.isPublished ? research.publisher?.link : null,
      ),
    ].filter((action): action is FollowAction => action !== null),
    image:
      imagesInResearch.length > 0
        ? imagesInResearch.map((image) =>
            generateImageObjectSchema({
              title: image.title,
              src: image.src,
              pageUrl: research.permalink,
            }),
          )
        : [{ "@id": mainHeroImageId }],
  };
}
