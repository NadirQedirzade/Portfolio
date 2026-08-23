"use client";

import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" eyebrow="Resume" title="The full record." />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bracket flex flex-col items-start justify-between gap-8 rounded-3xl border border-line bg-surface/50 p-8 md:flex-row md:items-center md:p-12"
        >
          <div className="flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line text-accent">
              <FileText size={20} />
            </span>
            <div>
              <h3 className="font-display text-2xl text-paper md:text-3xl">
                Curriculum Vitae
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Education, project history, and technical skills in one
                document.
              </p>
            </div>
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            View resume
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
