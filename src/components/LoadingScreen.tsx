import Image from "next/image";
import { business } from "@/data/business";

export function LoadingScreen({ fallback = false }: { fallback?: boolean }) {
  return (
    <div className="page-loading-screen" role="status" aria-label="Loading page" data-route-pending={fallback || undefined}>
      <Image className="loading-screen-background" src="/images/loading-bg.png" alt="" fill preload sizes="100vw" />
      <div className="loading-screen-center">
        <div className="loading-screen-logo">
          <Image src="/images/mk-logo.png" alt={business.name} width={160} height={160} preload />
        </div>
        <span className="loading-screen-spinner" aria-hidden="true" />
        <span className="sr-only">Loading, please wait.</span>
      </div>
    </div>
  );
}
