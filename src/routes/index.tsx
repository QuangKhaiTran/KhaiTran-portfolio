import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Check,
  CircuitBoard,
  Cloud,
  Database,
  Gauge,
  Globe,
  LayoutDashboard,
  Layers,
  Quote,
  Rocket,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "@icons-pack/react-simple-icons";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import projectLoan from "@/assets/project-loan.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectVinfast from "@/assets/project-vinfast.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAI from "@/assets/project-ai.jpg";
import projectRealEstate from "@/assets/project-realestate.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MekongIX — Custom Software That Solves Real Business Problems" },
      {
        name: "description",
        content:
          "MekongIX builds custom web apps, SaaS platforms, and AI-powered solutions that automate workflows and help businesses grow faster.",
      },
      { property: "og:title", content: "MekongIX — Software Consultancy" },
      {
        property: "og:description",
        content:
          "Custom web apps, SaaS platforms, and AI automation for ambitious teams.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const TECHS = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "OpenAI",
];

const RESULTS = [
  { value: "70%", label: "Reduction in manual work" },
  { value: "50%", label: "Faster reporting" },
  { value: "20+", label: "Projects delivered" },
  { value: "100%", label: "Centralized management" },
];

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: "Business Management Systems",
    desc: "Mission-critical internal tools your operations team will actually use.",
    items: ["CRM", "ERP", "Inventory", "Attendance", "Loan Management"],
  },
  {
    icon: Layers,
    title: "SaaS Development",
    desc: "Multi-tenant platforms built to scale from first customer to enterprise.",
    items: ["Subscription Platforms", "Membership Systems", "Booking Platforms"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "Production-grade AI that ships, not demos that stall.",
    items: ["Chatbots", "OCR", "Automation", "Speech Evaluation"],
  },
  {
    icon: Globe,
    title: "Corporate Websites",
    desc: "Marketing sites engineered for performance, SEO, and lead capture.",
    items: ["Company Profile", "Dealer Websites", "Lead Generation Websites"],
  },
];

const PROJECTS = [
  {
    image: projectLoan,
    tag: "Fintech · Internal Tool",
    title: "Loan Management Platform",
    problem: "Manual Excel workflows across 12 branches",
    solution: "Custom management software with role-based access",
    result: "70% Faster Operations",
  },
  {
    image: projectHotel,
    tag: "Hospitality · PMS",
    title: "Hotel Property Management System",
    problem: "Manual reservations across phone, email and spreadsheets",
    solution: "Centralized PMS with calendar, billing and housekeeping",
    result: "40% Operational Improvement",
  },
  {
    image: projectVinfast,
    tag: "Automotive · Marketing",
    title: "VinFast Dealership Website",
    problem: "No digital lead generation channel",
    solution: "Corporate website with headless CMS and lead routing",
    result: "3× More Leads",
  },
];

const PROCESS = [
  { n: "01", title: "Discovery", desc: "Workshops to map your business problem." },
  { n: "02", title: "Planning", desc: "Scope, milestones and clear deliverables." },
  { n: "03", title: "UI/UX Design", desc: "Interfaces engineered for adoption." },
  { n: "04", title: "Development", desc: "Iterative builds with weekly demos." },
  { n: "05", title: "Deployment", desc: "Cloud-native release with full CI/CD." },
  { n: "06", title: "Support", desc: "SLA-backed maintenance and evolution." },
];

const TESTIMONIALS = [
  {
    avatar: avatar1,
    name: "Linh Pham",
    role: "COO, Mekong Capital Group",
    quote:
      "MekongIX replaced six spreadsheets with one platform our entire ops team relies on daily. ROI in under a quarter.",
  },
  {
    avatar: avatar2,
    name: "Daniel Whitaker",
    role: "CEO, Northwind Logistics",
    quote:
      "They behave like a senior product team, not a vendor. The roadmap discipline alone is worth the engagement.",
  },
  {
    avatar: avatar3,
    name: "Minh Tran",
    role: "Founder, Stayloop PMS",
    quote:
      "From discovery to launch in 14 weeks. The platform handles 4× the booking volume with zero downtime.",
  },
];

function Landing() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustedTech />
      <Results />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">MekongIX</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[13px] font-semibold text-background shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Book Discovery Call
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-28">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Now booking Q3 engagements
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[68px]">
            Building software <br />
            that solves real <br />
            <span className="bg-gradient-to-r from-primary to-brand-soft bg-clip-text text-transparent">
              business problems
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            We help companies automate workflows, improve efficiency, and grow faster
            through custom web applications, SaaS platforms, and AI-powered solutions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 hover:bg-primary/95"
            >
              Book Discovery Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5"
            >
              View Case Studies
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex -space-x-2">
              {[avatar1, avatar2, avatar3].map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt=""
                  loading="lazy"
                  className="h-7 w-7 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 font-medium text-foreground">4.9/5</span>
              <span>from 30+ enterprise clients</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-[640px]">
            {/* Laptop */}
            <div className="relative rounded-[22px] border border-border/80 bg-gradient-to-b from-slate-100 to-slate-200 p-2 shadow-hero">
              <div className="overflow-hidden rounded-[14px] border border-slate-200 bg-white">
                <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <img
                  src={dashboardHero}
                  alt="MekongIX analytics dashboard preview"
                  width={1600}
                  height={1024}
                  className="block h-auto w-full"
                />
              </div>
            </div>
            {/* Laptop base */}
            <div className="mx-auto h-3 w-[88%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-200 shadow-md" />
            <div className="mx-auto -mt-1 h-1 w-[40%] rounded-b-xl bg-slate-300/80" />

            {/* Floating cards */}
            <FloatCard
              className="absolute -left-6 top-10 lg:-left-12"
              icon={<Gauge className="h-4 w-4 text-emerald-600" />}
              title="+70% Efficiency"
              sub="Ops automation"
            />
            <FloatCard
              className="absolute -right-4 top-24 lg:-right-10"
              icon={<Boxes className="h-4 w-4 text-primary" />}
              title="20+ Projects"
              sub="Shipped this year"
            />
            <FloatCard
              className="absolute -left-2 bottom-10 lg:-left-8"
              icon={<Bot className="h-4 w-4 text-violet-600" />}
              title="AI Automation"
              sub="GPT-4o pipelines"
            />
            <FloatCard
              className="absolute -right-2 bottom-2 lg:-right-8"
              icon={<Workflow className="h-4 w-4 text-amber-600" />}
              title="Business Systems"
              sub="CRM · ERP · PMS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  className = "",
  icon,
  title,
  sub,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div
      className={`glass-card flex items-center gap-3 rounded-2xl px-3.5 py-2.5 ${className}`}
    >
      <div className="grid h-8 w-8 place-items-center rounded-xl bg-white shadow-soft">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-[13px] font-semibold text-foreground">{title}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

/* ---------------- TRUSTED TECH ---------------- */
function TechLogo({ name }: { name: string }) {
  const className = "h-7 w-auto";
  switch (name) {
    case "React":
      return <SiReact size={28} className={className} />;
    case "Next.js":
      return <SiNextdotjs size={28} className={className} />;
    case "Node.js":
      return <SiNodedotjs size={28} className={className} />;
    case "NestJS":
      return <SiNestjs size={28} className={className} />;
    case "PostgreSQL":
      return <SiPostgresql size={28} className={className} />;
    case "MongoDB":
      return <SiMongodb size={28} className={className} />;
    case "Docker":
      return <SiDocker size={28} className={className} />;
    case "AWS":
      return <Cloud size={28} className={className} />;
    case "OpenAI":
      return <Sparkles size={28} className={className} />;
    default:
      return <span className="text-lg font-semibold">{name}</span>;
  }
}

function TrustedTech() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-page py-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted Technologies
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {TECHS.map((t) => (
            <div
              key={t}
              className="flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-slate-700"
            >
              <TechLogo name={t} />
              <span className="text-[10px] font-medium uppercase tracking-wider">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTS ---------------- */
function Results() {
  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Results"
          title="Outcomes our clients measure on the P&L"
          subtitle="We don't ship features. We ship measurable business impact across operations, revenue and reporting."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r) => (
            <div
              key={r.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="text-5xl font-bold tracking-tight text-foreground">
                {r.value}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{r.label}</div>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Services"
          title="A senior engineering team, on retainer"
          subtitle="Four practice areas, one delivery standard. Pick the one that fits your roadmap — or combine them into a long-term partnership."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-[13.5px] text-foreground"
                  >
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
          eyebrow="Featured Projects"
          title="Software that's already moving numbers"
          subtitle="A look at three recent engagements — the problem, the build, and the outcome."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:grid-rows-2">
          {/* Featured large card */}
          <ProjectCard project={PROJECTS[0]} featured className="lg:col-span-7 lg:row-span-2" />
          {/* Two stacked compact cards */}
          <ProjectCard project={PROJECTS[1]} className="lg:col-span-5" />
          <ProjectCard project={PROJECTS[2]} className="lg:col-span-5" />
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40"
          >
            View all case studies <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
  className = "",
}: {
  project: (typeof PROJECTS)[number];
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift ${className}`}
    >
      <div
        className={`relative overflow-hidden border-b border-border bg-surface ${
          featured ? "aspect-[16/10]" : "aspect-[16/9]"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur">
          {project.tag}
        </span>
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-soft">
          {project.result}
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
        <h3
          className={`font-semibold tracking-tight ${
            featured ? "text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <div
          className={`mt-5 grid gap-4 ${
            featured ? "sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          <MiniRow label="Problem" value={project.problem} />
          <MiniRow label="Solution" value={project.solution} />
        </div>

        <div className="mt-auto flex items-center justify-between pt-6">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
          >
            Read case study <ArrowRight className="h-4 w-4" />
          </a>
          <span className="text-xs text-muted-foreground">2024 — 2025</span>
        </div>
      </div>
    </article>
  );
}

function MiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1.5 text-[14px] leading-relaxed text-foreground">{value}</div>
    </div>
  );
}


/* ---------------- PROCESS ---------------- */
function Process() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Process"
          title="A predictable path from idea to production"
          subtitle="No mystery. Every engagement runs through the same six-stage delivery model."
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {PROCESS.map((p, i) => (
              <li key={p.n} className="relative">
                <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border border-border bg-card text-sm font-semibold text-primary shadow-card">
                  {p.n}
                  {i < PROCESS.length - 1 && (
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

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section id="case-studies" className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Testimonials"
          title="Operators who bet their roadmap on us"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <Quote className="h-6 w-6 text-primary/40" />
              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
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
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contact" className="bg-background px-4 py-24">
      <div className="container-page">
        <div className="gradient-cta relative overflow-hidden rounded-[32px] px-8 py-20 text-center text-white shadow-hero sm:px-16">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Rocket className="h-3.5 w-3.5" />
              Free 30-minute consultation
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Have a business process that needs automation?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/80">
              Tell us about the workflow that's slowing you down. We'll come back
              with a scoped plan and a fixed quote.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-lift transition hover:-translate-y-0.5"
              >
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View our work
              </a>
            </div>
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
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-[15px] font-semibold">MekongIX</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Custom software for ambitious operators. Headquartered in Ho Chi Minh
            City, building for the world.
          </p>
        </div>
        <FooterCol
          title="Services"
          items={["Business Systems", "SaaS Development", "AI Integration", "Websites"]}
        />
        <FooterCol
          title="Company"
          items={["About", "Case Studies", "Blog", "Careers"]}
        />
        <FooterCol
          title="Contact"
          items={["hello@mekongix.com", "+84 28 7777 0123", "District 1, Ho Chi Minh City"]}
        />
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} MekongIX. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-foreground/80 hover:text-primary">
              {i}
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
    <div className="mx-auto max-w-2xl text-center">
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
    </div>
  );
}

// Silence unused-import warnings for icon set kept available for future cards.
void Database;
