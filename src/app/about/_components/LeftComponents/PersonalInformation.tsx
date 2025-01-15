import TitleMedium from "@/app/_components/ui/TitleMedium";

export default function PersonalInformation() {
  return (
    <div>
      <TitleMedium title="About Me" />
      <hr className="my-2" />
      <p className="font-body font-light text-text text-xs lg:text-sm">
        {`I'm a Full Stack Engineer from Dhaka, Bangladesh. My work spans a wide range of fields, from full-stack web development to machine learning, helping me build a strong foundation in both problem-solving and technical skills. Outside of work, I enjoy music, gaming, and anime, which inspire me and bring fresh perspectives to my problem-solving approach.`}
      </p>
    </div>
  );
}
