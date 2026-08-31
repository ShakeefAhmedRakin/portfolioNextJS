import { siteNavigationMap } from "@/content/site-navigation";
import { siteLogo } from "@/content/site-logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type LogoProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Logo(props: LogoProps) {
  return (
    <Link
      href={siteNavigationMap.HOME.href}
      className={cn(
        props.className,
        "flex w-fit items-center gap-0.5 text-2xl font-bold tracking-widest",
      )}
      onClick={(props.onClick as () => void) || undefined}
    >
      <span className="sr-only">Home, </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 556 611"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d={siteLogo.monogramSvgPath}
          fill="currentColor"
          transform="translate(3.4910627007484436,-0.12765049934387207)"
        />
      </svg>
      <span className="sr-only">{siteLogo.initial}</span>
      <span>{siteLogo.wordmark}</span>
    </Link>
  );
}
