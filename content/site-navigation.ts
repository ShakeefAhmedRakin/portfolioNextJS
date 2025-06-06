import SiteConfig from "./site-config";

export type NavItem = {
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
    label: "Research",
    title: "Research",
    ariaLabel: "Navigate to the Research page",
    href: "/research",
    isShownOnNav: true,
    isShownOnFooterNav: true,
    isShownOnFooterResources: false,
    isExternal: false,
  },
  // EXTERNAL LINKS
  {
    label: "Blogs",
    title: "Medium",
    ariaLabel: "Navigate to the Blogs page",
    href: SiteConfig.mediumLink,
    isShownOnNav: false,
    isShownOnFooterNav: false,
    isShownOnFooterResources: true,
    isExternal: true,
  },
  {
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
