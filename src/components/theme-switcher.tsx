"use client";

import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "@/providers/theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-6 w-16 cursor-pointer rounded-full border border-stroke bg-surface"
    >
      <span
        className={`absolute left-0 top-1/2 flex size-8 -translate-y-1/2 items-center text-toggle bg-text justify-center rounded-full transition-all duration-300 ease-in-out ${
          isDark ? "translate-x-0 " : "translate-x-8 "
        }`}
      >
        {isDark ? (
          <MoonStarsIcon size={16} weight="regular" />
        ) : (
          <SunIcon size={16} weight="regular" />
        )}
      </span>
    </button>
  );
}
