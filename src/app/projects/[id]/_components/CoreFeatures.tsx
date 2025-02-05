import projects from "../../../_data/projects.json";

export default function CoreFeatures({ projectId }: { projectId: string }) {
  const project = projects.find((project) => project.id === projectId);

  return (
    <>
      {project?.coreFeatures &&
        project?.coreFeatures?.featureList &&
        project?.coreFeatures?.featureList.length > 0 && (
          <section id="Core Features">
            {/* SECTION TITLE */}
            <h3 className="font-heading font-bold text-lg md:text-2xl xl:text-3xl bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-lg mb-4 shadow-md shadow-primary">
              Core Features
            </h3>
            {/* PROJECT FEATURE LIST */}
            <ul className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
              {project?.coreFeatures?.featureList.map((feature, index) => (
                <li key={index}>
                  <h4
                    className="font-heading mb-1.5 font-bold text-sm text-text lg:text-base"
                    id={feature.title}
                  >
                    {feature.title}
                  </h4>

                  <ul>
                    {feature.points.length > 0 && (
                      <>
                        {feature.points.map((point, index) => (
                          <li
                            key={`${index}-${point.substring(0, 10)}`}
                            className="font-body font-light text-text text-[11px] md:text-xs 2xl:text-sm mb-1 list-inside list-disc"
                          >
                            {point}
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}
    </>
  );
}
