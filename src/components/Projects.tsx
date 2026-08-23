"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const thumb = project.youtubeId
    ? `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
    : undefined;

  return (
    <motion.a
      href={project.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group block overflow-hidden rounded-3xl border border-line bg-surface/50 transition-colors hover:border-accent/50"
    >
      <div className="relative aspect-video overflow-hidden bg-surface2">
        {thumb && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.2em] text-paper/80">
          {project.index}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-ink/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
            <Play size={18} className="ml-0.5" fill="currentColor" />
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl text-paper">{project.name}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
              {project.role}
            </p>
          </div>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Hackathon builds and a founder-led product — spanning civic data, medical imaging, and education."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
