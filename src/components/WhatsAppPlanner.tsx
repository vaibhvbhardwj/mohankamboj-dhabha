"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { business, telHref } from "@/data/business";
import { roomTypes } from "@/data/rooms";
import { buildWhatsAppUrl, clean, joinMessage, line, trackIntent, type PlannerIntent } from "@/lib/whatsapp";
import { ConfirmationNotice } from "./Notice";

type PlannerProps = {
  initialIntent?: PlannerIntent;
};

const intentLabels: Record<PlannerIntent, string> = {
  room: "Room availability",
  group: "Group enquiry",
  ev: "EV charging question",
  general: "General enquiry"
};

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function WhatsAppPlanner({ initialIntent = "general" }: PlannerProps) {
  const pathname = usePathname();
  const [intent, setIntent] = useState<PlannerIntent>(initialIntent);
  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [fields, setFields] = useState<Record<string, string>>({
    name: "",
    date: "",
    time: "",
    service: "Event / gathering enquiry",
    notes: "",
    checkIn: "",
    checkOut: "",
    arrivalTime: "",
    rooms: "1",
    adults: "2",
    children: "0",
    roomType: roomTypes[0]?.name ?? "Rooms at the property",
    vehicleNote: "",
    groupSize: "",
    purpose: "",
    vehicleCount: "",
    topic: "",
    vehicleModel: ""
  });

  function update(name: string, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors([]);
    setCopied(false);
  }

  const message = useMemo(() => buildMessage(intent, fields), [intent, fields]);

  function validate() {
    const nextErrors: string[] = [];
    if (!clean(fields.name)) nextErrors.push("Please enter your name.");
    if (intent === "room") {
      if (!clean(fields.checkIn)) nextErrors.push("Please choose a check-in date.");
      if (!clean(fields.checkOut)) nextErrors.push("Please choose a check-out date.");
      if (fields.checkIn && fields.checkOut && fields.checkOut <= fields.checkIn) {
        nextErrors.push("Check-out date must be after check-in date.");
      }
    }
    if (intent === "group") {
      if (!clean(fields.date)) nextErrors.push("Please choose a group visit date.");
      if (!clean(fields.groupSize)) nextErrors.push("Please add the group size.");
    }
    if (intent === "ev") {
      if (!clean(fields.date)) nextErrors.push("Please choose your expected visit date.");
      if (!clean(fields.time)) nextErrors.push("Please add your expected arrival time.");
    }
    if (intent === "general" && !clean(fields.topic)) nextErrors.push("Please add the topic you need help with.");
    setErrors(nextErrors);
    return nextErrors.length === 0;
  }

  function openWhatsApp() {
    if (!validate()) return;
    trackIntent("whatsapp_enquiry_submit", { intent, page: pathname });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  async function copyMessage() {
    if (!validate()) return;
    await navigator.clipboard.writeText(message);
    setCopied(true);
  }

  return (
    <section className="planner" aria-labelledby="planner-title">
      <div className="section-header">
        <p className="eyebrow">WhatsApp planner</p>
        <h2 id="planner-title">Send the team a clear enquiry</h2>
        <div className="section-copy">
          <p>Your details stay in this browser until you choose to open WhatsApp. No payment, account, or booking is created here.</p>
        </div>
      </div>

      <div className="segmented" role="group" aria-label="Enquiry type">
        {(Object.keys(intentLabels) as PlannerIntent[]).map((key) => (
          <button key={key} type="button" aria-pressed={intent === key} className={intent === key ? "active" : ""} onClick={() => setIntent(key)}>
            {intentLabels[key]}
          </button>
        ))}
      </div>

      {errors.length ? (
        <div className="error-summary" role="alert">
          <strong>Please check:</strong>
          <ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul>
        </div>
      ) : null}

      <div className="planner-grid">
        <label>
          Name
          <input value={fields.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
        </label>

        {intent === "room" ? (
          <>
            <label>Check-in<input type="date" min={todayIso()} value={fields.checkIn} onChange={(event) => update("checkIn", event.target.value)} /></label>
            <label>Check-out<input type="date" min={fields.checkIn || todayIso()} value={fields.checkOut} onChange={(event) => update("checkOut", event.target.value)} /></label>
            <label>Arrival time<input type="time" value={fields.arrivalTime} onChange={(event) => update("arrivalTime", event.target.value)} /></label>
            <label>Rooms<input inputMode="numeric" value={fields.rooms} onChange={(event) => update("rooms", event.target.value)} /></label>
            <label>Adults<input inputMode="numeric" value={fields.adults} onChange={(event) => update("adults", event.target.value)} /></label>
            <label>Children<input inputMode="numeric" value={fields.children} onChange={(event) => update("children", event.target.value)} /></label>
            <label>Room preference
              <select value={fields.roomType} onChange={(event) => update("roomType", event.target.value)}>
                {roomTypes.map((room) => <option key={room.id}>{room.name}</option>)}
              </select>
            </label>
            <label>Vehicle / EV note<input value={fields.vehicleNote} onChange={(event) => update("vehicleNote", event.target.value)} /></label>
          </>
        ) : null}

        {intent === "group" ? (
          <>
            <label>Date<input type="date" min={todayIso()} value={fields.date} onChange={(event) => update("date", event.target.value)} /></label>
            <label>Approximate time<input type="time" value={fields.time} onChange={(event) => update("time", event.target.value)} /></label>
            <label>Group size<input inputMode="numeric" value={fields.groupSize} onChange={(event) => update("groupSize", event.target.value)} /></label>
            <label>Purpose<input value={fields.purpose} onChange={(event) => update("purpose", event.target.value)} /></label>
            <label>Dining / rooms needed<input value={fields.service} onChange={(event) => update("service", event.target.value)} /></label>
            <label>Vehicle count<input inputMode="numeric" value={fields.vehicleCount} onChange={(event) => update("vehicleCount", event.target.value)} /></label>
          </>
        ) : null}

        {intent === "ev" ? (
          <>
            <label>Date<input type="date" min={todayIso()} value={fields.date} onChange={(event) => update("date", event.target.value)} /></label>
            <label>Expected arrival time<input type="time" value={fields.time} onChange={(event) => update("time", event.target.value)} /></label>
            <label>Vehicle model<input value={fields.vehicleModel} onChange={(event) => update("vehicleModel", event.target.value)} /></label>
          </>
        ) : null}

        {intent === "general" ? (
          <label>Topic<input value={fields.topic} onChange={(event) => update("topic", event.target.value)} /></label>
        ) : null}

        <label className="full-span">
          Additional request
          <textarea value={fields.notes} onChange={(event) => update("notes", event.target.value)} rows={4} />
        </label>
      </div>

      <div className="message-preview" aria-live="polite">
        <h3>Message preview</h3>
        <pre>{message}</pre>
      </div>

      <ConfirmationNotice compact />
      <div className="planner-actions">
        <button className="button button-primary" type="button" onClick={openWhatsApp}>Open WhatsApp</button>
        <button className="button button-secondary" type="button" onClick={copyMessage}>{copied ? "Message copied" : "Copy message"}</button>
        <a className="button button-text" href={telHref()}>Call instead</a>
      </div>
    </section>
  );
}

function buildMessage(intent: PlannerIntent, fields: Record<string, string>) {
  if (intent === "room") {
    return joinMessage([
      `Namaste ${business.name},`,
      "",
      "I would like to check room availability:",
      line("Name", fields.name),
      line("Check-in", fields.checkIn),
      line("Check-out", fields.checkOut),
      line("Arrival time", fields.arrivalTime),
      line("Rooms", fields.rooms),
      `Guests: ${clean(fields.adults) || "0"} adults, ${clean(fields.children) || "0"} children`,
      line("Room preference", fields.roomType),
      line("Vehicle/EV note", fields.vehicleNote),
      line("Other request", fields.notes),
      "",
      "Please share availability, final tariff and booking terms. I understand this message is an enquiry until your team confirms it."
    ]);
  }
  if (intent === "group") {
    return joinMessage([
      `Namaste ${business.name},`,
      "",
      "I would like to enquire about a group visit:",
      line("Name", fields.name),
      line("Date", fields.date),
      line("Time", fields.time),
      line("Group size", fields.groupSize),
      line("Purpose", fields.purpose),
      line("Dining/rooms needed", fields.service),
      line("Vehicle count", fields.vehicleCount),
      line("Notes", fields.notes),
      "",
      "Please confirm arrangements, availability and current pricing."
    ]);
  }
  if (intent === "ev") {
    return joinMessage([
      `Namaste ${business.name},`,
      "",
      "I plan to visit and want to check EV charging:",
      line("Name", fields.name),
      line("Date", fields.date),
      line("Time", fields.time),
      line("Vehicle model", fields.vehicleModel),
      line("Notes", fields.notes),
      "",
      "Please confirm whether EV charging is currently operational and suitable for my vehicle."
    ]);
  }
  return joinMessage([
    `Namaste ${business.name},`,
    "",
    "I found you through the website. I would like help with:",
    line("Name", fields.name),
    line("Topic", fields.topic),
    line("Notes", fields.notes)
  ]);
}

