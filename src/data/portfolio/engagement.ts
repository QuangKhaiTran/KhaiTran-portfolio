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
        "Requirements & workflow mapping",
        "UI/UX",
        "Frontend",
        "Backend",
        "Database",
        "Authentication",
        "Deployment",
      ],
      note: "Typical starting point · Final quote after scope",
    },
    {
      id: "web-saas",
      title: "Web & SaaS",
      from: "From $2,000",
      desc: "For business websites, customer portals, e-commerce and SaaS MVPs.",
      items: [
        "Responsive frontend",
        "CMS",
        "Backend",
        "Database",
        "Integrations",
        "Deployment",
      ],
      note: "Typical starting point · Final quote after scope",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      from: "From $1,500",
      desc: "For focused AI features and workflow automation.",
      items: [
        "AI integration",
        "Data processing",
        "API integrations",
        "Workflow automation",
        "Internal tools",
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
        "Monitoring",
        "Small improvements",
        "Dependency updates",
        "Technical support",
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
    desc: "Marketing website and CMS built to support a finance company's digital presence and content operations.",
    role: "Full-stack development",
    liveUrl: "https://vayicloudcantho.com/",
  },
  {
    slug: "asia-night-life-platform",
    title: "Asia Night Life",
    tag: "Content Platform · International",
    desc: "A multi-location nightlife platform with venue content, localization, and SEO-focused URL architecture.",
    role: "Development · Migration · Technical implementation",
    liveUrl: "https://asianightlife.sg/",
  },
  {
    slug: "gcm-manager-dealer-operations",
    title: "GCM Manager",
    tag: "Automotive · Internal Operations",
    desc: "Internal management software connecting showroom operations, customer workflows, and contract-related processes.",
    role: "Full-stack development",
    liveUrl: "https://greencm.vn/",
  },
  {
    slug: "vinfast-dealership-website",
    title: "VinFast Ngọc Anh",
    tag: "Automotive · Digital Showroom",
    desc: "A digital vehicle showcase and lead-generation platform designed around vehicle discovery and customer inquiries.",
    role: "Product development",
    liveUrl: "https://vinfast3scamau.com/",
  },
];
