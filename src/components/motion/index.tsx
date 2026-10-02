import {
  MotionConfig,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { EASE_OUT, VIEWPORT, staggerContainer, variants, type VariantName } from "./presets";

export { EASE_OUT, VIEWPORT, variants, staggerContainer } from "./presets";

/** Inline style for staggering the CSS `rise-in` entrance. */
export function riseDelay(ms: number): CSSProperties {
  return { "--rise-delay": `${ms}ms` } as CSSProperties;
}

const TAGS = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  dl: motion.dl,
  p: motion.p,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
  form: motion.form,
};

type Tag = keyof typeof TAGS;

type BaseProps = Omit<HTMLMotionProps<"div">, "children"> & {
  as?: Tag;
  children?: ReactNode;
};

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE_OUT }}>
      {children}
    </MotionConfig>
  );
}

/** Animates in once when scrolled into view. */
export function Reveal({
  as = "div",
  variant = "fadeUp",
  delay,
  ...rest
}: BaseProps & { variant?: VariantName; delay?: number }) {
  const Comp = TAGS[as] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants[variant]}
      custom={delay}
      {...rest}
    />
  );
}

/** Parent that reveals its `StaggerItem` children one after another. */
export function Stagger({
  as = "div",
  stagger,
  delay,
  ...rest
}: BaseProps & { stagger?: number; delay?: number }) {
  const Comp = TAGS[as] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer(stagger, delay)}
      {...rest}
    />
  );
}

export function StaggerItem({
  as = "div",
  variant = "fadeUp",
  ...rest
}: BaseProps & { variant?: VariantName }) {
  const Comp = TAGS[as] as typeof motion.div;
  return <Comp variants={variants[variant]} {...rest} />;
}

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className={cn(
        "fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-primary to-brand-soft",
        className
      )}
      style={{ scaleX }}
    />
  );
}

/** Feeds the pointer position to `.spotlight` cards as CSS variables. */
export function trackSpotlight(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

/** Pulls its child slightly toward the mouse pointer. */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn("inline-flex", className)}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/** Drifts its content vertically while the wrapper crosses the viewport. */
export function Parallax({
  children,
  amount = 6,
  className,
}: {
  children: ReactNode;
  /** Max shift as a percentage of the content height. */
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={cn("relative h-full w-full overflow-hidden", className)}>
      <motion.div
        className="h-full w-full"
        style={reduceMotion ? undefined : { y, scale: 1 + (amount * 2.4) / 100 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const COUNT_PATTERN = /^(\d[\d,.]*)(\+?)$/;

/** Counts numeric values like "100+" or "2,161" up from zero; other values render as-is. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduceMotion = useReducedMotion();
  const match = value.match(COUNT_PATTERN);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || reduceMotion) return;
    if (!inView) {
      setDisplay(`0${match[2]}`);
      return;
    }
    const target = Number(match[1].replace(/,/g, ""));
    const useGrouping = match[1].includes(",");
    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASE_OUT,
      onUpdate: (v) =>
        setDisplay(
          `${Math.round(v).toLocaleString("en-US", { useGrouping })}${match[2]}`
        ),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}
