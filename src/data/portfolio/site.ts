import type { SiteConfig } from "./types";

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

const SITE_URL =
  import.meta.env.VITE_PORTFOLIO_SITE_URL?.trim() ?? "https://tranquangkhai.dev";

export const portfolioMeta = {
  isSampleContent: false,
  sampleNotice: "",
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Trần Quang Khái",
    tagline: "Business Software Developer",
    description:
      "Custom software · Web · SaaS · Internal Tools · AI Automation",
  },
  seo: {
    title:
      "Trần Quang Khái — Business Software Developer | Web, SaaS & Automation",
    description:
      "Trần Quang Khái builds custom business software, internal tools, SaaS products and AI automation for startups and growing businesses.",
    ogTitle: "Trần Quang Khái — Business Software Developer",
    ogDescription: "I turn messy business workflows into reliable software.",
    canonicalUrl: SITE_URL,
  },
  contact: {
    email: EMAIL,
    phone: "",
    address: "Cần Thơ, Vietnam",
    bookingUrl: BOOKING_URL,
    calendlyUrl:
      BOOKING_URL ||
      `mailto:${EMAIL}?subject=${encodeURIComponent("Discovery Call Request")}`,
  },
  social: SOCIAL,
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  navCta: "Start a Project",
  mobileStickyCta: "Start a Project →",
  hero: {
    eyebrow: "BUSINESS SOFTWARE · WEB · AUTOMATION",
    headline: "I turn messy business workflows into reliable software.",
    subheadline:
      "I build websites, internal management tools, online products, and AI helpers tailored to your business — replacing spreadsheets, cutting repetitive work, and helping your team run more smoothly.",
    supportingText:
      "From a simple business website to a full operational platform, I work from the problem first — then design and build the software around the workflow.",
    primaryCta: "Tell Me About Your Project →",
    secondaryCta: "View Selected Work ↓",
    proofLine: "8+ projects in real-world use · Websites · Business tools · Apps · AI",
    locationLine: "Based in Vietnam · UTC+7 · Remote worldwide",
  },
  sections: {
    selectedWork: {
      eyebrow: "Proof",
      title: "Clients & products",
      subtitle:
        "Businesses and products I've built software for.",
    },
    services: {
      eyebrow: "Services",
      title: "Software built around your business.",
      subtitle:
        "I don't start by picking technologies. I start by understanding how your team works, where time is being lost, and what the software actually needs to accomplish.",
    },
    projects: {
      eyebrow: "Case Studies",
      title: "Flagship projects",
      subtitle:
        "Four systems that show how I turn business workflows into production software.",
    },
    moreWork: {
      eyebrow: "Other work",
      title: "Other projects",
      subtitle: "A few more systems and digital products I've worked on.",
    },
    process: {
      eyebrow: "Process",
      title: "From business problem to software your team uses every day.",
      subtitle:
        "Good software starts with understanding the workflow — not picking the technology.",
    },
    about: {
      eyebrow: "About",
      title: "I build software for the way businesses actually work.",
      subtitle:
        "I'm Trần Quang Khái, a full-stack software developer based in Vietnam.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say",
      subtitle: "Feedback from businesses I've worked with.",
    },
    engagement: {
      eyebrow: "Engagement",
      title: "Simple engagement. Clear scope.",
      subtitle:
        "Every project is different, so I use the scope and complexity of the workflow to determine the final price.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      subtitle: "Practical answers before we start.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell me about your project",
      subtitle:
        "Share a few details and I'll review the problem, suggest a practical approach, and provide a scoped proposal.",
      submitCta: "Send Project Brief →",
      supporting: "No commitment. I'll review the details and get back to you.",
    },
    cta: {
      badge: "Next step",
      title: "Have a workflow that's slowing your team down?",
      subtitle:
        "Maybe it's a spreadsheet your team has outgrown. Maybe your customers need an easier way to order, book, or check their status. Maybe your business has grown to the point where manual processes are becoming expensive.\n\nTell me what you're trying to fix.",
      primaryCta: "Tell Me About Your Project →",
      secondaryCta: "View Selected Work",
      supporting:
        "I'll review the problem, suggest a practical approach, and provide a scoped proposal.",
    },
  },
  footer: {
    blurb: "Custom software · Web · SaaS · AI Automation",
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    copyright: "© 2026 Trần Quang Khái.",
  },
  freelancePlatforms: [
    ...(SOCIAL.upwork ? (["Upwork"] as const) : []),
    ...(SOCIAL.fiverr ? (["Fiverr"] as const) : []),
    ...(SOCIAL.contra ? (["Contra"] as const) : []),
  ],
};
