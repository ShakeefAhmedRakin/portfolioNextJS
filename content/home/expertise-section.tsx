import { PiStackMinusFill } from "react-icons/pi";
import { PiDevices } from "react-icons/pi";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { GoCodescan } from "react-icons/go";
import { siteNavigationMap } from "../site-navigation";
import {
  projects,
  workExperiences,
  research,
  achievements,
} from "@/.velite";

export const expertiseContent = {
  title: "I've been up to a lot of things",
  description:
    "I write code that solves real problems, one step at a time. Solid in algorithms, data structures, and fluent in TypeScript, Python and C#. Focused on building efficient, clean and reliable systems.",
  stats: [
    {
      title: `${projects.length}+ Projects`,
      subtitle: "Built & Deployed",
      href: siteNavigationMap.PROJECTS.href,
      ariaLabel: siteNavigationMap.PROJECTS.ariaLabel,
    },
    {
      title: `${workExperiences.length} Companies`,
      subtitle: "Professional Experience",
      href: `${siteNavigationMap.ABOUT.href}#experience`,
      ariaLabel: siteNavigationMap.ABOUT.ariaLabel,
    },
    {
      title: `${research.filter((r) => r.isPublished).length}+ Papers`,
      subtitle: "Published",
      href: siteNavigationMap.RESEARCH.href,
      ariaLabel: siteNavigationMap.RESEARCH.ariaLabel,
    },
    {
      title: `${achievements.length}+ Achievements`,
      subtitle: "Hackathons & Awards",
      href: siteNavigationMap.ACHIEVEMENTS.href,
      ariaLabel: siteNavigationMap.ACHIEVEMENTS.ariaLabel,
    },
  ],
  expertiseGroupOne: [
    {
      title: "Full Stack Development",
      description: "Expertise in building end-to-end web applications",
      points: [
        "Frontend & Backend development",
        "SEO & Hosting",
        "Scalable and efficient architectures",
        "Secure API development",
      ],
      className: "lg:w-[60%]",
      icon: <PiStackMinusFill />,
    },
    {
      title: "AI & Machine Learning",
      description: "Experienced in working with different AI technologies",
      points: [
        "Natural Language Processing (NLP)",
        "Computer Vision applications",
        "LLMs (OpenAI, Gemini, etc.)",
      ],
      className: "flex-1",
      icon: <RiChatVoiceAiFill />,
    },
  ],
  expertiseGroupTwo: [
    {
      title: "Mobile & Desktop Apps",
      description: "Cross-platform development for Android, iOS, and Windows",
      points: ["Native and hybrid development", "Clean, consistent UI/UX"],
      className: "flex-1",
      icon: <PiDevices />,
    },
    {
      title: "What you can expect",
      description: "Coding for performance and usability with best practices",
      points: [
        "Simple, intuitive, and user-focused designs",
        "Efficient code that aligns with best practices",
        "Well documented code for future workability",
      ],
      className: "lg:w-[60%]",
      icon: <GoCodescan />,
    },
  ],
};
