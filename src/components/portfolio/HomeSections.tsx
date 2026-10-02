import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Lock, Quote } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type PointerEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
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
import {
  CountUp,
  Magnetic,
  Parallax,
  Reveal,
  Stagger,
  StaggerItem,
  trackSpotlight,
  useTilt,
  variants,
} from "@/components/motion";
import ctaBackground from "@/assets/cta-background.jpg";
import { cn } from "@/lib/utils";
import { getClientLogoImage, getPortfolioImage } from "@/data/portfolio";
import type { CaseStudy, Service } from "@/data/portfolio/types";
import type { ClientLogoKey } from "@/data/portfolio/trust";
import { serviceIconMap } from "@/lib/portfolio-icons";
import { getProjectBriefMailto } from "@/lib/portfolio-contact";
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
          <Stagger className="max-w-xl" stagger={0.1}>
            <StaggerItem as="p" variant="fadeIn" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {selectedWork.eyebrow}
            </StaggerItem>
            <div className="-my-[0.15em] overflow-hidden py-[0.15em]">
              <motion.h2
                variants={variants.maskUp}
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {selectedWork.title}
              </motion.h2>
            </div>
            <StaggerItem as="p" className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {selectedWork.subtitle}
            </StaggerItem>
          </Stagger>
          <a
            href="#projects"
            className="inline-flex min-h-10 shrink-0 items-center gap-1.5 text-sm font-medium text-foreground group/link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.projectsViewAll}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
          </a>
        </div>

        <Reveal variant="fadeIn" className="group/marquee marquee-mask mt-8 overflow-hidden py-2">
          <div
            className="marquee-track flex w-max group-hover/marquee:[animation-play-state:paused]"
            style={{ "--marquee-duration": "36s" } as CSSProperties}
          >
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className={cn("flex shrink-0 items-start", copy === 1 && "marquee-dup")}
                aria-hidden={copy === 1 || undefined}
                inert={copy === 1 || undefined}
              >
                {items.map((item) => (
                  <li
                    key={item.name}
                    className="w-40 shrink-0 px-4 transition-transform duration-300 hover:-translate-y-1 sm:w-52 sm:px-6"
                  >
                    <WorkProofItem item={item} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
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
      className={cn(
        "w-auto max-w-[132px] object-contain",
        item.logoKey === "petid" ? "h-11 sm:h-12" : "h-8 sm:h-9",
      )}
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
      <div className="flex h-11 items-center justify-center opacity-80 sm:h-12 transition-opacity group-hover/proof:opacity-100">
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
      <ul className="flex flex-wrap gap-2">
        {service.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
          >
            {item}
          </li>
        ))}
      </ul>
      <a
        href={service.ctaHref}
        className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground group/link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
        <Reveal className="mt-10 md:hidden">
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
        </Reveal>

        {/* Desktop grid */}
        <Stagger stagger={0.12} className="mt-12 hidden gap-6 md:grid md:grid-cols-2">
          {content.services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <StaggerItem
                as="article"
                key={service.id}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                onPointerMove={trackSpotlight}
                className="spotlight group flex flex-col rounded-2xl border border-border bg-card p-7 transition-[border-color,box-shadow] duration-300 hover:border-foreground/15 hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-foreground text-background transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.subtitle}
                </p>
                <div className="mt-5 flex flex-1 flex-col [&>a]:mt-auto [&>a]:pt-6">
                  <ServiceBody service={service} />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, t }: { study: CaseStudy; t: ReturnType<typeof useLocale>["t"] }) {
  const metrics = (study.businessMetrics ?? study.metrics).slice(0, 3);
  const tilt = useTilt(4);

  return (
    <StaggerItem
      as="article"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      {...tilt}
      className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <motion.div variants={variants.imageReveal} className="h-full w-full">
          <Parallax amount={5}>
            <img
              src={getPortfolioImage(study.imageKey)}
              alt={`${study.title} screenshot`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </Parallax>
        </motion.div>
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
              <dd className="mt-1 text-sm font-semibold text-foreground">
                <CountUp value={m.value} />
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link
            to="/case-studies/$slug"
            params={{ slug: study.slug }}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground group/link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.projectsReadFull}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
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
    </StaggerItem>
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
        <Stagger stagger={0.14} className="mt-12 grid gap-8 lg:grid-cols-2">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} t={t} />
          ))}
        </Stagger>
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/case-studies"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground group/link underline-offset-4 hover:underline"
          >
            {t.projectsViewAll}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MoreWork() {
  const { content, t } = useLocale();
  const { moreWork } = content.siteConfig.sections;
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const previewX = useSpring(0, { stiffness: 320, damping: 30, mass: 0.4 });
  const previewY = useSpring(0, { stiffness: 320, damping: 30, mass: 0.4 });
  const previewStudy = previewSlug ? content.getCaseStudyBySlug(previewSlug) : undefined;
  const previewImage = previewStudy ? getPortfolioImage(previewStudy.imageKey) : null;

  const onPreviewMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (previewSlug) {
      previewX.set(x);
      previewY.set(y);
    } else {
      previewX.jump(x);
      previewY.jump(y);
    }
  };

  return (
    <section id="more-work" className="border-b border-border bg-surface py-16 lg:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow={moreWork.eyebrow}
          title={moreWork.title}
          subtitle={moreWork.subtitle}
        />
        <div className="relative" onPointerMove={onPreviewMove}>
        <AnimatePresence>
          {previewImage ? (
            <motion.div
              key="preview"
              className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
              style={{ x: previewX, y: previewY }}
              aria-hidden
            >
              <div className="-translate-x-1/2 -translate-y-[112%]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
                  transition={{ duration: 0.3 }}
                  className="w-72 overflow-hidden rounded-xl border border-border bg-card shadow-lift"
                >
                  <img src={previewImage} alt="" className="aspect-[16/10] w-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <Stagger stagger={0.1} className="mt-10 divide-y divide-border border-y border-border">
          {content.moreProjects.map((project) => (
            <StaggerItem
              key={project.title}
              variant="slideLeft"
              onPointerEnter={(e: PointerEvent<HTMLDivElement>) => {
                if (e.pointerType === "mouse") setPreviewSlug(project.slug ?? null);
              }}
              onPointerLeave={() => setPreviewSlug(null)}
              className="grid gap-3 py-6 transition-colors duration-300 hover:bg-background/60 md:grid-cols-[0.9fr_1.4fr_0.7fr] md:items-start md:gap-8"
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
                    className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold group/link underline-offset-4 hover:underline"
                  >
                    {t.projectsCaseStudy}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
                  </Link>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { content } = useLocale();
  const { process } = content.siteConfig.sections;
  const steps = content.processSteps;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 85%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const [activeCount, setActiveCount] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveCount(Math.min(steps.length, Math.floor(v * steps.length + 0.4)));
  });

  return (
    <section id="process" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />
        <div ref={trackRef}>
        <div className="relative mt-12 h-1 overflow-hidden rounded-full bg-border" aria-hidden>
          <motion.div
            className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-primary to-brand-soft"
            style={{ scaleX: fill }}
          />
        </div>
        <Stagger as="ol" stagger={0.1} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const active = i < activeCount;
            return (
            <StaggerItem
              as="li"
              key={step.n}
              className={cn(
                "group relative overflow-hidden rounded-2xl p-6 ring-1 transition-[background-color,box-shadow] duration-500",
                active ? "bg-card shadow-soft ring-primary/25" : "bg-surface ring-transparent"
              )}
            >
              <span
                className={cn(
                  "pointer-events-none absolute -right-1 -top-3 font-display text-7xl font-semibold tracking-tighter transition-colors duration-500",
                  active ? "text-primary/15" : "text-foreground/[0.06]"
                )}
                aria-hidden
              >
                {step.n}
              </span>
              <div
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step.n}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {step.title}
                <span className="font-normal text-muted-foreground"> — {step.shortTitle}</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </StaggerItem>
            );
          })}
        </Stagger>
        </div>
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
          <Reveal variant="imageReveal" className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <Parallax amount={4}>
              <img
                src={getPortfolioImage(profile.avatarKey)}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </Parallax>
          </Reveal>
          <Stagger as="dl" className="mt-6 space-y-3 text-sm">
            <StaggerItem>
              <dt className="text-muted-foreground">{t.aboutLocation}</dt>
              <dd className="font-medium">{profile.location}</dd>
            </StaggerItem>
            <StaggerItem>
              <dt className="text-muted-foreground">{t.aboutAvailability}</dt>
              <dd className="font-medium">{profile.availability}</dd>
            </StaggerItem>
            <StaggerItem>
              <dt className="text-muted-foreground">{t.aboutWorkingLanguages}</dt>
              <dd className="font-medium">{profile.languages.join(" · ")}</dd>
            </StaggerItem>
          </Stagger>
        </div>
        <div>
          <Reveal as="p" className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.bio}
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.longBio}
          </Reveal>

          <Stagger stagger={0.1} className="mt-10 grid gap-6 sm:grid-cols-2">
            {profile.values.map((value) => (
              <StaggerItem key={value.title} className="border-t border-border pt-5">
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {t.aboutCoreStack}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {profile.stackGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-sm font-semibold">{group.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{group.items}</div>
                </div>
              ))}
            </div>
          </Reveal>
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
        <Reveal className="mt-10 md:hidden">
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
        </Reveal>

        <Stagger stagger={0.14} className="mt-12 hidden gap-6 md:grid md:grid-cols-3">
          {content.testimonials.map((item) => (
            <StaggerItem key={item.id} whileHover={{ y: -4, transition: { duration: 0.25 } }}>
              <TestimonialCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return `${parts[0]?.[0] ?? ""}${parts.length > 1 ? parts[parts.length - 1]![0] : ""}`.toUpperCase();
}

function TestimonialCard({
  item,
}: {
  item: ReturnType<typeof useLocale>["content"]["testimonials"][number];
}) {
  const { content, t } = useLocale();
  const logo = content.clientLogos.find(
    (l) => l.logoKey && (l.url === item.companyUrl || l.name === item.company)
  );

  return (
    <figure
      onPointerMove={trackSpotlight}
      className="spotlight flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
    >
      <div className="flex items-center justify-between gap-4">
        {logo?.logoKey ? (
          <img
            src={getClientLogoImage(logo.logoKey)}
            alt={item.company}
            className="h-8 w-auto max-w-[120px] object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-semibold">{item.company}</span>
        )}
        <Quote className="h-7 w-7 shrink-0 text-primary/25" aria-hidden />
      </div>
      <blockquote className="mt-6 flex-1 text-lg font-medium leading-relaxed tracking-tight text-foreground">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
        <span
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background"
          aria-hidden
        >
          {initials(item.name)}
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold">{item.name}</div>
          <div className="text-xs text-muted-foreground">
            {item.role} · {item.company}
          </div>
        </div>
      </figcaption>
      {item.projectSlug ? (
        <Link
          to="/case-studies/$slug"
          params={{ slug: item.projectSlug }}
          className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-foreground group/link underline-offset-4 hover:underline"
        >
          {t.testimonialsViewProject}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
        </Link>
      ) : null}
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
        <Reveal as="p" className="mt-4 text-sm font-medium text-foreground/70">
          {engagement.startingLabel} — {engagement.quoteLabel}
        </Reveal>

        <Reveal className="mt-10 md:hidden">
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
        </Reveal>

        <Stagger stagger={0.12} className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {engagement.packages.map((pkg) => (
            <StaggerItem
              as="article"
              key={pkg.id}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              onPointerMove={trackSpotlight}
              className="spotlight flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lift"
            >
              <h3 className="text-lg font-semibold tracking-tight">{pkg.title}</h3>
              <div className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                {pkg.from}
              </div>
              <PricingBody pkg={pkg} />
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            engagement.payment,
            engagement.ownership,
            engagement.scope,
            engagement.warranty,
          ].map((item) => (
            <StaggerItem key={item.title}>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
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
      <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
        {pkg.items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
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
        <Reveal className="mt-10">
        <Accordion type="single" collapsible className="w-full">
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
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { content } = useLocale();
  const { cta } = content.siteConfig.sections;

  return (
    <section className="border-b border-border gradient-cta text-primary-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={ctaBackground}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#1e3a8a]/75 to-transparent lg:via-[#1e3a8a]/40" />
        <span className="orb-float absolute -left-24 -top-1/3 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <span
          className="orb-float absolute -right-16 top-1/4 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl"
          style={{ "--orb-duration": "20s", "--orb-delay": "-6s" } as CSSProperties}
        />
        <span
          className="orb-float absolute -bottom-1/2 left-1/3 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"
          style={{ "--orb-duration": "24s", "--orb-delay": "-12s" } as CSSProperties}
        />
      </div>
      <Stagger stagger={0.1} className="container-page py-16 lg:py-20">
        <StaggerItem as="p" variant="fadeIn" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
          {cta.badge}
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {cta.title}
          </h2>
        </StaggerItem>
        <StaggerItem as="p" className="mt-5 max-w-2xl whitespace-pre-line text-base leading-relaxed text-primary-foreground/85">
          {cta.subtitle}
        </StaggerItem>
        <StaggerItem className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Magnetic className="flex">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="btn-shine group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-background px-5 text-sm font-semibold text-foreground transition-colors [--shine-color:rgba(37,99,235,0.18)] hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {cta.primaryCta.replace(" →", "")}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </motion.a>
          </Magnetic>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {cta.secondaryCta}
          </motion.a>
        </StaggerItem>
        {cta.supporting ? (
          <StaggerItem as="p" className="mt-6 max-w-xl text-sm text-primary-foreground/75">{cta.supporting}</StaggerItem>
        ) : null}
      </Stagger>
    </section>
  );
}

export function ContactSection() {
  const { content, t } = useLocale();
  const { contact: copy } = content.siteConfig.sections;
  const email = content.siteConfig.contact.email;
  const [form, setForm] = useState<{
    name: string;
    email: string;
    company: string;
    project: string;
    budgetIndex: number;
    timelineIndex: number;
  }>({
    name: "",
    email: "",
    company: "",
    project: "",
    budgetIndex: 1,
    timelineIndex: 3,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const href = getProjectBriefMailto({
      name: form.name,
      email: form.email,
      company: form.company,
      project: form.project,
      budget: t.budgetOptions[form.budgetIndex] ?? "",
      timeline: t.timelineOptions[form.timelineIndex] ?? "",
    });
    window.location.href = href;
  };

  return (
    <section id="contact" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow={copy.eyebrow}
            title={copy.title}
            subtitle={copy.subtitle}
          />
          <Reveal className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {t.contactNextSteps}
            </h3>
            <Stagger as="ol" stagger={0.12} className="mt-5 space-y-5">
              {t.contactSteps.map((step, i) => (
                <StaggerItem as="li" key={step} className="flex gap-4">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-relaxed text-foreground/85">{step}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
              {t.contactOrEmail}{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-foreground group/link underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
        <form onSubmit={onSubmit} className="space-y-5">
          <Field
            label={t.contactName}
            id="contact-name"
            required
            value={form.name}
            onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          />
          <Field
            label={t.contactEmail}
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          />
          <Field
            label={t.contactCompany}
            id="contact-company"
            value={form.company}
            onChange={(v) => setForm((s) => ({ ...s, company: v }))}
          />
          <div>
            <label htmlFor="contact-project" className="text-sm font-medium">
              {t.contactProject}
            </label>
            <textarea
              id="contact-project"
              required
              rows={5}
              value={form.project}
              onChange={(e) => setForm((s) => ({ ...s, project: e.target.value }))}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background transition-[border-color,box-shadow] duration-300 hover:border-foreground/25 focus-visible:border-primary/40 focus-visible:shadow-[0_0_0_4px_rgba(37,99,235,0.08)] focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-budget" className="text-sm font-medium">
                {t.contactBudget}
              </label>
              <select
                id="contact-budget"
                value={form.budgetIndex}
                onChange={(e) => setForm((s) => ({ ...s, budgetIndex: Number(e.target.value) }))}
                className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.budgetOptions.map((opt, i) => (
                  <option key={opt} value={i}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-timeline" className="text-sm font-medium">
                {t.contactTimeline}
              </label>
              <select
                id="contact-timeline"
                value={form.timelineIndex}
                onChange={(e) => setForm((s) => ({ ...s, timelineIndex: Number(e.target.value) }))}
                className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.timelineOptions.map((opt, i) => (
                  <option key={opt} value={i}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="btn-shine group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            {copy.submitCta.replace(" →", "")}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </motion.button>
          <p className="text-sm text-muted-foreground">{copy.supporting}</p>
        </form>
        </Reveal>
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
        className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-[border-color,box-shadow] duration-300 hover:border-foreground/25 focus-visible:border-primary/40 focus-visible:shadow-[0_0_0_4px_rgba(37,99,235,0.08)] focus-visible:ring-2 focus-visible:ring-ring"
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
      <Stagger stagger={0.1} className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <StaggerItem className="sm:col-span-2">
          <div className="text-lg font-semibold tracking-tight">{brand.name}</div>
          <div className="mt-1 text-sm text-background/70">{brand.tagline}</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-background/65">
            {footer.blurb}
          </p>
          <p className="mt-4 text-sm text-background/65">
            {contact.address} · UTC+7
            <br />
            {t.footerRemote}
          </p>
        </StaggerItem>
        <StaggerItem>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-background/50">
            {t.footerLinks}
          </div>
          <ul className="mt-4 space-y-2">
            {[...nav, { label: t.footerContact, href: "#contact" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-sm text-background/75 hover:text-background"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </StaggerItem>
        <StaggerItem>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-background/50">
            {t.footerContact}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-background/75">
            <li>
              <a href={`mailto:${contact.email}`} className="link-underline hover:text-background">
                Email
              </a>
            </li>
            {social.github ? (
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-background"
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
                  className="link-underline hover:text-background"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
            {footer.legal.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-underline hover:text-background">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>
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
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const targets = ["home", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {hidden ? null : (
        <motion.div
          key="mobile-sticky-cta"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden"
        >
          <a
            href="#contact"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-semibold text-background"
          >
            {content.siteConfig.mobileStickyCta.replace(" →", "")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
