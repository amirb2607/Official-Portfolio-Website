"use client";

import React, { forwardRef } from "react";
import { IconButton, useTheme } from "@/once-ui/components";

const ThemeSwitcher = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <IconButton
      size="l"
      icon={isDark ? "light" : "dark"}
      variant="tertiary"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    />
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";
export { ThemeSwitcher };
