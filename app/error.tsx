"use client";

import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/wrappers";
import { siteNavigationMap } from "@/content/site-navigation";
import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <SectionWrapper innerClassName="flex justify-center items-center flex-col min-h-[58vh] py-10 gap-y-4">
      <h1 className="text-7xl font-bold tracking-widest">Error</h1>
      <p className="text-foreground/65 text-center text-xl font-medium">
        Something went wrong
        <br />
        An unexpected error has occurred
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={reset}
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "bg-transparent",
          })}
        >
          Try Again
        </button>
        <Link
          href={siteNavigationMap.HOME.href}
          title="Back To Home"
          aria-label="Go back to homepage"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "bg-transparent",
          })}
        >
          Back To Home
        </Link>
      </div>
    </SectionWrapper>
  );
}
