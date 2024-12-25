import { skills } from "@/app/_data/skills";

export default function SkillsSection() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category) => (
          <div
            key={category.category}
            className="bg-backgroundDark p-5 rounded-md text-text shadow-sm shadow-secondary"
          >
            <h1 className="font-heading text-lg font-bold mb-1">
              {category.category}
            </h1>
            <p className="font-body mb-5 text-xs">{category.description}</p>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-background shadow rounded-lg p-4 flex gap-4 items-center"
                >
                  <span className="text-xl min-w-[16px] max-w-[16px]">
                    {skill.icon}
                  </span>
                  <span className="flex-1 text-[10px] lg:text-xs font-medium font-heading">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
