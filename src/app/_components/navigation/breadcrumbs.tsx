"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  if (paths === "/") {
    return null;
  }

  return (
    <nav
      aria-label="breadcrumb"
      className={`overflow-x-auto flex-nowrap whitespace-nowrap`}
    >
      <ol
        role="list"
        className={`flex items-center gap-2 text-[10px] md:text-xs pb-3 font-body text-text font-medium`}
      >
        {/* Home Link */}
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>

        {/* Separator after Home */}
        {pathNames.length > 0 && <li aria-hidden="true">{separator}</li>}

        {/* Dynamic Breadcrumb Links */}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isActive = href === paths;
          const itemClasses = isActive
            ? `${listClasses} ${activeClasses}`
            : listClasses;

          const itemLink = capitalizeLinks
            ? link
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())
            : link.replace(/-/g, " ");

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {isActive ? (
                  <span aria-current="page">
                    {itemLink.length > 40 ? (
                      <>{itemLink.substring(0, 40)}...</>
                    ) : (
                      <>{itemLink}</>
                    )}
                  </span>
                ) : (
                  <Link href={href}>{itemLink}</Link>
                )}
              </li>
              {/* Separator Between Links */}
              {pathNames.length !== index + 1 && (
                <li aria-hidden="true">{separator}</li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default NextBreadcrumb;
