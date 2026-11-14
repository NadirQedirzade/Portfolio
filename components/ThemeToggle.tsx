"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const BROWSER_CHROME: Record<Theme, string> = {
  light: "#F8F9FA",
  dark: "#0D0D0D",
};

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  // Keep the mobile browser's toolbar colour in step with the page.
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.setAttribute("content", BROWSER_CHROME[theme]));
}

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem("theme");
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Light / dark switch.
 *  - The initial theme is set before first paint by the inline script in
 *    layout.tsx: the saved choice, else the OS preference.
 *  - Until the person makes a choice, the site keeps following the OS.
 *  - The page cross-fades between themes (View Transitions API) unless the
 *    person prefers reduced motion; unsupported browsers switch instantly.
 *  - The button shows the icon of the mode you are in (moon / sun).
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current: Theme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    setTheme(current);
    applyTheme(current);

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onOsChange = (e: MediaQueryListEvent) => {
      if (readStored()) return; // an explicit choice always wins
      const next: Theme = e.matches ? "light" : "dark";
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener("change", onOsChange);
    return () => mq.removeEventListener("change", onOsChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked — the choice still applies for this visit */
    }
    const run = () => {
      applyTheme(next);
      setTheme(next);
    };
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => unknown;
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduce) doc.startViewTransition(run);
    else run();
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme
          ? `Switch to ${theme === "light" ? "dark" : "light"} mode`
          : "Toggle light or dark mode"
      }
      className="group press flex h-11 w-11 items-center justify-center"
    >
      <span className="relative block h-9 w-9 rounded-md border border-line text-paper transition-colors duration-150 group-hover:border-line-strong group-hover:bg-fill">
        <Moon size={17} aria-hidden className="theme-icon theme-moon" />
        <Sun size={18} aria-hidden className="theme-icon theme-sun" />
      </span>
    </button>
  );
}
