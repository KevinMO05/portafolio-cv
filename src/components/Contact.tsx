import { Mail, MapPin, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/resume";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: "WhatsApp", href: profile.whatsapp },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Contacto"
        title="Hablemos de tu próximo proyecto"
        align="center"
      />

      <Reveal delay={0.1} className="mt-6 text-center">
        <p className="mx-auto max-w-lg text-[var(--text-muted)]">
          Disponible para proyectos freelance y oportunidades full-time.
          Respondo lo antes posible.
        </p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
          <MapPin size={14} /> {profile.location}
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mt-10 flex justify-center">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.24} className="mt-8 flex justify-center gap-3">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="grid place-items-center h-11 w-11 rounded-full border border-[var(--border-strong)] transition-colors hover:border-brand hover:text-brand"
          >
            <Icon size={17} />
          </a>
        ))}
      </Reveal>
    </section>
  );
}
