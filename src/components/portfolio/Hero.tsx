import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortfolioImage } from "@/data/portfolio";
import type { ImageKey } from "@/data/portfolio/types";
import { useLocale } from "@/i18n/locale";

const HERO_SHOTS: Array<{ key: ImageKey; label: string; category: string }> = [
  { key: "projectLoan", label: "ERP & Loan", category: "Internal · Fintech" },
  { key: "projectHotel", label: "Y Hotel", category: "Hospitality" },
  { key: "projectCafinex", label: "Cafinex", category: "E-commerce · CMS" },
  { key: "projectPetId", label: "PETID", category: "Own Product · Building" },
  { key: "projectY99", label: "Y99 Finance", category: "Finance · CMS" },
  { key: "projectAI", label: "Asia Night Life", category: "Content Platform" },
  { key: "projectGcmManager", label: "GCM Manager", category: "Automotive · Internal" },
  { key: "projectVinfast", label: "VinFast Ngọc Anh", category: "Automotive · Showroom" },
];

const CYCLE_MS = 3400;

/** Visible depth poses — z stays below sticky header (z-50) */
const STACK = [
  { x: 0, y: 12, rotate: 0, scale: 1, z: 5, opacity: 1 },
  { x: 18, y: 26, rotate: 3.5, scale: 0.94, z: 4, opacity: 1 },
  { x: -16, y: 34, rotate: -3, scale: 0.9, z: 3, opacity: 1 },
  { x: 8, y: 46, rotate: 1.5, scale: 0.86, z: 2, opacity: 1 },
  { x: -6, y: 56, rotate: -1.2, scale: 0.82, z: 1, opacity: 0.55 },
] as const;

export function Hero() {
  const { content } = useLocale();
  const { hero } = content.siteConfig;

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border gradient-hero"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="sm:hidden">BUSINESS SOFTWARE</span>
            <span className="hidden sm:inline">{hero.eyebrow}</span>
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="sm:hidden">
              Custom web apps, internal tools, SaaS and AI automation.
            </span>
            <span className="hidden sm:inline">{hero.subheadline}</span>
          </p>
          <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-muted-foreground sm:block">
            {hero.supportingText}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.primaryCta.replace(" →", "")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-background/80 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.secondaryCta.replace(" ↓", "")}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground/80">{hero.proofLine}</p>
            <p className="hidden sm:block">{hero.locationLine}</p>
            <p className="sm:hidden">9+ production projects</p>
          </div>
        </div>

        <HeroCardStack />
      </div>
    </section>
  );
}

function HeroCardStack() {
  const reduceMotion = useReducedMotion();
  const [order, setOrder] = useState(() => HERO_SHOTS.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]!]);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const bringToFront = (shotIndex: number) => {
    setOrder((prev) => {
      if (prev[0] === shotIndex) return prev;
      return [shotIndex, ...prev.filter((i) => i !== shotIndex)];
    });
  };

  const front = HERO_SHOTS[order[0]!]!;
  const depthScale = compact ? 0.62 : 1;

  return (
    <div
      className="relative z-0 isolate w-full overflow-hidden"
      aria-label="Selected production work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-brand-soft/15 blur-2xl"
        aria-hidden
      />

      <div className="mb-3 flex items-end justify-between gap-3 px-1 sm:mb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Selected production work
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={front.key}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: 0.28 }}
              className="mt-1 text-sm font-semibold text-foreground"
            >
              {front.label}
              <span className="ml-2 font-normal text-muted-foreground">
                · {front.category}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex flex-wrap justify-end gap-1.5" role="tablist" aria-label="Projects">
          {HERO_SHOTS.map((shot, i) => (
            <button
              key={shot.key}
              type="button"
              role="tab"
              aria-selected={order[0] === i}
              aria-label={shot.label}
              onClick={() => bringToFront(i)}
              className={`h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                order[0] === i ? "bg-foreground" : "bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto h-[300px] w-full max-w-[620px] overflow-hidden pt-1 sm:h-[460px] sm:pt-2 lg:h-[500px] lg:max-w-[660px]">
        {order.map((shotIndex, depth) => {
          const shot = HERO_SHOTS[shotIndex]!;
          const inStack = depth < STACK.length;
          const pose = STACK[Math.min(depth, STACK.length - 1)]!;
          const isFront = depth === 0;

          return (
            <motion.button
              key={shot.key}
              type="button"
              aria-label={`View ${shot.label}`}
              aria-current={isFront ? "true" : undefined}
              tabIndex={inStack ? 0 : -1}
              onClick={() => bringToFront(shotIndex)}
              className="absolute inset-x-[3%] top-0 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-card text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inset-x-[4%] sm:rounded-2xl"
              style={{ transformOrigin: "center center", pointerEvents: inStack ? "auto" : "none" }}
              initial={false}
              animate={{
                x: pose.x * depthScale,
                y: pose.y * depthScale,
                rotate: pose.rotate,
                scale: pose.scale,
                zIndex: inStack ? pose.z : 0,
                opacity: inStack ? pose.opacity : 0,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                      mass: 0.9,
                    }
              }
              whileHover={
                isFront && !reduceMotion
                  ? { y: pose.y * depthScale + 4, transition: { duration: 0.25 } }
                  : undefined
              }
            >
              <img
                src={getPortfolioImage(shot.key)}
                alt={`${shot.label} project screenshot`}
                className="h-full w-full object-cover"
                loading={depth < 3 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-3 pb-2.5 pt-8 sm:px-4 sm:pb-3 sm:pt-10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  {shot.category}
                </div>
                <div className="text-sm font-semibold text-white">{shot.label}</div>
              </div>
              {!isFront ? (
                <div className="absolute inset-0 bg-background/25" aria-hidden />
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
