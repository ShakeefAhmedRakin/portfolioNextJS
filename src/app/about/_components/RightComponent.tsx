import Achievements from "./RightComponents/Achievements";
import Certificates from "./RightComponents/Certificates";
import Projects from "./RightComponents/Projects";
import References from "./RightComponents/References";
import Research from "./RightComponents/Research";
import WorkExperience from "./RightComponents/WorkExperience";

export default function RightComponent() {
  return (
    <div className="space-y-5">
      <WorkExperience />
      <Projects />
      <Research />
      <Achievements />
      <Certificates />
      <References />
    </div>
  );
}
