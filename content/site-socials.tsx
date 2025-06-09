import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
import { FaMediumM } from "react-icons/fa";

type SiteSocial = {
  key: string;
  name: string;
  url: string;
  icon: React.ReactNode;
  title: string;
  ariaLabel: string;
};

export enum SiteSocialKey {
  LinkedIn = "LINKEDIN",
  GitHub = "GITHUB",
  StackOverflow = "STACKOVERFLOW",
  Medium = "MEDIUM",
}

export const siteSocials: SiteSocial[] = [
  {
    key: SiteSocialKey.LinkedIn,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shakeef-ahmed-rakin",
    icon: <BsLinkedin />,
    title: "LinkedIn",
    ariaLabel: "View LinkedIn Profile",
  },
  {
    key: SiteSocialKey.GitHub,
    name: "GitHub",
    url: "https://github.com/ShakeefAhmedRakin",
    icon: <BsGithub />,
    title: "GitHub",
    ariaLabel: "View GitHub Profile",
  },
  {
    key: SiteSocialKey.StackOverflow,
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/28897060/shakeef-ahmed-rakin",
    icon: <BsStackOverflow />,
    title: "Stack Overflow",
    ariaLabel: "View Stack Overflow Profile",
  },
  // {
  //   key: "LeetCode",
  //   name: "LeetCode",
  //   url: "https://leetcode.com/u/Shakeef-Ahmed-Rakin",
  //   icon: <SiLeetcode />,
  //   title: "LeetCode",
  //   ariaLabel: "View LeetCode Profile",
  // },
  {
    key: SiteSocialKey.Medium,
    name: "Medium",
    url: "https://medium.com/@shakeef.rakin321",
    icon: <FaMediumM />,
    title: "Medium",
    ariaLabel: "View Medium Profile",
  },
];

export const siteSocialMap: Record<SiteSocialKey, SiteSocial> =
  Object.fromEntries(
    siteSocials.map((social) => [social.key, social]),
  ) as Record<SiteSocialKey, SiteSocial>;
