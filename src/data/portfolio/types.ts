export type ServiceIcon = "workflow" | "smartphone" | "bot" | "megaphone";

export type FloatCardIcon = "gauge" | "boxes" | "bot" | "workflow";

export type ImageKey =
  | "dashboardHero"
  | "projectLoan"
  | "projectHotel"
  | "projectVinfast"
  | "projectGcmManager"
  | "projectEcommerce"
  | "projectAI"
  | "projectRealEstate"
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
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadges: string[];
    floatCards: Array<{
      icon: FloatCardIcon;
      title: string;
      sub: string;
      className: string;
    }>;
  };
  sections: {
    results: { eyebrow: string; title: string; subtitle: string };
    services: { eyebrow: string; title: string; subtitle: string };
    projects: { eyebrow: string; title: string; subtitle: string };
    process: { eyebrow: string; title: string; subtitle: string };
    about: { eyebrow: string; title: string; subtitle: string };
    testimonials: { eyebrow: string; title: string; subtitle?: string };
    clients: { eyebrow: string; title: string };
    trust: { eyebrow: string; title: string; subtitle: string };
    cta: {
      badge: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
  };
  footer: {
    blurb: string;
    legal: Array<{ label: string; href: string }>;
  };
  freelancePlatforms: string[];
}

export interface ResultMetric {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  icon: ServiceIcon;
  title: string;
  gigTitle: string;
  desc: string;
  items: string[];
  deliverables: string[];
  stack: string;
  from: string;
  timeline: string;
  span: string;
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
  desc: string;
}

export interface Profile {
  name: string;
  title: string;
  avatarKey: ImageKey;
  bio: string;
  longBio: string;
  skills: string[];
  languages: string[];
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
