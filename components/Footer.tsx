import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const iconLink =
  "press flex h-11 w-11 items-center justify-center rounded-md text-subtle transition-colors duration-150 hover:text-paper";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="t-small text-muted">
            Nadir Qədirzadə — {new Date().getFullYear()}
          </p>
          <p className="t-caption mt-1 text-subtle">
            AzTU · Mechatronics &amp; Robotics Engineering
          </p>
        </div>

        <div className="-ml-3 flex items-center gap-1 md:ml-0 md:-mr-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLink}
          >
            <Github size={19} aria-hidden />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLink}
          >
            <Linkedin size={19} aria-hidden />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className={iconLink}
          >
            <Mail size={19} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
