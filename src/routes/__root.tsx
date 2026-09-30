import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "../components/SmoothScroll";
import { LocaleProvider, useLocale } from "@/i18n/locale";
import { MotionProvider, riseDelay } from "@/components/motion";
import { PageTransition } from "@/components/motion/PageTransition";

function NotFoundComponent() {
  const { t } = useLocale();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="rise-in text-7xl font-bold text-foreground">404</h1>
        <h2
          className="rise-in mt-4 text-xl font-semibold text-foreground"
          style={riseDelay(100)}
        >
          {t.pageNotFound}
        </h2>
        <p
          className="rise-in mt-2 text-sm text-muted-foreground"
          style={riseDelay(180)}
        >
          {t.pageNotFoundDesc}
        </p>
        <div className="rise-in mt-6" style={riseDelay(260)}>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.goHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useLocale();
  useEffect(() => {
    if (/dynamically imported module|Importing a module script failed/i.test(error.message)) {
      const last = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY) ?? 0);
      if (Date.now() - last > 10_000) {
        sessionStorage.setItem(CHUNK_RELOAD_KEY, String(Date.now()));
        window.location.reload();
        return;
      }
    }
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t.pageDidntLoad}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.pageDidntLoadDesc}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.tryAgain}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.goHome}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <LocaleProvider>
          <MotionProvider>{children}</MotionProvider>
        </LocaleProvider>
        <Scripts />
      </body>
    </html>
  );
}

const CHUNK_RELOAD_KEY = "chunk-reload-at";

function useReloadOnStaleChunks() {
  useEffect(() => {
    const onPreloadError = (event: Event) => {
      const last = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY) ?? 0);
      if (Date.now() - last < 10_000) return;
      event.preventDefault();
      sessionStorage.setItem(CHUNK_RELOAD_KEY, String(Date.now()));
      window.location.reload();
    };
    window.addEventListener("vite:preloadError", onPreloadError);
    return () => window.removeEventListener("vite:preloadError", onPreloadError);
  }, []);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useReloadOnStaleChunks();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </QueryClientProvider>
  );
}
