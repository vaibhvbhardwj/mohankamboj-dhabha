import { business } from "@/data/business";

export type PlannerIntent = "room" | "group" | "ev" | "general";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function clean(value: string | number | undefined | null) {
  return String(value ?? "").trim();
}

export function line(label: string, value: string | number | undefined | null) {
  const safe = clean(value);
  return safe ? `${label}: ${safe}` : "";
}

export function joinMessage(lines: Array<string | false | null | undefined>) {
  return lines.filter(Boolean).join("\n");
}

export function trackIntent(eventName: string, detail: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
}

