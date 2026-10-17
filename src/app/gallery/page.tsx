import type { Metadata } from "next";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";
import { GalleryExperience } from "@/components/GalleryExperience";
import { InfiniteGallery } from "@/components/InfiniteGallery";

export const metadata: Metadata = routeMetadata("/gallery");

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/gallery")} />
      <section className="section page-hero section-muted">
        <div className="container">
          <span className="eyebrow">Visual Stories</span>
          <h1>Food, Rooms &amp; Property Gallery</h1>
          <p>
            Explore our tandoori paranthas, grand illuminated reception,
            family dining halls, and luxurious A/C rooms. Click any photo to expand.
          </p>
        </div>
      </section>
      <InfiniteGallery />
      <section className="section">
        <div className="container">
          <GalleryExperience />
        </div>
      </section>
    </>
  );
}
