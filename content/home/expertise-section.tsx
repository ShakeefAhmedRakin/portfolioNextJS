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
        "Next.js, React, tRPC, Better Auth",
        "PostgreSQL, Drizzle, Supabase",
        "REST + OpenAPI, secure API design",
      ],
      icon: <PiStackMinusFill />,
    },
    {
      title: "AI & Machine Learning",
      points: [
        "LLM pipelines (OpenAI, Gemini)",
        "TTS and audio processing",
        "NLP, computer vision",
      ],
      icon: <RiChatVoiceAiFill />,
    },
    {
      title: "Mobile & Desktop",
      points: [
        "React Native, Expo (iOS, Android)",
        "Native Windows apps",
      ],
      icon: <PiDevices />,
    },
  ],
};
