import type { Profile } from "./types";

export const profile: Profile = {
  name: "Trần Quang Khái",
  title: "Full-Stack Developer & Software Consultant",
  avatarKey: "avatarKhai",
  bio: "I help startups and SMBs turn messy operations into reliable software — internal tools, SaaS MVPs, and AI automation. I've shipped products across fintech, hospitality, retail, and automotive, always with a focus on clear scope, weekly demos, and measurable outcomes.",
  longBio:
    "Based in Cần Thơ, Vietnam, I work with clients in the US, EU, and Southeast Asia. I handle the full stack — React/Next.js frontends, Node.js/NestJS APIs, PostgreSQL databases, and cloud deployment on AWS or Vercel. When a project needs AI, I build practical integrations (chatbots, document extraction, workflow agents) that plug into existing tools — not science experiments.",
  skills: [
    "React & Next.js",
    "Node.js & NestJS",
    "PostgreSQL & MongoDB",
    "OpenAI & LangChain",
    "AWS & Vercel",
    "UI/UX (Figma)",
  ],
  languages: ["English (fluent)", "Vietnamese (native)"],
};

export const aboutHighlights = [
  { label: "Shipped", value: "6+ projects" },
  { label: "Focus", value: "Web apps & AI" },
  { label: "Timezone", value: "UTC+7 · US/EU overlap" },
  { label: "Engagement", value: "Fixed-price · Milestones" },
];
