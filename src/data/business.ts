import { siteUrl } from "@/data/site";

export type VerificationStatus = "confirmed" | "client-supplied" | "needs-confirmation";

export type BusinessClaim = {
  key: string;
  value: string;
  status: VerificationStatus;
};

export type BusinessProfile = {
  name: string;
  establishedYear: number;
  phoneDisplay: string;
  phoneE164: string;
  whatsappE164: string;
  address: string;
  postalCode: string;
  geo: { latitude: number; longitude: number };
  mapUrl: string;
  mapEmbedUrl: string;
  canonicalBaseUrl: string;
  restaurantHours: null;
  hotelDeskHours: null;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
  claims: BusinessClaim[];
};

const postalCode = "131039";

export const business: BusinessProfile = {
  name: "Mohan Kamboj Dhaba & Hotel",
  establishedYear: 1990,
  phoneDisplay: "+91 93064 47185",
  phoneE164: "+919306447185",
  whatsappE164: "919306447185",
  email: "Kamboj13291@gmail.com",
  address: `NH 44, Murthal, Sonipat, Haryana ${postalCode}`,
  postalCode,
  // Marker coordinates verified from the existing Google Maps place embed.
  geo: { latitude: 29.0532083, longitude: 77.0656801 },
  mapUrl: "https://www.google.com/maps?cid=14834210950443537981",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.7757594410687!2d77.0631051749725!3d29.053212964853973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db1250f73423f%3A0xcdddb443b065963d!2sMohan%20Kamboj%20Dhaba%20%26%20Hotel!5e0!3m2!1sen!2sin!4v1791968594799!5m2!1sen!2sin",
  canonicalBaseUrl: siteUrl,
  restaurantHours: null,
  hotelDeskHours: null,
  social: {
    instagram: "https://www.instagram.com/mohankambojhotel_murthal/",
    facebook: "https://www.facebook.com/p/Mohan-Kamboj-Dhaba-Hotel-100054339348730/"
  },
  claims: [
    { key: "Pure vegetarian", value: "Pure vegetarian dining", status: "confirmed" },
    { key: "Legacy", value: "Family-run hospitality since 1990", status: "client-supplied" },
    { key: "Rooms", value: "A/C rooms available", status: "client-supplied" },
    { key: "Parking", value: "On-site parking", status: "client-supplied" },
    { key: "EV", value: "EV charging listed at the property", status: "client-supplied" },
    { key: "Hours", value: "Open 24 hours", status: "needs-confirmation" }
  ]
};

export const unresolvedFacts = {
  hours: "Restaurant hours, hotel/front-desk hours, and EV access hours need separate client confirmation.",
  address: "Exact postal address, postcode, coordinates, and canonical Google Maps share URL are still required.",
  rooms: "Room types, room count, tariffs, occupancy, amenities, and policies are not yet confirmed.",
  ev: "EV operator, connector type/count, power, pricing, access rules, and live status link are not confirmed.",
};

export function publicClaims() {
  return business.claims.filter((claim) => claim.status !== "needs-confirmation");
}

export function telHref() {
  return `tel:${business.phoneE164}`;
}

