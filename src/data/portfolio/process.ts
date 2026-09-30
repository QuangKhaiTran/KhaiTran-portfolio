import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Understand",
    shortTitle: "Map the problem.",
    desc: "We identify how the business works today, where information gets lost, what people repeat manually, and what the software actually needs to solve.",
  },
  {
    n: "02",
    title: "Scope",
    shortTitle: "Define what matters first.",
    desc: "I turn the requirements into a practical scope, prioritize the highest-value workflows, and establish milestones before development begins.",
  },
  {
    n: "03",
    title: "Design",
    shortTitle: "Make the workflow understandable.",
    desc: "I design the interface and system structure around the people who will actually use it.",
  },
  {
    n: "04",
    title: "Build",
    shortTitle: "Develop in milestones.",
    desc: "The product is built incrementally so progress is visible and important decisions can be validated early.",
  },
  {
    n: "05",
    title: "Launch",
    shortTitle: "Put it into production.",
    desc: "Deployment, configuration, data handling, and production readiness are part of the delivery — not an afterthought.",
  },
  {
    n: "06",
    title: "Support",
    shortTitle: "Keep it running.",
    desc: "After launch, I can continue with maintenance, improvements, bug fixes, and new features as the business evolves.",
  },
];
