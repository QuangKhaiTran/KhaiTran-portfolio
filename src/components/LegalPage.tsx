import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/locale";
import { riseDelay } from "@/components/motion";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  const { content, t } = useLocale();
  const { brand, contact } = content.siteConfig;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.legalBack}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <span className="text-sm font-semibold">{brand.name}</span>
          </div>
        </div>
      </header>

      <main className="container-page max-w-3xl py-16 lg:py-20">
        <h1 className="rise-in text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="rise-in mt-3 text-sm text-muted-foreground" style={riseDelay(90)}>
          {t.legalLastUpdated} {lastUpdated}
        </p>
        <div
          style={riseDelay(180)}
          className="rise-in prose-legal mt-10 space-y-6 text-[15px] leading-relaxed text-foreground/90">
          {children}
        </div>
        <p
          className="rise-in mt-12 border-t border-border pt-8 text-sm text-muted-foreground"
          style={riseDelay(260)}
        >
          {t.legalQuestions}{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-primary hover:underline">
            {contact.email}
          </a>
        </p>
      </main>
    </div>
  );
}
