import { siteConfig } from "@/data/portfolio/site";

const { contact } = siteConfig;

export function getMailtoHref(subject?: string): string {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${contact.email}${params}`;
}

export function hasBookingLink(): boolean {
  return Boolean(contact.bookingUrl && !contact.bookingUrl.startsWith("mailto:"));
}

/** Primary outreach link — Calendly when configured, otherwise mailto. */
export function getPrimaryContactHref(): string {
  if (hasBookingLink()) return contact.bookingUrl;
  return getMailtoHref("Discovery Call Request");
}

export function getPrimaryContactLabel(): string {
  return hasBookingLink() ? "Book a Free Call" : "Send an Email";
}

export function getSecondaryContactHref(): string {
  if (hasBookingLink()) return getMailtoHref("Project Inquiry");
  return "#projects";
}

export function getSecondaryContactLabel(): string {
  return hasBookingLink() ? "Email instead" : "View projects";
}
