"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Play } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import CaseStudyModal from "./CaseStudyModal";
import Reveal from "./Reveal";

/**
 * Projects with a case study / GitHub link are rendered by ProjectEntry, so
 * those entries cannot drift apart. Projects that are a YouTube walkthrough
 * (a `videoUrl`) are rendered as media tiles below them. Entry structure:
 *
 *   desktop  [ number + labels | title + description | links ]
 *   tablet   [ number + labels | title + description ]
 *            [                 | links                ]
 *   mobile   number + labels → title → description → links
 *
 * Labels are the project's tags when it has them, otherwise its role. Links
 * are only rendered for URLs that exist in data.ts.
 */

/** Left column: the project number, then its labels (mono, uppercase). */
function Meta({ project }: { project: Project }) {
  const labels = project.tags?.length ? project.tags : [project.role];
  return (
    <div>
      <p className="t-meta text-accent">{project.index}</p>
      <ul className="t-meta mt-2 flex flex-wrap gap-y-1 uppercase text-muted md:mt-3 md:flex-col">
        {labels.map((label) => (
          <li
            key={label}
            // Slash separators when labels sit in a row (mobile); none when stacked.
            className="after:mx-3 after:text-line-strong after:content-['/'] last:after:content-none md:after:content-none"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Right column: the same link style for every action. */
function Links({
  project,
  onOpenCaseStudy,
  className = "",
}: {
  project: Project;
  onOpenCaseStudy: (p: Project) => void;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 lg:flex-nowrap ${className}`}
    >
      {project.caseStudy && (
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          aria-haspopup="dialog"
          className="link-action"
        >
          View Case Study
          <ArrowUpRight size={16} aria-hidden className="nudge" />
        </button>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-action"
        >
          <Github size={16} aria-hidden />
          GitHub
          <ArrowUpRight size={15} aria-hidden className="nudge" />
        </a>
      )}
    </div>
  );
}

function ProjectEntry({
  project,
  onOpenCaseStudy,
}: {
  project: Project;
  onOpenCaseStudy: (p: Project) => void;
}) {
  return (
    <Reveal>
      <article className="row grid gap-y-5 border-t border-line py-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-x-8 md:py-10 lg:grid-cols-[12rem_minmax(0,1fr)_17rem]">
        <div className="md:row-span-2 lg:row-span-1">
          <Meta project={project} />
        </div>

        <div>
          <h3 className="t-headline text-balance text-paper">{project.name}</h3>
          <p className="t-body mt-3 max-w-xl text-muted">
            {project.description}
          </p>
        </div>

        <Links
          project={project}
          onOpenCaseStudy={onOpenCaseStudy}
          className="md:col-start-2 lg:col-start-3 lg:row-start-1 lg:-mt-1 lg:self-start"
        />
      </article>
    </Reveal>
  );
}

/** Video projects: a media tile linking to the walkthrough, text set beneath. */
function VideoProject({ project, i }: { project: Project; i: number }) {
  const thumb = project.youtubeId
    ? `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
    : undefined;

  return (
    <Reveal delay={i * 0.06}>
      <a
        href={project.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group press block"
      >
        <div className="relative aspect-video overflow-hidden rounded-md border border-line bg-[#171717]">
          {thumb && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt=""
              className="tone zoom-img h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          )}
          <span className="t-meta absolute left-3 top-3 text-white/80">
            {project.index}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/65 text-white">
              <Play size={16} className="ml-0.5" fill="currentColor" aria-hidden />
            </span>
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="t-subhead text-paper">{project.name}</h3>
            <p className="t-meta mt-1.5 text-accent">{project.role}</p>
          </div>
          <ArrowUpRight
            size={20}
            aria-hidden
            className="nudge mt-0.5 shrink-0 text-subtle"
          />
        </div>
        <p className="t-small mt-3 text-muted">{project.description}</p>
      </a>
    </Reveal>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const videos = projects.filter((p) => p.videoUrl);
  const entries = projects.filter((p) => !p.videoUrl);

  return (
    <section id="projects" className="section-y">
      <div className="wrap">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Projects"
          description="Statistical & regression case studies and founder-led / hackathon builds — spanning house-price modeling, risk analysis, civic data, medical imaging, and education."
        />

        <div className="border-b border-line">
          {entries.map((p) => (
            <ProjectEntry
              key={p.id}
              project={p}
              onOpenCaseStudy={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {videos.length > 0 && (
          <div className="mt-16 grid gap-x-8 gap-y-14 md:mt-24 md:grid-cols-3">
            {videos.map((p, i) => (
              <VideoProject key={p.id} project={p} i={i} />
            ))}
          </div>
        )}
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
