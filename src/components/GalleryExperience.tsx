"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryImages, type GalleryImage } from "@/data/gallery";
import { trackIntent } from "@/lib/whatsapp";

export function GalleryExperience() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [active, setActive] = useState<GalleryImage | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered = category === "All" ? galleryImages : galleryImages.filter((image) => image.category === category);

  useEffect(() => {
    if (active) closeRef.current?.focus();
  }, [active]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (!active) return;
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const index = filtered.findIndex((image) => image.id === active.id);
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const next = filtered[(index + direction + filtered.length) % filtered.length];
        setActive(next);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, filtered]);

  function navigateGallery(direction: number) {
    if (!active) return;
    const index = filtered.findIndex((image) => image.id === active.id);
    const next = filtered[(index + direction + filtered.length) % filtered.length];
    setActive(next);
  }

  return (
    <div className="gallery-experience">
      <div className="category-scroll" aria-label="Gallery filters">
        {galleryCategories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            type="button"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="gallery-grid" aria-label="Food, rooms and property photo gallery">
        {filtered.map((image) => (
          <button
            type="button"
            className="gallery-tile gallery-tile-5x10"
            key={image.id}
            onClick={() => {
              setActive(image);
              trackIntent("gallery_open", { category: image.category, image_id: image.id });
            }}
            aria-label={`Open photo: ${image.caption}`}
          >
            <div className="gallery-tile-inner">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="gallery-tile-img"
              />
              <div className="gallery-tile-gradient" />
              <div className="gallery-tile-meta">
                <span className="gallery-tile-badge">{image.category}</span>
                <p>{image.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="lightbox gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="lightbox-panel gallery-panel-5x10">
            <button
              ref={closeRef}
              className="lightbox-close"
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <button
              className="gallery-modal-nav gallery-modal-prev"
              type="button"
              onClick={() => navigateGallery(-1)}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="gallery-modal-img-container">
              <Image
                src={active.src}
                alt={active.alt}
                width={800}
                height={1600}
                className="gallery-modal-img"
              />
            </div>

            <button
              className="gallery-modal-nav gallery-modal-next"
              type="button"
              onClick={() => navigateGallery(1)}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="gallery-modal-caption-bar">
              <span className="gallery-modal-cat">{active.category}</span>
              <p>{active.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
