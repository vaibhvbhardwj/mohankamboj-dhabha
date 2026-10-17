import Link from "@/components/AppLink";
import Image from "next/image";
import { business } from "@/data/business";
import { navItems } from "@/data/navigation";
import { telHref } from "@/data/business";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SocialLinks } from "@/components/SocialIcons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-welcome"><span>Murthal · NH-44</span><span>Pure vegetarian · Estd. {business.establishedYear}</span></div>
        <div className="footer-grid">
        <div className="footer-brand-block">
          <Link href="/" className="footer-brand" aria-label={`${business.name} home`}>
            <Image src="/images/mk-logo.png" alt="" width={96} height={96} />
            <span>Mohan Kamboj<small>Dhaba &amp; Hotel</small></span>
          </Link>
          <h2>A familiar welcome.<br />A little more time.</h2>
          <p>Family hospitality since {business.establishedYear}. Good food, restful stays and spaces to bring people together on the road through Murthal.</p>
          <a className="footer-directions" href={business.mapUrl} target="_blank" rel="noopener noreferrer">Find your way to us <span aria-hidden="true">↗</span></a>
        </div>
        <nav aria-label="Footer navigation">
          <h3>Explore</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li><a href="/downloads/mohan-kamboj-menu-2026.pdf" download="Mohan-Kamboj-Menu-2026.pdf">Download menu <span aria-hidden="true">↓</span></a></li>
          </ul>
        </nav>
        <div>
          <h3>Contact</h3>
          <address>{business.address}</address>
          <div className="footer-contact-links">
            <a href={telHref()}>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`} className="footer-email-link">{business.email}</a>
            <a href={buildWhatsAppUrl(`Namaste, I would like help with rooms, an event or my visit to ${business.name}.`)} target="_blank" rel="noopener noreferrer">Talk to us on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
          <div className="footer-socials-wrapper">
            <span className="footer-social-label">Follow our updates:</span>
            <SocialLinks />
          </div>
        </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {business.name}</p>
          <nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
        </div>
        <p className="footer-note">For room availability, event arrangements and current visiting hours, speak with our team.</p>
      </div>
    </footer>
  );
}

