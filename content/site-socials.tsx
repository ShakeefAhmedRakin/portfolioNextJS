import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
import { FaMediumM } from "react-icons/fa";

type SiteSocial = {
  key: string;
  name: string;
  url: string;
  icon: React.ReactNode;
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
  },
  {
    key: SiteSocialKey.GitHub,
    name: "GitHub",
    url: "https://github.com/ShakeefAhmedRakin",
    icon: <BsGithub />,
  },
  {
    key: SiteSocialKey.StackOverflow,
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/28897060/shakeef-ahmed-rakin",
    icon: <BsStackOverflow />,
  },
  // {
  //   key: "LeetCode",
  //   name: "LeetCode",
  //   url: "https://leetcode.com/u/Shakeef-Ahmed-Rakin",
  //   icon: <SiLeetcode />,
  // },
  {
    key: SiteSocialKey.Medium,
    name: "Medium",
    url: "https://medium.com/@shakeef.rakin321",
    icon: <FaMediumM />,
  },
];

export const siteSocialMap: Record<SiteSocialKey, SiteSocial> =
  Object.fromEntries(
    siteSocials.map((social) => [social.key, social]),
  ) as Record<SiteSocialKey, SiteSocial>;
