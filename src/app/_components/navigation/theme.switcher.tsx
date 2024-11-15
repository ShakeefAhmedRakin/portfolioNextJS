// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Import sun and moon icons

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <button className="aspect-square rounded-full border-none text-accent hover:text-primary  hover:bg-primary-lighter border h-9 w-9 flex justify-center items-center">
        <span className="loading loading-spinner loading-xs text-accent"></span>
      </button>
    );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="aspect-square rounded-full border-none text-accent hover:text-primary  hover:bg-primary-lighter border h-9 w-9 flex justify-center items-center"
    >
      {theme === "light" ? (
        <FiMoon className="text-lg" /> // Moon icon for light theme
      ) : (
        <FiSun className="text-lg" /> // Sun icon for dark theme
      )}
    </button>
  );
}
