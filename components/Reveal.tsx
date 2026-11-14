"use client";

import { motion } from "framer-motion";
import { reveal, springReveal } from "@/lib/motion";

/**
 * Scroll-triggered entrance used by every section. Plays once; siblings pass
 * an index-based `delay` for a 60ms stagger.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ ...springReveal, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
