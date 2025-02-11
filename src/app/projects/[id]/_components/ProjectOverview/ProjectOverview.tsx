import projects from "../../../../_data/projects.json";
import CaseText from "./_components/CaseText";
import CaseTextImage from "./_components/CaseTextImage";
import CaseList from "./_components/CaseList";
import CaseImage from "./_components/CaseImage";

export default function ProjectOverview({ projectId }: { projectId: string }) {
  const project = projects.find((project) => project.id === projectId);

  return (
    <>
      {project?.overviewSections && project?.overviewSections?.length > 0 && (
        <section id="Project Overview">
          {/* SECTION TITLE */}
          <h3 className="font-heading font-bold text-lg md:text-2xl xl:text-3xl bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-lg mb-4 shadow-md shadow-primary">
            Project Overview
          </h3>
          {/* PROJECT OVERVIEW */}
          <div className="space-y-4 xl:space-y-8">
            {project?.overviewSections &&
              project?.overviewSections.length > 0 && (
                <>
                  {project.overviewSections.map((section, index) => {
                    switch (section.type) {
                      case "text":
                        return (
                          <CaseText
                            key={index}
                            hasTitle={section?.hasTitle}
                            title={section?.title || ""}
                            content={section?.content as string}
                          />
                        );

                      case "text-image":
                        return (
                          <CaseTextImage
                            key={index}
                            hasTitle={section?.hasTitle}
                            title={section?.title || ""}
                            imageOnLeft={
                              "imageOnLeft" in section
                                ? section?.imageOnLeft
                                : false
                            }
                            content={
                              typeof section.content === "object" &&
                              !Array.isArray(section.content)
                                ? section.content
                                : {}
                            }
                          />
                        );

                      case "list":
                        return (
                          <CaseList
                            key={index}
                            hasTitle={section?.hasTitle}
                            title={section?.title || ""}
                            content={section?.content as string[]}
                          />
                        );

                      case "image":
                        return (
                          <CaseImage
                            key={index}
                            hasTitle={section?.hasTitle}
                            title={section?.title || ""}
                            content={
                              typeof section.content === "object" &&
                              !Array.isArray(section.content)
                                ? section.content
                                : {}
                            }
                          />
                        );
                      default:
                        return null;
                    }
                  })}
                </>
              )}
          </div>
        </section>
      )}
    </>
  );
}
