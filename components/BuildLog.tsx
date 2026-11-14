import { skills } from "@/lib/data";

/**
 * "Toolkit — build log": the existing Current / In progress / Next concept,
 * set as a notebook. Each group is a numbered cell with a Jupyter-style prompt
 * gutter and a trailing "# status" comment. Content is unchanged; status is
 * carried by tone (what I use now reads brightest).
 *
 * It is a log, not a fake terminal: no window chrome, no cursor, no commands.
 */
type Entry = {
  label: string;
  status: string;
  items: string[];
  tone: string;
};

const entries: Entry[] = [
  { label: "Current", status: "In use", items: skills.current, tone: "text-paper" },
  { label: "In progress", status: "Learning", items: skills.inProgress, tone: "text-muted" },
  { label: "Next", status: "Queued", items: skills.next, tone: "text-subtle" },
];

export default function BuildLog() {
  return (
    <div
      role="group"
      aria-label="Toolkit — build log"
      className="overflow-hidden rounded-md border border-line bg-surface"
    >
      <div className="border-b border-line px-4 py-3">
        <p className="t-meta text-muted">Toolkit — build log</p>
      </div>

      <ol>
        {entries.map((e, i) => (
          <li
            key={e.label}
            className="grid grid-cols-[3.75rem_1fr] gap-x-3 border-b border-line px-4 py-4 transition-colors duration-200 last:border-b-0 hover:bg-fill sm:grid-cols-[4.25rem_1fr]"
          >
            <span aria-hidden className="t-meta pt-px text-subtle">
              In [{i + 1}]:
            </span>

            <div>
              <div className="flex items-baseline justify-between gap-3">
                <p className="t-meta font-medium text-paper">{e.label}</p>
                <p className="t-meta text-subtle">
                  <span aria-hidden># </span>
                  {e.status}
                </p>
              </div>

              <ul className={`t-meta mt-2.5 flex flex-wrap gap-x-2 gap-y-1 ${e.tone}`}>
                {e.items.map((item, k) => (
                  <li key={item} className="flex gap-2">
                    {item}
                    {k < e.items.length - 1 && (
                      <span aria-hidden className="text-line-strong">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
