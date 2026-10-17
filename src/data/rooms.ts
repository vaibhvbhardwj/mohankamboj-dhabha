import { image } from "./images";

export type RoomType = {
  id: string;
  name: string;
  summary: string;
  occupancy?: string;
  bedType?: string;
  amenities: string[];
  image: string;
  verificationStatus: "client-supplied" | "needs-confirmation";
};

export const roomTypes: RoomType[] = [
  {
    id: "rooms-at-property",
    name: "Rooms at the property",
    summary: "A/C rooms are available for travellers who want a comfortable pause on NH-44. Exact room types, tariff, occupancy, and policies are confirmed by the team on WhatsApp.",
    amenities: ["Air-conditioned rooms", "Dining close at hand", "NH-44 access", "WhatsApp availability enquiry"],
    image: image("roomBlue").src,
    verificationStatus: "client-supplied"
  }
];

export const roomPoliciesNeedingConfirmation = [
  "Check-in and check-out times",
  "Tariff and tax treatment",
  "ID requirement and accepted documents",
  "Child, extra-bed, visitor, smoking, and cancellation policies",
  "Whether a deposit is required before confirmation"
];

