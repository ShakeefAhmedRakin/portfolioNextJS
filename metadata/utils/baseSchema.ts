import { personJsonLd } from "@/metadata/shared/person";
import { mainHeroImageJsonLd } from "@/metadata/shared/main-hero-image";
import { organizationJsonLd } from "@/metadata/shared/organization";
import { websiteJsonLd } from "@/metadata/shared/website";
import { Graph } from "schema-dts";
import { getBreadcrumbSchema } from "../shared/breadcrumbs";

export default function BaseSchema({
  pathParam = "/",
  currentPageSchemas = [],
}: {
  pathParam?: string;
  currentPageSchemas: Graph["@graph"];
}) {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      getBreadcrumbSchema(pathParam),
      ...currentPageSchemas,
      websiteJsonLd,
      mainHeroImageJsonLd,
      personJsonLd,
      organizationJsonLd,
    ],
  };

  return graph;
}
