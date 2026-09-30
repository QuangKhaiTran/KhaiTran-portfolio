import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPortfolioImage } from "@/data/portfolio";
import { getPortfolioContent } from "@/data/portfolio/content";
import { CaseStudyLiveLink } from "@/components/CaseStudyLiveLink";
import { TechStackBadges } from "@/components/TechStackBadges";
import { useLocale } from "@/i18n/locale";
import { motion } from "framer-motion";
import {
  CountUp,
  Reveal,
  riseDelay,
  ScrollProgress,
  Stagger,
  StaggerItem,
} from "@/components/motion";

const enContent = getPortfolioContent("en");

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const study = enContent.getCaseStudyBySlug(params.slug);
    if (!study) return {};
    const brand = enContent.siteConfig.brand.name;
    return {
      meta: [
        { title: `${study.title} — Case Study | ${brand}` },
        { name: "description", content: study.headline || study.overview },
        { property: "og:title", content: `${study.title} — ${brand}` },
        { property: "og:description", content: study.headline || study.overview },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const { content, t } = useLocale();
  const study = content.getCaseStudyBySlug(slug);
  const primaryCta = content.siteConfig.hero.primaryCta;

  if (!study) {
    throw notFound();
  }

  const testimonial = study.testimonialId
    ? content.getTestimonialById(study.testimonialId)
    : undefined;

  const businessMetrics = study.businessMetrics?.length
    ? study.businessMetrics
    : study.metrics.slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-16 text-foreground">
      <ScrollProgress />
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            to="/"
            hash="projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t.caseStudiesBack}
          </Link>
          <a
            href="/#contact"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-[13px] font-semibold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {primaryCta.replace(" →", "")}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </header>

      <article>
        <section className="border-b border-border gradient-hero">
          <div className="container-page py-14 lg:py-20">
            <div className="rise-in flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <span>{study.tag}</span>
              <span aria-hidden>·</span>
              <span>{study.statusLabel}</span>
            </div>
            <h1
              className="rise-in mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl"
              style={riseDelay(90)}
            >
              {study.title}
            </h1>
            <p
              className="rise-in mt-5 max-w-3xl text-lg leading-relaxed text-foreground/85"
              style={riseDelay(180)}
            >
              {study.headline}
            </p>
            <p
              className="rise-in mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground"
              style={riseDelay(260)}
            >
              {study.overview}
            </p>

            <div className="rise-in mt-8 flex flex-wrap gap-3" style={riseDelay(340)}>
              {study.liveUrl ? (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-semibold text-background"
                >
                  {study.liveUrlLabel ?? t.caseStudyLiveWebsite}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              ) : null}
              {study.isConfidential && study.confidentialNote ? (
                <p className="inline-flex max-w-xl items-start gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  {study.confidentialNote}
                </p>
              ) : null}
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: t.caseStudyClient, value: study.client.name },
                { label: t.caseStudyDuration, value: study.duration },
                { label: t.caseStudyYear, value: study.year },
                { label: t.caseStudyRole, value: study.role },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="rise-in border-t border-border pt-4"
                  style={riseDelay(420 + i * 70)}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container-page py-12">
          <Reveal
            variant="imageReveal"
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift"
          >
            <img
              src={getPortfolioImage(study.imageKey)}
              alt={study.title}
              className="block h-auto w-full"
            />
          </Reveal>
          {study.liveUrl ? (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {t.caseStudyLiveWebsite}{" "}
              <CaseStudyLiveLink
                href={study.liveUrl}
                label={
                  study.liveUrlLabel ??
                  study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                }
              />
            </p>
          ) : null}
        </section>

        <section className="border-y border-border bg-surface py-12">
          <div className="container-page">
            <Reveal as="p" variant="fadeIn" className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t.caseStudyBusinessOutcomes}
            </Reveal>
            <Stagger stagger={0.12} className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {businessMetrics.map((m) => (
                <StaggerItem key={m.label} variant="scaleIn" className="text-center">
                  <div className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    <CountUp value={m.value} />
                  </div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{m.label}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="container-page grid gap-12 py-16 lg:grid-cols-2">
          <Reveal variant="slideLeft">
            <h2 className="text-2xl font-semibold tracking-tight">{t.caseStudyProblem}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.problem}</p>
          </Reveal>
          <Reveal variant="slideRight" delay={0.1}>
            <h2 className="text-2xl font-semibold tracking-tight">{t.caseStudySolution}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.solution}</p>
          </Reveal>
        </section>

        {study.capabilities?.length ? (
          <section className="border-t border-border bg-surface py-16">
            <div className="container-page">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight">{t.caseStudyCapabilities}</h2>
              </Reveal>
              <Stagger as="ul" stagger={0.06} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {study.capabilities.map((item) => (
                  <StaggerItem
                    as="li"
                    key={item}
                    className="flex gap-2 border-t border-border pt-4 text-sm text-foreground/90"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" aria-hidden />
                    {item}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        ) : null}

        <section className="container-page py-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">{t.caseStudyOutcomes}</h2>
          </Reveal>
          <Stagger as="ul" stagger={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
            {study.outcomes.map((o) => (
              <StaggerItem
                as="li"
                key={o}
                className="border-t border-border pt-4 text-[15px] leading-relaxed text-foreground/85"
              >
                {o}
              </StaggerItem>
            ))}
          </Stagger>
          {study.closing ? (
            <Reveal as="p" className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {study.closing}
            </Reveal>
          ) : null}
        </section>

        <section className="border-t border-border bg-surface py-10">
          <Reveal className="container-page max-w-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="technical">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {t.caseStudyTechnicalDetails}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8 pb-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {t.caseStudyTechStack}
                      </h3>
                      <div className="mt-3">
                        <TechStackBadges items={study.stack} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {t.caseStudyTechnicalScale}
                      </h3>
                      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {study.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-lg font-semibold">{m.value}</div>
                            <div className="text-xs text-muted-foreground">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {t.caseStudyApproach}
                      </h3>
                      <ol className="mt-4 space-y-3">
                        {study.approach.map((step, i) => (
                          <li key={step} className="flex gap-3 text-sm leading-relaxed">
                            <span className="font-semibold text-muted-foreground">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {t.caseStudyChallenges}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {study.challenges.map((c) => (
                          <li key={c} className="flex gap-2 text-sm leading-relaxed">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" aria-hidden />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        </section>

        {testimonial ? (
          <section className="border-t border-border py-16">
            <Stagger className="container-page max-w-3xl" stagger={0.15}>
              <StaggerItem>
                <blockquote className="text-xl leading-relaxed text-foreground/90">
                  “{testimonial.quote}”
                </blockquote>
              </StaggerItem>
              <StaggerItem className="mt-6 text-sm">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-muted-foreground">
                  {testimonial.role} · {testimonial.company}
                </div>
              </StaggerItem>
            </Stagger>
          </section>
        ) : null}

        <section className="container-page py-16">
          <Reveal
            variant="scaleIn"
            className="rounded-2xl border border-border bg-foreground px-8 py-12 text-background"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.caseStudyWantSimilar}
            </h2>
            <p className="mt-4 max-w-xl text-background/75">{t.caseStudyWantSimilarDesc}</p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/#contact"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-background px-5 text-sm font-semibold text-foreground"
            >
              {primaryCta.replace(" →", "")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </motion.a>
          </Reveal>
        </section>
      </article>
    </div>
  );
}
