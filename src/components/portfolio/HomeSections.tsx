import { Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CaseStudyLiveLink } from "@/components/CaseStudyLiveLink";
import { getClientLogoImage, getPortfolioImage } from "@/data/portfolio";
import type { CaseStudy, Service } from "@/data/portfolio/types";
import type { ClientLogoKey } from "@/data/portfolio/trust";
import { serviceIconMap } from "@/lib/portfolio-icons";
import {
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  getProjectBriefMailto,
} from "@/lib/portfolio-contact";
import { useLocale } from "@/i18n/locale";
import { SectionHeader } from "./SectionHeader";

export function SelectedWork() {
  const { content, t } = useLocale();
  const { selectedWork } = content.siteConfig.sections;
  const items = content.clientLogos;

  return (
    <section
      id="work"
      className="border-b border-border bg-surface py-14 lg:py-16"
      aria-label={t.selectedWorkBoardLabel}
    >
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {selectedWork.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {selectedWork.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {selectedWork.subtitle}
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex min-h-10 shrink-0 items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.projectsViewAll}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-10">
          {items.map((item) => (
            <li key={item.name}>
              <WorkProofItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WorkProofItem({
  item,
}: {
  item: {
    name: string;
    industry: string;
    url?: string;
    logoKey?: ClientLogoKey;
  };
}) {
  const mark = item.logoKey ? (
    <img
      src={getClientLogoImage(item.logoKey)}
      alt=""
      className="h-8 w-auto max-w-[132px] object-contain sm:h-9"
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  ) : (
    <span className="inline-flex items-center justify-center gap-2.5">
      <span
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-[11px] font-bold tracking-wide text-background"
        aria-hidden
      >
        ERP
      </span>
      <span className="text-sm font-semibold tracking-tight text-foreground/85">
        {item.name.replace(/^ERP\s*&\s*/i, "")}
      </span>
    </span>
  );

  const body = (
    <>
      <div className="flex min-h-10 items-center justify-center opacity-80 transition-opacity group-hover/proof:opacity-100">
        {mark}
      </div>
      <p className="mt-2.5 text-center text-xs leading-snug text-muted-foreground">
        {item.industry}
      </p>
    </>
  );

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/proof flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`${item.name} — ${item.industry}`}
      >
        {body}
      </a>
    );
  }

  return (
    <div
      className="flex flex-col items-center text-center"
      aria-label={`${item.name} — ${item.industry}`}
    >
      {body}
    </div>
  );
}

function ServiceBody({ service }: { service: Service }) {
  return (
    <>
      <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
      <ul className="mt-5 space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground/90">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={service.ctaHref}
        className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {service.cta}
      </a>
    </>
  );
}

export function ServicesSection() {
  const { content } = useLocale();
  const { services: copy } = content.siteConfig.sections;

  return (
    <section id="services" className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

        {/* Mobile accordion */}
        <div className="mt-10 md:hidden">
          <Accordion type="single" collapsible className="w-full">
            {content.services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <AccordionItem key={service.id} value={service.id}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {service.number}
                      </span>
                      <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                      <span className="font-semibold">{service.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">{service.subtitle}</p>
                    <ServiceBody service={service} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden gap-8 md:grid md:grid-cols-2">
          {content.services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <article
                key={service.id}
                className="border-t border-border pt-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {service.number}
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold tracking-tight">
                      <Icon className="h-5 w-5 text-muted-foreground" aria-hidden />
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-foreground/70">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <ServiceBody service={service} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, t }: { study: CaseStudy; t: ReturnType<typeof useLocale>["t"] }) {
  const metrics = (study.businessMetrics ?? study.metrics).slice(0, 3);

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={getPortfolioImage(study.imageKey)}
          alt={`${study.title} screenshot`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <span>{study.tag}</span>
          <span aria-hidden>·</span>
          <span>{study.statusLabel}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
          {study.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.headline}</p>
        <p className="mt-4 text-xs font-medium text-foreground/70">
          {t.caseStudyRole}: {study.role}
        </p>
        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link
            to="/case-studies/$slug"
            params={{ slug: study.slug }}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.projectsReadFull}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          {study.isConfidential ? (
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" aria-hidden />
              {t.projectsNdaDemo}
            </span>
          ) : study.liveUrl ? (
            <CaseStudyLiveLink href={study.liveUrl} label={t.caseStudyVerifyLive} />
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function FlagshipProjects() {
  const { content, t } = useLocale();
  const { projects } = content.siteConfig.sections;
  const featured =
    typeof content.getFeaturedCaseStudies === "function"
      ? content.getFeaturedCaseStudies()
      : content.caseStudies.filter((c) => c.featured).sort(
          (a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99)
        );

  return (
    <section id="projects" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={projects.eyebrow}
          title={projects.title}
          subtitle={projects.subtitle}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} t={t} />
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/case-studies"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            {t.projectsViewAll}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MoreWork() {
  const { content, t } = useLocale();
  const { moreWork } = content.siteConfig.sections;

  return (
    <section id="more-work" className="border-b border-border bg-surface py-16 lg:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow={moreWork.eyebrow}
          title={moreWork.title}
          subtitle={moreWork.subtitle}
        />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {content.moreProjects.map((project) => (
            <div
              key={project.title}
              className="grid gap-3 py-6 md:grid-cols-[0.9fr_1.4fr_0.7fr] md:items-start md:gap-8"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {project.tag}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
              <div className="text-sm text-foreground/80">
                <div className="font-medium">{t.caseStudyRole}</div>
                <div className="mt-1 text-muted-foreground">{project.role}</div>
                {project.slug ? (
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: project.slug }}
                    className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {t.projectsCaseStudy}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { content } = useLocale();
  const { process } = content.siteConfig.sections;

  return (
    <section id="process" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.processSteps.map((step) => (
            <li key={step.n} className="border-t border-border pt-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {step.n}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-1 text-sm font-medium text-foreground/70">{step.shortTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { content, t } = useLocale();
  const { about } = content.siteConfig.sections;
  const { profile } = content;

  return (
    <section id="about" className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeader eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={getPortfolioImage(profile.avatarKey)}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Location</dt>
              <dd className="font-medium">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Availability</dt>
              <dd className="font-medium">{profile.availability}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{t.aboutWorkingLanguages}</dt>
              <dd className="font-medium">{profile.languages.join(" · ")}</dd>
            </div>
          </dl>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.bio}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.longBio}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {profile.values.map((value) => (
              <div key={value.title} className="border-t border-border pt-5">
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Core stack
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {profile.stackGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-sm font-semibold">{group.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{group.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const { content } = useLocale();
  const { testimonials: copy } = content.siteConfig.sections;

  return (
    <section id="testimonials" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
        />

        {/* Mobile carousel */}
        <div className="mt-10 md:hidden">
          <Carousel opts={{ align: "start", loop: false }}>
            <CarouselContent>
              {content.testimonials.map((item) => (
                <CarouselItem key={item.id}>
                  <TestimonialCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 hidden gap-8 md:grid md:grid-cols-3">
          {content.testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
}: {
  item: ReturnType<typeof useLocale>["content"]["testimonials"][number];
}) {
  return (
    <figure className="flex h-full flex-col border-t border-border pt-6">
      <blockquote className="text-base leading-relaxed text-foreground/90">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <div className="text-sm font-semibold">{item.name}</div>
        <div className="mt-1 text-sm text-muted-foreground">
          {item.role} · {item.company}
        </div>
      </figcaption>
    </figure>
  );
}

export function EngagementSection() {
  const { content } = useLocale();
  const { engagement: copy } = content.siteConfig.sections;
  const { engagement } = content;

  return (
    <section id="engagement" className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
        />
        <p className="mt-4 text-sm font-medium text-foreground/70">
          {engagement.startingLabel} · {engagement.quoteLabel}
        </p>

        <div className="mt-10 md:hidden">
          <Accordion type="single" collapsible className="w-full">
            {engagement.packages.map((pkg) => (
              <AccordionItem key={pkg.id} value={pkg.id}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="flex w-full items-center justify-between gap-3 pr-2">
                    <span className="font-semibold">{pkg.title}</span>
                    <span className="text-sm text-muted-foreground">{pkg.from}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <PricingBody pkg={pkg} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 hidden gap-8 md:grid md:grid-cols-2">
          {engagement.packages.map((pkg) => (
            <article key={pkg.id} className="border-t border-border pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{pkg.title}</h3>
                <div className="text-sm font-semibold text-foreground">{pkg.from}</div>
              </div>
              <PricingBody pkg={pkg} />
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            engagement.payment,
            engagement.ownership,
            engagement.scope,
            engagement.warranty,
          ].map((item) => (
            <div key={item.title}>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingBody({
  pkg,
}: {
  pkg: ReturnType<typeof useLocale>["content"]["engagement"]["packages"][number];
}) {
  return (
    <>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.desc}</p>
      <ul className="mt-4 space-y-2">
        {pkg.items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground/90">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      {pkg.note ? (
        <p className="mt-4 text-xs text-muted-foreground">{pkg.note}</p>
      ) : null}
    </>
  );
}

export function FaqSection() {
  const { content, t } = useLocale();
  const faqCopy = content.siteConfig.sections.faq;

  return (
    <section id="faq" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="container-page max-w-3xl">
        <SectionHeader
          eyebrow={faqCopy?.eyebrow ?? t.faqEyebrow}
          title={faqCopy?.title ?? t.faqTitle}
          subtitle={faqCopy?.subtitle}
        />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {content.faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { content } = useLocale();
  const { cta } = content.siteConfig.sections;

  return (
    <section className="border-b border-border gradient-cta text-primary-foreground">
      <div className="container-page py-16 lg:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
          {cta.badge}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-5 max-w-2xl whitespace-pre-line text-base leading-relaxed text-primary-foreground/85">
          {cta.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {cta.primaryCta.replace(" →", "")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#work"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {cta.secondaryCta}
          </a>
        </div>
        {cta.supporting ? (
          <p className="mt-6 max-w-xl text-sm text-primary-foreground/75">{cta.supporting}</p>
        ) : null}
      </div>
    </section>
  );
}

export function ContactSection() {
  const { content } = useLocale();
  const { contact: copy } = content.siteConfig.sections;
  const email = content.siteConfig.contact.email;
  const [form, setForm] = useState<{
    name: string;
    email: string;
    company: string;
    project: string;
    budget: string;
    timeline: string;
  }>({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: BUDGET_OPTIONS[1],
    timeline: TIMELINE_OPTIONS[3],
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const href = getProjectBriefMailto(form);
    window.location.href = href;
  };

  return (
    <section id="contact" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
        />
        <form onSubmit={onSubmit} className="space-y-5">
          <Field
            label="Name"
            id="contact-name"
            required
            value={form.name}
            onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          />
          <Field
            label="Email"
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          />
          <Field
            label="Company / Website"
            id="contact-company"
            value={form.company}
            onChange={(v) => setForm((s) => ({ ...s, company: v }))}
          />
          <div>
            <label htmlFor="contact-project" className="text-sm font-medium">
              What are you trying to build?
            </label>
            <textarea
              id="contact-project"
              required
              rows={5}
              value={form.project}
              onChange={(e) => setForm((s) => ({ ...s, project: e.target.value }))}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-budget" className="text-sm font-medium">
                Approximate budget
              </label>
              <select
                id="contact-budget"
                value={form.budget}
                onChange={(e) => setForm((s) => ({ ...s, budget: e.target.value }))}
                className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-timeline" className="text-sm font-medium">
                Timeline
              </label>
              <select
                id="contact-timeline"
                value={form.timeline}
                onChange={(e) => setForm((s) => ({ ...s, timeline: e.target.value }))}
                className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {TIMELINE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            {copy.submitCta.replace(" →", "")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <p className="text-sm text-muted-foreground">{copy.supporting}</p>
          <p className="text-sm text-muted-foreground">
            Or email directly:{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {email}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}

export function Footer() {
  const { content, t } = useLocale();
  const { brand, footer, nav, social, contact } = content.siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="text-lg font-semibold tracking-tight">{brand.name}</div>
          <div className="mt-1 text-sm text-background/70">{brand.tagline}</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-background/65">
            {footer.blurb}
          </p>
          <p className="mt-4 text-sm text-background/65">
            {contact.address} · UTC+7
            <br />
            Remote worldwide
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-background/50">
            {t.footerLinks}
          </div>
          <ul className="mt-4 space-y-2">
            {[...nav, { label: "Contact", href: "#contact" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-background/75 transition-colors hover:text-background"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-background/50">
            {t.footerContact}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-background/75">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-background">
                Email
              </a>
            </li>
            {social.github ? (
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  GitHub
                </a>
              </li>
            ) : null}
            {social.linkedin ? (
              <li>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
            {footer.legal.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-background">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright.replace("2026", String(year))}</p>
          <p>
            {brand.name} · {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileStickyCta() {
  const { content } = useLocale();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(Boolean(entry?.isIntersecting)),
      { threshold: 0.15 }
    );
    io.observe(contact);
    return () => io.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <a
        href="#contact"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-semibold text-background"
      >
        {content.siteConfig.mobileStickyCta.replace(" →", "")}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </div>
  );
}
