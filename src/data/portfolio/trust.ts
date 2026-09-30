export type ClientLogoKey =
  | "petid"
  | "y99"
  | "cafinex"
  | "yhotel"
  | "vinfast"
  | "greencm"
  | "asianightlife";

export interface ClientLogo {
  name: string;
  industry: string;
  /** Optional live site or public proof URL */
  url?: string;
  /** Brand mark pulled from the live project site (when available) */
  logoKey?: ClientLogoKey;
}

export interface TrustGuarantee {
  icon: "shield" | "lock" | "file" | "calendar";
  title: string;
  desc: string;
}

/** Selected work logos — not "Trusted by". Mix of clients, own products, and in-progress. */
export const clientLogos: ClientLogo[] = [
  {
    name: "ERP & Loan Platform",
    industry: "Fintech · Internal · NDA",
  },
  {
    name: "Y Hotel",
    industry: "Hospitality",
    url: "https://yhotel.vn/",
    logoKey: "yhotel",
  },
  {
    name: "Cafinex",
    industry: "E-commerce",
    url: "https://cafinex.vn/",
    logoKey: "cafinex",
  },
  {
    name: "PETID Vietnam",
    industry: "Own Product · Building",
    url: "https://petid.vn/",
    logoKey: "petid",
  },
  {
    name: "Y99 Finance",
    industry: "Finance",
    url: "https://vayicloudcantho.com/",
    logoKey: "y99",
  },
  {
    name: "Asia Night Life",
    industry: "Content Platform",
    url: "https://asianightlife.sg/",
    logoKey: "asianightlife",
  },
  {
    name: "GCM Manager",
    industry: "Automotive · Internal",
    url: "https://greencm.vn/",
    logoKey: "greencm",
  },
  {
    name: "VinFast Ngọc Anh",
    industry: "Automotive",
    url: "https://vinfast3scamau.com/",
    logoKey: "vinfast",
  },
];

export const trustGuarantees: TrustGuarantee[] = [
  {
    icon: "calendar",
    title: "Milestone-based payments",
    desc: "Projects are split into clearly defined milestones rather than requiring the full project fee upfront.",
  },
  {
    icon: "lock",
    title: "NDA when needed",
    desc: "I can work under an NDA when a project involves confidential business information.",
  },
  {
    icon: "shield",
    title: "30-day post-launch warranty",
    desc: "Warranty for agreed project defects after launch. Optional maintenance for ongoing work.",
  },
  {
    icon: "file",
    title: "Written scope before code",
    desc: "The scope is documented before development begins — with a clear quote after discovery.",
  },
];
