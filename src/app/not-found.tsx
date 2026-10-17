import Link from "@/components/AppLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Mohan Kamboj Dhaba & Hotel",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <section className="section page-hero section-muted">
      <div className="container">
        <p className="eyebrow">Page not found</p>
        <h1>This stop is not on the route.</h1>
        <p>The page may have moved. Use the links below to continue.</p>
        <div className="button-row">
          <Link className="button button-primary" href="/">Return home</Link>
          <Link className="button button-secondary" href="/contact">Contact the team</Link>
        </div>
      </div>
    </section>
  );
}

