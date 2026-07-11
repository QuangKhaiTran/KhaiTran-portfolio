import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  CircuitBoard,
  ExternalLink,
  FileCheck,
  FolderKanban,
  Home,
  Layers,
  Lock,
  Mail,
  MapPin,
  Quote,
  Rocket,
  Shield,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";
import {
  NextJs,
  NodeJs,
  OpenAI,
  PostgreSQL,
  React as ReactIcon,
  Redis,
  Supabase,
  TailwindCSS,
  TypeScript,
  VercelDark,
} from "developer-icons";
import {
  SiDocker,
  SiRadixui,
  SiReactquery,
  SiResend,
  SiVitest,
  SiZod,
} from "@icons-pack/react-simple-icons";
import { motion, AnimatePresence } from "framer-motion";
import {
  aboutHighlights,
  caseStudies,
  clientLogos,
  faqItems,
  getPortfolioImage,
  processSteps,
  profile,
  resultMetrics,
  services,
  siteConfig,
  techStack,
  testimonials,
  trustGuarantees,
} from "@/data/portfolio";
import {
  getMailtoHref,
  getPrimaryContactHref,
  getPrimaryContactLabel,
  getSecondaryContactHref,
  getSecondaryContactLabel,
  hasBookingLink,
} from "@/lib/portfolio-contact";
import type { CaseStudy, TechName } from "@/data/portfolio/types";
import { serviceIconMap } from "@/lib/portfolio-icons";
import { CaseStudyLiveLink } from "@/components/CaseStudyLiveLink";
import sepayLogo from "@/assets/stack/sepay.svg";
import onepayLogo from "@/assets/stack/onepay-icon.png";
import tiptapLogo from "@/assets/stack/tiptap.svg";
import tanstackQueryLogo from "@/assets/stack/tanstack-query.svg";
import radixUiLogo from "@/assets/stack/radix-ui.svg";
import nextIntlLogo from "@/assets/stack/next-intl.svg";

const { brand, seo, contact, social, nav, hero, sections, footer, freelancePlatforms } =
  siteConfig;

const navIconMap: Record<string, ComponentType<{ className?: string }>> = {
  Home: Home,
  Services: Layers,
  Projects: FolderKanban,
  Reviews: Star,
  About: User,
  Contact: Mail,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustedTech />
      <ClientLogos />
      <Results />
      <Services />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <TrustGuarantees />
      <Faq />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={getPortfolioImage(profile.avatarKey)}
              alt={brand.name}
              className="h-8 w-8 rounded-lg object-cover border border-primary/20 shadow-soft"
            />
            <span className="text-[15px] font-semibold tracking-tight">{brand.name}</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[13px] font-semibold text-background shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              {hero.primaryCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className="h-0.5 w-full rounded-full bg-current" />
                <span className="h-0.5 w-full rounded-full bg-current" />
                <span className="h-0.5 w-full rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-900/45 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="absolute right-0 top-0 flex h-full w-[min(100%,19rem)] flex-col overflow-hidden border-l border-border/80 bg-background shadow-hero"
          >
            <div className="gradient-hero border-b border-border/60 px-5 pb-5 pt-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src={getPortfolioImage(profile.avatarKey)}
                    alt={brand.name}
                    className="h-9 w-9 shrink-0 rounded-xl object-cover border border-primary/20 shadow-soft"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold tracking-tight">{brand.name}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                      {brand.tagline}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-accent"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-soft backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {hero.badge}
              </div>
            </div>

            <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Menu
              </p>
              <ul className="space-y-1">
                {nav.map((item, i) => {
                  const Icon = navIconMap[item.label] ?? CircuitBoard;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                    >
                      <a
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent"
                        onClick={onClose}
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-border/60 bg-surface/50 p-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                onClick={onClose}
              >
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 flex items-center gap-2.5 rounded-xl px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                onClick={onClose}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="truncate">{contact.email}</span>
              </a>
              <div className="mt-1 flex items-center gap-2.5 px-2 py-1 text-xs text-muted-foreground">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </span>
                <span>{contact.address}</span>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-28">
        
        {/* Left Column: Personal Value Prop & CTAs */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {hero.badge}
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[68px]">
            {hero.headline}{" "}
            <span className="bg-gradient-to-r from-primary to-brand-soft bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            {hero.subheadline}
          </p>

          {/* Quick Stats Banner inside Hero Left */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border/60 py-4 max-w-xl">
            {aboutHighlights.slice(0, 3).map((h) => (
              <div key={h.label} className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{h.label}</div>
                <div className="mt-1 text-base font-extrabold text-foreground">{h.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 hover:bg-primary/95"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5"
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* Profile & contact links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {(
              [
                ["Upwork", social.upwork, "hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-50/20"],
                ["Fiverr", social.fiverr, "hover:text-green-500 hover:border-green-500/30 hover:bg-green-50/20"],
                ["Contra", social.contra, "hover:text-primary hover:border-primary/30 hover:bg-primary/5"],
                ["LinkedIn", social.linkedin, "hover:text-blue-600 hover:border-blue-500/30 hover:bg-blue-50/20"],
                ["GitHub", social.github, "hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5"],
              ] as const
            )
              .filter(([, href]) => href)
              .map(([label, href, hoverColor]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border border-border bg-white/50 px-3 py-1 text-xs font-semibold text-muted-foreground transition-all duration-300 ${hoverColor}`}
              >
                {label}
              </a>
            ))}
            {![social.upwork, social.fiverr, social.contra, social.linkedin, social.github].some(Boolean) && (
              <a
                href={getMailtoHref()}
                className="rounded-full border border-border bg-white/50 px-3 py-1 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5"
              >
                {contact.email}
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Beautiful Layered Composition (Laptop Dashboard + Profile Card) */}
        <div className="relative flex items-center">
          <div className="relative w-full max-w-[580px] mx-auto lg:max-w-none group">
            
            {/* Background laptop mockup */}
            <div className="relative rounded-[22px] border border-border/80 bg-gradient-to-b from-slate-100 to-slate-200 p-2 shadow-hero opacity-85 group-hover:opacity-100 transition-opacity duration-500">
              <div className="overflow-hidden rounded-[14px] border border-slate-200 bg-white">
                <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <img
                  src={getPortfolioImage("dashboardHero")}
                  alt={`${brand.name} analytics dashboard preview`}
                  width={1600}
                  height={1024}
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
            {/* Laptop base */}
            <div className="mx-auto h-3 w-[88%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-200 shadow-md" />
            <div className="mx-auto -mt-1 h-1 w-[40%] rounded-b-xl bg-slate-300/80" />

            {/* Overlapping floating profile card */}
            <div className="absolute -left-4 -bottom-6 sm:-left-8 sm:-bottom-8 max-w-[290px] bg-card/95 border border-border/80 rounded-2xl p-5 shadow-hero backdrop-blur-md hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out group-hover:border-primary/20">
              <div className="flex items-center gap-4">
                <img
                  src={getPortfolioImage(profile.avatarKey)}
                  alt={profile.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-primary shadow-soft"
                />
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-tight">{profile.name}</h4>
                  <p className="text-[11px] text-primary font-semibold mt-1">{profile.title}</p>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                I help startups replace spreadsheet chaos with bulletproof web applications.
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {profile.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-3.5 pt-3 border-t border-border/50 flex justify-between items-center text-[10px] text-muted-foreground font-semibold">
                <span className="flex items-center gap-1">🗣️ English, VN</span>
                <span className="flex items-center gap-1">📍 Cần Thơ</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- TRUSTED TECH ---------------- */
function DecimalJsIcon({ className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <rect width="24" height="24" rx="6" fill="#1E40AF" />
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="9"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        d
      </text>
    </svg>
  );
}

type BrandTechIcon = ComponentType<{ size?: number; className?: string; color?: string }>;
function withBrandColor(Icon: BrandTechIcon) {
  return ({ size, className }: { size?: number; className?: string }) => (
    <Icon size={size} className={className} color="default" />
  );
}

const TECH_ICON_MAP = {
  React: ReactIcon,
  "Next.js": NextJs,
  TypeScript,
  "Node.js": NodeJs,
  Supabase,
  PostgreSQL,
  Redis,
  "Tailwind CSS": TailwindCSS,
  Vercel: VercelDark,
  OpenAI,
  Resend: withBrandColor(SiResend),
  Docker: withBrandColor(SiDocker),
  "TanStack Query": withBrandColor(SiReactquery),
  "Radix UI": withBrandColor(SiRadixui),
  Zod: withBrandColor(SiZod),
  Vitest: withBrandColor(SiVitest),
  "decimal.js": DecimalJsIcon,
} as const;

function TechLogo({ name, className = "h-10 w-10" }: { name: TechName; className?: string }) {
  const Icon = TECH_ICON_MAP[name as keyof typeof TECH_ICON_MAP];
  if (Icon) {
    return <Icon size={40} className={className} />;
  }

  const assetMap: Partial<Record<TechName, string>> = {
    Sepay: sepayLogo,
    OnePay: onepayLogo,
    TipTap: tiptapLogo,
    "TanStack Query": tanstackQueryLogo,
    "Radix UI": radixUiLogo,
    "next-intl": nextIntlLogo,
  };
  const src = assetMap[name];
  if (src) {
    return <img src={src} alt="" className={`${className} object-contain`} />;
  }

  return (
    <span className="grid h-11 w-11 place-items-center rounded-lg bg-muted text-[10px] font-bold text-muted-foreground">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

const TECH_HOVER_STYLES: Record<TechName, string> = {
  React: "group-hover:drop-shadow-[0_8px_16px_rgba(6,182,212,0.4)]",
  "Next.js": "group-hover:drop-shadow-[0_8px_16px_rgba(15,23,42,0.25)]",
  TypeScript: "group-hover:drop-shadow-[0_8px_16px_rgba(37,99,235,0.4)]",
  "Node.js": "group-hover:drop-shadow-[0_8px_16px_rgba(34,197,94,0.4)]",
  Supabase: "group-hover:drop-shadow-[0_8px_16px_rgba(16,185,129,0.35)]",
  PostgreSQL: "group-hover:drop-shadow-[0_8px_16px_rgba(49,120,198,0.4)]",
  Redis: "group-hover:drop-shadow-[0_8px_16px_rgba(220,38,38,0.35)]",
  "Tailwind CSS": "group-hover:drop-shadow-[0_8px_16px_rgba(6,182,212,0.35)]",
  Vercel: "group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]",
  OpenAI: "group-hover:drop-shadow-[0_8px_16px_rgba(16,185,129,0.3)]",
  Sepay: "group-hover:drop-shadow-[0_8px_16px_rgba(37,99,235,0.35)]",
  OnePay: "group-hover:drop-shadow-[0_8px_16px_rgba(15,23,42,0.25)]",
  Resend: "group-hover:drop-shadow-[0_8px_16px_rgba(2,6,23,0.25)]",
  TipTap: "group-hover:drop-shadow-[0_8px_16px_rgba(71,85,105,0.3)]",
  "TanStack Query": "group-hover:drop-shadow-[0_8px_16px_rgba(255,65,84,0.35)]",
  "Radix UI": "group-hover:drop-shadow-[0_8px_16px_rgba(22,22,24,0.3)]",
  Zod: "group-hover:drop-shadow-[0_8px_16px_rgba(62,103,177,0.35)]",
  "decimal.js": "group-hover:drop-shadow-[0_8px_16px_rgba(30,64,175,0.35)]",
  "next-intl": "group-hover:drop-shadow-[0_8px_16px_rgba(17,24,39,0.35)]",
  Vitest: "group-hover:drop-shadow-[0_8px_16px_rgba(110,159,24,0.35)]",
  Docker: "group-hover:drop-shadow-[0_8px_16px_rgba(36,150,237,0.35)]",
};

function TrustedTech() {
  return (
    <section className="border-y border-border bg-white relative overflow-hidden">
      <div className="container-page py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
          Trusted Technologies
        </p>
        <div className="relative mt-8 overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent" />

          <div className="relative h-[60px]">
            {[0, 1].map((track) => (
              <motion.div
                key={track}
                className="absolute left-0 top-0 flex w-max items-center gap-8 pr-8 sm:gap-10 sm:pr-10"
                animate={{ x: track === 0 ? ["0%", "-100%"] : ["100%", "0%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              >
                {techStack.map((t, idx) => {
                  const hoverStyle =
                    TECH_HOVER_STYLES[t] || "group-hover:drop-shadow-[0_8px_16px_rgba(37,99,235,0.3)]";
                  return (
                    <div key={`${track}-${t}-${idx}`} className="group flex shrink-0 flex-col items-center gap-2 cursor-pointer">
                      <div
                        className={`transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 ${hoverStyle}`}
                      >
                        <TechLogo name={t} className="h-8 w-8 transition-transform duration-300" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground/60 transition-all duration-300 group-hover:text-foreground">
                        {t}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLIENT LOGOS ---------------- */
function ClientLogos() {
  return (
    <section className="border-b border-border/50 bg-surface/50 py-12">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
          {sections.clients.eyebrow}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {clientLogos.map((client) => {
            const inner = (
              <>
                <span className="text-sm font-semibold text-foreground">{client.name}</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {client.industry}
                </span>
              </>
            );
            return client.url ? (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center rounded-2xl border border-border/80 bg-card px-5 py-3 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/30"
              >
                {inner}
              </a>
            ) : (
              <div
                key={client.name}
                className="inline-flex flex-col items-center rounded-2xl border border-dashed border-border/80 bg-card/60 px-5 py-3"
                title="Private client — demo available under NDA"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTS ---------------- */
function Results() {
  const metricDetails = [
    "Fintech, hospitality, automotive, and entertainment platforms shipped to production.",
    "Clients report fewer manual steps — unified dashboards replace spreadsheets and phone-tag workflows.",
    "From discovery to production launch — agile sprints with weekly demos you can test.",
    "Bug fixes, performance tuning, and handoff training included after every launch.",
  ];

  return (
    <section className="bg-surface py-24 border-y border-border/50 relative overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-brand-soft/5 blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <CircuitBoard className="h-3.5 w-3.5 text-primary" />
              {sections.results.eyebrow}
            </div>
            
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl text-foreground leading-[1.1]">
              {sections.results.title}
            </h2>
            
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {sections.results.subtitle}
            </p>

            {/* Core Promises List */}
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Business-First Approach",
                  desc: "I don't just write code. I analyze your business process to find the most cost-effective solution."
                },
                {
                  title: "Transparent Collaboration",
                  desc: "You get a shared project board, weekly working demos, and clear milestone-based invoicing."
                }
              ].map((promise, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{promise.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{promise.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Let's discuss your project goals <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Metric grid */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/50 shadow-soft sm:grid-cols-2">
            {resultMetrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group bg-card px-6 py-7 transition-colors duration-300 hover:bg-accent/30 sm:px-7 sm:py-8"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {metric.label}
                </div>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-foreground tabular-nums transition-colors duration-300 group-hover:text-primary sm:text-4xl">
                  {metric.value}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {metricDetails[idx]}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow={sections.services.eyebrow}
          title={sections.services.title}
          subtitle={sections.services.subtitle}
        />
        {freelancePlatforms.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {freelancePlatforms.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold text-muted-foreground shadow-soft"
            >
              {p}
            </span>
          ))}
        </div>
        )}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const ServiceIcon = serviceIconMap[s.icon];
            return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lift sm:col-span-1 ${s.span}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <ServiceIcon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[15px] font-semibold leading-snug tracking-tight">
                      {s.title}
                    </h3>
                    <span className="shrink-0 text-[10px] font-semibold tabular-nums text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <p className="mt-2 rounded-md bg-surface px-2 py-1.5 text-[10.5px] italic leading-snug text-muted-foreground/90">
                    {s.gigTitle}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Specializations
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex rounded-md border border-border/80 bg-surface px-2 py-0.5 text-[11px] font-medium text-foreground/85"
                  >
                    {it}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Deliverables
              </p>
              <ul className="mt-1.5 space-y-1">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-1.5 text-[11px] leading-snug text-foreground/80"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-border/60 pt-3">
                <p className="text-[10px] text-muted-foreground">{s.stack}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px]">
                  <span className="font-semibold text-primary">{s.from}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="font-medium text-foreground/70">{s.timeline}</span>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need a custom package or retainer?{" "}
          <a href="#contact" className="font-semibold text-primary hover:underline">
            Email for a free discovery call
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  return (
    <section id="projects" className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={sections.projects.eyebrow}
          title={sections.projects.title}
          subtitle={sections.projects.subtitle}
        />
        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {caseStudies.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40"
          >
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  reverse,
}: {
  project: CaseStudy;
  index: number;
  reverse?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      {/* Image side */}
      <div className="lg:col-span-7">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <img
            src={getPortfolioImage(project.imageKey)}
            alt={project.title}
            loading="lazy"
            className="block h-auto w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur">
            {project.tag}
          </span>
        </motion.div>
      </div>

      {/* Content side */}
      <div className="lg:col-span-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} — Case Study
        </div>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h3>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20">
          <Sparkles className="h-3.5 w-3.5" />
          {project.result}
        </div>

        {(project.businessMetrics ?? project.metrics.slice(0, 3)).length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {(project.businessMetrics ?? project.metrics.slice(0, 3)).map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium text-foreground/90"
              >
                <span className="font-bold text-primary">{m.value}</span>
                <span className="text-muted-foreground">{m.label}</span>
              </span>
            ))}
          </div>
        )}

        <div className="mt-7 space-y-5">
          <MiniRow label="Problem" value={project.problem} />
          <MiniRow label="Solution" value={project.solution} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/case-studies/$slug"
              params={{ slug: project.slug }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
            >
              Read full case study <ArrowRight className="h-4 w-4" />
            </Link>
            {project.liveUrl && (
              <CaseStudyLiveLink
                href={project.liveUrl}
                label={project.liveUrlLabel ?? "View live site"}
              />
            )}
            {project.isConfidential && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <Lock className="h-3 w-3" />
                NDA · demo on request
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}

function MiniRow({ label, value }: { label: string; value: string }) {
  const MAX_PREVIEW_CHARS = 180;
  const previewText =
    value.length > MAX_PREVIEW_CHARS
      ? `${value.slice(0, MAX_PREVIEW_CHARS).trimEnd().replace(/\s+\S*$/, "")}...`
      : value;

  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1.5 text-[15px] leading-relaxed text-foreground">{previewText}</div>
    </div>
  );
}



/* ---------------- PROCESS ---------------- */
function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={sections.process.eyebrow}
          title={sections.process.title}
          subtitle={sections.process.subtitle}
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((p, i) => (
              <li key={p.n} className="relative">
                <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border border-border bg-card text-sm font-semibold text-primary shadow-card">
                  {p.n}
                  {i < processSteps.length - 1 && (
                    <span className="absolute -right-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary lg:block" />
                  )}
                </div>
                <div className="mt-5 text-center">
                  <div className="text-base font-semibold tracking-tight">
                    {p.title}
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="container-page max-w-4xl">
        <SectionHeader
          eyebrow={sections.about.eyebrow}
          title="More about me & my workflow"
          subtitle="How I help clients turn operational pain into clean, scalable cloud software."
        />

        <div className="mt-14 rounded-3xl border border-border/80 bg-card p-8 shadow-card">
          <p className="text-[17px] leading-relaxed text-foreground font-medium">{profile.longBio}</p>
          
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Core Skills & Ecosystem
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Working Languages
            </h4>
            <p className="mt-2 text-sm text-muted-foreground font-medium">
              {profile.languages.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const featured = testimonials.slice(0, 3);
  const hasPublicProfiles = Boolean(
    social.upwork || social.fiverr || social.linkedin || social.github
  );

  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={sections.testimonials.eyebrow}
          title={sections.testimonials.title}
          subtitle={sections.testimonials.subtitle}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <Quote className="h-6 w-6 text-primary/40" />
              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={getPortfolioImage(t.avatarKey)}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    {t.companyUrl && (
                      <a
                        href={t.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[10px] font-medium text-primary hover:underline"
                      >
                        Verify project <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                    {t.linkedinUrl && (
                      <a
                        href={t.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-medium text-muted-foreground hover:text-primary"
                      >
                        LinkedIn
                      </a>
                    )}
                    {t.platform && hasPublicProfiles && (
                      <span className="text-[10px] font-medium text-muted-foreground">
                        via {t.platform}
                      </span>
                    )}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const TRUST_ICON_MAP = {
  shield: Shield,
  lock: Lock,
  file: FileCheck,
  calendar: Calendar,
} as const;

/* ---------------- TRUST GUARANTEES ---------------- */
function TrustGuarantees() {
  return (
    <section id="trust" className="border-y border-border/50 bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow={sections.trust.eyebrow}
          title={sections.trust.title}
          subtitle={sections.trust.subtitle}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustGuarantees.map((item) => {
            const Icon = TRUST_ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  return (
    <section id="faq" className="bg-surface py-24">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Common questions from new clients" />
        <div className="mt-12 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-card shadow-card"
            >
              <summary className="cursor-pointer list-none px-6 py-5 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="border-t border-border px-6 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  const primaryHref = getPrimaryContactHref();
  const primaryLabel = getPrimaryContactLabel();
  const secondaryHref = getSecondaryContactHref();
  const secondaryLabel = getSecondaryContactLabel();
  const primaryExternal = hasBookingLink();

  return (
    <section id="contact" className="bg-background px-4 py-24">
      <div className="container-page">
        <div className="gradient-cta relative overflow-hidden rounded-[32px] px-8 py-20 text-center text-white shadow-hero sm:px-16">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Rocket className="h-3.5 w-3.5" />
              {sections.cta.badge}
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {sections.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/80">
              {sections.cta.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={primaryHref}
                {...(primaryExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-lift transition hover:-translate-y-0.5"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            </div>
            <p className="mx-auto mt-6 text-sm text-white/70">
              Or email directly:{" "}
              <a
                href={getMailtoHref("Project Inquiry")}
                className="font-semibold text-white underline-offset-2 hover:underline"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <img
              src={getPortfolioImage(profile.avatarKey)}
              alt={brand.name}
              className="h-8 w-8 rounded-lg object-cover border border-primary/20 shadow-soft"
            />
            <span className="text-[15px] font-semibold">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{footer.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {(
              [
                ["Upwork", social.upwork],
                ["LinkedIn", social.linkedin],
                ["GitHub", social.github],
              ] as const
            )
              .filter(([, href]) => href)
              .map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-8 lg:contents">
          <FooterCol
            title="Services"
            items={services.map((s) => s.title)}
            href="#services"
          />
          <FooterCol
            title="Links"
            items={["About", "Projects", "FAQ"]}
            hrefs={["#about", "#projects", "#faq"]}
          />
          <FooterCol
            className="col-span-2 sm:col-span-1"
            title="Contact"
            items={[
              contact.email,
              ...(contact.phone ? [contact.phone] : []),
              contact.address,
            ]}
            hrefs={[
              `mailto:${contact.email}`,
              ...(contact.phone ? [`tel:${contact.phone.replace(/\s/g, "")}`] : []),
              "#contact",
            ]}
          />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-6 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  href = "#",
  hrefs,
  className,
}: {
  title: string;
  items: string[];
  href?: string;
  hrefs?: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((item, i) => (
          <li key={item}>
            <a href={hrefs?.[i] ?? href} className="text-foreground/80 hover:text-primary">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
        <CircuitBoard className="h-3.5 w-3.5 text-primary" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
