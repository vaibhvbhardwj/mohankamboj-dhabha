"use client";

import { buildWhatsAppUrl, trackIntent } from "@/lib/whatsapp";
import { useHeroVisibility } from "@/components/SiteChrome";

export function FloatingWhatsAppCTA() {
  const heroInView = useHeroVisibility();
  const whatsAppHref = buildWhatsAppUrl(
    `Namaste Mohan Kamboj team! I am planning a stop on NH-44 Murthal and would like help with:`
  );

  return (
    <aside aria-label="Quick WhatsApp assistance" className="floating-orbit-wrapper" inert={heroInView} aria-hidden={heroInView}>
      <a
        className="floating-whatsapp-btn"
        href={whatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Plan your stop on WhatsApp with Mohan Kamboj"
        onClick={() => trackIntent("whatsapp_floating_click", { placement: "floating_orbit" })}
      >
        <span className="floating-pulse-ring" aria-hidden="true" />
        <svg
          className="floating-wa-icon"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.498 1.345 5.025L2 22l5.093-1.336a9.988 9.988 0 0 0 4.938 1.285h.004c5.535 0 10.03-4.495 10.03-10.031 0-2.678-1.042-5.197-2.936-7.091A9.972 9.972 0 0 0 12.031 2zm0 18.328a8.31 8.31 0 0 1-4.238-1.157l-.304-.18-3.149.826.84-3.07-.197-.314a8.298 8.298 0 0 1-1.272-4.402c0-4.587 3.733-8.32 8.32-8.32 2.222 0 4.312.866 5.883 2.438a8.272 8.272 0 0 1 2.437 5.883c0 4.588-3.732 8.318-8.32 8.318zm4.56-6.223c-.25-.125-1.479-.73-1.708-.813-.23-.083-.396-.125-.563.125-.166.25-.646.813-.792.98-.146.166-.292.187-.542.062-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.243-1.48-1.39-1.73-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.02-.437-.063-.125-.563-1.355-.772-1.855-.203-.488-.41-.422-.563-.43-.146-.008-.313-.01-.479-.01s-.438.062-.667.312c-.23.25-.875.855-.875 2.085s.896 2.418 1.021 2.585c.125.166 1.763 2.692 4.271 3.775.597.258 1.063.412 1.427.528.6.19 1.146.163 1.577.099.48-.072 1.479-.604 1.688-1.188.208-.583.208-1.083.146-1.187-.063-.105-.23-.167-.48-.292z"/>
        </svg>
        <span className="floating-tooltip">Plan Your Stop</span>
      </a>
    </aside>
  );
}
