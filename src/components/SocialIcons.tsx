import React from "react";
import { business } from "@/data/business";

export function InstagramIcon({ className = "social-svg-icon", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "social-svg-icon", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.498 1.345 5.025L2 22l5.093-1.336a9.988 9.988 0 0 0 4.938 1.285h.004c5.535 0 10.03-4.495 10.03-10.031 0-2.678-1.042-5.197-2.936-7.091A9.972 9.972 0 0 0 12.031 2zm0 18.328a8.31 8.31 0 0 1-4.238-1.157l-.304-.18-3.149.826.84-3.07-.197-.314a8.298 8.298 0 0 1-1.272-4.402c0-4.587 3.733-8.32 8.32-8.32 2.222 0 4.312.866 5.883 2.438a8.272 8.272 0 0 1 2.437 5.883c0 4.588-3.732 8.318-8.32 8.318zm4.56-6.223c-.25-.125-1.479-.73-1.708-.813-.23-.083-.396-.125-.563.125-.166.25-.646.813-.792.98-.146.166-.292.187-.542.062-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.243-1.48-1.39-1.73-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.02-.437-.063-.125-.563-1.355-.772-1.855-.203-.488-.41-.422-.563-.43-.146-.008-.313-.01-.479-.01s-.438.062-.667.312c-.23.25-.875.855-.875 2.085s.896 2.418 1.021 2.585c.125.166 1.763 2.692 4.271 3.775.597.258 1.063.412 1.427.528.6.19 1.146.163 1.577.099.48-.072 1.479-.604 1.688-1.188.208-.583.208-1.083.146-1.187-.063-.105-.23-.167-.48-.292z" />
    </svg>
  );
}

export function SocialLinks({ variant = "default" }: { variant?: "default" | "header" | "pill" }) {
  const instagramUrl = business.social.instagram ?? "https://www.instagram.com/mohankambojhotel_murthal/";
  const facebookUrl = business.social.facebook ?? "https://www.facebook.com/p/Mohan-Kamboj-Dhaba-Hotel-100054339348730/";

  if (variant === "header") {
    return (
      <div className="header-social-group" aria-label="Social media channels">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link"
          aria-label="Follow Mohan Kamboj on Instagram"
          title="Instagram @mohankambojhotel_murthal"
        >
          <InstagramIcon size={18} />
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link"
          aria-label="Follow Mohan Kamboj on Facebook"
          title="Facebook Mohan Kamboj Dhaba & Hotel"
        >
          <FacebookIcon size={18} />
        </a>
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div className="social-pill-group" aria-label="Follow us on social media">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-pill-link"
          aria-label="Follow Mohan Kamboj on Instagram"
        >
          <InstagramIcon size={18} />
          <span>@mohankambojhotel_murthal</span>
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-pill-link"
          aria-label="Follow Mohan Kamboj on Facebook"
        >
          <FacebookIcon size={18} />
          <span>Mohan Kamboj Dhaba &amp; Hotel</span>
        </a>
      </div>
    );
  }

  return (
    <div className="social-button-group" aria-label="Social media links">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-palette-btn"
        aria-label="Follow Mohan Kamboj on Instagram"
      >
        <InstagramIcon size={19} />
        <span>Instagram</span>
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-palette-btn"
        aria-label="Follow Mohan Kamboj on Facebook"
      >
        <FacebookIcon size={19} />
        <span>Facebook</span>
      </a>
    </div>
  );
}
