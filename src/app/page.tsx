import Image from "next/image";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { business, publicClaims } from "@/data/business";
import { image } from "@/data/images";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, faqSchema, JsonLd } from "@/lib/schema";
import { LinkButton } from "@/components/LinkButton";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionHeader } from "@/components/SectionHeader";
import { ConfirmationNotice } from "@/components/Notice";
import { InfiniteGallery } from "@/components/InfiniteGallery";
import { ReelsSection } from "@/components/ReelsSection";
import { LocationPanel } from "@/components/LocationPanel";
import { WhatsAppPlanner } from "@/components/WhatsAppPlanner";
import { FaqList } from "@/components/FaqList";
import { FloatingWhatsAppCTA } from "@/components/FloatingWhatsAppCTA";
import { FounderTribute } from "@/components/FounderTribute";
import { HeroOpening } from "@/components/HeroOpening";
import { FoodPhotoCredit } from "@/components/FoodPhotoCredit";

export const metadata: Metadata = routeMetadata("/");

const heroDisplay = localFont({
  src: "../assets/fonts/CormorantGaramond-MediumItalic.ttf",
  weight: "500",
  style: "italic",
  display: "swap",
  variable: "--hero-display"
});

const foodHighlights = [
  {
    title: "Fresh Steamed Veg Momos",
    copy: "Delicate handcrafted vegetable dumplings served in a traditional bamboo steamer with spicy chutney and garlic dip.",
    price: "₹160",
    photo: image("momos"),
    active: false
  },
  {
    title: "Special Mohan Kamboj Thali",
    copy: "A royal multi-course vegetarian feast with Shahi Paneer, Dal Makhani, Mix Veg, Jeera Rice, raita, breads, and dessert.",
    price: "₹449 Complete",
    photo: image("thali"),
    active: true
  },
  {
    title: "North Indian Curry Feast",
    copy: "Aromatic slow-simmered yellow dal tadka and rich cottage cheese curry, served with hot tandoori breads and boondi raita.",
    price: "From ₹259",
    photo: image("dalMakhani"),
    active: false
  }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[...baseSchemas("/"), faqSchema()]} />

        <HeroOpening className={`home-hero ${heroDisplay.variable}`}>
          <Image
            className="hero-bg"
            src="/images/hero.jpeg"
            alt="Mohan Kamboj Dhaba & Hotel grand illuminated reception with golden MK emblem and Buddha relief"
            fill
            preload
            sizes="100vw"
          />
          <div className="hero-shade" />

          <div className="container hero-panel">
            <h1 className="hero-editorial-phrase">A pause worth taking.</h1>
          </div>
        </HeroOpening>
        <div className="home-header-space" aria-hidden="true" />

        {/* ========================================================
            2. BRAND STORY & HOSPITALITY VALUES
            ======================================================== */}
        <section id="brand-story" className="section brand-story">
          <div className="container story-grid">
            <div>
              <span className="eyebrow">One Complete Highway Welcome</span>
              <h2>Desi warmth, modern comfort and the road right outside.</h2>
              <p>
                Come for familiar Murthal vegetarian food. Stay for a calmer, more complete stop with
                newly renovated luxury rooms, ample parking, directions, and EV charging support.
              </p>
              <div className="trust-rail editorial-rail" aria-label="Key Hotel Facts">
                {publicClaims().map((claim) => (
                  <span key={claim.key}>{claim.value}</span>
                ))}
              </div>
              <div className="button-row">
                <LinkButton href="/menu">Explore Dining &amp; Menu</LinkButton>
                <LinkButton href={business.mapUrl} external variant="text">
                  Get Directions
                </LinkButton>
              </div>
            </div>
            <figure className="story-photo">
              <ResponsiveImage
                src={image("familyDining").src}
                alt="Mohan Kamboj Dhaba & Hotel grand dining hall with crystal chandeliers, geometric floor tiles, and Buddha relief"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <figcaption>The Grand Dining Hall at Mohan Kamboj — Contemporary luxury meets 24/7 highway hospitality.</figcaption>
            </figure>
          </div>
        </section>

        {/* ========================================================
            3. SIGNATURE FOOD DISCOVERY
            ======================================================== */}
        <section className="section food-discovery section-muted">
          <div className="container">
            <SectionHeader eyebrow="Signature Food" title="Authentic flavours crafted fresh from our kitchen.">
              <p>
                From freshly steamed Himalayan momos and rich slow-simmered dals to Paneer specialities
                and our grand royal thali — explore our complete 2026 menu.
              </p>
            </SectionHeader>
            <div className="food-card-row">
              {foodHighlights.map((dish) => (
                <article className={dish.active ? "food-card food-card-active" : "food-card"} key={dish.title}>
                  <div className="food-card-image-wrap">
                    <Image
                      src={dish.photo.src}
                      alt={dish.photo.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 30vw"
                      loading="lazy"
                      className="food-card-img"
                    />
                  </div>
                  <div className="food-card-body">
                    <h3>{dish.title}</h3>
                    <p>{dish.copy}</p>
                    <span className="food-card-price">{dish.price}</span>
                    <FoodPhotoCredit photo={dish.photo} />
                  </div>
                </article>
              ))}
            </div>
            <div className="button-row centered-row">
              <LinkButton href="/menu">View Full Menu (2026)</LinkButton>
              <LinkButton href="/menu#dining-experience" variant="secondary">See Dining Story</LinkButton>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. DINING ATMOSPHERE
            ======================================================== */}
        <section className="section atmosphere-section">
          <div className="container atmosphere-grid">
            <div className="wide-image-wrap">
              <Image
                src="/images/atmosphere-dining.jpg"
                alt="Mohan Kamboj Hotel modern illuminated reception and front desk with golden MK emblem and lounge seating"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                loading="lazy"
                className="atmosphere-featured-img"
              />
            </div>
            <div className="atmosphere-copy">
              <span className="eyebrow">Dining &amp; Hospitality Atmosphere</span>
              <h2>A familiar highway name, styled for the road ahead.</h2>
              <p>
                The brand story is simple: authentic vegetarian food, a warmer arrival, useful facilities,
                and a place that feels worthy of an extended pause before your next drive.
              </p>
              <ul className="feature-list">
                <li>Pure vegetarian kitchen adhering to timeless 1990 Murthal recipes.</li>
                <li>Spacious air-conditioned dining halls and celebratory banquet spaces.</li>
                <li>Our team can help plan your stay, gathering or onward journey.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. STAY SECTION (Luxury A/C Rooms on NH-44)
            ======================================================== */}
        <section className="section stay-section dark-section">
          <div className="container stay-grid">
            <div>
              <span className="eyebrow">Stay on NH-44</span>
              <h2>Rest well. Continue refreshed.</h2>
              <p>
                Modern air-conditioned rooms designed for highway travellers, families, and weekend road-trips.
                Clean linens, attached luxury baths, king-size beds, and 24/7 room service.
              </p>
              <ConfirmationNotice />
              <LinkButton href="/rooms">Check Room Availability</LinkButton>
            </div>
            <div className="room-collage">
              <div className="room-main-frame">
                <Image
                  src="/images/gallery/gallery-3.jpeg"
                  alt="Deluxe King Room with modern wood interiors at Mohan Kamboj"
                  fill
                  sizes="(max-width: 900px) 100vw, 38vw"
                  loading="lazy"
                  className="room-collage-img"
                />
              </div>
              <div className="room-sub-frame">
                <Image
                  src="/images/gallery/gallery-2.jpeg"
                  alt="Executive Conference Suite at Mohan Kamboj"
                  fill
                  sizes="(max-width: 900px) 48vw, 18vw"
                  loading="lazy"
                  className="room-collage-img"
                />
              </div>
              <div className="room-sub-frame">
                <Image
                  src="/images/gallery/gallery-8.jpeg"
                  alt="Hotel hallway with circular ceiling lights and polished floors at Mohan Kamboj"
                  fill
                  sizes="(max-width: 900px) 48vw, 18vw"
                  loading="lazy"
                  className="room-collage-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. ROUTE & STOP PLANNER
            ======================================================== */}
        <section className="section route-section">
          <div className="container">
            <SectionHeader eyebrow="Plan Your Highway Stop" title="Arrive, park, eat, rest or recharge, then continue.">
              <p>
                Facilities framed as one seamless highway journey. Ample parking, authentic tandoori food,
                luxury rooms, and EV assistance right on NH-44 Murthal.
              </p>
            </SectionHeader>
            <div className="route-strip">
              {["Arrive", "Park", "Eat", "Rest / Recharge", "Continue"].map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step}</h3>
                  <p>
                    {index === 0
                      ? "Follow directions to our Murthal entrance."
                      : index === 1
                      ? "Ample secure highway parking."
                      : index === 2
                      ? "Fresh clay tandoor cooking."
                      : index === 3
                      ? "A/C rooms or EV enquiry."
                      : "Safe 24/7 onward road trip."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. 15-IMAGE INFINITE MOTION GALLERY
            ======================================================== */}
        <InfiniteGallery />

        {/* ========================================================
            8. 4 REAL VIDEO REELS SHOWCASE
            ======================================================== */}
        <ReelsSection />
        <FounderTribute />

        {/* ========================================================
            9. FINAL CONVERSION & WHATSAPP PLANNER
            ======================================================== */}
        <section className="section final-conversion dark-section">
          <div className="container final-grid">
            <div>
              <span className="eyebrow">One Message Away</span>
              <h2>Your stay, celebration and next stop start here.</h2>
              <p>{business.address}</p>
            </div>
            <div className="button-row">
              <LinkButton href="/contact">Open WhatsApp Planner</LinkButton>
              <LinkButton href={business.mapUrl} external variant="secondary">
                Get Directions
              </LinkButton>
            </div>
          </div>
        </section>

        <section className="section planner-section">
          <div className="container">
            <WhatsAppPlanner initialIntent="general" />
          </div>
        </section>

        <LocationPanel />
        <FaqList />

      {/* Floating Red WhatsApp Button with smooth pulse animation */}
      <FloatingWhatsAppCTA />
    </>
  );
}
