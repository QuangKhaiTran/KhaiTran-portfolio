import { ArrowDown, ArrowRight } from "lucide-react";
import { getPortfolioImage } from "@/data/portfolio";
import { useLocale } from "@/i18n/locale";

const HERO_SHOTS = [
  { key: "projectLoan" as const, label: "ERP & Loan" },
  { key: "projectHotel" as const, label: "Y Hotel" },
  { key: "projectCafinex" as const, label: "Cafinex" },
  { key: "projectPetId" as const, label: "PETID" },
];

export function Hero() {
  const { content } = useLocale();
  const { hero } = content.siteConfig;

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border gradient-hero"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="sm:hidden">BUSINESS SOFTWARE</span>
            <span className="hidden sm:inline">{hero.eyebrow}</span>
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="sm:hidden">
              Custom web apps, internal tools, SaaS and AI automation.
            </span>
            <span className="hidden sm:inline">{hero.subheadline}</span>
          </p>
          <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-muted-foreground sm:block">
            {hero.supportingText}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.primaryCta.replace(" →", "")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-background/80 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.secondaryCta.replace(" ↓", "")}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground/80">{hero.proofLine}</p>
            <p className="hidden sm:block">{hero.locationLine}</p>
            <p className="sm:hidden">9+ production projects</p>
          </div>
        </div>

        <div className="relative hidden sm:block" aria-label="Selected production work">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-brand-soft/20 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-hero">
            <div className="border-b border-border px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Selected production work
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              {HERO_SHOTS.map((shot, i) => (
                <figure
                  key={shot.key}
                  className={`relative overflow-hidden rounded-xl bg-muted ${
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={getPortfolioImage(shot.key)}
                    alt={`${shot.label} project screenshot`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-3 pb-2 pt-8 text-[11px] font-medium text-white">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
