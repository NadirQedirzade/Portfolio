"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { easeOut, springQuick } from "@/lib/motion";
import { useDialog } from "@/lib/useDialog";
import ThemeToggle from "./ThemeToggle";

const MAIL = "mailto:nqedirzade08@gmail.com";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  // Focus trap, Escape, scroll lock and focus restore while the menu is open.
  useDialog(open, headerRef, close, toggleRef);

  // The bar gains its material once content scrolls beneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: mark the section nearest the middle of the viewport.
  useEffect(() => {
    const ids = ["top", ...navLinks.map((l) => l.href.slice(1))];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "top" ? "" : entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Leaving the mobile layout closes the menu.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const bar =
    "absolute h-[1.5px] w-full rounded-full bg-paper transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]";

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      {/* Material layer — fades in with scroll instead of a hard border. */}
      <div
        aria-hidden
        className={`material absolute inset-x-0 top-0 h-12 border-b border-line transition-opacity duration-300 ${
          scrolled || open ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav
        aria-label="Primary"
        className="wrap relative flex h-12 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]"
      >
        <a
          href="#top"
          aria-label="Back to top"
          className="press inline-flex shrink-0 items-center justify-self-start"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.png"
            alt="Nadir Qədirzadə logo"
            className="logo-mark h-7 w-auto md:h-8"
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative block py-3 text-[13px] tracking-[-0.01em] transition-colors duration-150 ${
                    isActive ? "text-paper" : "text-muted hover:text-paper"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 bottom-2 h-px origin-left bg-accent transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-self-end md:gap-3">
          <ThemeToggle />

          <a
            href={MAIL}
            className="btn btn-secondary btn-sm hidden md:inline-flex"
          >
            Say hello
          </a>

          <button
            ref={toggleRef}
            onClick={() => setOpen((v) => !v)}
            className="press -mr-3 flex h-11 w-11 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden className="relative block h-3 w-[18px]">
              <span
                className={`${bar} top-0 ${open ? "translate-y-[5.25px] rotate-45" : ""}`}
              />
              <span
                className={`${bar} bottom-0 ${open ? "-translate-y-[5.25px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen sheet. Enters and exits along the same path. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="material fixed inset-x-0 bottom-0 top-12 overflow-y-auto !bg-ink/[0.98] md:hidden"
          >
            <ul className="wrap pb-12 pt-6">
              {navLinks.map((link, i) => {
                const isActive = active === link.href.slice(1);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springQuick, delay: 0.04 * i + 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={close}
                      aria-current={isActive ? "location" : undefined}
                      className={`block py-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] ${
                        isActive ? "text-accent" : "text-paper"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...springQuick,
                  delay: 0.04 * navLinks.length + 0.04,
                }}
                className="mt-6"
              >
                <a
                  href={MAIL}
                  onClick={close}
                  className="btn btn-primary w-full"
                >
                  Say hello
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
