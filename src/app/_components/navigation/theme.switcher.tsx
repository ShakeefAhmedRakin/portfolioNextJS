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

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="aspect-square rounded-full border-text border h-9 w-9 flex justify-center items-center"
    >
      {theme === "light" ? (
        <FiMoon className="text-text text-lg" /> // Moon icon for light theme
      ) : (
        <FiSun className="text-text text-lg" /> // Sun icon for dark theme
      )}
    </button>
  );
}
