import { aboutParagraphs } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import BuildLog from "./BuildLog";
import Reveal from "./Reveal";

export default function About() {
  const [lede, ...rest] = aboutParagraphs;

  return (
    <section id="about" className="section-y">
      <div className="wrap">
        <SectionHeading index="01" eyebrow="About" title="" />

        <div className="grid gap-14 md:grid-cols-12 md:gap-12 lg:gap-20">
          <Reveal className="space-y-6 md:col-span-7">
            <p className="t-lede text-paper">{lede}</p>
            {rest.map((p, i) => (
              <p key={i} className="t-body text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-5">
            <BuildLog />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
