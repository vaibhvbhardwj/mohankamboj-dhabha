import type { Metadata } from "next";
import { image } from "@/data/images";
import { roomPoliciesNeedingConfirmation, roomTypes } from "@/data/rooms";
import { routeMetadata } from "@/lib/metadata";
import { baseSchemas, JsonLd } from "@/lib/schema";
import { ConfirmationNotice } from "@/components/Notice";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppPlanner } from "@/components/WhatsAppPlanner";

export const metadata: Metadata = routeMetadata("/rooms");

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={baseSchemas("/rooms")} />
      <section className="section page-hero page-hero-editorial dark-section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Stay on NH-44</p>
            <h1>A comfortable pause on NH-44.</h1>
            <p>Clean, air-conditioned rooms, food close at hand and direct highway access. Availability, tariff and terms are confirmed by the team on WhatsApp.</p>
          </div>
          <ResponsiveImage className="portrait-image" src={image("roomBlue").src} alt={image("roomBlue").alt} loading="eager" priority sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Room information" title="Find a room for your journey.">
            <p>Explore our rooms and speak with the team about current availability and rates.</p>
          </SectionHeader>
          {roomTypes.map((room) => (
            <article className="room-card grid-2" key={room.id}>
              <ResponsiveImage src={room.image} alt="Room comfort visual for availability enquiries" />
              <div>
                <h3>{room.name}</h3>
                <p>{room.summary}</p>
                <ul className="feature-list">
                  {room.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
                </ul>
                <ConfirmationNotice />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-muted">
        <div className="container grid-2">
          <div>
            <SectionHeader eyebrow="Policies" title="Confirm before booking.">
              <p>Speak with our team about these details before you arrive.</p>
            </SectionHeader>
            <ul className="feature-list">
              {roomPoliciesNeedingConfirmation.map((policy) => <li key={policy}>{policy}</li>)}
            </ul>
          </div>
          <div className="room-collage compact-collage">
            <ResponsiveImage src={image("roomWarm").src} alt={image("roomWarm").alt} />
            <ResponsiveImage src={image("bathroom").src} alt={image("bathroom").alt} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <WhatsAppPlanner initialIntent="room" />
        </div>
      </section>
    </>
  );
}

