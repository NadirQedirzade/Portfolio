import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Nadir Qədirzadə — {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-xs text-muted/70">
            AzTU · Mechatronics &amp; Robotics Engineering
          </p>
        </div>

        <div className="flex items-center gap-5 text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
