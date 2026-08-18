import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/theme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="relative grid place-items-center h-9 w-9 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:border-brand cursor-pointer"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${dark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${dark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`}
      />
    </button>
  );
}
