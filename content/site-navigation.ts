import SiteConfig from "./site-config";
import { siteSocialMap } from "./site-socials";

export enum SiteNavKey {
  HOME = "HOME",
  ABOUT = "ABOUT",
  ACHIEVEMENTS = "ACHIEVEMENTS",
  PROJECTS = "PROJECTS",
  RESEARCH = "RESEARCH",
  LICENSE = "LICENSE",
  BLOGS = "BLOGS",
  RESUME = "RESUME",
}

export type NavItem = {
  key: SiteNavKey;
  label: string;
  title: string;
  ariaLabel: string;
  href: string;
  isShownOnNav: boolean;
  isShownOnFooterNav: boolean;
  isShownOnFooterResources: boolean;
  isExternal: boolean;
};

export const siteNavigation: NavItem[] = [
  {
    key: SiteNavKey.HOME,
    label: "Home",
    title: "Home",
    ariaLabel: "Navigate to the Home page",
    href: "/",
    isShownOnNav: false,
    isShownOnFooterNav: false,
    isShownOnFooterResources: false,
    isExternal: false,
  },
  {
    key: SiteNavKey.ABOUT,
    label: "About",
    title: "About",
    ariaLabel: "Navigate to the About page",
    href: "/about",
    isShownOnNav: true,
    isShownOnFooterNav: true,
    isShownOnFooterResources: false,
    isExternal: false,
  },
  {
    key: SiteNavKey.ACHIEVEMENTS,
    label: "Achievements",
    title: "Achievements",
    ariaLabel: "Navigate to the Achievements page",
    href: "/achievements",
    isShownOnNav: true,
    isShownOnFooterNav: true,
    isShownOnFooterResources: false,
    isExternal: false,
  },
  {
    key: SiteNavKey.PROJECTS,
    label: "Projects",
    title: "Projects",
    ariaLabel: "Navigate to the Projects page",
    href: "/projects",
    isShownOnNav: true,
    isShownOnFooterNav: true,
    isShownOnFooterResources: false,
    isExternal: false,
  },
  {
    key: SiteNavKey.RESEARCH,
    label: "Research",
    title: "Research",
    ariaLabel: "Navigate to the Research page",
    href: "/research",
    isShownOnNav: true,
    isShownOnFooterNav: true,
    isShownOnFooterResources: false,
    isExternal: false,
  },
  {
    key: SiteNavKey.LICENSE,
    label: "License",
    title: "License",
    ariaLabel: "Navigate to the License page",
    href: "/license",
    isShownOnNav: false,
    isShownOnFooterNav: false,
    isShownOnFooterResources: true,
    isExternal: false,
  },
  {
    key: SiteNavKey.BLOGS,
    label: "Blogs",
    title: "Medium",
    ariaLabel: "Navigate to the Blogs page",
    href: siteSocialMap.MEDIUM.url,
    isShownOnNav: false,
    isShownOnFooterNav: false,
    isShownOnFooterResources: true,
    isExternal: true,
  },
  {
    key: SiteNavKey.RESUME,
    label: "Resume",
    title: "Resume",
    ariaLabel: "Navigate to the Resume page",
    href: SiteConfig.resumeLink,
    isShownOnNav: true,
    isShownOnFooterNav: false,
    isShownOnFooterResources: true,
    isExternal: true,
  },
];

export const siteNavigationMap: Record<SiteNavKey, NavItem> =
  Object.fromEntries(siteNavigation.map((item) => [item.key, item])) as Record<
    SiteNavKey,
    NavItem
  >;
