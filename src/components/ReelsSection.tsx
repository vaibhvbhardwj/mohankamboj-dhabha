"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { reelsData, type ReelItem } from "@/data/reels";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export function ReelsSection() {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeReel) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeReel]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!activeReel) return;
      if (event.key === "Escape") setActiveReel(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const currentIndex = reelsData.findIndex((item) => item.id === activeReel.id);
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (currentIndex + direction + reelsData.length) % reelsData.length;
        setActiveReel(reelsData[nextIndex]);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeReel]);

  function navigateReel(direction: number) {
    if (!activeReel) return;
    const currentIndex = reelsData.findIndex((item) => item.id === activeReel.id);
    const nextIndex = (currentIndex + direction + reelsData.length) % reelsData.length;
    setActiveReel(reelsData[nextIndex]);
  }

  return (
    <section className="section reels-section" id="reels" aria-labelledby="reels-heading">
      <div className="container">
        <div className="reels-heading">
          <div>
            <span className="eyebrow">Social & Highway Vibes</span>
            <h2 id="reels-heading">Reels & Videos</h2>
            <p>
              Explore our dining hall, watch our chefs at work, see fresh jalebi being made,
              and take a walk through the hotel rooms.
            </p>
          </div>
          <div className="reels-header-actions">
            <a
              className="social-palette-btn"
              href="https://www.instagram.com/mohankambojhotel_murthal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Mohan Kamboj on Instagram"
            >
              <InstagramIcon size={18} />
              <span>Follow on Instagram</span>
            </a>
            <a
              className="social-palette-btn"
              href="https://www.facebook.com/p/Mohan-Kamboj-Dhaba-Hotel-100054339348730/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Mohan Kamboj on Facebook"
            >
              <FacebookIcon size={18} />
              <span>Facebook Page</span>
            </a>
          </div>
        </div>

        <div className="reels-row" aria-label="Reels and videos gallery">
          {reelsData.map((reel) => (
            <article
              className="reel-card"
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              tabIndex={0}
              role="button"
              aria-label={`Play reel: ${reel.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveReel(reel);
                }
              }}
            >
              <div className="reel-poster-wrap">
                <Image
                  src={reel.poster}
                  alt={reel.title}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1100px) 45vw, 280px"
                  loading="lazy"
                  className="reel-poster-img"
                />
                <div className="reel-overlay" />
              </div>

              <div className="reel-topline">
                <span className="reel-pill">
                  <span className="reel-play-icon-mini" aria-hidden="true">▶</span>
                  {reel.duration}
                </span>
              </div>

              <div className="reel-play-button-center" aria-hidden="true">
                <span className="play-triangle">▶</span>
              </div>

              <div className="reel-copy">
                <span className="reel-category-tag">{reel.category}</span>
                <h3>{reel.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeReel ? (
        <div
          className="lightbox reel-modal-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeReel.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveReel(null);
          }}
        >
          <div className="reel-modal-container">
            <button
              ref={closeBtnRef}
              className="reel-modal-close"
              type="button"
              onClick={() => setActiveReel(null)}
              aria-label="Close reel modal"
            >
              ✕
            </button>

            <button
              className="reel-nav-btn reel-nav-prev"
              type="button"
              onClick={() => navigateReel(-1)}
              aria-label="Previous reel"
            >
              ‹
            </button>

            <div className="reel-phone-stage">
              {activeReel.videoUrl ? (
                <video
                  className="reel-active-video"
                  src={activeReel.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  loop
                />
              ) : (
                <div className="reel-video-preview">
                  <Image
                    src={activeReel.poster}
                    alt={activeReel.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 420px"
                    className="reel-video-bg-img"
                  />
                  <div className="reel-video-overlay" />
                  <div className="reel-preview-banner">
                    <span className="reel-preview-icon">▶</span>
                    <strong>Reel Video Ready</strong>
                    <p>Place your video in <code>/public/videos/</code> or link an Instagram / YouTube Short.</p>
                  </div>
                </div>
              )}

              <div className="reel-modal-info">
                <span className="reel-category-pill">{activeReel.category}</span>
                <h3>{activeReel.title}</h3>
                <p>{activeReel.caption}</p>
                <div className="reel-modal-actions">
                  <a
                    className="button button-primary"
                    href={activeReel.instagramUrl ?? "https://www.instagram.com/mohankambojhotel_murthal/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit our Instagram
                  </a>
                </div>
              </div>
            </div>

            <button
              className="reel-nav-btn reel-nav-next"
              type="button"
              onClick={() => navigateReel(1)}
              aria-label="Next reel"
            >
              ›
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
