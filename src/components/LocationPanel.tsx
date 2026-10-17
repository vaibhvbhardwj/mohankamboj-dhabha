"use client";

import { usePathname } from "next/navigation";
import { business, telHref } from "@/data/business";
import { buildWhatsAppUrl, trackIntent } from "@/lib/whatsapp";

export function LocationPanel() {
  const pathname = usePathname();
  return (
    <section className="section location-section" aria-labelledby="location-title">
      <div className="container location-grid">
        <div>
          <p className="eyebrow">Directions and contact</p>
          <h2 id="location-title">Your Murthal stop is just ahead.</h2>
          <p>{business.address}</p>
          <p className="safe-copy">Confirm the exact entrance and current location pin on WhatsApp before a time-sensitive visit.</p>
          <div className="button-row">
            <a className="button button-primary" href={business.mapUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackIntent("directions_click", { page: pathname, placement: "location_panel" })}>Open in Google Maps</a>
            <a className="button button-secondary" href={buildWhatsAppUrl(`Namaste, I am planning to visit ${business.name}. Please confirm the correct entrance/location pin.`)} target="_blank" rel="noopener noreferrer" onClick={() => trackIntent("whatsapp_intent_open", { intent: "directions", page: pathname })}>Confirm location on WhatsApp</a>
            <a className="button button-text" href={telHref()} onClick={() => trackIntent("call_click", { page: pathname, placement: "location_panel" })}>Call {business.phoneDisplay}</a>
          </div>
        </div>
        <div className="map-embed" aria-label="Google map showing Mohan Kamboj Dhaba & Hotel">
          <iframe
            src={business.mapEmbedUrl}
            title="Mohan Kamboj Dhaba & Hotel location map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

