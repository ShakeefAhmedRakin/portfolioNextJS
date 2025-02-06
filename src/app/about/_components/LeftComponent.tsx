import Education from "./LeftComponents/Education";
import PersonalInformation from "./LeftComponents/PersonalInformation";
import Skills from "./LeftComponents/Skills";

export default function LeftComponent() {
  return (
    <div className="space-y-5">
      {/* PERSONAL INFO */}
      <PersonalInformation />
      <Education />
      <Skills />
    </div>
  );
}
