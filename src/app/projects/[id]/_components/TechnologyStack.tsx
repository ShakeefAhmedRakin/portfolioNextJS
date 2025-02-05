import projects from "../../../_data/projects.json";

export default function TechnologyStack({ projectId }: { projectId: string }) {
  const project = projects.find((project) => project.id === projectId);

  return (
    <>
      {project?.techStack && project?.techStack?.length > 0 && (
        <section id="Technology Stack">
          {/* SECTION TITLE */}
          <h3 className="font-heading font-bold text-lg md:text-2xl xl:text-3xl bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-lg mb-4 shadow-md shadow-primary">
            Technology Stack
          </h3>
          {/* TECH STACK LIST */}
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2 mt-3">
            {project?.techStack.map((stack, index) => (
              <div
                className={`${
                  index === project?.techStack.length - 1 &&
                  index % 2 === 0 &&
                  "2xl:col-span-2"
                }`}
                key={stack.title}
              >
                <h4
                  className="font-heading text-sm 2xl:text-base text-text font-bold px-2 2xl:px-3"
                  id={stack.title}
                >
                  {stack.title}
                  <hr className="mb-2 mt-1" />
                </h4>

                <ul className="px-2 2xl:px-3 flex gap-1 md:gap-1.5 items-center flex-wrap">
                  {stack.techList.map((detail, detailIndex) => (
                    <li
                      key={`${detailIndex}-${detail.substring(0, 3)}`}
                      className={`font-body text-[9.5px] lg:text-xs font-medium border border-text text-text px-2 py-1 rounded-full`}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
