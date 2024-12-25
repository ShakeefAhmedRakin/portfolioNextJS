import education from "../../_data/education.json";

export default function AboutMeSection() {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div>
        <p className="font-body font-light text-text text-xs lg:text-base">
          Born and raised in Dhaka, Bangladesh, I started my coding journey
          during my undergraduate studies in Computer Science and Engineering.
          Towards the end of my university life, I have actively participated in
          courses and competitions, where I gained hands-on experience in a wide
          range of fields, from full-stack web development to machine learning.
          These experiences helped me develop a strong foundation in both
          problem-solving and technical skills.
        </p>
        <p className="mt-4 font-body font-light text-text text-xs lg:text-base">
          Beyond work, I enjoy music, gaming, and anime. These hobbies of mine
          tend to keep me inspired and bring fresh perspectives to my
          problem-solving approach.
        </p>
      </div>
      {/* Education */}
      <div className="w-full max-w-full md:max-w-xs xl:max-w-md">
        <div className="border-l space-y-5 h-full">
          {education.map((item, index) => (
            <div className="relative" key={index}>
              <div className="absolute h-5 w-5 bg-primary rounded-full -left-2.5 border-4 border-backgroundDark"></div>
              <div className="ml-4">
                <p className="font-body font-medium italic text-primary text-xs">
                  {item.duration}
                </p>
                <h2 className="text-xs lg:text-sm font-semibold font-heading text-text mt-1 whitespace-nowrap">
                  {item.degree}
                </h2>
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
