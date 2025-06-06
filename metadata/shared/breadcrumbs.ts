// lib/schema/breadcrumb.ts
import type { BreadcrumbList, ListItem } from "schema-dts";

export function getBreadcrumbSchema(pathname: string): BreadcrumbList {
  const segments = pathname.split("/").filter(Boolean);

  const itemListElement: ListItem[] = segments.map((segment, index) => ({
    "@type": "ListItem",
    position: index + 2,
    name: decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()),
    item: `${process.env.WEBSITE_URL}/${segments.slice(0, index + 1).join("/")}`,
  }));

  itemListElement.unshift({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: process.env.WEBSITE_URL,
  });

  return {
    "@type": "BreadcrumbList",
    name: "BreadCrumbs",
    itemListElement,
    numberOfItems: itemListElement.length,
  };
}
