"use client";
import React, { ElementType } from "react";

interface ScrollLinkProps {
  to: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
  title?: string;
  ariaLabel?: string;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  offset = -90,
  children,
  className = "",
  style = {},
  as: Component = "button",
  title,
  ariaLabel,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Component
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      style={style}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
};
