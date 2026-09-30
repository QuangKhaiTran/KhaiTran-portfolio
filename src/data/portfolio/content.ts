import type { Locale } from "@/i18n/types";
import type {
  CaseStudy,
  EngagementInfo,
  FaqItem,
  MoreProject,
  ProcessStep,
  Profile,
  ResultMetric,
  Service,
  SiteConfig,
  TechName,
  Testimonial,
} from "./types";
import type { ClientLogo, TrustGuarantee } from "./trust";

import {
  siteConfig as enSite,
  portfolioMeta as enMeta,
} from "./site";
import { resultMetrics as enMetrics, techStack as enTech } from "./metrics";
import { services as enServices } from "./services";
import {
  caseStudies as enCaseStudies,
  getCaseStudyBySlug as enGetBySlug,
  getAllCaseStudySlugs,
  getFeaturedCaseStudies as enGetFeatured,
} from "./case-studies";
import { processSteps as enProcess } from "./process";
import { profile as enProfile, aboutHighlights as enAbout } from "./about";
import {
  testimonials as enTestimonials,
  getTestimonialById as enGetTestimonial,
  getTestimonialByProjectSlug as enGetTestimonialBySlug,
} from "./testimonials";
import { faqItems as enFaq } from "./faq";
import { clientLogos as enLogos, trustGuarantees as enTrust } from "./trust";
import {
  engagement as enEngagement,
  moreProjects as enMoreProjects,
} from "./engagement";

import { siteConfig as viSite, portfolioMeta as viMeta } from "./vi/site";
import { resultMetrics as viMetrics, techStack as viTech } from "./vi/metrics";
import { services as viServices } from "./vi/services";
import {
  caseStudies as viCaseStudies,
  getCaseStudyBySlug as viGetBySlug,
  getFeaturedCaseStudies as viGetFeatured,
} from "./vi/case-studies";
import { processSteps as viProcess } from "./vi/process";
import { profile as viProfile, aboutHighlights as viAbout } from "./vi/about";
import {
  testimonials as viTestimonials,
  getTestimonialById as viGetTestimonial,
  getTestimonialByProjectSlug as viGetTestimonialBySlug,
} from "./vi/testimonials";
import { faqItems as viFaq } from "./vi/faq";
import { clientLogos as viLogos, trustGuarantees as viTrust } from "./vi/trust";
import {
  engagement as viEngagement,
  moreProjects as viMoreProjects,
} from "./vi/engagement";

export type PortfolioContent = {
  portfolioMeta: typeof enMeta;
  siteConfig: SiteConfig;
  resultMetrics: ResultMetric[];
  techStack: TechName[];
  services: Service[];
  caseStudies: CaseStudy[];
  processSteps: ProcessStep[];
  profile: Profile;
  aboutHighlights: Array<{ label: string; value: string }>;
  testimonials: Testimonial[];
  faqItems: FaqItem[];
  clientLogos: ClientLogo[];
  trustGuarantees: TrustGuarantee[];
  engagement: EngagementInfo;
  moreProjects: MoreProject[];
  getCaseStudyBySlug: (slug: string) => CaseStudy | undefined;
  getFeaturedCaseStudies: () => CaseStudy[];
  getTestimonialById: (id: string) => Testimonial | undefined;
  getTestimonialByProjectSlug: (slug: string) => Testimonial | undefined;
  getAllCaseStudySlugs: () => string[];
};

const enContent: PortfolioContent = {
  portfolioMeta: enMeta,
  siteConfig: enSite,
  resultMetrics: enMetrics,
  techStack: enTech,
  services: enServices,
  caseStudies: enCaseStudies,
  processSteps: enProcess,
  profile: enProfile,
  aboutHighlights: enAbout,
  testimonials: enTestimonials,
  faqItems: enFaq,
  clientLogos: enLogos,
  trustGuarantees: enTrust,
  engagement: enEngagement,
  moreProjects: enMoreProjects,
  getCaseStudyBySlug: enGetBySlug,
  getFeaturedCaseStudies: enGetFeatured,
  getTestimonialById: enGetTestimonial,
  getTestimonialByProjectSlug: enGetTestimonialBySlug,
  getAllCaseStudySlugs,
};

const viContent: PortfolioContent = {
  portfolioMeta: viMeta,
  siteConfig: viSite,
  resultMetrics: viMetrics,
  techStack: viTech,
  services: viServices,
  caseStudies: viCaseStudies,
  processSteps: viProcess,
  profile: viProfile,
  aboutHighlights: viAbout,
  testimonials: viTestimonials,
  faqItems: viFaq,
  clientLogos: viLogos,
  trustGuarantees: viTrust,
  engagement: viEngagement,
  moreProjects: viMoreProjects,
  getCaseStudyBySlug: viGetBySlug,
  getFeaturedCaseStudies: viGetFeatured,
  getTestimonialById: viGetTestimonial,
  getTestimonialByProjectSlug: viGetTestimonialBySlug,
  getAllCaseStudySlugs,
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return locale === "vi" ? viContent : enContent;
}
