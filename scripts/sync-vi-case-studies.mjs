/**
 * Syncs required V2 CaseStudy fields from EN into VI case studies,
 * and patches VI site/services/etc. to compile against new types.
 * Run: node scripts/sync-vi-v2.mjs
 */
import fs from "fs";

// --- Patch VI case studies with EN V2 structural fields ---
const enPath = "d:/KhaiTran-portfolio/src/data/portfolio/case-studies.ts";
const viPath = "d:/KhaiTran-portfolio/src/data/portfolio/vi/case-studies.ts";

const enSrc = fs.readFileSync(enPath, "utf8");
const viSrc = fs.readFileSync(viPath, "utf8");

function extractBlocks(src) {
  const blocks = {};
  const re = /slug: "([^"]+)",/g;
  let m;
  const indices = [];
  while ((m = re.exec(src))) {
    indices.push({ slug: m[1], start: m.index });
  }
  for (let i = 0; i < indices.length; i++) {
    const end = i + 1 < indices.length ? indices[i + 1].start : src.lastIndexOf("];");
    blocks[indices[i].slug] = src.slice(indices[i].start, end);
  }
  return blocks;
}

function pickField(block, name) {
  const re = new RegExp(`${name}: ([\\s\\S]*?),\\n(?=\\s*[a-zA-Z])`);
  const m = block.match(re);
  return m ? m[1].trim() : null;
}

const enBlocks = extractBlocks(enSrc);
let viOut = viSrc;

for (const [slug, enBlock] of Object.entries(enBlocks)) {
  const fields = [
    "headline",
    "projectType",
    "statusLabel",
    "featured",
    "featuredOrder",
    "capabilities",
    "closing",
  ];
  const injectParts = [];
  for (const f of fields) {
    // featuredOrder optional
    const re = new RegExp(`${f}: ([\\s\\S]*?),\\n`);
    const m = enBlock.match(re);
    if (m) injectParts.push(`    ${f}: ${m[1].trim()},`);
  }
  const inject = injectParts.join("\n");

  const slugMarker = `slug: "${slug}",`;
  const studyStart = viOut.indexOf(slugMarker);
  if (studyStart < 0) continue;
  const nextSlug = viOut.indexOf('slug: "', studyStart + 10);
  const studyEnd = nextSlug > 0 ? nextSlug : viOut.lastIndexOf("];");
  let block = viOut.slice(studyStart, studyEnd);

  for (const f of fields) {
    block = block.replace(new RegExp(`\\n\\s*${f}: [\\s\\S]*?,\\n`), "\n");
  }

  // Prefer EN titles/tags for flagships consistency if VI has old titles - keep VI titles for now
  // Sync structural EN fields for featured flagships titles from EN when Vietnamese outdated:
  const enTitle = enBlock.match(/title: ("[^"]*")/)?.[1];
  const enTag = enBlock.match(/tag: ("[^"]*")/)?.[1];
  if (enTitle && ["loan-management-platform","y-hotel-booking-platform","cafinex-ecommerce-cms","petid-vietnam-platform"].includes(slug)) {
    // keep VI translation of title if present; only ensure fields exist
  }

  block = block.replace(/(isSample: (?:true|false),)/, `$1\n${inject}`);
  viOut = viOut.slice(0, studyStart) + block + viOut.slice(studyEnd);
}

if (!viOut.includes("getFeaturedCaseStudies")) {
  viOut += `

export function getFeaturedCaseStudies() {
  return caseStudies
    .filter((c) => c.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}
`;
}

fs.writeFileSync(viPath, viOut);
console.log("VI case studies patched");
