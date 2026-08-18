import { ArrowUp } from "lucide-react";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
        <p>
          © {new Date().getFullYear()} {profile.name} · Kevmart
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--text)]"
        >
          Volver arriba <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
