import type { Metadata } from "next";
import { business } from "@/data/business";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";

export const metadata: Metadata = routeMetadata("/terms");

export default function TermsPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/terms")} />
      <section className="section page-hero section-muted">
        <div className="container">
          <p className="eyebrow">Terms</p>
          <h1>Website, menu and booking terms.</h1>
          <p>Use this website as a planning and enquiry tool. Final details come from the team directly.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="legal-panel">
            <h2>Enquiries, not confirmations</h2>
            <p>Room availability, event arrangements, prices and bookings are confirmed only after the team replies. Food orders are placed with our team at the dhaba.</p>
          </article>
          <article className="legal-panel">
            <h2>Menu and prices</h2>
            <p>Menu items, prices, taxes and availability can change. The current menu and final amount must be confirmed by {business.name} before ordering.</p>
          </article>
          <article className="legal-panel">
            <h2>Rooms</h2>
            <p>Room availability, tariff, occupancy, payment, cancellation and booking terms are shared by the team in the WhatsApp conversation. The site does not provide live booking.</p>
          </article>
          <article className="legal-panel">
            <h2>EV charging and parking</h2>
            <p>EV charger status, connector compatibility, price and operator terms can change. Parking capacity and security details require owner confirmation before being treated as guaranteed.</p>
          </article>
          <article className="legal-panel">
            <h2>External links</h2>
            <p>Maps, WhatsApp and social links open external services. Their availability and behaviour are outside this website&apos;s control.</p>
          </article>
        </div>
      </section>
    </>
  );
}

