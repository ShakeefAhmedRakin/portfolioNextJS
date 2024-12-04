import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  ariaLabel?: string; // For accessibility
  openInNewTab?: boolean; // Determines if the link opens in a new tab
}

export function ButtonPrimaryFilled({
  children,
  href,
  className,
  ariaLabel,
  openInNewTab,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        className={`hover:before:bg-secondary border-primary hover:border-secondary relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full border bg-primary duration-500 px-3 text-white shadow shadow-primary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:shadow-secondary hover:before:left-0 hover:before:w-full active:scale-[0.9]`}
      >
        <span className="relative z-10 text-xs md:text-sm font-body">
          {children}
        </span>
      </button>
    </Link>
  );
}

export function ButtonSecondaryFilled({
  children,
  href,
  className,
  ariaLabel,
  openInNewTab,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        className={`hover:before:bg-primary border-secondary hover:border-primary relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full border bg-secondary duration-500 px-3 text-white shadow shadow-secondary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:shadow-primary hover:before:left-0 hover:before:w-full active:scale-[0.9]`}
      >
        <span className="relative z-10 text-xs md:text-sm font-body">
          {children}
        </span>
      </button>
    </Link>
  );
}

export function ButtonPrimaryOutline({
  children,
  href,
  className,
  ariaLabel,
  openInNewTab,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        className={`hover:before:bg-primary border-primary hover:border-primary relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full border bg-transparent duration-500 px-3 text-primary shadow transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:shadow-primary hover:before:left-0 hover:before:w-full active:scale-[0.9]`}
      >
        <span className="relative z-10 text-xs md:text-sm font-body">
          {children}
        </span>
      </button>
    </Link>
  );
}

export function ButtonSecondaryOutline({
  children,
  href,
  className,
  ariaLabel,
  openInNewTab,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        className={`hover:before:bg-secondary border-secondary hover:border-secondary relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full border bg-transparent duration-500 px-3 text-secondary shadow transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:shadow-secondary hover:before:left-0 hover:before:w-full active:scale-[0.9]`}
      >
        <span className="relative z-10 text-xs md:text-sm font-body">
          {children}
        </span>
      </button>
    </Link>
  );
}
