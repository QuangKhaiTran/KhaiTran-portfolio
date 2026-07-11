import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Lock, Sparkles, Star } from "lucide-react";
import {
  getCaseStudyBySlug,
  getTestimonialById,
  getPortfolioImage,
  siteConfig,
} from "@/data/portfolio";
import { CaseStudyLiveLink } from "@/components/CaseStudyLiveLink";
import { TechStackBadges } from "@/components/TechStackBadges";
import {
  getPrimaryContactHref,
  getPrimaryContactLabel,
  hasBookingLink,
} from "@/lib/portfolio-contact";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) return {};
    return {
      meta: [
        { title: `${study.title} — Case Study | ${siteConfig.brand.name}` },
        {
          name: "description",
          content: study.overview,
        },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    throw notFound();
  }

  const testimonial = study.testimonialId
    ? getTestimonialById(study.testimonialId)
    : undefined;

  const hasPublicProfiles = Boolean(
    siteConfig.social.upwork ||
      siteConfig.social.fiverr ||
      siteConfig.social.linkedin ||
      siteConfig.social.github
  );

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
            Back to portfolio
          </Link>
          <a
            href={getPrimaryContactHref()}
            {...(hasBookingLink()
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[13px] font-semibold text-background shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <article>
        <section className="gradient-hero border-b border-border">
          <div className="container-page py-16 lg:py-24">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {study.tag}
            </div>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {study.title}
            </h1>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
              <Sparkles className="h-4 w-4" />
              {study.result}
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {study.overview}
            </p>

            {study.liveUrl && (
              <div className="mt-8">
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 hover:bg-primary/95"
                >
                  {study.liveUrlLabel ?? "View live site"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}

            {study.isConfidential && study.confidentialNote && (
              <p className="mt-6 inline-flex max-w-2xl items-start gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {study.confidentialNote}
              </p>
            )}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Client", value: study.client.name },
                { label: "Duration", value: study.duration },
                { label: "Year", value: study.year },
                { label: "Our role", value: study.role },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-snug">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-16">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <img
              src={getPortfolioImage(study.imageKey)}
              alt={study.title}
              className="block h-auto w-full"
            />
          </div>
          {study.liveUrl && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Live website:{" "}
              <CaseStudyLiveLink
                href={study.liveUrl}
                label={study.liveUrlLabel ?? study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              />
            </p>
          )}
        </section>

        <section className="border-y border-border bg-surface py-12">
          <div className="container-page">
            {(study.businessMetrics?.length ?? 0) > 0 && (
              <>
                <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Business outcomes
                </p>
                <div className="flex flex-nowrap items-start justify-between gap-2 sm:gap-4 lg:gap-6">
                  {study.businessMetrics!.map((m) => (
                    <div key={m.label} className="min-w-0 flex-1 px-0.5 text-center">
                      <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        {m.value}
                      </div>
                      <div className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <p
              className={`text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground ${
                study.businessMetrics?.length ? "mt-10" : ""
              }`}
            >
              {study.businessMetrics?.length ? "Technical scale" : "Project metrics"}
            </p>
            <div className="mt-6 flex flex-nowrap items-start justify-between gap-2 sm:gap-4 lg:gap-6">
              {study.metrics.map((m) => (
              <div key={m.label} className="min-w-0 flex-1 px-0.5 text-center">
                <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {m.value}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {m.label}
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        <section className="container-page grid gap-16 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">The problem</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Our solution</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.solution}</p>
          </div>
        </section>

        <section className="border-t border-border bg-surface py-16">
          <div className="container-page grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Key challenges</h2>
              <ul className="mt-6 space-y-3">
                {study.challenges.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Our approach</h2>
              <ol className="mt-6 space-y-3">
                {study.approach.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="container-page py-16">
          <h2 className="text-2xl font-bold tracking-tight">Outcomes</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {study.outcomes.map((o) => (
              <li
                key={o}
                className="rounded-2xl border border-border bg-card p-5 text-[15px] leading-relaxed shadow-card"
              >
                {o}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Tech stack
            </h3>
            <div className="mt-3">
              <TechStackBadges items={study.stack} />
            </div>
          </div>
        </section>

        {testimonial && (
          <section className="border-t border-border bg-surface py-16">
            <div className="container-page max-w-3xl">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-5 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                  <img
                    src={getPortfolioImage(testimonial.avatarKey)}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    {testimonial.companyUrl && (
                      <a
                        href={testimonial.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-xs text-primary hover:underline"
                      >
                        Verify live project
                      </a>
                    )}
                    {testimonial.platform && hasPublicProfiles && (
                      <div className="mt-1 text-xs text-primary">
                        via {testimonial.platform}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="container-page py-20">
          <div className="gradient-cta rounded-[32px] px-8 py-16 text-center text-white shadow-hero">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Want similar results for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Email me about your project — I'll reply with a scoped plan and fixed-price quote within 48 hours.
            </p>
            <a
              href={getPrimaryContactHref()}
              {...(hasBookingLink()
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-lift transition hover:-translate-y-0.5"
            >
              {getPrimaryContactLabel()}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
