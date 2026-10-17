import type { Metadata } from "next";
import { image } from "@/data/images";
import { business } from "@/data/business";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";
import { MenuExplorer } from "@/components/MenuExplorer";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionHeader } from "@/components/SectionHeader";
import { FoodPhotoCredit } from "@/components/FoodPhotoCredit";

export const metadata: Metadata = routeMetadata("/menu");

export default function MenuPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/menu")} />
      <section className="section page-hero page-hero-editorial section-muted">
        <div className="container menu-hero-topline">
          <p className="eyebrow">Dining &amp; Menu · Estd. {business.establishedYear}</p>
          <a className="button button-secondary menu-download" href="/downloads/mohan-kamboj-menu-2026.pdf" download="Mohan-Kamboj-Menu-2026.pdf">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg>
            Download menu
          </a>
        </div>
        <div className="container grid-2">
          <div>
            <h1>Pure-veg comfort, the Murthal way.</h1>
            <p>Butter-topped paranthas, slow-simmered dals and one more cup of chai. Find your favourites and make yourself at home at our family&apos;s table.</p>
            <p className="menu-browse-note">Browse here, enjoy at the dhaba. Please place food orders with our team when you visit.</p>
            <a className="menu-browse-link" href="#menu-catalog">Browse dishes <span aria-hidden="true">↓</span></a>
          </div>
          <ResponsiveImage className="portrait-image" src={image("familyDining").src} alt={image("familyDining").alt} loading="eager" priority />
        </div>
      </section>
      <section className="section menu-catalog-section" id="menu-catalog">
        <div className="container">
          <MenuExplorer />
        </div>
      </section>
      <section className="section section-muted" id="dining-experience">
        <div className="container">
          <SectionHeader eyebrow="Around our table" title="A little warmth for every journey.">
            <p>Come for a quick breakfast, a family lunch or an unhurried North Indian dinner. Our pure-vegetarian kitchen carries the same welcome we began with in {business.establishedYear}.</p>
          </SectionHeader>
          <div className="food-card-row">
            <article className="food-card"><ResponsiveImage src={image("parantha").src} alt={image("parantha").alt} /><div><h3>Fresh from the tandoor</h3><p>Stuffed paranthas, warm breads and generous helpings of white butter.</p><FoodPhotoCredit photo={image("parantha")} /></div></article>
            <article className="food-card"><ResponsiveImage src={image("thali").src} alt={image("thali").alt} /><div><h3>A meal to linger over</h3><p>Rich dals, paneer favourites and a thali made for a proper Murthal appetite.</p></div></article>
            <article className="food-card"><ResponsiveImage src={image("chaiPour").src} alt={image("chaiPour").alt} /><div><h3>One more cup</h3><p>Highway chai, a cool lassi and a moment to pause before the road ahead.</p></div></article>
          </div>
          <p className="dining-dietary-note">Please tell our team about any allergies or dietary needs before ordering.</p>
        </div>
      </section>
    </>
  );
}

