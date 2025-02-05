import projects from "../../_data/projects.json";
import { Metadata } from "next";
import { generateMetadataForProjectDetailsPage } from "@/app/_util/metadata/ProjectsPage/ProjectDetailsPage/MetadataProjectDetailsPage";
import { SetSchemaProjectDetailsPage } from "@/app/_util/metadata/ProjectsPage/ProjectDetailsPage/SetSchemaProjectDetailsPage";
import LayoutWrapper from "@/app/_components/wrappers/LayoutWrapper";
import ProjectBanner from "./_components/ProjectBanner";
import TableOfContent from "./_components/TableOfContent";
import CoreFeatures from "./_components/CoreFeatures";
import TechnologyStack from "./_components/TechnologyStack";
import ProjectOverview from "./_components/ProjectOverview/ProjectOverview";
import { notFound } from "next/navigation";
import { MetadataNotFoundPage } from "@/app/_util/metadata/NotFoundPage/MetaDataNotFoundPage";

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
  const project = projects.find((project) => project.id === id);

  if (project) {
    return generateMetadataForProjectDetailsPage({ id });
  } else {
    return MetadataNotFoundPage;
  }
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return notFound();
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
          <ul className="md:max-w-[280px] 2xl:max-w-xs w-full">
            {/*  TABLE OF CONTENTS*/}
            <TableOfContent projectId={project.id} />
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
