"use client";

import { usePathname } from "next/navigation";
import { business, telHref } from "@/data/business";
import { buildWhatsAppUrl, trackIntent } from "@/lib/whatsapp";
import { useHeroVisibility } from "@/components/SiteChrome";

export function StickyActionBar() {
  const pathname = usePathname();
  const heroInView = useHeroVisibility();
  const general = buildWhatsAppUrl(`Namaste, I found ${business.name} through the website. I would like help with:`);
  return (
    <div className="sticky-actions" aria-label="Quick actions" inert={heroInView} aria-hidden={heroInView}>
      <a
        href={business.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackIntent("directions_click", { page: pathname, placement: "mobile_bar" })}
      >
        Directions
      </a>
      <a href={telHref()} onClick={() => trackIntent("call_click", { page: pathname, placement: "mobile_bar" })}>
        Call
      </a>
      <a
        href={general}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackIntent("whatsapp_intent_open", { intent: "general", page: pathname })}
      >
        WhatsApp
      </a>
    </div>
  );
}

