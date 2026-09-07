"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const dark = mounted && resolvedTheme === "dark";

  function toggle() {
    // Disable color cross-fades for the brief switch so the theme snaps
    // instantly instead of fading over the reveal wipe (feels much faster).
    const root = document.documentElement;
    root.classList.add("theme-switching");
    const overlay = document.createElement("div");
    overlay.className = "theme-transition-overlay";
    document.body.appendChild(overlay);
    setTheme(dark ? "light" : "dark");
    overlay.addEventListener("animationend", () => {
      overlay.remove();
      root.classList.remove("theme-switching");
    }, {
      once: true,
    });
    // Safety cleanup in case the animation is skipped (reduced motion).
    setTimeout(() => {
      overlay.remove();
      root.classList.remove("theme-switching");
    }, 450);
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn("shrink-0", className)}
    >
      {mounted ? (
        dark ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )
      ) : (
        <span className="size-4" />
      )}
    </Button>
  );
}
