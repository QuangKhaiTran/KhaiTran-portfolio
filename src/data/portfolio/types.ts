export type ServiceIcon =
  | "workflow"
  | "smartphone"
  | "bot"
  | "globe"
  | "wrench"
  | "megaphone";

export type FloatCardIcon = "gauge" | "boxes" | "bot" | "workflow";

export type ProjectType =
  | "client"
  | "internal"
  | "own-product"
  | "in-progress";

export type ImageKey =
  | "dashboardHero"
  | "projectLoan"
  | "projectHotel"
  | "projectVinfast"
  | "projectGcmManager"
  | "projectEcommerce"
  | "projectAI"
  | "projectRealEstate"
  | "projectPetId"
  | "projectCafinex"
  | "projectY99"
  | "avatar1"
  | "avatar2"
  | "avatar3"
  | "avatarKhai";

export type TechName =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Node.js"
  | "Supabase"
  | "PostgreSQL"
  | "Redis"
  | "Tailwind CSS"
  | "Vercel"
  | "OpenAI"
  | "Sepay"
  | "OnePay"
  | "Resend"
  | "TipTap"
  | "TanStack Query"
  | "Radix UI"
  | "Zod"
  | "decimal.js"
  | "next-intl"
  | "Vitest"
  | "Docker";

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    canonicalUrl?: string;
  };
  contact: {
    email: string;
    phone?: string;
    address: string;
    /** Calendly or similar booking URL. Leave empty to fall back to mailto. */
    bookingUrl: string;
    /** @deprecated Use bookingUrl — kept for backward compatibility */
    calendlyUrl: string;
  };
  social: {
    upwork?: string;
    fiverr?: string;
    contra?: string;
    linkedin?: string;
    github?: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent?: string;
    subheadline: string;
    supportingText: string;
    primaryCta: string;
    secondaryCta: string;
    proofLine: string;
    locationLine: string;
    /** @deprecated V1 float cards — optional for compat */
    badge?: string;
    trustBadges?: string[];
    floatCards?: Array<{
      icon: FloatCardIcon;
      title: string;
      sub: string;
      className: string;
    }>;
  };
  sections: {
    selectedWork: { eyebrow: string; title: string; subtitle: string };
    services: { eyebrow: string; title: string; subtitle: string };
    projects: { eyebrow: string; title: string; subtitle: string };
    moreWork: { eyebrow: string; title: string; subtitle: string };
    process: { eyebrow: string; title: string; subtitle: string };
    about: { eyebrow: string; title: string; subtitle: string };
    testimonials: { eyebrow: string; title: string; subtitle?: string };
    engagement: { eyebrow: string; title: string; subtitle: string };
    faq: { eyebrow: string; title: string; subtitle?: string };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      submitCta: string;
      supporting: string;
    };
    cta: {
      badge: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      supporting?: string;
    };
    /** @deprecated V1 */
    results?: { eyebrow: string; title: string; subtitle: string };
    clients?: { eyebrow: string; title: string };
    trust?: { eyebrow: string; title: string; subtitle: string };
  };
  footer: {
    blurb: string;
    legal: Array<{ label: string; href: string }>;
    copyright: string;
  };
  freelancePlatforms: string[];
  navCta: string;
  mobileStickyCta: string;
}

export interface ResultMetric {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  icon: ServiceIcon;
  number: string;
  title: string;
  subtitle: string;
  gigTitle: string;
  desc: string;
  items: string[];
  deliverables: string[];
  stack: string;
  from: string;
  timeline: string;
  span: string;
  cta: string;
  ctaHref: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  isSample: boolean;
  imageKey: ImageKey;
  tag: string;
  title: string;
  /** One-line problem → solution for cards */
  headline: string;
  problem: string;
  solution: string;
  result: string;
  year: string;
  client: {
    name: string;
    industry: string;
    location: string;
    size: string;
  };
  duration: string;
  role: string;
  stack: string[];
  overview: string;
  challenges: string[];
  approach: string[];
  outcomes: string[];
  metrics: CaseStudyMetric[];
  /** Business outcomes shown prominently on cards and case study pages */
  businessMetrics?: CaseStudyMetric[];
  capabilities?: string[];
  projectType: ProjectType;
  statusLabel: string;
  featured: boolean;
  featuredOrder?: number;
  closing?: string;
  testimonialId?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  /** Shown when the product is private / NDA — no public live URL */
  isConfidential?: boolean;
  confidentialNote?: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  shortTitle: string;
  desc: string;
}

export interface AboutValue {
  title: string;
  desc: string;
}

export interface StackGroup {
  label: string;
  items: string;
}

export interface Profile {
  name: string;
  title: string;
  avatarKey: ImageKey;
  bio: string;
  longBio: string;
  skills: string[];
  languages: string[];
  values: AboutValue[];
  stackGroups: StackGroup[];
  location: string;
  availability: string;
}

export interface Testimonial {
  id: string;
  avatarKey: ImageKey;
  name: string;
  role: string;
  company: string;
  quote: string;
  platform?: "Upwork" | "Fiverr" | "Direct" | "Referral" | "Contra";
  projectSlug?: string;
  /** Public profile URL for verification (LinkedIn recommended) */
  linkedinUrl?: string;
  /** Link to the shipped product when publicly verifiable */
  companyUrl?: string;
  rating: number;
  isSample: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  from: string;
  desc: string;
  items: string[];
  note?: string;
}

export interface EngagementInfo {
  packages: PricingPackage[];
  payment: { title: string; desc: string };
  ownership: { title: string; desc: string };
  scope: { title: string; desc: string };
  warranty: { title: string; desc: string };
  startingLabel: string;
  quoteLabel: string;
}

export interface MoreProject {
  slug?: string;
  title: string;
  tag: string;
  desc: string;
  role: string;
  liveUrl?: string;
}
