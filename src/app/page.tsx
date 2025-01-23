import Hero from "./_components/home-components/hero-section/hero";
import FeaturedProjects from "./_components/home-components/projects-section/featured-projects";
import SetSchemaHomePage from "./_util/metadata/HomePage/SetSchemaHomePage";
import FeaturedAchievements from "./_components/home-components/achievements-section/featured-achievements";
import FeaturedResearch from "./_components/home-components/research-section/featured-research";
import { Metadata } from "next";
import { MetadataHomePage } from "./_util/metadata/HomePage/MetadataHomePage";
import Expertise from "./_components/home-components/expertise-section/expertise";
import LatestBlogs from "./_components/home-components/blogs-section/latest-blogs";

export function generateMetadata(): Metadata {
  return MetadataHomePage;
}
export default function Home() {
  return (
    <>
      <SetSchemaHomePage />
      <Hero />
      <Expertise />
      <FeaturedAchievements />
      <FeaturedProjects />
      <LatestBlogs />
      <FeaturedResearch />
    </>
  );
}
