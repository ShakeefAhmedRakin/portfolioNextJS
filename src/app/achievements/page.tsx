import achievements from "../_data/achievements.json";
import { Metadata } from "next";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import ArticleSection from "./_components/ArticleSection";
import { MetadataAchievementsPage } from "../_util/metadata/AchievementsPage/MetadataAchievementsPage";
import { SetSchemaAchievementsPage } from "../_util/metadata/AchievementsPage/SetSchemaAchievementsPage";

export function generateMetadata(): Metadata {
  return MetadataAchievementsPage;
}

export default function Achievements() {
  return (
    <>
      <SetSchemaAchievementsPage />
      <LayoutWrapper>
        <TitleLarge
          firstTitle="My"
          secondTitle="Achievements"
          isPrimary={true}
        />
        <hr className="mb-4" />
        <div className="">
          {achievements
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((achievement, index) => (
              <ArticleSection key={index} achievement={achievement} />
            ))}
        </div>
      </LayoutWrapper>
    </>
  );
}
