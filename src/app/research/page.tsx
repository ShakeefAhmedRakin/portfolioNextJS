import researches from "../_data/research.json";
import ResearchCard from "../_components/ui/researchcard";

export default function Research() {
  return (
    <section className="bg-backgroundDark min-h-screen">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
        <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-4">
          My <span className="text-primary">Research</span>
        </h1>
        {/* Completed Research */}
        {researches.filter((research) => research.isPublished).length > 0 && (
          <div>
            <h2 className="font-heading text-text font-bold text-md md:text-lg xl:text-2xl mb-2">
              Completed Research
            </h2>
            <hr className="mb-2" />
            <div className="space-y-6">
              {researches
                .filter((research) => research.isPublished)
                .map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
            </div>
          </div>
        )}
        {/* Ongoing Research */}
        {researches.filter((research) => !research.isPublished).length > 0 && (
          <div className="mt-8">
            <h2 className="font-heading text-text font-bold text-md md:text-lg xl:text-2xl mb-2">
              Ongoing Research
            </h2>
            <hr className="mb-2" />
            <div className="space-y-6">
              {researches
                .filter((research) => !research.isPublished)
                .map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
