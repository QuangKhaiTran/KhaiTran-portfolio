import { ArrowDown, ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type PanInfo,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { Magnetic, riseDelay, trackSpotlight } from "@/components/motion";
import { getPortfolioImage } from "@/data/portfolio";
import type { ImageKey } from "@/data/portfolio/types";
import { useLocale } from "@/i18n/locale";
import type { Locale } from "@/i18n/types";

const HERO_SHOTS: Array<{
  key: ImageKey;
  label: string;
  category: Record<Locale, string>;
}> = [
  { key: "projectLoan", label: "ERP & Loan", category: { en: "Internal · Fintech", vi: "Nội bộ · Tài chính" } },
  { key: "projectHotel", label: "Y Hotel", category: { en: "Hospitality", vi: "Khách sạn" } },
  { key: "projectCafinex", label: "Cafinex", category: { en: "E-commerce · CMS", vi: "Bán hàng online" } },
  { key: "projectPetId", label: "PETID", category: { en: "Own Product · Building", vi: "Sản phẩm riêng · Đang xây" } },
  { key: "projectY99", label: "Y99 Finance", category: { en: "Finance · CMS", vi: "Tài chính · Website" } },
  { key: "projectAI", label: "Asia Night Life", category: { en: "Content Platform", vi: "Nền tảng giải trí" } },
  { key: "projectGcmManager", label: "GCM Manager", category: { en: "Automotive · Internal", vi: "Ô tô · Nội bộ" } },
  { key: "projectVinfast", label: "VinFast Ngọc Anh", category: { en: "Automotive · Showroom", vi: "Ô tô · Showroom online" } },
];

const CYCLE_MS = 3400;
const SWIPE_THRESHOLD = 60;
const RETURN_FROM_X = 260;

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
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const stackY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden border-b border-border gradient-hero"
      aria-labelledby="hero-heading"
      onPointerMove={reduceMotion ? undefined : trackSpotlight}
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="orb-float absolute -right-24 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <span
          className="orb-float absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-soft/15 blur-3xl"
          style={{ "--orb-duration": "22s", "--orb-delay": "-8s" } as CSSProperties}
        />
      </div>
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <motion.div style={reduceMotion ? undefined : { y: textY, opacity: textOpacity }}>
          <p className="rise-in text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            <HeroHeadline text={hero.headline} accent={hero.headlineAccent} />
          </h1>
          <p style={riseDelay(200)} className="rise-in mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subheadline}
          </p>
          <p style={riseDelay(290)} className="rise-in mt-4 hidden max-w-xl text-sm leading-relaxed text-muted-foreground sm:block">
            {hero.supportingText}
          </p>

          <div style={riseDelay(380)} className="rise-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic className="flex">
            <a
              href="#contact"
              className="btn-shine group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-semibold text-background transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.primaryCta.replace(" →", "")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            </Magnetic>
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-background/80 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.secondaryCta.replace(" ↓", "")}
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>

          <div style={riseDelay(470)} className="rise-in mt-8 space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground/80">{hero.proofLine}</p>
            <p>{hero.locationLine}</p>
          </div>
        </motion.div>

        <motion.div style={reduceMotion ? undefined : { y: stackY }}>
          <div className="rise-in" style={riseDelay(250)}>
            <HeroCardStack />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const WORD_START_MS = 90;
const WORD_STEP_MS = 55;

function HeroHeadline({ text, accent }: { text: string; accent?: string }) {
  const at = accent ? text.indexOf(accent) : -1;
  const parts =
    at >= 0 && accent
      ? [
          { text: text.slice(0, at), accent: false },
          { text: accent, accent: true },
          { text: text.slice(at + accent.length), accent: false },
        ]
      : [{ text, accent: false }];

  let index = 0;
  const renderWords = (segment: string) =>
    segment
      .split(/(\s+)/)
      .filter(Boolean)
      .map((token, i) => {
        if (/^\s+$/.test(token)) return token;
        const delay = WORD_START_MS + index++ * WORD_STEP_MS;
        return (
          <span key={`${i}-${token}`} className="rise-in inline-block" style={riseDelay(delay)}>
            {token}
          </span>
        );
      });

  return (
    <>
      {parts.map((part, i) => {
        if (!part.accent) return <span key={i}>{renderWords(part.text)}</span>;
        const words = renderWords(part.text);
        return (
          <span key={i} className="relative inline-block sm:whitespace-nowrap">
            {words}
            <svg
              className="pointer-events-none absolute -bottom-[0.12em] left-0 h-[0.32em] w-full overflow-visible text-primary"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M3 9 C 70 3, 160 2, 297 6"
                pathLength={1}
                fill="none"
                stroke="currentColor"
                strokeWidth={3.5}
                strokeLinecap="round"
                className="draw-line"
                style={riseDelay(WORD_START_MS + index * WORD_STEP_MS + 250)}
              />
            </svg>
          </span>
        );
      })}
    </>
  );
}

function HeroCardStack() {
  const { t, locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const [order, setOrder] = useState(() => HERO_SHOTS.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const [compact, setCompact] = useState(false);
  const draggedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /** Bumped per card when it returns via "previous", remounting it so it can fly in from the left. */
  const [returnCount, setReturnCount] = useState<Record<number, number>>({});

  const showNext = () => setOrder((prev) => [...prev.slice(1), prev[0]!]);
  const showPrev = () => {
    const returning = order[order.length - 1]!;
    setReturnCount((prev) => ({ ...prev, [returning]: (prev[returning] ?? 0) + 1 }));
    setOrder((prev) => [prev[prev.length - 1]!, ...prev.slice(0, -1)]);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(showNext, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused, order]);

  const bringToFront = (shotIndex: number) => {
    setOrder((prev) => {
      if (prev[0] === shotIndex) return prev;
      return [shotIndex, ...prev.filter((i) => i !== shotIndex)];
    });
  };

  const onSwipeEnd = (event: globalThis.PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    const swipe = info.offset.x + info.velocity.x * 0.2;
    if (Math.abs(swipe) > SWIPE_THRESHOLD) showNext();
    if (!("pointerType" in event) || event.pointerType !== "mouse") setPaused(false);
  };

  const onStackKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") showNext();
    else if (e.key === "ArrowLeft") showPrev();
    else return;
    e.preventDefault();
  };

  const front = HERO_SHOTS[order[0]!]!;
  const depthScale = compact ? 0.62 : 1;
  const tiltEnabled = !reduceMotion && !compact;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-9, 9]), springConfig);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!tiltEnabled || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="relative z-0 isolate w-full"
      aria-label={t.selectedWorkBoardLabel}
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
            {t.selectedWorkBoardLabel}
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
                · {front.category[locale]}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        onPointerMove={onPointerMove}
        onPointerLeave={resetTilt}
        onKeyDown={onStackKeyDown}
        style={
          tiltEnabled
            ? { rotateX, rotateY, transformPerspective: 1200 }
            : undefined
        }
        className="relative mx-auto h-[300px] w-full max-w-[620px] pt-1 sm:h-[460px] sm:pt-2 lg:h-[500px] lg:max-w-[660px]"
      >
        {order.map((shotIndex, depth) => {
          const shot = HERO_SHOTS[shotIndex]!;
          const inStack = depth < STACK.length;
          const pose = STACK[Math.min(depth, STACK.length - 1)]!;
          const isFront = depth === 0;
          const returns = returnCount[shotIndex] ?? 0;

          return (
            <motion.button
              key={`${shot.key}-${returns}`}
              type="button"
              aria-label={`${t.heroViewProject} ${shot.label}`}
              aria-current={isFront ? "true" : undefined}
              tabIndex={inStack ? 0 : -1}
              onPointerDown={() => {
                draggedRef.current = false;
              }}
              onClick={() => {
                if (!draggedRef.current) bringToFront(shotIndex);
              }}
              className={`absolute inset-x-[3%] top-0 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-card text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inset-x-[4%] sm:rounded-2xl ${
                isFront ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
              }`}
              style={{ transformOrigin: "center center", pointerEvents: inStack ? "auto" : "none" }}
              drag={isFront ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragStart={() => {
                draggedRef.current = true;
                setPaused(true);
              }}
              onDragEnd={onSwipeEnd}
              whileDrag={{ scale: 1.03 }}
              initial={
                returns > 0 && !reduceMotion
                  ? {
                      x: -RETURN_FROM_X * depthScale,
                      y: pose.y * depthScale,
                      rotate: -8,
                      scale: 1,
                      zIndex: pose.z + 1,
                      opacity: 0,
                    }
                  : false
              }
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
                  {shot.category[locale]}
                </div>
                <div className="text-sm font-semibold text-white">{shot.label}</div>
              </div>
              {!isFront ? (
                <div className="absolute inset-0 bg-background/25" aria-hidden />
              ) : null}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
