import type { SiteConfig } from "./types";

// ── Owner inputs (also overridable via VITE_* env vars at build time) ─────────
// See PORTFOLIO-PENDING.md for the full checklist.

const EMAIL =
  import.meta.env.VITE_PORTFOLIO_EMAIL ?? "tranquangkhai562@gmail.com";

const BOOKING_URL =
  import.meta.env.VITE_PORTFOLIO_CALENDLY?.trim() ?? "";

const SOCIAL = {
  upwork: import.meta.env.VITE_PORTFOLIO_UPWORK?.trim() ?? "",
  fiverr: import.meta.env.VITE_PORTFOLIO_FIVERR?.trim() ?? "",
  contra: import.meta.env.VITE_PORTFOLIO_CONTRA?.trim() ?? "",
  linkedin: import.meta.env.VITE_PORTFOLIO_LINKEDIN?.trim() ?? "",
  github: import.meta.env.VITE_PORTFOLIO_GITHUB?.trim() ?? "",
};

export const portfolioMeta = {
  isSampleContent: false,
  sampleNotice: "",
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Trần Quang Khái",
    tagline: "Full-Stack Developer · Custom Web Apps & AI Automation",
    description:
      "I build custom web apps, internal tools, and AI-powered automation for startups and SMBs — scoped clearly, shipped on time, and built to solve real business problems.",
  },
  seo: {
    title: "Trần Quang Khái — Full-Stack Developer | React, Next.js, AI Automation",
    description:
      "Freelance full-stack developer based in Vietnam. I build custom web applications, SaaS MVPs, and AI workflow automation for startups and SMBs worldwide.",
    ogTitle: "Trần Quang Khái — Full-Stack Developer & Software Consultant",
    ogDescription:
      "Custom web apps, SaaS MVPs, and AI automation for startups and growing businesses.",
  },
  contact: {
    email: EMAIL,
    phone: "",
    address: "Cần Thơ, Vietnam",
    bookingUrl: BOOKING_URL,
    calendlyUrl: BOOKING_URL || `mailto:${EMAIL}?subject=${encodeURIComponent("Discovery Call Request")}`,
  },
  social: SOCIAL,
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    badge: "Available for freelance · UTC+7 · overlap US/EU",
    headline: "I build software that solves real",
    headlineAccent: "business problems",
    subheadline:
      "I'm a full-stack developer helping companies replace spreadsheets, launch SaaS products, and automate workflows with custom web apps and AI.",
    primaryCta: "Get in Touch",
    secondaryCta: "View Projects",
    trustBadges: [
      "React · Next.js · Node.js",
      "Fixed-price milestones",
      "Weekly demos & written scope",
    ],
    floatCards: [
      {
        icon: "gauge",
        title: "6+ Projects",
        sub: "Shipped to production",
        className: "absolute -left-6 top-10 lg:-left-12",
      },
      {
        icon: "boxes",
        title: "6+ Industries",
        sub: "Fintech · Retail · AI",
        className: "absolute -right-4 top-24 lg:-right-10",
      },
      {
        icon: "bot",
        title: "AI Automation",
        sub: "GPT-4o · RAG · Agents",
        className: "absolute -left-2 bottom-10 lg:-left-8",
      },
      {
        icon: "workflow",
        title: "Business Systems",
        sub: "CRM · ERP · PMS",
        className: "absolute -right-2 bottom-2 lg:-right-8",
      },
    ],
  },
  sections: {
    results: {
      eyebrow: "Impact",
      title: "Outcomes clients care about",
      subtitle:
        "Less manual work, faster operations, and software your team actually adopts — not vanity metrics.",
    },
    services: {
      eyebrow: "Services",
      title: "What I can build for you",
      subtitle:
        "Focused on web apps and AI automation with clear scope, concrete deliverables, and transparent starting rates.",
    },
    projects: {
      eyebrow: "Case Studies",
      title: "Selected project work",
      subtitle:
        "Real engagements across fintech, hospitality, retail, and legal tech — scoped clearly and shipped on time.",
    },
    process: {
      eyebrow: "Process",
      title: "How I work from idea to launch",
      subtitle:
        "A clear six-step process so you always know what's next — no black box development.",
    },
    about: {
      eyebrow: "About",
      title: "Hi, I'm Trần Quang Khái",
      subtitle:
        "Full-stack developer in Cần Thơ, Vietnam. I ship production software for fintech, hospitality, retail, and automotive clients worldwide.",
    },
    testimonials: {
      eyebrow: "Client Reviews",
      title: "What clients say after we ship",
      subtitle:
        "Feedback tied to projects above — each review links to a shipped product you can verify.",
    },
    clients: {
      eyebrow: "Trusted by",
      title: "Teams I've shipped for",
    },
    trust: {
      eyebrow: "How we work together",
      title: "Low risk from day one",
      subtitle:
        "Clear scope, milestone payments, and full ownership — so you can hire with confidence.",
    },
    cta: {
      badge: "Free discovery · reply within 48h",
      title: "Have a workflow that's slowing your team down?",
      subtitle:
        "Tell me about the problem. I'll reply with a scoped plan and fixed-price quote within 48 hours — no obligation.",
      primaryCta: "Get in Touch",
      secondaryCta: "View projects",
    },
  },
  footer: {
    blurb:
      "Full-stack developer building custom software for startups and SMBs. Based in Cần Thơ, Vietnam, working with clients worldwide.",
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  freelancePlatforms: [
    ...(SOCIAL.upwork ? (["Upwork"] as const) : []),
    ...(SOCIAL.fiverr ? (["Fiverr"] as const) : []),
    ...(SOCIAL.contra ? (["Contra"] as const) : []),
  ],
};
