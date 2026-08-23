"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" aria-label="Back to top" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.png"
            alt="Nadir Qədirzadə logo"
            className="h-8 w-auto md:h-9"
          />
        </a>

        <ul className="hidden md:flex items-center gap-9 font-mono text-xs uppercase tracking-[0.15em] text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:nqedirzade08@gmail.com"
          className="hidden md:inline-flex items-center rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:border-accent hover:text-accent"
        >
          Say hello
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-line bg-ink/95 backdrop-blur-md"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:nqedirzade08@gmail.com"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-accent"
                >
                  Say hello
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
