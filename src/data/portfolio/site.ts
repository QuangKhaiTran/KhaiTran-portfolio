import type { SiteConfig } from "./types";

// Pending owner inputs: see PORTFOLIO-PENDING.md in repo root.

export const portfolioMeta = {
  isSampleContent: false,
  sampleNotice: "",
};

const EMAIL = "tranquangkhai562@gmail.com";

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
    // → PORTFOLIO-PENDING.md: email domain, Calendly URL
    email: EMAIL,
    phone: "",
    address: "Ho Chi Minh City, Vietnam",
    calendlyUrl: `mailto:${EMAIL}?subject=${encodeURIComponent("Discovery Call Request")}`,
  },
  social: {
    // → PORTFOLIO-PENDING.md: Upwork, Fiverr, LinkedIn, GitHub URLs
    upwork: "",
    fiverr: "",
    contra: "",
    linkedin: "",
    github: "",
  },
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
      "Fixed-price packages",
      "Weekly demos & clear scope",
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
        "I focus on measurable results — less manual work, faster operations, and software your team actually adopts.",
    },
    services: {
      eyebrow: "Services",
      title: "What I can build for you",
      subtitle:
        "Focused on software delivery and AI automation with clear scope, concrete deliverables, and transparent starting rates.",
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
        "Full-stack developer in Ho Chi Minh City. I ship production software for fintech, hospitality, retail, and legal tech clients worldwide.",
    },
    testimonials: {
      eyebrow: "Client Reviews",
      title: "What clients say after we ship",
      subtitle:
        "Feedback from clients on projects shown above. Additional references available on request.",
    },
    cta: {
      badge: "Free discovery call · reply within 48h",
      title: "Have a workflow that's slowing your team down?",
      subtitle:
        "Email me about the problem. I'll reply with a scoped plan and fixed-price quote within 48 hours — no obligation.",
      primaryCta: "Send an Email",
      secondaryCta: "View projects",
    },
  },
  footer: {
    blurb:
      "Full-stack developer building custom software for startups and SMBs. Based in Ho Chi Minh City, working with clients worldwide.",
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  freelancePlatforms: [], // → PORTFOLIO-PENDING.md: e.g. ["Upwork", "Fiverr", "Contra"]
};
