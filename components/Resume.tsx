import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="section-y">
      <div className="wrap">
        <SectionHeading index="04" eyebrow="Resume" title="The full record." />

        <Reveal className="flex flex-col items-start justify-between gap-10 rounded-md border border-line bg-surface px-8 py-10 md:flex-row md:items-center md:px-12 md:py-12">
          <div>
            <h3 className="t-headline text-paper">Curriculum Vitae</h3>
            <p className="t-body mt-3 max-w-md text-muted">
              Education, project history, and technical skills in one document.
            </p>
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shrink-0"
          >
            View resume
            <ArrowUpRight size={16} aria-hidden className="nudge" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
