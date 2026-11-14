"use client";

import { useId, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useDragControls,
  type PanInfo,
} from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/lib/data";
import { spring, easeOut } from "@/lib/motion";
import { useDialog } from "@/lib/useDialog";

/**
 * Case-study drawer (HIG › Modality: a sheet for a self-contained task).
 *  - Slides in from the right on a critically damped spring and leaves the
 *    same way (spatial consistency).
 *  - Can be grabbed by its header and thrown away; release velocity carries
 *    into the exit spring (interruptible, velocity-aware).
 *  - Esc, scrim click and the close button all dismiss; focus is trapped and
 *    restored to the button that opened it.
 */
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
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const dragControls = useDragControls();
  const [scrolled, setScrolled] = useState(false);

  useDialog(!!caseStudy, panelRef, onClose);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    // Decide by intent: far enough, or flicked toward the edge.
    if (info.offset.x > 120 || info.velocity.x > 500) onClose();
  };

  return (
    <AnimatePresence onExitComplete={() => setScrolled(false)}>
      {caseStudy && (
        <motion.div
          key="case-study"
          className="fixed inset-0 z-[100] flex justify-end"
        >
          {/* Scrim — dims the page; clicking it dismisses. */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={spring}
            drag="x"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.6 }}
            dragTransition={{ bounceStiffness: 420, bounceDamping: 42 }}
            onDragEnd={onDragEnd}
            className="relative flex h-full w-full max-w-[44rem] flex-col overflow-hidden border-l border-line bg-surface outline-none"
          >
            {/* Header: translucent, floats above the scrolling content. */}
            <div
              onPointerDown={(e) => {
                if ((e.target as HTMLElement).closest("button")) return;
                dragControls.start(e);
              }}
              className={`absolute inset-x-0 top-0 z-10 flex h-16 touch-none items-center justify-end border-b px-5 transition-[border-color] duration-200 md:px-8 ${
                scrolled ? "material border-line" : "border-transparent"
              }`}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="press flex h-9 w-9 items-center justify-center rounded-md border border-line text-paper transition-colors duration-150 hover:border-line-strong hover:bg-fill"
              >
                <X size={17} aria-hidden />
              </button>
            </div>

            {/* Scrollable body */}
            <div
              className="h-full overflow-y-auto overscroll-contain px-6 pb-16 pt-20 md:px-10"
              onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 8)}
            >
              {tags && (
                <p className="t-eyebrow mb-3 flex flex-wrap gap-x-3 gap-y-1 text-accent">
                  {tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </p>
              )}
              <h3
                id={titleId}
                className="t-headline text-balance text-paper"
              >
                {caseStudy.emojiTitle}
              </h3>
              <p className="t-lede mt-6 text-muted">{caseStudy.intro}</p>

              <div className="mt-14 space-y-14">
                {caseStudy.sections.map((section, i) => (
                  <section key={i}>
                    <h4 className="t-subhead mb-5 text-paper">
                      {section.heading}
                    </h4>
                    <div className="space-y-4">
                      {section.blocks.map((block, j) => {
                        if (block.type === "p") {
                          return (
                            <p key={j} className="t-body text-muted">
                              {block.text}
                            </p>
                          );
                        }
                        if (block.type === "sub") {
                          return (
                            <p
                              key={j}
                              className="t-body pt-2 font-medium text-paper"
                            >
                              {block.text}
                            </p>
                          );
                        }
                        return (
                          <ul
                            key={j}
                            className="t-body list-disc space-y-2.5 pl-5 text-muted marker:text-subtle"
                          >
                            {block.items.map((item, k) => (
                              <li key={k}>{item}</li>
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
                  className="btn btn-secondary mt-14"
                >
                  <Github size={16} aria-hidden />
                  View on GitHub
                  <ExternalLink size={14} aria-hidden className="nudge" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
