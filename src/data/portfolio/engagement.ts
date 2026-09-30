import type { EngagementInfo, MoreProject } from "./types";

export const engagement: EngagementInfo = {
  startingLabel: "Prices below are starting points",
  quoteLabel: "the final quote comes after we agree on scope.",
  packages: [
    {
      id: "business-website",
      title: "Business Website",
      from: "From $1,500",
      desc: "For company, service and product websites your team can update themselves.",
      items: [
        "Design matched to your brand",
        "Works on phone & desktop",
        "Easy content editing (CMS)",
        "Basic SEO & launch",
      ],
    },
    {
      id: "web-saas",
      title: "Web App & SaaS",
      from: "From $5,000",
      desc: "For customer portals, online stores and first versions of subscription products.",
      items: [
        "User accounts & permissions",
        "Data & business logic behind the app",
        "Connections to payments, email & other tools",
        "Launch & setup",
      ],
    },
    {
      id: "business-software",
      title: "Business Software",
      from: "From $6,000",
      desc: "For internal systems, dashboards, CRM, workflow platforms and operational tools.",
      items: [
        "Workflow & requirements mapping",
        "Interface design",
        "Screens, data & business rules",
        "User permissions & launch",
      ],
    },
    {
      id: "mobile-apps",
      title: "Mobile App",
      from: "From $6,000",
      desc: "For customer apps, internal staff apps and field team apps.",
      items: [
        "One app for iOS & Android",
        "Connected to your existing system",
        "Logins & permissions",
        "App Store & Google Play submission",
      ],
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      from: "From $2,000",
      desc: "For focused AI features and workflow automation.",
      items: [
        "Adding AI to your existing workflow",
        "Processing documents & data",
        "Connecting the tools you already use",
        "Automating repetitive tasks",
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance",
      from: "From $400/month",
      desc: "For ongoing support after launch.",
      items: [
        "Bug fixes",
        "Uptime & error monitoring",
        "Small improvements",
        "Security & software updates",
      ],
      note: "Larger feature development is scoped separately.",
    },
  ],  payment: {
    title: "Milestone-based",
    desc: "Projects are split into clearly defined milestones rather than requiring the full project fee upfront.",
  },
  ownership: {
    title: "You own the work",
    desc: "You own the final code and project assets after the agreed handoff and payment terms are completed.",
  },
  scope: {
    title: "Documented scope",
    desc: "The scope is documented before development begins.",
  },
  warranty: {
    title: "Post-launch warranty",
    desc: "30-day warranty for agreed project defects after launch.",
  },
};

export const moreProjects: MoreProject[] = [
  {
    slug: "y99-finance-hub",
    title: "Y99 Finance",
    tag: "Finance · CMS · Business Website",
    desc: "A finance company website that marketing updates on its own, turning visitors into loan inquiries.",
    role: "Full-stack development",
    liveUrl: "https://vayicloudcantho.com/",
  },
  {
    slug: "asia-night-life-platform",
    title: "Asia Night Life",
    tag: "Content Platform · International",
    desc: "A nightlife guide across 4 countries and 8 languages, with an AI assistant that recommends venues.",
    role: "Full-stack development · SEO",
    liveUrl: "https://asianightlife.sg/",
  },
  {
    slug: "gcm-manager-dealer-operations",
    title: "GCM Manager",
    tag: "Automotive · Internal Operations",
    desc: "Internal management software that connects showroom operations, customer follow-up, and contracts.",
    role: "Full-stack development",
    liveUrl: "https://greencm.vn/",
  },
  {
    slug: "vinfast-dealership-website",
    title: "VinFast Ngọc Anh",
    tag: "Automotive · Digital Showroom",
    desc: "A digital showroom where customers explore vehicles, book test drives, and contact the local dealer.",
    role: "Product development",
    liveUrl: "https://vinfast3scamau.com/",
  },
];
