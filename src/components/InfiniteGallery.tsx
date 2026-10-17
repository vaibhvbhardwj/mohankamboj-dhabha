"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { curatedGalleryImages } from "@/data/gallery";
import { image } from "@/data/images";
import { FoodPhotoCredit } from "@/components/FoodPhotoCredit";

export function InfiniteGallery() {
  // Distribute the 15 authentic images into 3 parallel continuous motion columns
  const col1 = curatedGalleryImages.slice(0, 5);
  const col2 = curatedGalleryImages.slice(5, 10);
  const col3 = curatedGalleryImages.slice(10, 15);
  const columns = [col1, col2, col3];

  return (
    <section className="section gallery-marquee-section" aria-labelledby="moving-gallery-title">
      <div className="container gallery-marquee-copy">
        <span className="eyebrow">15-Image Motion Gallery</span>
        <h2 id="moving-gallery-title">A Living Canvas of Murthal Flavours &amp; Luxury Stays.</h2>
        <p>
          Continuous moments captured from our pure-veg kitchen, newly launched luxury rooms, executive conference suites,
          and grand hotel lobby on NH-44.
        </p>
      </div>

      <div className="gallery-marquee" aria-label="Continuous fifteen-image hospitality gallery">
        {columns.map((column, columnIndex) => {
          const direction = columnIndex === 1 ? "down" : "up";
          const duration = columnIndex === 0 ? "32s" : columnIndex === 1 ? "38s" : "34s";
          const doubled = [...column, ...column];

          return (
            <div
              className={`marquee-column marquee-${direction}`}
              style={{ "--marquee-duration": duration } as CSSProperties}
              key={columnIndex}
            >
              <div className="marquee-track">
                {doubled.map((item, imageIndex) => (
                  <figure
                    className="marquee-item-card"
                    key={`${item.id}-${imageIndex}`}
                  >
                    <div className="marquee-item-ratio">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 360px"
                        loading="lazy"
                        className="marquee-img"
                      />
                      <div className="marquee-item-overlay" />
                      <span className="marquee-cat-tag">{item.category}</span>
                    </div>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="container gallery-photo-credit"><FoodPhotoCredit photo={image("parantha")} /></div>
    </section>
  );
}
