"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

/**
 * A 1px hairline that draws itself from the left when it scrolls into view.
 * Purpose: it marks where a section begins. Plays once; with reduced motion
 * the line simply appears.
 */
export default function Rule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: easeOut }}
      className={`h-px origin-left bg-line ${className}`}
    />
  );
}
