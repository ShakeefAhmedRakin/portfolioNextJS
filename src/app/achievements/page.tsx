import awards from "../_data/awards.json";
import { Metadata } from "next";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import ArticleSection from "./_components/ArticleSection";
import { MetadataAchievementsPage } from "../_util/metadata/AchievementsPage/MetadataAchievementsPage";
import { SetSchemaAchievementsPage } from "../_util/metadata/AchievementsPage/SetSchemaAchievmentsPage";

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
        <div>
          {awards.map((award, index) => (
            <ArticleSection key={index} award={award} />
          ))}
        </div>
      </LayoutWrapper>
    </>
  );
}
