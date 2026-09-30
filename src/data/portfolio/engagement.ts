import type { EngagementInfo, MoreProject } from "./types";

export const engagement: EngagementInfo = {
  startingLabel: "Starting from",
  quoteLabel: "Final quote after scope.",
  packages: [
    {
      id: "business-software",
      title: "Business Software",
      from: "From $3,000",
      desc: "For internal systems, dashboards, CRM, workflow platforms and operational tools.",
      items: [
        "Understanding your workflow & requirements",
        "Interface design",
        "The screens and features your team uses",
        "The system behind it — data, rules & calculations",
        "Logins & user permissions",
        "Launch & setup",
      ],
      note: "Typical starting point · Final quote after scope",
    },
    {
      id: "web-saas",
      title: "Web & SaaS",
      from: "From $2,000",
      desc: "For business websites, customer portals, online stores and first versions of subscription products.",
      items: [
        "Website that works on phone & desktop",
        "Easy content editing (CMS)",
        "Data & business logic behind the site",
        "Connections to payments, email & other tools",
        "Launch & setup",
      ],
      note: "Typical starting point · Final quote after scope",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      from: "From $1,500",
      desc: "For focused AI features and workflow automation.",
      items: [
        "Adding AI to your existing workflow",
        "Processing documents & data",
        "Connecting the tools you already use",
        "Automating repetitive tasks",
        "Simple internal tools for your team",
      ],
      note: "Typical starting point · Final quote after scope",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      from: "From $300/month",
      desc: "For ongoing support after launch.",
      items: [
        "Bug fixes",
        "Keeping an eye on uptime & errors",
        "Small improvements",
        "Security & software updates",
        "Help whenever your team has questions",
      ],
      note: "Larger feature development is scoped separately.",
    },
  ],
  payment: {
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
