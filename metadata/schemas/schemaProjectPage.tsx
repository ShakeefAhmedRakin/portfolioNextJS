import BaseSchema from "../shared/base-schema";
import { Projects } from "@/.velite";
import GenerateProjectSchema from "../generators/generate-project-schema";

export default function SetSchemaProjectPage({
  project,
}: {
  project: Projects;
}) {
  const projectSchema = GenerateProjectSchema(project);

  const graph = BaseSchema({
    pathParam: project.permalink,
    currentPageSchemas: [projectSchema],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
