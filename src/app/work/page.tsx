import workData from "../_data/work.json";

interface WorkDataItem {
  isActive: boolean;
  position: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string[];
}

export default function Work() {
  function parseDate(dateStr: string | null | undefined) {
    return dateStr ? new Date(dateStr) : new Date();
  }

  const activePositions = workData
    .filter((item) => item.isActive)
    .sort(
      (a, b) =>
        parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
    );

  // Separate and sort past positions (where isActive is false)
  const pastPositions = workData
    .filter((item) => !item.isActive)
    .sort(
      (a, b) =>
        parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
    );

  return (
    <section className="bg-backgroundDark min-h-screen">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
        <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl">
          Work <span className="text-primary">Experience</span>
        </h1>

        {/* Current Positions Section */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full">
            <h2 className="font-heading text-text font-semibold mt-4 text-md md:text-lg">
              Current Positions
            </h2>
            <hr className="my-1 md:my-4" />
            <div className="border-l space-y-5">
              {activePositions.map((item, index) => (
                <div className="relative" key={index}>
                  <div className="absolute h-5 w-5 bg-primary rounded-full -left-2.5 border-4 border-backgroundDark"></div>
                  <div className="ml-4">
                    <p className="font-body font-medium italic text-primary text-[10px] md:text-xs">
                      {new Date(item.startDate).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {item.endDate
                        ? new Date(item.endDate).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })
                        : "Present"}
                    </p>
                    <h3 className="text-xs lg:text-sm font-semibold font-heading text-text mt-1 whitespace-nowrap">
                      {item.position}
                    </h3>
                    <p className="font-body font-light text-text italic text-xs lg:text-sm">
                      {item.company}
                    </p>
                    <ul className="mt-2 font-body font-light text-text text-xs lg:text-sm list-disc list-inside">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Positions Section */}
        {pastPositions.length > 0 && (
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="w-full">
              <h2 className="font-heading text-text font-semibold mt-4 text-md md:text-lg">
                Past Positions
              </h2>
              <hr className="my-1 md:my-4" />
              <div className="border-l space-y-5">
                {pastPositions.map((item, index) => (
                  <div className="relative" key={index}>
                    <div className="absolute h-5 w-5 bg-secondary rounded-full -left-2.5 border-4 border-backgroundDark"></div>
                    <div className="ml-4">
                      <p className="font-body font-medium italic text-secondary text-[10px] md:text-xs">
                        {new Date(item.startDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {item.endDate
                          ? new Date(item.endDate).toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })
                          : "Present"}
                      </p>
                      <h3 className="text-xs lg:text-sm font-semibold font-heading text-text mt-1 whitespace-nowrap">
                        {item.position}
                      </h3>
                      <p className="font-body font-light text-text italic text-xs lg:text-sm">
                        {item.company}
                      </p>
                      <ul className="mt-2 font-body font-light text-text text-xs lg:text-sm list-disc list-inside">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
