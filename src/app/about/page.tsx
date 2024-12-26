import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import AboutMeSection from "./_components/AboutMeSection";
import SkillsSection from "./_components/SkillsSection";
import { SetSchemaAboutPage } from "../_util/metadata/AboutPage/SetSchemaAboutPage";

export default function AboutPage() {
  return (
    <>
      <SetSchemaAboutPage />
      <LayoutWrapper className="bg-backgroundDark">
        <TitleLarge firstTitle="About" secondTitle="Me" isPrimary={true} />
        <AboutMeSection />
      </LayoutWrapper>
      <LayoutWrapper className="bg-background">
        <TitleLarge
          firstTitle="Technical"
          secondTitle="Expertise"
          isPrimary={false}
        />
        <SkillsSection />
      </LayoutWrapper>
    </>
  );
}
