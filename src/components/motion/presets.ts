import type { Variants } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.35,
  base: 0.7,
  slow: 1,
} as const;

export const VIEWPORT = { once: true, margin: "0px 0px -80px 0px" } as const;

type Delay = number | undefined;

const withDelay = (d: Delay) => (d ? { delay: d } : {});

export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 36 },
    visible: (d: Delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.base, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (d: Delay) => ({
      opacity: 1,
      transition: { duration: DURATION.base, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92, y: 16 },
    visible: (d: Delay) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: DURATION.base, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
  slideLeft: {
    hidden: { opacity: 0, x: -56 },
    visible: (d: Delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: DURATION.slow, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
  slideRight: {
    hidden: { opacity: 0, x: 56 },
    visible: (d: Delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: DURATION.slow, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
  imageReveal: {
    hidden: { opacity: 0, scale: 1.08, clipPath: "inset(18% 0% 0% 0%)" },
    visible: (d: Delay) => ({
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.1, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
  maskUp: {
    hidden: { y: "110%" },
    visible: (d: Delay) => ({
      y: "0%",
      transition: { duration: 0.9, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
  lineDraw: {
    hidden: { scaleX: 0 },
    visible: (d: Delay) => ({
      scaleX: 1,
      transition: { duration: DURATION.slow, ease: EASE_OUT, ...withDelay(d) },
    }),
  },
} satisfies Record<string, Variants>;

export type VariantName = keyof typeof variants;

export function staggerContainer(stagger = 0.09, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  };
}
