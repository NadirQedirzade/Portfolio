"use client";

import { motion } from "framer-motion";
import { aboutParagraphs, skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function SkillGroup({
  label,
  status,
  items,
}: {
  label: string;
  status: string;
  items: string[];
}) {
  return (
    <div className="border-t border-line py-5 first:border-t-0">
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-paper">
          {label}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
          {status}
        </p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {items.join(" · ")}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="About" title="" />

        <div className="grid gap-14 md:grid-cols-5 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 md:col-span-3"
          >
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-paper md:text-xl"
                    : "leading-relaxed text-muted"
                }
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <div className="rounded-3xl border border-line bg-surface/50 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Toolkit — build log
              </p>
              <div className="mt-4">
                <SkillGroup label="Current" status="In use" items={skills.current} />
                <SkillGroup
                  label="In progress"
                  status="Learning"
                  items={skills.inProgress}
                />
                <SkillGroup label="Next" status="Queued" items={skills.next} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
