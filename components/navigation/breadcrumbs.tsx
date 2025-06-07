"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const FADE_DURATION = 200;

export function Breadcrumbs() {
  const currentPath = usePathname();
  const [displayedPath, setDisplayedPath] = useState(currentPath);
  const [isVisible, setIsVisible] = useState(currentPath !== "/");

  useEffect(() => {
    if (currentPath === displayedPath) return;

    setIsVisible(false);

    const timeout = setTimeout(() => {
      setDisplayedPath(currentPath);
      setIsVisible(currentPath !== "/");
    }, FADE_DURATION);

    return () => clearTimeout(timeout);
  }, [currentPath, displayedPath]);

  const pathNames = displayedPath.split("/").filter((path) => path);

  return (
    <div
      className={`scrollbar-hide w-full overflow-x-auto whitespace-nowrap transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap text-[11px]">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={"/"}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {pathNames.length > 0 && <BreadcrumbSeparator />}

          {pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join("/")}`;
            const isActive = href === displayedPath;
            const linkLabel = link
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {isActive ? (
                    <BreadcrumbPage>
                      {linkLabel.length > 40 ? (
                        <>{linkLabel.substring(0, 40)}...</>
                      ) : (
                        <>{linkLabel}</>
                      )}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{linkLabel}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
