import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading eyebrow="Experiencia" title="Dónde he estado" />

      <div className="mt-14 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border-strong)] sm:left-[9px]" />

        <ol className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 0.08}>
              <li className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-brand bg-[var(--bg)] sm:h-[19px] sm:w-[19px]" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    {job.role} <span className="text-[var(--text-muted)] font-normal">· {job.company}</span>
                  </h3>
                  {job.current && (
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
                      Actual
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {job.location} · {job.period}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[15px] leading-relaxed text-[var(--text)]/90 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--text-muted)]"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
