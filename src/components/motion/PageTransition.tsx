import { motion, useAnimate } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { useLocale } from "@/i18n/locale";
import { EASE_OUT } from "./presets";

/**
 * Fades each route in on client-side navigation and softly cross-fades content on
 * language switch. Opacity only: a transform here would break `position: fixed` descendants.
 * The first render stays static so server-rendered HTML is visible immediately.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { locale } = useLocale();
  const isFirstRender = useRef(true);
  const [scope, animateScope] = useAnimate<HTMLDivElement>();
  const prevLocale = useRef(locale);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    if (prevLocale.current === locale || !scope.current) return;
    prevLocale.current = locale;
    animateScope(scope.current, { opacity: [0.25, 1] }, { duration: 0.45, ease: EASE_OUT });
  }, [locale, animateScope, scope]);

  return (
    <motion.div
      key={pathname}
      initial={isFirstRender.current ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
    >
      <div ref={scope}>{children}</div>
    </motion.div>
  );
}
