"use client";

export function RouteErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <section className="section page-hero section-muted" data-route-error role="alert">
      <div className="container">
        <p className="eyebrow">Something went wrong</p>
        <h1>Please try the route again.</h1>
        <p>The core contact links remain available in the header and footer.</p>
        <button className="button button-primary" type="button" onClick={onRetry}>Try again</button>
      </div>
    </section>
  );
}
