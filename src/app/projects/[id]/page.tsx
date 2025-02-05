import projects from "../../_data/projects.json";
import ProjectNotFound from "@/app/projects/_components/projectnotfound";
import { Metadata } from "next";
import { generateMetadataForProjectDetailsPage } from "@/app/_util/metadata/ProjectsPage/ProjectDetailsPage/MetadataProjectDetailsPage";
import { SetSchemaProjectDetailsPage } from "@/app/_util/metadata/ProjectsPage/ProjectDetailsPage/SetSchemaProjectDetailsPage";
import LayoutWrapper from "@/app/_components/wrappers/LayoutWrapper";
import ProjectBanner from "./_components/ProjectBanner";
import TableOfContent from "./_components/TableOfContent";
import CoreFeatures from "./_components/CoreFeatures";
import { GrProjects } from "react-icons/gr";
import TechnologyStack from "./_components/TechnologyStack";
import ProjectOverview from "./_components/ProjectOverview/ProjectOverview";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return generateMetadataForProjectDetailsPage({ id });
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <LayoutWrapper>
        <ProjectNotFound></ProjectNotFound>
      </LayoutWrapper>
    );
  }

  return (
    <>
      <SetSchemaProjectDetailsPage id={project.id} />
      {/* PROJECT BANNER */}
      <LayoutWrapper className="bg-backgroundAlt mt-28 md:mt-32">
        <ProjectBanner projectId={project.id} />
      </LayoutWrapper>
      <LayoutWrapper className="-mt-10">
        <div className="flex flex-col md:flex-row-reverse gap-4">
          <ul className="md:max-w-[280px] 2xl:max-w-xs w-full flex flex-col gap-y-4">
            {/*  TABLE OF CONTENTS*/}
            <TableOfContent projectId={project.id} />
            {/* FILLER SPACE IN DESKTOP SCREEN */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg flex-1 shadow-md shadow-primary relative flex items-center justify-center overflow-hidden">
              <GrProjects className="absolute text-white opacity-10 text-[500px] pointer-events-none" />
            </div>
          </ul>
          <div className="w-full flex-1 space-y-4">
            <CoreFeatures projectId={project.id} />
            <TechnologyStack projectId={project.id} />
          </div>
        </div>
        <section className="mt-5">
          <ProjectOverview projectId={project.id} />
        </section>
      </LayoutWrapper>
    </>
  );
}
