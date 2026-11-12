"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  type PanInfo,
} from "framer-motion";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { achievements, certificates } from "@/lib/data";
import { spring, easeOut } from "@/lib/motion";
import { useDialog } from "@/lib/useDialog";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const circleBtn =
  "press flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition-colors duration-150 hover:bg-white/10";

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // -1 = arrived moving backward, 1 = forward, 0 = opened from the grid.
  const [dir, setDir] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  // One long-lived figure, animated imperatively when the certificate changes.
  // (Re-keying a motion element inside AnimatePresence strands its exit.)
  const figureControls = useAnimationControls();

  const close = () => setActiveIndex(null);
  const step = (d: 1 | -1) => {
    setDir(d);
    setActiveIndex((i) =>
      i === null ? null : (i + d + certificates.length) % certificates.length
    );
  };
  const prev = () => step(-1);
  const next = () => step(1);

  useDialog(activeIndex !== null, dialogRef, close);

  // Slide the new certificate in from the direction of travel.
  useEffect(() => {
    if (activeIndex === null) return;
    figureControls.set({ opacity: 0, scale: 0.96, x: dir * 32 });
    figureControls.start({ opacity: 1, scale: 1, x: 0, transition: spring });
  }, [activeIndex, dir, figureControls]);

  // Arrow keys browse the archive while the lightbox is open.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80 || info.velocity.x < -500) next();
    else if (info.offset.x > 80 || info.velocity.x > 500) prev();
  };

  const current = activeIndex !== null ? certificates[activeIndex] : null;

  return (
    <section id="achievements" className="section-y">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="Achievements"
          title="Recognition along the way."
          description="Two moments from the road, plus the full certificate archive — click any tile to open it."
        />

        {/* Feature photos */}
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-surface2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={a.title}
                    className="tone zoom-img h-full w-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                      img.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 hidden items-center justify-center text-subtle">
                    <Award size={28} aria-hidden />
                  </div>
                </div>
                <figcaption className="mt-5">
                  <p className="t-subhead text-paper">{a.title}</p>
                  <p className="t-small mt-1 text-muted">{a.subtitle}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Certificate archive */}
        <Reveal className="mt-20 md:mt-28">
          <h3 className="t-headline mb-8 text-paper">Certificate archive</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {certificates.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setDir(0);
                  setActiveIndex(i);
                }}
                aria-haspopup="dialog"
                aria-label={`Open ${c.title}`}
                className="group press text-left"
              >
                <span className="relative block aspect-[4/3] overflow-hidden rounded-md border border-line bg-surface transition-colors duration-200 group-hover:border-line-strong">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.src}
                    alt=""
                    loading="lazy"
                    className="zoom-img h-full w-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                </span>
                <span className="t-caption mt-3 block text-muted transition-colors duration-150 group-hover:text-paper">
                  {c.title}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            key="lightbox"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            tabIndex={-1}
            onKeyDown={onKeyDown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 outline-none md:px-24"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className={`${circleBtn} absolute right-4 top-4 md:right-6 md:top-6`}
              aria-label="Close"
            >
              <X size={20} aria-hidden />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className={`${circleBtn} absolute left-3 md:left-8`}
              aria-label="Previous certificate"
            >
              <ChevronLeft size={24} aria-hidden />
            </button>

            <motion.figure
              initial={{ opacity: 0, scale: 0.96 }}
              animate={figureControls}
              drag="x"
              dragSnapToOrigin
              dragElastic={0.25}
              onDragEnd={onDragEnd}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[88vh] max-w-full cursor-grab flex-col items-center active:cursor-grabbing"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.src}
                alt={current.title}
                draggable={false}
                className="max-h-[76vh] w-auto max-w-full select-none rounded-md object-contain"
              />
              <figcaption className="t-small mt-5 text-center text-white/70">
                {current.title}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className={`${circleBtn} absolute right-3 md:right-8`}
              aria-label="Next certificate"
            >
              <ChevronRight size={24} aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
