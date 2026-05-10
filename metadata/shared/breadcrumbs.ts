// lib/schema/breadcrumb.ts
import type { BreadcrumbList, ListItem } from "schema-dts";

export function getBreadcrumbSchema(pathname: string): BreadcrumbList {
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: { name: string; item: string | undefined }[] = [
    { name: "Home", item: process.env.WEBSITE_URL },
    ...segments.map((segment, index) => ({
      name: decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      item: `${process.env.WEBSITE_URL}/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  // Position is derived from final array order — can't desync from item count.
  const itemListElement: ListItem[] = crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.item,
  }));

  return {
    "@type": "BreadcrumbList",
    name: "BreadCrumbs",
    itemListElement,
    numberOfItems: itemListElement.length,
  };
}
