import { useEffect, useState, type ComponentType } from "react";
import { ArrowRight, FolderKanban, HelpCircle, Layers, Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/locale";

const navIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "#work": FolderKanban,
  "#services": Layers,
  "#about": User,
  "#faq": HelpCircle,
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { content, t } = useLocale();
  const { brand, nav, navCta } = content.siteConfig;

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
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="min-w-0 truncate text-[15px] font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {brand.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label={t.navAria}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <a
              href="#contact"
              className="hidden min-h-11 items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-[13px] font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:inline-flex"
            >
              {navCta}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-background text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex h-full flex-col pb-28 pt-20">
              <nav className="flex flex-col gap-1" aria-label={t.navAria}>
                {nav.map((item) => {
                  const Icon = navIconMap[item.href] ?? FolderKanban;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                      {item.label}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-6 flex items-center justify-between gap-3">
                <LanguageSwitcher />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background"
                >
                  {navCta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
