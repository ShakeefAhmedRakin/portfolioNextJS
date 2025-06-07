"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Observer } from "tailwindcss-intersect";

export default function ClientObserver() {
  const pathname = usePathname();

  useEffect(() => {
    Observer.start();
  }, []);

  useEffect(() => {
    Observer.restart();
  }, [pathname]);

  return null;
}
