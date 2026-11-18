import { image } from "@/data/images";

export type GalleryCategory = "All" | "Dining" | "Rooms" | "Hospitality" | "Food" | "Facilities";

export type GalleryItem = {
  id: string;
  category: "Dining" | "Rooms" | "Hospitality" | "Food" | "Facilities";
  src: string;
  alt: string;
  caption: string;
  aspectRatio: "5/10";
};

export type GalleryImage = GalleryItem;

/**
 * 15 Curated Property & Food Photos from local gallery directory.
 * Formatted for 5:10 mobile aspect ratio.
 */
export const curatedGalleryImages: GalleryItem[] = [
  {
    id: "gal-hero-reception",
    category: "Hospitality",
    src: "/images/hero.jpeg",
    alt: "Mohan Kamboj Dhaba & Hotel main reception with illuminated gold MK emblem and Buddha wall relief",
    caption: "The Grand Reception — Illuminated MK emblem, fluted counter, and warm 24/7 highway arrival.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-hotel-checkin",
    category: "Hospitality",
    src: "/images/gallery/gallery-6.jpeg",
    alt: "Mohan Kamboj Hotel lobby reception with golden fluted wood wall and leather lounge seating",
    caption: "Hotel Check-In Lounge — Contemporary fluted timber panels and warm amber cove lighting.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-deluxe-room",
    category: "Rooms",
    src: "/images/gallery/gallery-3.jpeg",
    alt: "Deluxe King Hotel Room with luxury bedding, wooden flooring, and ambient ceiling lights",
    caption: "Deluxe King Room — Pristine linens, polished wooden flooring, and serene comfort for overnight stays.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-conference-room",
    category: "Facilities",
    src: "/images/gallery/gallery-2.jpeg",
    alt: "Executive Conference Room with long wooden table, ergonomic leather chairs, and screen display",
    caption: "Corporate Conference Suite — High-speed connectivity and executive seating for corporate highway meets.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-lobby-hallway",
    category: "Hospitality",
    src: "/images/gallery/gallery-8.jpeg",
    alt: "Hotel hallway with circular ceiling lights, mirrors and polished floors",
    caption: "The Hotel Hallway — Circular ceiling lights, reflective finishes and a calm welcome.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-royal-thali",
    category: "Food",
    src: image("thali").src,
    alt: image("thali").alt,
    caption: "Special Mohan Kamboj Thali — Shahi paneer, dal makhani, mix veg, breads, raita and dessert.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-steamed-momos",
    category: "Food",
    src: image("momos").src,
    alt: image("momos").alt,
    caption: "Steamed Veg Momos — Handcrafted dumplings served in a bamboo steamer with spicy dips.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-curry-spread",
    category: "Food",
    src: image("dalMakhani").src,
    alt: image("dalMakhani").alt,
    caption: "North Indian Curry Feast — Yellow dal tadka, rich paneer gravy, raita and fresh tandoori breads.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-family-dining",
    category: "Dining",
    src: "/images/dining-hall.jpg",
    alt: "Mohan Kamboj grand dining hall with concentric ceiling ring lighting, crystal chandeliers, and geometric floor tiles",
    caption: "The Grand Dining Hall — Golden cove lighting, crystal chandeliers, and fine highway vegetarian dining.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-kullad-tea",
    category: "Food",
    src: image("clayChai").src,
    alt: "Chai served in two traditional clay cups",
    caption: "Special Kullad Chai — Traditional earthen clay cups brimming with aromatic spiced tea.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-appetizers",
    category: "Food",
    src: "/images/gallery/gallery-10.jpeg",
    alt: "Paneer tikka with salad, breads and chutneys",
    caption: "Paneer Tikka & Accompaniments — A colourful platter with salad, breads and chutneys.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-banquet-lounge",
    category: "Facilities",
    src: "/images/facilities/banquet-hall.png",
    alt: "Celebration banquet hall prepared for party events and gatherings",
    caption: "Party & Kitty Banquet Space — Round tables and seating arranged for a celebration.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-dining-mood",
    category: "Dining",
    src: "/images/gallery/gallery-14.jpeg",
    alt: "Warm restaurant interior with modern finishes and comfortable booths",
    caption: "Contemporary Dining Mood — A refined highway pause combining desi warmth with modern comfort.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-garden-lawn",
    category: "Facilities",
    src: "/images/facilities/garden-lawn.png",
    alt: "Lush outdoor green garden and lawn with palm trees and event seating at Mohan Kamboj",
    caption: "Lush Garden Lawn — Open-air green lawns lined with palm trees for celebrations and family road-trips.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-banquet-decor",
    category: "Facilities",
    src: "/images/facilities/party-decor.png",
    alt: "Birthday and kitty party celebration decor with warm fairy lights",
    caption: "Celebration Stage & Decor — Customizable floral arches, fairy lighting, and kitty party hosting.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-jd-dining",
    category: "Dining",
    src: "/images/justdial/jd-2.jpg",
    alt: "Guests seated together in the Mohan Kamboj family dining hall",
    caption: "Family Dining — Guests gathered around the table for a shared dhaba meal.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-night-facade",
    category: "Hospitality",
    src: "/images/timeline/2026_main.jpeg",
    alt: "Illuminated Mohan Kamboj hotel facade and entrance steps at night",
    caption: "Night Facade on NH-44 — Sparkling exterior illumination guiding travellers to a safe stop.",
    aspectRatio: "5/10"
  },
  {
    id: "gal-parking-ev",
    category: "Facilities",
    src: image("parking").src,
    alt: image("parking").alt,
    caption: "Highway Frontage & Parking — An archive view of the dhaba and parked cars in 2019.",
    aspectRatio: "5/10"
  }
];

export const galleryImages = curatedGalleryImages;
export const galleryCategories: GalleryCategory[] = ["All", "Dining", "Rooms", "Hospitality", "Food", "Facilities"];
