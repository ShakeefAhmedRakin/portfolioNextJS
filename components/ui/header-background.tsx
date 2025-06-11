"use client";
import React from "react";

export default function HeaderBackground({
  minScroll = 50,
}: {
  minScroll?: number;
}) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= minScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minScroll]);

  return (
    <div
      className={`bg-background/90 pointer-events-none absolute inset-0 -z-10 h-full w-full transition-opacity duration-500 ease-in-out ${show ? "opacity-100" : "opacity-0"} `}
    />
  );
}
