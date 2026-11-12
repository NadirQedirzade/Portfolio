"use client";

import { MotionConfig } from "framer-motion";

/**
 * One switch for every Framer Motion animation on the site.
 * `reducedMotion="user"` honours prefers-reduced-motion: transform / layout
 * motion is dropped, opacity changes are kept — "gentler, not zero"
 * (apple-design §14, animate §7).
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
