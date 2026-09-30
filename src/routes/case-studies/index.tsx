import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getPortfolioImage } from "@/data/portfolio";
import { getPortfolioContent } from "@/data/portfolio/content";
import { CaseStudyLiveLink } from "@/components/CaseStudyLiveLink";
import { useLocale } from "@/i18n/locale";

const enContent = getPortfolioContent("en");

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: `Case Studies | ${enContent.siteConfig.brand.name}` },
      {
        name: "description",
        content: enContent.siteConfig.sections.projects.subtitle,
      },
    ],
  }),
  component: CaseStudiesIndexPage,
});

function CaseStudiesIndexPage() {
  const { content, t } = useLocale();
  const { sections } = content.siteConfig;
  const { caseStudies } = content;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.caseStudiesBack}
          </Link>
          <a
            href="/#contact"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-[13px] font-semibold text-background"
          >
            {content.siteConfig.navCta}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <section className="gradient-hero border-b border-border">
        <div className="container-page py-16 lg:py-20">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            {sections.projects.eyebrow}
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {sections.projects.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {sections.projects.subtitle}
          </p>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            {caseStudies.length} {t.caseStudiesCount}
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {caseStudies.map((study, idx) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group"
            >
              <Link
                to="/case-studies/$slug"
                params={{ slug: study.slug }}
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-lift">
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    <img
                      src={getPortfolioImage(study.imageKey)}
                      alt={study.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur">
                    {study.tag}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <span>{study.statusLabel ?? study.tag}</span>
                    <span className="text-border">·</span>
                    <span>{study.year}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {study.title}
                  </h2>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {study.headline ?? study.problem}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    {t.projectsReadFull}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
              {study.liveUrl && (
                <div className="mt-2">
                  <CaseStudyLiveLink
                    href={study.liveUrl}
                    label={study.liveUrlLabel ?? t.caseStudyLiveWebsite}
                  />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.caseStudiesHaveChallenge}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            {t.caseStudiesHaveChallengeDesc}
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-foreground px-6 text-sm font-semibold text-background"
          >
            {content.siteConfig.hero.primaryCta.replace(" →", "")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
