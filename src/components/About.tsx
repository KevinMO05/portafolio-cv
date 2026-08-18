import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, profile } from "../data/resume";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading eyebrow="Sobre mí" title="Cómo trabajo" />

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <Reveal delay={0.08} className="md:col-span-3">
          <p className="text-xl sm:text-2xl leading-relaxed text-balance text-[var(--text)]">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.16} className="md:col-span-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-2 text-brand">
              <GraduationCap size={18} />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Educación
              </span>
            </div>
            <p className="mt-4 font-semibold">{education.school}</p>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              {education.program}
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              {education.location} · {education.period}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
