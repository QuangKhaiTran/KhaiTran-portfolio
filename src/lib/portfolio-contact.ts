import { siteConfig } from "@/data/portfolio/site";
import { uiCopy } from "@/i18n/ui";
import type { Locale } from "@/i18n/types";

const { contact } = siteConfig;

export function getMailtoHref(subject?: string): string {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${contact.email}${params}`;
}

export function hasBookingLink(): boolean {
  return Boolean(contact.bookingUrl && !contact.bookingUrl.startsWith("mailto:"));
}

/** Primary outreach link — Calendly when configured, otherwise mailto. */
export function getPrimaryContactHref(locale: Locale = "en"): string {
  if (hasBookingLink()) return contact.bookingUrl;
  return getMailtoHref(uiCopy[locale].contactSubjectDiscovery);
}

export function getPrimaryContactLabel(locale: Locale = "en"): string {
  const t = uiCopy[locale];
  return hasBookingLink() ? t.contactBookCall : t.contactSendEmail;
}

export function getSecondaryContactHref(locale: Locale = "en"): string {
  if (hasBookingLink()) return getMailtoHref(uiCopy[locale].contactSubjectInquiry);
  return "#projects";
}

export function getSecondaryContactLabel(locale: Locale = "en"): string {
  const t = uiCopy[locale];
  return hasBookingLink() ? t.contactEmailInstead : t.contactViewProjects;
}

export type ProjectBrief = {
  name: string;
  email: string;
  company?: string;
  project: string;
  budget: string;
  timeline: string;
};

/** Build a mailto with structured project-brief body (preserves existing email flow). */
export function getProjectBriefMailto(brief: ProjectBrief): string {
  const subject = `Project Brief — ${brief.name}${brief.company ? ` · ${brief.company}` : ""}`;
  const body = [
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Company / Website: ${brief.company || "—"}`,
    "",
    "What are you trying to build?",
    brief.project,
    "",
    `Approximate budget: ${brief.budget}`,
    `Timeline: ${brief.timeline}`,
  ].join("\n");

  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}