"use client";

import { RouteErrorMessage } from "@/components/RouteErrorMessage";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <RouteErrorMessage onRetry={retry} />;
}

