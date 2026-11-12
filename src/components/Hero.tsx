"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, badges } from "@/lib/data";
import { reveal, springReveal } from "@/lib/motion";
import Portrait from "./Portrait";
import Rule from "./Rule";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: reveal.hidden,
  show: { ...reveal.show, transition: springReveal },
};

/** One row of the hero's spec sheet: mono label, readable value. */
function Spec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-baseline gap-x-4 gap-y-1 border-t border-line py-3 first:border-t-0 sm:grid-cols-[8rem_1fr]">
      <dt className="t-meta text-subtle">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export default function Hero({ portrait }: { portrait?: string }) {
  return (
    <section
      id="top"
      className="grid-bg relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28 md:pt-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="wrap relative"
      >
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Introduction */}
          <div className="lg:col-span-8">
            {/* Hierarchy: name (dominant) → focus (primary direction) → education (secondary). */}
            <motion.h1 variants={item} className="t-name text-paper">
              Nadir{" "}
              <br />
              Qədirzadə
            </motion.h1>

            <motion.p
              variants={item}
              className="t-headline mt-8 max-w-2xl text-balance text-paper md:mt-10 lg:text-[2.25rem] lg:leading-[1.12]"
            >
              {profile.focus}
            </motion.p>

            <motion.dl variants={item} className="mt-8 max-w-2xl md:mt-10">
              <Spec label="Education">
                <span className="t-small text-muted">{profile.education}</span>
              </Spec>
              <Spec label="Availability">
                <span className="t-small text-muted">
                  Available for internships &amp; collaboration
                </span>
              </Spec>
            </motion.dl>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={17} aria-hidden />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Linkedin size={17} aria-hidden />
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={17} aria-hidden />
                {profile.email}
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div variants={item} className="lg:col-span-4">
            <Portrait src={portrait} name={profile.name} />
          </motion.div>
        </div>

        {/* Team roles — a ledger, not cards. */}
        <motion.div variants={item} className="mt-20 md:mt-28">
          <Rule className="mb-8" />
          <ul className="grid gap-x-10 gap-y-8 md:grid-cols-3">
            {badges.map((b) => (
              <li key={b.id}>
                <p className="t-meta text-subtle">{b.role}</p>
                <p className="t-subhead mt-1.5 text-paper">{b.label}</p>
                <p className="t-small mt-1 text-muted">{b.note}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
