import type { Metadata } from "next";
import { facilities } from "@/data/facilities";
import { business } from "@/data/business";
import { image } from "@/data/images";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";
import { LinkButton } from "@/components/LinkButton";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppPlanner } from "@/components/WhatsAppPlanner";

export const metadata: Metadata = routeMetadata("/facilities");

export default function FacilitiesPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/facilities")} />
      <section className="section page-hero page-hero-editorial section-muted">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Facilities</p>
            <h1>Room to pause. Space to come together.</h1>
            <p>From clean washrooms and comfortable rooms to kitty parties, small gatherings and business meetings, make more of your Murthal stop.</p>
          </div>
          <ResponsiveImage className="portrait-image" src={image("evCharging").src} alt={image("evCharging").alt} loading="eager" priority />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="At your service" title="Comfort for the road. Spaces for your plans.">
            <p>Everyday conveniences and welcoming spaces for your next celebration or meeting. Ask our team about dates and arrangements.</p>
          </SectionHeader>
          <div className="facility-strip facilities-grid">
            {facilities.map((facility) => (
              <article className="facility-card" key={facility.id}>
                {facility.image ? <ResponsiveImage src={facility.image} alt={facility.title} /> : <div className="facility-lettermark" aria-hidden="true">✦</div>}
                <div>
                  <p className="eyebrow">{facility.need}</p>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container grid-2">
          <div>
            <SectionHeader eyebrow="EV charging" title="Check status before arrival.">
              <p>Public directories list an EV charging point at the property, but charger type, operator, price and live status can change. Please confirm before relying on it for a trip.</p>
            </SectionHeader>
            <div className="button-row">
              <LinkButton href={business.mapUrl} external>Get directions</LinkButton>
              <LinkButton href="#facility-planner" variant="secondary">Ask about EV charging</LinkButton>
            </div>
          </div>
          <ResponsiveImage src={image("parking").src} alt={image("parking").alt} />
        </div>
      </section>
      <section className="section section-muted facilities-brochure-section">
        <div className="container grid-2">
          <div>
            <SectionHeader eyebrow="Official Brochure & Socials" title="Explore every space & stay connected.">
              <p>
                From lavish open-air garden parties and private birthday kitty celebrations to executive conference meets
                and peaceful highway overnight stays — explore our complete facilities. Connect with us on Instagram and Facebook
                for real-time updates and celebration packages.
              </p>
            </SectionHeader>
            <div className="brochure-social-buttons button-row">
              <a
                className="social-palette-btn"
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Instagram @mohankambojhotel_murthal</span>
              </a>
              <a
                className="social-palette-btn"
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Facebook Mohan Kamboj</span>
              </a>
            </div>
            <div className="brochure-quick-contacts">
              <p>Direct Enquiries: <a href={`tel:${business.phoneE164}`}>{business.phoneDisplay}</a> • <a href={`mailto:${business.email}`}>{business.email}</a></p>
            </div>
          </div>
          <figure className="brochure-preview-card">
            <ResponsiveImage
              src="/images/facilities-brochure.png"
              alt="Mohan Kamboj Dhaba & Hotel Official Facilities Brochure showing Reception, Rooms, Conference Room, Garden, and Banquet Party Hall"
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <figcaption>Official Mohan Kamboj Facilities Guide — NH-44, Murthal, Sonipat (131027)</figcaption>
          </figure>
        </div>
      </section>
      <section className="section" id="facility-planner">
        <div className="container">
          <WhatsAppPlanner initialIntent="ev" />
        </div>
      </section>
    </>
  );
}

