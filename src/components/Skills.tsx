import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <SectionHeading eyebrow="Habilidades" title="Con lo que construyo" />

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items], gi) => (
            <Reveal key={group} delay={gi * 0.1}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                {group}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 py-2 text-sm transition-colors hover:border-brand hover:text-brand"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
