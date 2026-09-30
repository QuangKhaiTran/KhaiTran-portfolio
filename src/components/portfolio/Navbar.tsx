import { useEffect, useState, type ComponentType } from "react";
import { ArrowRight, FolderKanban, HelpCircle, Layers, Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { EASE_OUT } from "@/components/motion";
import { useLocale } from "@/i18n/locale";

const navIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "#work": FolderKanban,
  "#services": Layers,
  "#about": User,
  "#faq": HelpCircle,
};

const SECTION_NAV_ALIAS: Record<string, string | null> = {
  "#home": null,
  "#projects": "#work",
  "#more-work": "#work",
  "#process": "#services",
  "#testimonials": "#about",
  "#engagement": "#faq",
  "#contact": null,
};

function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = [...hrefs, ...Object.keys(SECTION_NAV_ALIAS)]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const id = `#${visible[0]!.target.id}`;
        setActive(id in SECTION_NAV_ALIAS ? (SECTION_NAV_ALIAS[id] ?? null) : id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [hrefs.join("|")]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { content, t } = useLocale();
  const { brand, nav, navCta } = content.siteConfig;
  const active = useActiveSection(nav.map((item) => item.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-[60] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <div
          className={`container-page flex items-center justify-between gap-4 transition-[height] duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          <a
            href="#home"
            className="min-w-0 truncate text-[15px] font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {brand.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label={t.navAria}>
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-[13.5px] font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-foreground"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      aria-hidden
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <motion.a
              href="#contact"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden min-h-11 items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-[13px] font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:inline-flex"
            >
              {navCta}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </motion.a>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-background text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              className="container-page flex h-full flex-col pb-28 pt-20"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
            >
              <nav className="flex flex-col gap-1" aria-label={t.navAria}>
                {nav.map((item) => {
                  const Icon = navIconMap[item.href] ?? FolderKanban;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      variants={{
                        hidden: { opacity: 0, x: -24 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                      }}
                      className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>
              <motion.div
                className="mt-6 flex items-center justify-between gap-3"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                }}
              >
                <LanguageSwitcher />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background"
                >
                  {navCta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
