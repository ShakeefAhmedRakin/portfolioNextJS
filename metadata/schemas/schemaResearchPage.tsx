import BaseSchema from "../shared/base-schema";
import { Research } from "@/.velite";
import GenerateResearchSchema from "../generators/generate-research-schema";

export default function SetSchemaResearchPage({
  research,
}: {
  research: Research;
}) {
  const researchSchemas = GenerateResearchSchema(research);

  const graph = BaseSchema({
    pathParam: research.permalink,
    currentPageSchemas: [researchSchemas],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
