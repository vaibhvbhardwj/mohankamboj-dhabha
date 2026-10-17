import type { Metadata } from "next";
import { business } from "@/data/business";
import { image } from "@/data/images";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";
import { LinkButton } from "@/components/LinkButton";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { FounderTribute } from "@/components/FounderTribute";
import { HeritageTimeline } from "@/components/HeritageTimeline";

export const metadata: Metadata = routeMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/about")} />
      <section className="section page-hero page-hero-editorial section-muted">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h1>A family welcome, carried forward since {business.establishedYear}.</h1>
            <p>Some places become part of the journey. Since 1990, Mohan Kamboj Dhaba has welcomed travellers on the Murthal stretch of GT Road with vegetarian food and family-run hospitality.</p>
          </div>
          <ResponsiveImage className="portrait-image" src={image("patioNight").src} alt={image("patioNight").alt} loading="eager" priority />
        </div>
      </section>
      <FounderTribute />
      <HeritageTimeline />
      <section className="section final-conversion dark-section">
        <div className="container final-grid">
          <div>
            <p className="eyebrow">Visit the story in person</p>
            <h2>Food, family hospitality and the highway in one stop.</h2>
          </div>
          <LinkButton href="/contact">Get directions</LinkButton>
        </div>
      </section>
    </>
  );
}

