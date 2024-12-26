import Hero from "./_components/home/hero";
import Highlights from "./_components/home/highlights";
import FeaturedProjects from "./_components/home/featuredprojects";
import SetSchemaHomePage from "./_util/metadata/HomePage/SetSchemaHomePage";

export default function Home() {
  return (
    <>
      <SetSchemaHomePage />
      <Hero />
      <Highlights />
      <FeaturedProjects />
    </>
  );
}
