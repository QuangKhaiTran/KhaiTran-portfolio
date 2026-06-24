import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/portfolio";

const LAST_UPDATED = "June 16, 2026";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Service | ${siteConfig.brand.name}` },
      {
        name: "description",
        content: `Terms of service for ${siteConfig.brand.name}'s portfolio website.`,
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Agreement</h2>
        <p>
          By accessing this website operated by {siteConfig.brand.name}, you agree to these Terms of
          Service. If you do not agree, please do not use this site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Nature of this website</h2>
        <p>
          This site is a portfolio and marketing presence. It describes services I offer as a
          freelance developer. Nothing on this site constitutes a binding offer until confirmed in a
          separate written agreement (proposal, statement of work, or platform contract).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Professional services</h2>
        <p>
          Actual development work is governed by a separate contract agreed between you and me —
          whether through Upwork, Fiverr, Contra, or a direct engagement. That contract controls
          scope, deliverables, payment, timelines, intellectual property, and confidentiality.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Intellectual property</h2>
        <p>
          Unless otherwise agreed in writing, I retain ownership of pre-existing code, tools, and
          frameworks. Custom work delivered under a paid engagement is transferred according to the
          terms in the project contract. You may not copy, scrape, or republish substantial portions
          of this website without permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Disclaimer</h2>
        <p>
          This website and its content are provided &quot;as is&quot; without warranties of any kind.
          I do not guarantee that information on this site is complete, current, or error-free.
          Outcomes described in case studies are examples and are not guaranteed for future projects.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.brand.name} shall not be liable for
          any indirect, incidental, or consequential damages arising from your use of this website.
          Liability related to paid professional services is limited as set out in the applicable
          project contract.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Governing law</h2>
        <p>
          These terms are governed by the laws of Vietnam, without regard to conflict-of-law
          principles. Disputes relating solely to use of this website shall be subject to the
          competent courts in Ho Chi Minh City, Vietnam, unless mandatory consumer protection laws in
          your jurisdiction require otherwise.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Changes</h2>
        <p>
          I may revise these terms at any time. Continued use of the site after changes are posted
          constitutes acceptance of the updated terms.
        </p>
      </section>
    </LegalPage>
  );
}
