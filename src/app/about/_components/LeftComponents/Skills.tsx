import TitleMedium from "@/app/_components/ui/TitleMedium";
import skillSets from "@/app/_data/skills.json";
import Image from "next/image";

export default function Skills() {
  return (
    <div>
      <TitleMedium title="Skills" />
      <hr className="my-2" />
      <ul className="space-y-4">
        {skillSets.map((skillSet, index) => (
          <li key={`${skillSet}-${index}`}>
            <h3 className="font-heading font-medium text-text w-fit border-b border-primary pb-0.5 mb-4 text-xs md:text-sm">
              {skillSet.category}
            </h3>
            <ul className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {skillSet.skills.map((skill) => (
                <li
                  key={`${skill.title}-${index}`}
                  className="text-text flex flex-col justify-center text-center items-center text-[11px] font-heading gap-y-1.5 font-medium h-full"
                >
                  <div className="p-1 bg-white rounded-full">
                    <Image
                      src={skill.logo}
                      alt={skill.title}
                      width={20}
                      height={20}
                      sizes="100"
                      draggable={false}
                      priority
                      title={skill.title}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <h4 className="flex-1">{skill.title}</h4>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
