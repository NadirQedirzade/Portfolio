"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile, badges } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10"
    >
      {/* Blueprint grid backdrop — the recurring drafting-table motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.div
          variants={item}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
          Available for internships &amp; collaboration
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[13vw] leading-[0.95] text-paper sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          Nadir
          <br />
          <span className="italic text-muted">Qədirzadə</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl font-mono text-sm uppercase tracking-[0.15em] text-accent"
        >
          {profile.headline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className="bracket rounded-2xl border border-line bg-surface/60 px-4 py-3"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {b.role}
              </p>
              <p className="mt-0.5 text-sm text-paper">
                {b.label} <span className="text-muted">— {b.note}</span>
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:flex"
        aria-label="Scroll to About section"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
