import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { smoothScrollTo } from "@/components/SmoothScroll";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 640;

/** Floating button with a ring that fills as the page is read. */
export function BackToTop({ className }: { className?: string }) {
  const { t } = useLocale();
  const { scrollY, scrollYProgress } = useScroll();
  const ring = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > SHOW_AFTER_PX));

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="back-to-top"
          type="button"
          aria-label={t.backToTop}
          onClick={() => smoothScrollTo(0)}
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className={cn(
            "group fixed bottom-24 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-card backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:bottom-6 md:right-6",
            className
          )}
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
            <circle cx="24" cy="24" r="22" fill="none" strokeWidth="2" className="stroke-border" />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              className="stroke-primary"
              style={{ pathLength: ring }}
            />
          </svg>
          <ArrowUp
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
