"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type HeritagePhoto = {
  src: string;
  alt: string;
  caption: string;
  tag?: string;
};

export type HeritageMilestone = {
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  copy: string;
  note: string;
  main: HeritagePhoto;
  stack: HeritagePhoto[];
};

const milestones: HeritageMilestone[] = [
  {
    year: "1990",
    badge: "Foundation & Sacred Vision",
    title: "Foundation by Late Shri Mohan Lal Kamboj Ji",
    subtitle: "A Vision of Wholesome Food and Warmth",
    copy: "In 1990, Late Shri Mohan Lal Kamboj Ji established Mohan Vaishno Dhaba on the NH-44 highway. Starting with traditional wooden charpais, earthen clay tandoors, and fresh slow-cooked vegetarian dishes, it quickly became a sanctuary of comfort and honesty for highway travellers.",
    note: "Estd. 1990 • The Pioneer of Authentic Murthal Dhaba Culture",
    main: {
      src: "/images/timeline/1990_main.jpeg",
      alt: "The original Mohan Vaishno Dhaba frontage with charpai seating",
      caption: "1990: The original roadside dhaba, with its yellow signboard and traditional charpai seating."
    },
    stack: [
      {
        src: "/images/timeline/1990_1.jpeg",
        alt: "The early dhaba frontage with a scooter and roadside charpais",
        caption: "An early view of the dhaba and its roadside charpai seating.",
        tag: "Early Days"
      },
      {
        src: "/images/timeline/1990_1.jpeg",
        alt: "The early dhaba frontage with a scooter and roadside charpais",
        caption: "An early view of the dhaba and its roadside charpai seating.",
        tag: "Early Days"
      },
      {
        src: "/images/timeline/1990_1.jpeg",
        alt: "The early dhaba frontage with a scooter and roadside charpais",
        caption: "An early view of the dhaba and its roadside charpai seating.",
        tag: "Early Days"
      }
    ]
  },
  {
    year: "2004",
    badge: "Major Renovation & Expansion",
    title: "Major Dhaba Expansion & Landmark Status",
    subtitle: "A Renowned Destination Across Delhi-NCR & Punjab",
    copy: "In 2004, Mohan Kamboj underwent a landmark expansion to accommodate thousands of road-trippers and tour buses. The kitchen capacity was tripled, dedicated family seating zones were introduced, and word of our rich Dal Makhani and piping-hot paranthas spread across northern India.",
    note: "2004 Milestone • Expanded Dining & Generous Hospitality",
    main: {
      src: "/images/timeline/2004_main.jpeg",
      alt: "Mohan Kamboj Dhaba frontage and open roadside forecourt in 2004",
      caption: "2004: The expanded dhaba frontage and open forecourt beside the highway."
    },
    stack: [
      {
        src: "/images/timeline/2004_1.jpeg",
        alt: "Guests seated on charpais outside Mohan Vaishno Dhaba in 2004",
        caption: "Guests gathered outside the dhaba beneath the Mohan Vaishno signboard.",
        tag: "Dhaba Seating"
      },
      {
        src: "/images/timeline/2004_2.jpeg",
        alt: "Wide view of the dhaba frontage and roadside forecourt in 2004",
        caption: "A wider archive view of the dhaba and its roadside forecourt.",
        tag: "Highway Frontage"
      },
      {
        src: "/images/timeline/2004_1.jpeg",
        alt: "Guests seated on charpais outside Mohan Vaishno Dhaba in 2004",
        caption: "Guests gathered outside the dhaba beneath the Mohan Vaishno signboard.",
        tag: "Dhaba Seating"
      }
    ]
  },
  {
    year: "2019",
    badge: "Modernization & Infrastructure",
    title: "Modernization & Enhanced Facilities",
    subtitle: "Upgrading Hygiene, Tech & Highway Parking",
    copy: "In 2019, Mohan Kamboj implemented high-tech commercial kitchens, stringent hygiene systems, and sprawling secure vehicle parking. The infrastructure was modernized to ensure faster highway service while keeping every authentic recipe true to its 1990 origin.",
    note: "2019 Milestone • Modern Kitchens & Expansive Parking",
    main: {
      src: "/images/timeline/2019_main.jpeg",
      alt: "Mohan Kamboj Dhaba roadside frontage with parked cars in 2019",
      caption: "2019: The dhaba frontage, highway approach and on-site vehicle parking."
    },
    stack: [
      {
        src: "/images/timeline/2019_1.jpeg",
        alt: "Mohan Kamboj Dhaba entrance with parked cars and string lights at night",
        caption: "The dhaba entrance and parking area lit up for evening arrivals.",
        tag: "Evening Arrival"
      },
      {
        src: "/images/timeline/2019_2.jpeg",
        alt: "Illuminated Mohan Kamboj Dhaba and AC rooms signboards in 2019",
        caption: "The familiar illuminated dhaba and A/C room signboards beside the highway.",
        tag: "Our Signboards"
      },
      {
        src: "/images/timeline/2019_1.jpeg",
        alt: "Mohan Kamboj Dhaba entrance with parked cars and string lights at night",
        caption: "The dhaba entrance and parking area lit up for evening arrivals.",
        tag: "Evening Arrival"
      }
    ]
  },
  {
    year: "2026",
    badge: "Current Relaunch & Grand Hospitality",
    title: "Grand Hospitality Destination on NH-44",
    subtitle: "Fine Dining, Luxury Rooms, Conference & Banquets",
    copy: "Today, Mohan Kamboj celebrates its grandest relaunch: expanding beyond a dhaba into a full-fledged luxury hospitality destination. Featuring exquisite pure-veg fine dining, luxurious air-conditioned hotel rooms, an executive conference suite, and grand celebration banquet halls — serving travellers 24 hours a day.",
    note: "Present Day • Dhaba • Luxury Hotel • Banquets • 24/7 Comfort",
    main: {
      src: "/images/timeline/2026_main.jpeg",
      alt: "Mohan Kamboj Dhaba and Hotel illuminated grand facade in 2026",
      caption: "2026: The illuminated hotel facade, entrance steps and grand arrival on NH-44."
    },
    stack: [
      {
        src: "/images/timeline/2026_1.jpeg",
        alt: "Grand dining hall with chandeliers, patterned flooring and set tables in 2026",
        caption: "The dining hall, with crystal chandeliers, patterned flooring and tables ready for guests.",
        tag: "Dining Hall"
      },
      {
        src: "/images/timeline/2026_2.jpeg",
        alt: "Dining hall seating and circular ceiling lights in 2026",
        caption: "A closer view of the dining tables and circular ceiling lighting.",
        tag: "Dining Details"
      },
      {
        src: "/images/timeline/2026_3.jpeg",
        alt: "Hotel reception with the MK emblem and fluted counter in 2026",
        caption: "The MK reception counter and illuminated emblem welcoming arriving guests.",
        tag: "Reception"
      }
    ]
  }
];

export function HeritageTimeline() {
  const [activePhoto, setActivePhoto] = useState<{
    photo: HeritagePhoto;
    allPhotos: HeritagePhoto[];
    index: number;
    milestoneTitle: string;
    milestoneYear: string;
  } | null>(null);

  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activePhoto) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!activePhoto) return;
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (activePhoto.index + direction + activePhoto.allPhotos.length) % activePhoto.allPhotos.length;
        setActivePhoto({
          ...activePhoto,
          photo: activePhoto.allPhotos[nextIndex],
          index: nextIndex
        });
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  function navigateLightbox(direction: number) {
    if (!activePhoto) return;
    const nextIndex = (activePhoto.index + direction + activePhoto.allPhotos.length) % activePhoto.allPhotos.length;
    setActivePhoto({
      ...activePhoto,
      photo: activePhoto.allPhotos[nextIndex],
      index: nextIndex
    });
  }

  function openPhoto(photo: HeritagePhoto, milestone: HeritageMilestone, photoIndex: number) {
    const all = [milestone.main, ...milestone.stack];
    setActivePhoto({
      photo,
      allPhotos: all,
      index: photoIndex,
      milestoneTitle: milestone.title,
      milestoneYear: milestone.year
    });
  }

  return (
    <section className="section heritage-timeline-section" id="timeline" aria-labelledby="timeline-heading">
      <div className="container">
        <div className="section-header heritage-heading">
          <span className="eyebrow">Dhaba History &amp; Chronology</span>
          <h2 id="timeline-heading">The Journey Through Time: 1990 to Present.</h2>
          <p>
            Explore our defining milestones — from the 1990 foundation laid by Late Shri Mohan Lal Kamboj Ji
            to major expansions in 2004 and 2019, culminating in today&apos;s complete luxury hotel and banquet relaunch.
          </p>
        </div>

        <div className="heritage-timeline">
          {milestones.map((milestone, milestoneIdx) => (
            <article className="heritage-moment" key={milestone.year}>
              <div className="heritage-copy">
                <div className="heritage-meta-row">
                  <span className="heritage-year">{milestone.year}</span>
                  <span className="heritage-badge-pill">{milestone.badge}</span>
                </div>
                <h3>{milestone.title}</h3>
                <h4 className="heritage-subtitle">{milestone.subtitle}</h4>
                <p>{milestone.copy}</p>
                <div className="heritage-note-card">
                  <span className="heritage-note-dot" aria-hidden="true">✦</span>
                  <small>{milestone.note}</small>
                </div>
              </div>

              <div className="heritage-photo-stage" aria-label={`Photo gallery for ${milestone.year}`}>
                {/* 3 cards fanned out behind the main 16:9 picture like playing cards held in a human hand */}
                <div className="hand-cards-fan" aria-hidden="false">
                  {milestone.stack.map((photo, photoIndex) => (
                    <button
                      className={`fan-card fan-card-${photoIndex + 1}`}
                      key={`${photo.src}-${photoIndex}`}
                      type="button"
                      onClick={() => openPhoto(photo, milestone, photoIndex + 1)}
                      aria-label={`Open photo: ${photo.caption}`}
                      title={photo.caption}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 95px, 160px"
                        loading="lazy"
                        className="fan-card-img"
                      />
                      <div className="fan-card-badge">
                        <span>0{photoIndex + 1}</span>
                      </div>
                      <span className="fan-card-tag">{photo.tag ?? `Photo ${photoIndex + 1}`}</span>
                    </button>
                  ))}
                </div>

                {/* Main 16:9 Focal Picture */}
                <button
                  className="legacy-main-photo"
                  type="button"
                  onClick={() => openPhoto(milestone.main, milestone, 0)}
                  aria-label={`Open milestone photo: ${milestone.main.caption}`}
                >
                  <div className="legacy-main-ratio">
                    <Image
                      src={milestone.main.src}
                      alt={milestone.main.alt}
                      fill
                      priority={milestoneIdx === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 60vw, 720px"
                      className="legacy-main-img"
                    />
                    <div className="legacy-main-gradient" />
                    <div className="legacy-main-info">
                      <span className="legacy-main-pill">{milestone.year} Milestone</span>
                      <p>{milestone.main.caption}</p>
                    </div>
                    <span className="legacy-expand-cue" aria-hidden="true">
                      <span>Click to view</span> ↗
                    </span>
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activePhoto ? (
        <div
          className="lightbox heritage-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.photo.caption}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActivePhoto(null);
          }}
        >
          <div className="heritage-lightbox-modal">
            <button
              ref={closeBtnRef}
              className="lightbox-close heritage-close-btn"
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Close photo modal"
            >
              ✕
            </button>

            <button
              className="heritage-modal-nav heritage-modal-prev"
              type="button"
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous photo"
            >
              ‹
            </button>

            <div className="heritage-modal-content">
              <div className="heritage-modal-img-wrap">
                <Image
                  src={activePhoto.photo.src}
                  alt={activePhoto.photo.alt}
                  fill
                  sizes="(max-width: 900px) 96vw, 1100px"
                  className="heritage-modal-img"
                />
              </div>
              <div className="heritage-modal-caption">
                <div className="heritage-modal-tagline">
                  <span className="heritage-modal-year">{activePhoto.milestoneYear}</span>
                  <span className="heritage-modal-title">{activePhoto.milestoneTitle}</span>
                  <span className="heritage-modal-counter">
                    {activePhoto.index + 1} / {activePhoto.allPhotos.length}
                  </span>
                </div>
                <p>{activePhoto.photo.caption}</p>
              </div>
            </div>

            <button
              className="heritage-modal-nav heritage-modal-next"
              type="button"
              onClick={() => navigateLightbox(1)}
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
