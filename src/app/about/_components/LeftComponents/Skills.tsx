import TitleMedium from "@/app/_components/ui/TitleMedium";
import skills from "@/app/_data/skills.json";
import Image from "next/image";

export default function Skills() {
  return (
    <div>
      <TitleMedium title="Skills" />
      <hr className="my-2" />
      <ul className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map((skill, index) => (
          <li
            key={`${skill}-${index}`}
            className="text-text flex flex-col justify-center text-center items-center text-[11px] font-heading gap-y-1.5 font-medium h-full"
          >
            <div className="p-1 bg-white rounded-full">
              <Image
                src={skill.logo}
                alt={skill.title}
                width={32}
                height={32}
                draggable={false}
                priority
              ></Image>
            </div>
            <span className="flex-1">{skill.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
