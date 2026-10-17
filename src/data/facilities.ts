import { image } from "./images";

export type Facility = {
  id: string;
  title: string;
  need: "Arrive" | "Refresh" | "Rest" | "Recharge" | "Continue" | "Celebrate" | "Gather" | "Meet";
  description: string;
  image?: string;
  status: "confirmed" | "client-supplied" | "needs-confirmation";
  action?: "directions" | "ev" | "whatsapp";
};

export const facilities: Facility[] = [
  {
    id: "reception",
    title: "24/7 Grand Reception",
    need: "Arrive",
    description: "Iconic illuminated MK emblem, Buddha reliefs, and 24/7 express front-desk assistance welcoming road travellers day and night.",
    image: "/images/reception-front.jpg",
    status: "confirmed",
    action: "whatsapp"
  },
  {
    id: "rooms",
    title: "Luxury A/C Rooms",
    need: "Rest",
    description: "Newly renovated Deluxe King and family rooms with modern wooden flooring, luxury bedding, attached modern bathrooms, and 24/7 room service.",
    image: "/images/gallery/gallery-3.jpeg",
    status: "confirmed",
    action: "whatsapp"
  },
  {
    id: "conference-room",
    title: "Executive Conference Room",
    need: "Meet",
    description: "Dedicated executive boardroom equipped with conference seating, high-speed WiFi, and presentation facilities for highway business meets.",
    image: "/images/gallery/gallery-2.jpeg",
    status: "confirmed",
    action: "whatsapp"
  },
  {
    id: "garden-lawn",
    title: "Lush Outdoor Garden & Lawn",
    need: "Celebrate",
    description: "Spacious open-air green lawn lined with palm trees, outdoor seating, and customizable decorative setups for birthdays, anniversaries, and family outings.",
    image: "/images/facilities/garden-lawn.png",
    status: "confirmed",
    action: "whatsapp"
  },
  {
    id: "banquet-hall",
    title: "Banquet & Kitty Party Hall",
    need: "Celebrate",
    description: "Elegant indoor banquet space with sparkling crystal chandeliers, floral birthday arches, and round-table banquet dining for kitty parties and milestones.",
    image: "/images/facilities/banquet-hall.png",
    status: "confirmed",
    action: "whatsapp"
  },
  {
    id: "family-dining",
    title: "Pure-Vegetarian Dining",
    need: "Refresh",
    description: "Grand dining hall serving Murthal's legendary clay-tandoor butter paranthas, slow-cooked Dal Makhani, paneer delicacies, and royal thalis.",
    image: "/images/dining-hall.jpg",
    status: "confirmed"
  },
  {
    id: "parking",
    title: "Spacious On-Site Parking",
    need: "Arrive",
    description: "Expansive, well-lit, and secure vehicle parking directly accessible from NH-44 GT Karnal Road for personal cars, SUVs, and tour buses.",
    image: image("parking").src,
    status: "confirmed",
    action: "directions"
  },
  {
    id: "clean-washrooms",
    title: "Clean Highway Washrooms",
    need: "Refresh",
    description: "Spotlessly maintained hygiene washroom facilities offering a refreshing break for long-distance highway travelers.",
    status: "confirmed"
  },
  {
    id: "ev",
    title: "EV Charging Point Support",
    need: "Recharge",
    description: "Electric vehicle charging assistance listed on-site to help EV commuters power up while enjoying authentic Murthal dining.",
    image: image("evCharging").src,
    status: "client-supplied",
    action: "ev"
  }
];

