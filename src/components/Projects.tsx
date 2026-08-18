import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <SectionHeading eyebrow="Proyectos" title="Trabajo destacado" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {p.source}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10">
          <p className="text-sm text-[var(--text-muted)]">
            ¿Quieres ver código o una demo en vivo?{" "}
            <a href="#contacto" className="text-brand font-medium">
              Escríbeme
            </a>{" "}
            y te comparto lo que necesites.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
