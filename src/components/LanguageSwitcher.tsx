import { useLocale } from "@/i18n/locale";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground shadow-soft transition hover:border-primary/40 hover:text-foreground ${className}`}
    >
      <span className={locale === "en" ? "text-foreground" : "opacity-45"}>EN</span>
      <span className="text-border">/</span>
      <span className={locale === "vi" ? "text-foreground" : "opacity-45"}>VI</span>
    </button>
  );
}
