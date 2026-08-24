"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/lib/data";

export default function CaseStudyModal({
  caseStudy,
  githubUrl,
  tags,
  onClose,
}: {
  caseStudy: CaseStudy | null;
  githubUrl?: string;
  tags?: string[];
  onClose: () => void;
}) {
  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!caseStudy) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex justify-end bg-ink/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={caseStudy.emojiTitle}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-2xl flex-col border-l border-line bg-surface"
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 border-b border-line bg-surface/95 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4 px-6 py-5 md:px-10 md:py-6">
                <div>
                  {tags && (
                    <div className="mb-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  )}
                  <h3 className="font-display text-xl text-paper md:text-2xl">
                    {caseStudy.emojiTitle}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close case study"
                  className="shrink-0 rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10">
              <p className="mb-10 text-base leading-relaxed text-paper/90 md:text-lg">
                {caseStudy.intro}
              </p>

              <div className="space-y-10">
                {caseStudy.sections.map((section, i) => (
                  <section key={i}>
                    <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {section.heading}
                    </h4>
                    <div className="space-y-3">
                      {section.blocks.map((block, j) => {
                        if (block.type === "p") {
                          return (
                            <p
                              key={j}
                              className="leading-relaxed text-muted"
                            >
                              {block.text}
                            </p>
                          );
                        }
                        if (block.type === "sub") {
                          return (
                            <p
                              key={j}
                              className="mt-4 font-mono text-[11px] uppercase tracking-wider text-paper/80 first:mt-0"
                            >
                              {block.text}
                            </p>
                          );
                        }
                        return (
                          <ul key={j} className="space-y-2 pl-1">
                            {block.items.map((item, k) => (
                              <li
                                key={k}
                                className="flex gap-2.5 leading-relaxed text-muted"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
