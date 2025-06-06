import BaseSchema from "../utils/baseSchema";
import { Achievements } from "@/.velite";
import GenerateAchievementSchema from "../utils/generate-achievement-schema";

export default function SetSchemaAchievementPage({
  achievement,
}: {
  achievement: Achievements;
}) {
  const achievementsSchema = GenerateAchievementSchema(achievement);
  const graph = BaseSchema({
    pathParam: achievement.permalink,
    currentPageSchemas: [achievementsSchema],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
