import type { Metadata } from "next";
import { business } from "@/data/business";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";

export const metadata: Metadata = routeMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/privacy")} />
      <section className="section page-hero section-muted">
        <div className="container">
          <p className="eyebrow">Privacy</p>
          <h1>Simple privacy for a WhatsApp-first website.</h1>
          <p>This website is designed without accounts, payments, booking storage or a custom backend.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="legal-panel">
            <h2>WhatsApp enquiries</h2>
            <p>Planner details are kept in your browser only until you choose to open WhatsApp or copy the message. The website does not store your name, dates, notes or generated message.</p>
          </article>
          <article className="legal-panel">
            <h2>External services</h2>
            <p>When you open WhatsApp, Google Maps, Instagram or Facebook, those services process information under their own terms and privacy policies.</p>
          </article>
          <article className="legal-panel">
            <h2>Analytics</h2>
            <p>No third-party analytics is installed. If analytics is added later, it should record only action intent such as WhatsApp open, directions click or gallery open, never personal notes or message content.</p>
          </article>
          <article className="legal-panel">
            <h2>Contact</h2>
            <p>For privacy enquiries, contact {business.name} by phone or WhatsApp at {business.phoneDisplay}, or email <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
          </article>
        </div>
      </section>
    </>
  );
}

