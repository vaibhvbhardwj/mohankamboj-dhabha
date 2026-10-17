import { business } from "./business";

export const pageSeo = {
  "/": {
    title: "Mohan Kamboj Dhaba & Hotel | Pure Veg Dining & Rooms in Murthal",
    description: "Visit Mohan Kamboj Dhaba & Hotel on NH-44, Murthal for pure-vegetarian Punjabi food, comfortable rooms, parking and EV charging."
  },
  "/dining": {
    title: "Pure Veg Punjabi Dining in Murthal | Mohan Kamboj Dhaba",
    description: "Explore vegetarian Murthal favourites, stuffed parathas, North Indian dishes, tea, coffee and lassi at Mohan Kamboj Dhaba."
  },
  "/menu": {
    title: "Dining & Menu | Mohan Kamboj Dhaba, Murthal",
    description: "Explore pure-vegetarian Murthal dining, browse dishes and prices, and download the Mohan Kamboj Dhaba menu."
  },
  "/rooms": {
    title: "Hotel Rooms on NH-44 Murthal | Mohan Kamboj Hotel",
    description: "View rooms and send a direct availability enquiry for Mohan Kamboj Dhaba & Hotel on NH-44 in Murthal."
  },
  "/facilities": {
    title: "Party Halls, Meetings & Facilities | Mohan Kamboj Murthal",
    description: "Explore kitty party halls, small gathering halls, a conference room, clean washrooms, rooms, parking and EV charging at Mohan Kamboj."
  },
  "/gallery": {
    title: "Food, Rooms & Property Gallery | Mohan Kamboj Murthal",
    description: "See the rebuilt property, vegetarian food, dining spaces and rooms at Mohan Kamboj Dhaba & Hotel."
  },
  "/about": {
    title: "Our Story Since 1990 | Mohan Kamboj Dhaba Murthal",
    description: "Discover the family-run story of Mohan Kamboj Dhaba & Hotel, serving Murthal travellers since 1990."
  },
  "/contact": {
    title: "Contact & Directions | Mohan Kamboj Dhaba & Hotel",
    description: "Get directions, call or WhatsApp Mohan Kamboj Dhaba & Hotel on NH-44, Murthal."
  },
  "/privacy": {
    title: "Privacy | Mohan Kamboj Dhaba & Hotel",
    description: "Learn how this website handles WhatsApp, Maps, social links, analytics choices and privacy."
  },
  "/terms": {
    title: "Terms | Mohan Kamboj Dhaba & Hotel",
    description: "Read website, menu, pricing, booking, room and external-service terms for Mohan Kamboj Dhaba & Hotel."
  }
} as const;

export type RoutePath = keyof typeof pageSeo;

export function canonical(path: RoutePath | string) {
  const normalized = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return new URL(normalized, business.canonicalBaseUrl).href;
}

