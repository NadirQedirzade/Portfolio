import type { Config } from "tailwindcss";

/**
 * Design tokens.
 * Token names (ink / surface / paper / muted / line / accent) are unchanged so
 * existing class names keep working. Values live in globals.css, one set per
 * theme, (graphite dark / off-white light — designed separately, not inverted):
 *   ink      → systemBackground
 *   surface  → secondarySystemBackground (elevated)
 *   surface2 → tertiary (cards, controls)
 *   paper    → label            muted → secondaryLabel      subtle → tertiaryLabel
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // Hover styles only apply on devices that can actually hover — touch taps
  // no longer leave "stuck" hover states (animate skill §7).
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        // Every color is a CSS variable (see globals.css) so the whole site
        // re-themes by flipping <html data-theme>. The `<alpha-value>` form keeps
        // opacity modifiers like `bg-ink/95` working.
        ink: "rgb(var(--ink) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surface2: "rgb(var(--surface2) / <alpha-value>)",
        surface3: "rgb(var(--surface3) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        fill: "var(--fill)",
        "fill-hover": "var(--fill-hover)",
      },
      fontFamily: {
        // System font first: SF Pro (with automatic optical sizing) on Apple
        // devices, the platform UI face everywhere else. No network request.
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        // Used selectively: labels, indices, technical metadata, the build log.
        mono: [
          "ui-monospace",
          "SF Mono",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
