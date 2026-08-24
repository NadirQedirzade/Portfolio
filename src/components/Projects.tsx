"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import CaseStudyModal from "./CaseStudyModal";

function FeaturedProjectCard({
  project,
  i,
  onOpenCaseStudy,
}: {
  project: Project;
  i: number;
  onOpenCaseStudy: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-3xl border border-line bg-surface/50 transition-colors hover:border-accent/40 md:grid md:grid-cols-5"
    >
      <div className="relative aspect-video overflow-hidden bg-surface2 md:col-span-2 md:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.coverImage}
          alt={`${project.name} cover`}
          className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent md:bg-gradient-to-r" />
        <div className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.2em] text-paper/80">
          {project.index}
        </div>
      </div>

      <div className="p-6 md:col-span-3 md:p-8">
        {project.tags && (
          <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
        <h3 className="font-display text-2xl text-paper md:text-3xl">
          {project.index} — {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="group/btn inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent"
            >
              View Case Study
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </button>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Five problems worth building for."
          description="Statistical case studies and founder-led / hackathon builds — spanning risk analysis, civic data, medical imaging, and education."
        />

        <div className="mb-6 space-y-6">
          {featured.map((p, i) => (
            <FeaturedProjectCard
              key={p.id}
              project={p}
              i={i}
              onOpenCaseStudy={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>
      </div>

      <CaseStudyModal
        caseStudy={activeProject?.caseStudy ?? null}
        githubUrl={activeProject?.githubUrl}
        tags={activeProject?.tags}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
