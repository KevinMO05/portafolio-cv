import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "../data/resume";

const HeroScene = lazy(() => import("./HeroScene"));
const StarField = lazy(() => import("./StarField"));

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12 w-full">
        <div className="grid md:grid-cols-[minmax(0,560px)_minmax(0,560px)] gap-6 md:gap-10 justify-center items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-medium tracking-wide text-brand"
            >
              {profile.role} · {profile.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-lg text-[var(--text-muted)] max-w-lg"
            >
              {profile.tagline}. Construyo productos de punta a punta: del
              modelo de datos a la interfaz final.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#proyectos"
                className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Ver proyectos
              </a>
              <a
                href="/CV-Kevin-Martinez-Ojeda.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-medium transition-colors hover:border-brand"
              >
                <Download size={15} />
                Descargar CV
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Enviar correo"
                className="grid place-items-center h-11 w-11 rounded-full border border-[var(--border-strong)] transition-colors hover:border-brand"
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </div>

          <div className="relative h-[380px] sm:h-[480px] md:h-[640px] lg:h-[720px]">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
        </div>
      </div>

      <motion.a
        href="#sobre-mi"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
