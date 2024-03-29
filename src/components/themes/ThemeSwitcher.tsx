"use client";
// app/components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <Switch
        defaultChecked={theme === ""} // Set switch state based on current theme
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle theme on switch change
        startContent={<SunIcon />} // Icon for light theme
        endContent={<MoonIcon />} // Icon for dark theme
        color="default"
      />
    </div>
  );
}
