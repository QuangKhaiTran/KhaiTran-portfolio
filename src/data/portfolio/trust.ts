export interface ClientLogo {
  name: string;
  industry: string;
  /** Optional live site or public proof URL */
  url?: string;
}

export interface TrustGuarantee {
  icon: "shield" | "lock" | "file" | "calendar";
  title: string;
  desc: string;
}

export const clientLogos: ClientLogo[] = [
  { name: "Y Hotel", industry: "Hospitality", url: "https://yhotel.vn/" },
  {
    name: "VinFast Ngọc Anh",
    industry: "Automotive",
    url: "https://vinfast3scamau.com/",
  },
  { name: "Green CM", industry: "Automotive", url: "https://greencm.vn/" },
  {
    name: "Asia Night Life",
    industry: "Entertainment",
    url: "https://asianightlife.sg/",
  },
  { name: "Fintech Lending", industry: "Fintech" },
];

export const trustGuarantees: TrustGuarantee[] = [
  {
    icon: "calendar",
    title: "Milestone-based payments",
    desc: "Fixed scope split into milestones — you pay as each deliverable is demoed and approved.",
  },
  {
    icon: "lock",
    title: "NDA & full IP transfer",
    desc: "Standard NDA before sensitive details. You own 100% of the code and assets at handoff.",
  },
  {
    icon: "shield",
    title: "30-day post-launch warranty",
    desc: "Bug fixes included for 30 days after launch. Optional retainer for ongoing features.",
  },
  {
    icon: "file",
    title: "Written scope before code",
    desc: "Every engagement starts with a written scope, timeline, and fixed-price quote — no hourly surprises.",
  },
];
