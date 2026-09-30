import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  AboutSection,
  ContactSection,
  EngagementSection,
  FaqSection,
  FinalCta,
  FlagshipProjects,
  Footer,
  MobileStickyCta,
  MoreWork,
  ProcessSection,
  SelectedWork,
  ServicesSection,
  TestimonialsSection,
} from "@/components/portfolio/HomeSections";
import { getPortfolioContent } from "@/data/portfolio/content";

const enSeo = getPortfolioContent("en").siteConfig.seo;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: enSeo.title },
      { name: "description", content: enSeo.description },
      { property: "og:title", content: enSeo.ogTitle },
      { property: "og:description", content: enSeo.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: enSeo.ogTitle },
      { name: "twitter:description", content: enSeo.ogDescription },
      ...(enSeo.canonicalUrl
        ? [{ property: "og:url", content: enSeo.canonicalUrl }]
        : []),
    ],
    links: enSeo.canonicalUrl
      ? [{ rel: "canonical", href: enSeo.canonicalUrl }]
      : [],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <ServicesSection />
        <FlagshipProjects />
        <ProcessSection />
        <MoreWork />
        <AboutSection />
        <TestimonialsSection />
        <EngagementSection />
        <FaqSection />
        <FinalCta />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
