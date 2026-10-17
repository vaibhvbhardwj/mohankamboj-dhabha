import type { Metadata } from "next";
import { business, telHref } from "@/data/business";
import { image } from "@/data/images";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";
import { LinkButton } from "@/components/LinkButton";
import { LocationPanel } from "@/components/LocationPanel";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppPlanner } from "@/components/WhatsAppPlanner";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const metadata: Metadata = routeMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/contact")} />
      <section className="section page-hero page-hero-editorial dark-section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Contact and directions</p>
            <h1>Call, WhatsApp or open directions.</h1>
            <p>Use WhatsApp for rooms, celebrations, meetings, EV and general enquiries. Please confirm current hours before a late-night stop.</p>
            <div className="button-row">
              <LinkButton href={business.mapUrl} external>Open in Google Maps</LinkButton>
              <LinkButton href={telHref()} variant="secondary" external>Call {business.phoneDisplay}</LinkButton>
            </div>
          </div>
          <ResponsiveImage className="portrait-image" src={image("exteriorNight").src} alt={image("exteriorNight").alt} loading="eager" priority />
        </div>
      </section>
      <LocationPanel />
      <section className="section section-muted">
        <div className="container grid-2">
          <div>
            <SectionHeader eyebrow="Before you arrive" title="Plan your visit with our team.">
              <p>Call or send us a message for help with the details of your stop.</p>
            </SectionHeader>
            <ul className="feature-list">
              <li>Current room availability and rates</li>
              <li>Party halls, meetings and group arrangements</li>
              <li>EV charging availability and vehicle compatibility</li>
              <li>Visiting hours and help finding the entrance</li>
            </ul>
          </div>
          <WhatsAppPlanner initialIntent="general" />
        </div>
      </section>
    </>
  );
}

