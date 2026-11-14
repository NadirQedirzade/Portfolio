import Reveal from "./Reveal";
import Rule from "./Rule";

/**
 * Section opener: a drawn rule, a mono index/label, then the title.
 * Props are unchanged from the original. When a section supplies no `title`
 * (About), the eyebrow becomes the heading so every section has a real <h2>.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <Rule className="mb-8" />
      <Reveal>
        <p className="t-eyebrow flex items-center gap-3 text-muted">
          <span className="text-accent">{index}</span>
          {title && (
            <>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <span>{eyebrow}</span>
            </>
          )}
        </p>
        <h2 className="t-title mt-5 max-w-3xl text-balance text-paper">
          {title || eyebrow}
        </h2>
        {description && (
          <p className="t-lede mt-5 max-w-2xl text-pretty text-muted">
            {description}
          </p>
        )}
      </Reveal>
    </div>
  );
}
