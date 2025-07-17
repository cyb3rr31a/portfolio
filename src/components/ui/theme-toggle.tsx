/**
 * Theme Toggle Component
 * 
 * Provides a button to switch between light, dark, and system themes.
 * Uses next-themes for theme management and lucide-react icons.
 * 
 * Features:
 * - Cycles through: light → dark → system → light
 * - Shows appropriate icon for current theme
 * - Smooth transitions with proper styling
 * - Accessible with proper ARIA labels
 */

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  /**
   * Cycle through themes: light → dark → system → light
   */
  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  /**
   * Get the appropriate icon and label for current theme
   */
  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return { icon: Sun, label: "Switch to dark mode" };
      case "dark":
        return { icon: Moon, label: "Switch to system mode" };
      default:
        return { icon: Monitor, label: "Switch to light mode" };
    }
  };

  const { icon: Icon, label } = getThemeIcon();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label={label}
      className="relative h-10 w-10 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-accent hover:border-border transition-all duration-300 hover:scale-105"
    >
      <Icon className="h-4 w-4 transition-all duration-300" />
    </Button>
  );
}