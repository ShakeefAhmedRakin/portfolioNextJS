import Link from "next/link";
import { ReactNode } from "react";

interface PrimarySecondaryButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  ariaLabel?: string;
  openInNewTab?: boolean;
}

interface TertiaryButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  ariaLabel?: string;
  openInNewTab?: boolean;
  variant?: "white" | "black";
}

export function ButtonPrimaryFilled({
  children,
  href,
  className,
  ariaLabel,
  openInNewTab,
}: PrimarySecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`hover:before:bg-secondary border-0 relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full bg-primary duration-500 px-3 text-white shadow shadow-primary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:shadow-secondary hover:before:left-0 hover:before:w-full active:scale-[0.96]`}
      >
        <span className="relative z-10 text-[10px] md:text-sm font-body flex items-center justify-center gap-2 font-medium">
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
}: PrimarySecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`hover:before:bg-primary border-0 relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full bg-secondary duration-500 px-3 text-white shadow shadow-secondary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:shadow-primary hover:before:left-0 hover:before:w-full active:scale-[0.96]`}
      >
        <span className="relative z-10 text-[10px] md:text-sm font-body flex items-center justify-center gap-2 font-medium">
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
}: PrimarySecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`hover:before:bg-primary border-primary hover:border-primary relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full border-[2px] bg-transparent duration-500 px-3 text-primary shadow transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:shadow-primary hover:before:left-0 hover:before:w-full active:scale-[0.96]`}
      >
        <span className="relative z-10 text-[10px] md:text-sm font-body flex items-center justify-center gap-2 font-medium">
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
}: PrimarySecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-full`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`hover:before:bg-secondary border-secondary hover:border-secondary relative h-[40px] md:h-[50px] overflow-hidden ${className} rounded-full border-[2px] bg-transparent duration-500 px-3 text-secondary shadow transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:shadow-secondary hover:before:left-0 hover:before:w-full active:scale-[0.96]`}
      >
        <span className="relative z-10 text-[10px] md:text-sm font-body flex items-center justify-center gap-2 font-medium">
          {children}
        </span>
      </button>
    </Link>
  );
}
export function ButtonTertiaryOutline({
  children,
  href,
  className,
  ariaLabel,
  openInNewTab,
  variant = "white",
}: TertiaryButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-lg`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`${className} ${
          variant === "white"
            ? "text-white hover:bg-white hover:text-black border-white"
            : "text-black hover:bg-black hover:text-white border-black"
        } flex justify-center gap-2 items-center font-heading font-bold  active:scale-[0.98] rounded-lg py-2 md:py-3 px-2.5 border shadow-inner duration-300 text-[10px] lg:text-xs`}
      >
        {children}
      </button>
    </Link>
  );
}
export function ButtonTertiaryFilled({
  children,
  href,
  className,
  ariaLabel,
  openInNewTab,
  variant = "white",
}: TertiaryButtonProps) {
  return (
    <Link
      href={href}
      className={`${className} rounded-lg`}
      passHref
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`${className} flex justify-center gap-2 items-center font-heading font-bold active:scale-[0.98] rounded-lg py-2 md:py-3 px-2.5 ${
          variant === "white"
            ? "bg-white text-black hover:bg-gray-200 border-white"
            : "bg-black text-white hover:bg-black/90 border-black"
        } border shadow-inner duration-300 text-[10px] lg:text-xs`}
      >
        {children}
      </button>
    </Link>
  );
}
