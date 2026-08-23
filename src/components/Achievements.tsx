"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { achievements, certificates } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + certificates.length) % certificates.length
    );
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % certificates.length));

  return (
    <section id="achievements" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Achievements"
          title="Recognition along the way."
          description="Two moments from the road, plus the full certificate archive — click any tile to open it."
        />

        {/* Feature cards */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface2"
            >
              <div className="relative aspect-[4/3] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    img.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden pointer-events-none absolute inset-0 flex items-center justify-center bg-surface2/40 text-muted">
                  <Award size={28} />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-10">
                <p className="font-display text-lg text-paper">{a.title}</p>
                <p className="mt-1 text-xs text-muted">{a.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-line bg-surface/40 p-4 md:p-6"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Certificate archive 
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {certificates.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveIndex(i)}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-surface2 transition-colors hover:border-accent/60"
                aria-label={`Open ${c.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-transparent to-transparent p-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted group-hover:text-accent">
                    {c.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={certificates[activeIndex].title}
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 text-muted transition-colors hover:text-paper"
              aria-label="Close"
            >
              <X size={26} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 text-muted transition-colors hover:text-accent md:left-8"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-2xl rounded-2xl border border-line bg-surface p-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={certificates[activeIndex].src}
                alt={certificates[activeIndex].title}
                className="max-h-[70vh] w-full rounded-xl object-contain"
              />
              <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {certificates[activeIndex].title}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 text-muted transition-colors hover:text-accent md:right-8"
              aria-label="Next certificate"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
