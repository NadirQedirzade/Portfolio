/**
 * Shared motion tokens — one place to tune how the whole site moves.
 *
 * Springs are expressed Apple-style (duration + bounce ≈ response + damping).
 * apple-design §4: default to critically damped (bounce 0); only add bounce
 * when a gesture carried momentum.
 */

/** Default UI spring — menus, drawers, lightbox. No overshoot. */
export const spring = { type: "spring", duration: 0.45, bounce: 0 } as const;

/** Quick spring for small state changes (icon morphs, nav items). */
export const springQuick = { type: "spring", duration: 0.3, bounce: 0 } as const;

/** Scroll-reveal spring — a touch longer, it is marketing motion not UI. */
export const springReveal = { type: "spring", duration: 0.8, bounce: 0 } as const;

/** Strong ease-out (animate skill §5) for tweens that aren't springs. */
export const easeOut = [0.23, 1, 0.32, 1] as const;

/** Fade + 16px rise. Small distance on purpose: motion supports, never performs. */
export const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
} as const;
