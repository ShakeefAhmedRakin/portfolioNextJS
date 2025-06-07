import SiteMetadata from "@/content/site-metadata";
import setMetadata from "@/metadata/utils/setMetadata";
import HeroSection from "./_components/hero-section";
import WorkExperienceSection from "./_components/work-experience-section";
import SkillsSection from "./_components/skills-section";
import SetSchemaAboutPage from "@/metadata/schemas/schemaAboutPage";

export function generateMetadata() {
  return setMetadata(SiteMetadata.ABOUT);
}

export default function AboutPage() {
  return (
    <>
      <SetSchemaAboutPage />
      <HeroSection />
      <WorkExperienceSection />
      <SkillsSection />
    </>
  );
}
