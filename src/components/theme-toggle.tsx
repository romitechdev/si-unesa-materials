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
  const nextTheme = dark ? "light" : "dark";

  function toggle() {
    // Disable color cross-fades so the theme snaps instantly under the wipe.
    const root = document.documentElement;
    root.classList.add("theme-switching");

    const applyTheme = () => {
      setTheme(nextTheme);
      root.classList.remove("theme-switching");
    };

    // Prefer the View Transitions API: the browser snapshots the old page,
    // swaps the theme, then reveals the new snapshot via the CSS
    // ::view-transition-new(root) keyframes (see globals.css).
    const vt = (document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<unknown>; finished: Promise<unknown> } }).startViewTransition;
    if (typeof vt === "function") {
      const transition = vt.call(document, applyTheme);
      transition.ready
        .catch(() => {})
        .then(() => {
          // No-op; CSS handles the reveal.
        });
      transition.finished
        .catch(() => {})
        .then(() => root.classList.remove("theme-switching"));
      return;
    }

    // Fallback: play the same reveal keyframes on a fixed overlay.
    const overlay = document.createElement("div");
    overlay.className =
      "theme-transition-overlay" + (nextTheme === "dark" ? " theme-transition-overlay--dark" : "");
    document.body.appendChild(overlay);
    applyTheme();
    const cleanup = () => overlay.remove();
    overlay.addEventListener("animationend", cleanup, { once: true });
    setTimeout(cleanup, 900);
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
