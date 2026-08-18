import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
        {eyebrow}
      </p>
      <h2
        className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
    </Reveal>
  );
}
