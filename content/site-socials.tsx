import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
import { FaMediumM } from "react-icons/fa";
import SiteConfig from "./site-config";
type SiteSocial = {
  name: string;
  url: string;
  icon: React.ReactNode;
  title: string;
  ariaLabel: string;
};

export const siteSocials: SiteSocial[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shakeef-ahmed-rakin",
    icon: <BsLinkedin />,
    title: "LinkedIn",
    ariaLabel: "View LinkedIn Profile",
  },
  {
    name: "GitHub",
    url: "https://github.com/ShakeefAhmedRakin",
    icon: <BsGithub />,
    title: "GitHub",
    ariaLabel: "View GitHub Profile",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/28897060/shakeef-ahmed-rakin",
    icon: <BsStackOverflow />,
    title: "Stack Overflow",
    ariaLabel: "View Stack Overflow Profile",
  },
  // {
  //   name: "LeetCode",
  //   url: "https://leetcode.com/u/Shakeef-Ahmed-Rakin",
  //   icon: <SiLeetcode />,
  //   title: "LeetCode",
  //   ariaLabel: "View LeetCode Profile",
  // },
  {
    name: "Medium",
    url: SiteConfig.mediumLink,
    icon: <FaMediumM />,
    title: "Medium",
    ariaLabel: "View Medium Profile",
  },
];
