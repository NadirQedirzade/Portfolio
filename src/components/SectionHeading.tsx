"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
        <span className="text-muted">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-normal text-paper text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
