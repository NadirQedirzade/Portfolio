"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible modal behaviour shared by the case-study drawer, the certificate
 * lightbox and the mobile navigation (HIG › Modality, Accessibility):
 *  - Escape closes
 *  - Tab / Shift+Tab are trapped inside `containerRef`
 *  - focus moves in on open and is restored to the trigger on close
 *  - page scroll is locked while open
 */
export function useDialog(
  active: boolean,
  containerRef: RefObject<HTMLElement>,
  onClose: () => void,
  initialFocusRef?: RefObject<HTMLElement>
) {
  // Keep the latest onClose without re-running the effect (callers often pass
  // inline arrows, which would otherwise re-subscribe on every render).
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!active) return;
    const root = containerRef.current;
    const trigger = document.activeElement as HTMLElement | null;

    // Lock scroll. `scrollbar-gutter: stable` (globals.css) prevents layout shift.
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";

    // Move focus into the dialog.
    (initialFocusRef?.current ?? root)?.focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab" || !root) return;

      const items = Array.from(
        root.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (items.length === 0) {
        e.preventDefault();
        root.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement as HTMLElement | null;

      if (!current || !root.contains(current)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (current === first || current === root)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      html.style.overflow = prevOverflow;
      trigger?.focus?.({ preventScroll: true });
    };
  }, [active, containerRef, initialFocusRef]);
}
