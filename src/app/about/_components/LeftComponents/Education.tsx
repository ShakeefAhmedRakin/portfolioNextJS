import TitleMedium from "@/app/_components/ui/TitleMedium";
import education from "../../../_data/education.json";

export default function Education() {
  return (
    <div>
      <TitleMedium title="Education" />
      <hr className="my-2" />
      <div className="w-full max-w-full md:max-w-xs xl:max-w-md ml-1 mt-4">
        <div className="border-l space-y-5 h-full">
          {education.map((item, index) => (
            <div className="relative" key={index}>
              <div className="absolute h-5 w-5 bg-secondary rounded-full -left-2.5 border-4 border-backgroundDark"></div>
              <div className="ml-4">
                <p className="font-body font-medium italic text-secondary text-[9px] md:text-xs">
                  {item.duration}
                </p>
                <h3 className="text-xs lg:text-sm font-semibold font-heading text-text mt-1">
                  {item.degree}
                </h3>
                <p className="font-body font-light text-text italic text-xs lg:text-sm">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
