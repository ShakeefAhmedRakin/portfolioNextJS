import { PiStackMinusFill, PiDevices } from "react-icons/pi";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { siteNavigationMap } from "../site-navigation";
import {
  projects,
  workExperiences,
  research,
  achievements,
} from "@/.velite";

export const expertiseContent = {
  title: "What I work on",
  stats: [
    {
      label: `${projects.length}+ projects`,
      href: siteNavigationMap.PROJECTS.href,
      ariaLabel: siteNavigationMap.PROJECTS.ariaLabel,
    },
    {
      label: `${workExperiences.length} ${workExperiences.length === 1 ? "company" : "companies"}`,
      href: `${siteNavigationMap.ABOUT.href}#experience`,
      ariaLabel: siteNavigationMap.ABOUT.ariaLabel,
    },
    {
      label: `${research.filter((r) => r.isPublished).length}+ papers`,
      href: siteNavigationMap.RESEARCH.href,
      ariaLabel: siteNavigationMap.RESEARCH.ariaLabel,
    },
    {
      label: `${achievements.length}+ awards`,
      href: siteNavigationMap.ACHIEVEMENTS.href,
      ariaLabel: siteNavigationMap.ACHIEVEMENTS.ariaLabel,
    },
  ],
  expertise: [
    {
      title: "Full Stack Development",
      points: [
        "Architecting SaaS products end to end",
        "Migrating legacy stacks to modern foundations",
        "Designing public APIs for teams and AI clients",
      ],
      icon: <PiStackMinusFill />,
    },
    {
      title: "AI & Machine Learning",
      points: [
        "Shipping production AI pipelines",
        "Training and benchmarking custom models",
        "Wiring AI into real product flows",
      ],
      icon: <RiChatVoiceAiFill />,
    },
    {
      title: "Mobile & Desktop",
      points: [
        "Mobile apps sharing one backend with web",
        "Desktop tools for industrial and research work",
        "Open source templates for cross platform delivery",
      ],
      icon: <PiDevices />,
    },
  ],
};
