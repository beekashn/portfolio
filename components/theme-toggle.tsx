"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isDark = mounted && resolvedTheme === "dark";

  const handleToggle = async () => {
    const nextTheme = isDark ? "light" : "dark";

    if (
      !mounted ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    await transition.ready;

    const rect = buttonRef.current?.getBoundingClientRect();
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const originY = rect ? rect.top + rect.height / 2 : 0;
    const endRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY),
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${originX}px ${originY}px)`,
          `circle(${endRadius}px at ${originX}px ${originY}px)`,
        ],
        filter: ["brightness(1.08)", "brightness(1)"],
        opacity: [0.82, 1],
      },
      {
        duration: 720,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4 rotate-0 transition-all duration-500 ease-out" />
        ) : (
          <Moon className="h-4 w-4 rotate-12 transition-all duration-500 ease-out" />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
