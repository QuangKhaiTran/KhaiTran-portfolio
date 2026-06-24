import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/portfolio";

const LAST_UPDATED = "June 16, 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${siteConfig.brand.name}` },
      {
        name: "description",
        content: `Privacy policy for ${siteConfig.brand.name}'s portfolio website.`,
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Overview</h2>
        <p>
          This website is operated by {siteConfig.brand.name} ({siteConfig.contact.email}), an
          independent freelance software developer based in Vietnam. This policy explains what
          information may be collected when you visit this site or contact me, and how it is used.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Information I collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Contact details you provide</strong> — such as your name, email address, company,
            and project description when you email me or reach out through a booking link.
          </li>
          <li>
            <strong>Technical data</strong> — basic server or hosting logs (e.g. IP address, browser
            type, pages visited) that may be collected automatically by the hosting provider.
          </li>
          <li>
            <strong>Third-party tools</strong> — if I embed scheduling, analytics, or similar services
            in the future, those providers may collect data under their own policies. I will update
            this page when such tools are added.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">How I use your information</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to inquiries and discuss potential projects.</li>
          <li>To deliver contracted software development services.</li>
          <li>To improve this website and understand general traffic patterns.</li>
          <li>To comply with legal obligations when required.</li>
        </ul>
        <p>I do not sell your personal information to third parties.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Data retention</h2>
        <p>
          Contact and project-related information is kept only as long as needed to respond to your
          inquiry, perform contracted work, or meet legal and accounting requirements. You may ask me
          to delete correspondence that is no longer required for an active engagement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct, or request deletion
          of personal data I hold about you. Email me at {siteConfig.contact.email} and I will respond
          within a reasonable time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Changes</h2>
        <p>
          I may update this policy from time to time. The &quot;Last updated&quot; date at the top of
          this page will reflect the latest version.
        </p>
      </section>
    </LegalPage>
  );
}
