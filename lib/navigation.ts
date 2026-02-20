import { siteNavigationMap } from "@/content/site-navigation";

export function isNavActive(
  pathname: string,
  link: { href: string },
): boolean {
  return (
    pathname === link.href ||
    (pathname.startsWith(link.href) &&
      link.href !== siteNavigationMap.HOME.href)
  );
}
