import type { Profile } from "./types";

export const profile: Profile = {
  name: "Trần Quang Khái",
  title: "Business Software Developer",
  avatarKey: "avatarKhai",
  bio: "I'm Trần Quang Khái, a full-stack software developer based in Vietnam.",
  longBio:
    "My work sits between business operations and software development. I enjoy taking workflows that are spread across spreadsheets, chat messages, documents, and manual processes and turning them into systems that people can actually use every day.",
  skills: [
    "Next.js & React",
    "TypeScript",
    "Node.js",
    "PostgreSQL & Supabase",
    "OpenAI & automation",
    "Vercel & Docker",
  ],
  languages: [
    "Vietnamese — Native",
    "English — Professional working proficiency",
  ],
  values: [
    {
      title: "Clarity",
      desc: "The software should make a process easier to understand, not add another layer of complexity.",
    },
    {
      title: "Right-sized solutions",
      desc: "I build what the product actually needs today, with room to grow — never complexity for its own sake.",
    },
    {
      title: "Ownership",
      desc: "I care about delivering software that the business can maintain, understand, and continue building on.",
    },
    {
      title: "Real usage",
      desc: "A beautiful interface means little if the team still has to maintain five spreadsheets behind it.",
    },
  ],
  stackGroups: [
    {
      label: "Frontend",
      items: "Next.js · React · TypeScript · Tailwind CSS",
    },
    {
      label: "Backend & Data",
      items: "Node.js · PostgreSQL · Supabase",
    },
    {
      label: "Infrastructure",
      items: "Vercel · Docker · Redis",
    },
    {
      label: "AI & Automation",
      items: "OpenAI · Python · APIs & workflow automation",
    },
  ],
  location: "Cần Thơ, Vietnam · UTC+7",
  availability: "Remote projects across Vietnam and international markets.",
};

export const aboutHighlights = [
  { label: "Shipped", value: "9+ projects" },
  { label: "Focus", value: "Web · SaaS · Internal Tools" },
  { label: "Timezone", value: "UTC+7 · Remote worldwide" },
  { label: "Engagement", value: "Milestones · Clear scope" },
];
