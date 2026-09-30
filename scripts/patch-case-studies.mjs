import fs from "fs";

const path = "d:/KhaiTran-portfolio/src/data/portfolio/case-studies.ts";
let src = fs.readFileSync(path, "utf8");

const patches = {
  "loan-management-platform": {
    headline:
      "Turning fragmented lending operations into one connected system.",
    projectType: "internal",
    statusLabel: "Internal · Confidential",
    featured: true,
    featuredOrder: 1,
    title: "ERP & Loan Management Platform",
    tag: "Internal Business Software · Fintech",
    role: "Architecture · Full-stack development · Database design · DevOps",
    closing:
      "The focus was not simply building another CRUD application — it was modeling the business workflow so different teams could work from the same source of truth.",
    capabilities: [
      "Customer & loan management",
      "Application workflows",
      "Approval processes",
      "Disbursement tracking",
      "Repayment management",
      "Collections",
      "Accounting workflows",
      "Reporting & dashboards",
      "Role-based access",
      "Audit-oriented data handling",
    ],
  },
  "y-hotel-booking-platform": {
    headline:
      "Replacing phone calls, chat messages, and spreadsheets with one booking workflow.",
    projectType: "client",
    statusLabel: "Client Project · Live",
    featured: true,
    featuredOrder: 2,
    title: "Y Hotel Booking & Operations Platform",
    tag: "Hospitality · Internal Software",
    role: "Product analysis · UI/UX · Full-stack development · Deployment",
    closing:
      "Built for real-world daily operations — not just a marketing website.",
    capabilities: [
      "Booking management",
      "Room availability",
      "Customer records",
      "Operational dashboard",
      "Booking status",
      "Payment tracking",
      "Staff workflows",
      "Reporting",
    ],
  },
  "cafinex-ecommerce-cms": {
    headline:
      "A coffee business website that also works as an operational sales tool.",
    projectType: "client",
    statusLabel: "Client Project · Live",
    featured: true,
    featuredOrder: 3,
    title: "Cafinex E-commerce & CMS",
    tag: "E-commerce · B2B · CMS",
    role: "Full-stack development · CMS architecture · E-commerce workflow · Deployment",
    closing:
      "The goal was to turn a company website into a practical business tool — not just another landing page.",
    capabilities: [
      "Product catalog",
      "Product management",
      "Self-service CMS",
      "Online ordering",
      "COD checkout",
      "B2B inquiry flow",
      "Lead management",
      "SEO-friendly pages",
      "Role-based administration",
    ],
  },
  "petid-vietnam-platform": {
    headline: "A digital identity platform for pets.",
    projectType: "own-product",
    statusLabel: "Own Product · Building",
    featured: true,
    featuredOrder: 4,
    title: "PETID Vietnam",
    tag: "Own Product · Pet Technology · In Progress",
    role: "Founder · Product strategy · System architecture · Full-stack development · Operations",
    closing:
      "PETID is not presented as a completed client success story. It is my own product — and a practical example of how I approach product design, architecture, and long-term platform thinking.",
    capabilities: [
      "Digital pet profiles",
      "QR pet identity",
      "Owner management",
      "Pet transfers",
      "Health & vaccination records",
      "Lost-pet contact",
      "Veterinary information",
      "Pet-care ecosystem",
      "Physical QR cards & tags",
    ],
  },
  "y99-finance-hub": {
    headline:
      "A finance company website and CMS for content operations and lead capture.",
    projectType: "client",
    statusLabel: "Client Project · Live",
    featured: false,
    capabilities: [
      "Marketing website",
      "Self-serve CMS",
      "Lead capture",
      "SEO pages",
      "Store locator",
    ],
    closing:
      "Built to support digital presence and content operations for a finance business.",
  },
  "asia-night-life-platform": {
    headline:
      "A multi-location nightlife platform with localization and SEO-focused URLs.",
    projectType: "client",
    statusLabel: "Client Project · Live",
    featured: false,
    capabilities: [
      "Venue discovery",
      "Localization",
      "SEO slug architecture",
      "Admin tools",
      "AI venue assistant",
    ],
    closing: "Structured venue content and workflows across multiple markets.",
  },
  "gcm-manager-dealer-operations": {
    headline:
      "Connecting showroom operations, customer workflows, and contract processes.",
    projectType: "client",
    statusLabel: "Client Project · Live",
    featured: false,
    capabilities: [
      "Inventory",
      "CRM",
      "Contracts",
      "Finance workflows",
      "Staff permissions",
      "Reporting",
    ],
    closing:
      "Internal management software for dealership operations from showroom to contract.",
  },
  "vinfast-dealership-website": {
    headline:
      "A digital vehicle showcase designed around discovery and customer inquiries.",
    projectType: "client",
    statusLabel: "Client Project · Live",
    featured: false,
    capabilities: [
      "Vehicle catalog",
      "Lead capture",
      "Booking flows",
      "Catalog sync",
      "Local SEO",
    ],
    closing:
      "A practical digital showroom for vehicle discovery and inquiry capture.",
  },
};

src = src.replace(
  /enterprise-grade architecture, not a simple CRUD app/g,
  "modular architecture designed around the product's workflows — not a simple CRUD app"
);
src = src.replace(/enterprise-grade/gi, "modular");

for (const [slug, p] of Object.entries(patches)) {
  const slugMarker = `slug: "${slug}",`;
  const studyStart = src.indexOf(slugMarker);
  if (studyStart < 0) {
    console.error("missing", slug);
    continue;
  }
  const nextSlug = src.indexOf('slug: "', studyStart + 10);
  const studyEnd = nextSlug > 0 ? nextSlug : src.lastIndexOf("];");
  let block = src.slice(studyStart, studyEnd);

  if (p.title) block = block.replace(/title: "[^"]*"/, `title: "${p.title}"`);
  if (p.tag) block = block.replace(/tag: "[^"]*"/, `tag: "${p.tag}"`);
  if (p.role) block = block.replace(/role: "[^"]*"/, `role: "${p.role}"`);

  block = block.replace(/\n\s*headline: [\s\S]*?,\n/, "\n");
  block = block.replace(/\n\s*projectType: [\s\S]*?,\n/, "\n");
  block = block.replace(/\n\s*statusLabel: [\s\S]*?,\n/, "\n");
  block = block.replace(/\n\s*featuredOrder: [\s\S]*?,\n/, "\n");
  block = block.replace(/\n\s*featured: [\s\S]*?,\n/, "\n");
  block = block.replace(/\n\s*capabilities: \[[\s\S]*?\],\n/, "\n");
  block = block.replace(/\n\s*closing: [\s\S]*?,\n/, "\n");

  const inject = `
    headline: ${JSON.stringify(p.headline)},
    projectType: ${JSON.stringify(p.projectType)},
    statusLabel: ${JSON.stringify(p.statusLabel)},
    featured: ${p.featured},
    ${p.featuredOrder ? `featuredOrder: ${p.featuredOrder},` : ""}
    capabilities: ${JSON.stringify(p.capabilities)},
    closing: ${JSON.stringify(p.closing)},`;

  block = block.replace(/(isSample: (?:true|false),)/, `$1${inject}`);
  src = src.slice(0, studyStart) + block + src.slice(studyEnd);
}

if (!src.includes("getFeaturedCaseStudies")) {
  src += `

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies
    .filter((c) => c.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}
`;
}

fs.writeFileSync(path, src);
console.log(
  "patched",
  src.includes("getFeaturedCaseStudies"),
  (src.match(/headline:/g) || []).length
);
