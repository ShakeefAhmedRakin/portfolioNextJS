import { FaEye } from "react-icons/fa6";
import {
  SiExpress,
  SiLemonsqueezy,
  SiMui,
  SiMysql,
  SiReactquery,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiNodejsFill,
  RiSupabaseFill,
} from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import {
  PiChatTextBold,
  PiSquareSplitVerticalDuotone,
  PiStripeLogoFill,
} from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";

export const skills = [
  {
    category: "Frontend",
    description: "Building responsive and interactive UI",
    skills: [
      {
        name: "Next.js",
        icon: <RiNextjsFill />,
      },
      {
        name: "React Query",
        icon: <SiReactquery />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
      },
      {
        name: "Material UI",
        icon: <SiMui />,
      },
      {
        name: "ShadCN UI",
        icon: <SiShadcnui />,
      },
    ],
  },
  {
    category: "Backend",
    description: "Developing robust server-side applications",
    skills: [
      {
        name: "Node.js",
        icon: <RiNodejsFill />,
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
      {
        name: "Lemon Squeezy",
        icon: <SiLemonsqueezy />,
      },
      {
        name: "Stripe",
        icon: <PiStripeLogoFill />,
      },
      {
        name: "Firebase",
        icon: <RiFirebaseFill />,
      },
      {
        name: "Supabase",
        icon: <RiSupabaseFill />,
      },
    ],
  },
  {
    category: "Database",
    description: "Managing data storage and retrieval",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    category: "Machine Learning",
    description: "Deploying and managing cloud infrastructure",
    skills: [
      {
        name: "Data Preprocessing",
        icon: <PiSquareSplitVerticalDuotone />,
      },
      {
        name: "Data Visualization",
        icon: <BsGraphUp />,
      },
      {
        name: "Computer Vision",
        icon: <FaEye />,
      },
      {
        name: "NLP",
        icon: <PiChatTextBold />,
      },
    ],
  },
];
