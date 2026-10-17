"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { usePageLoading } from "@/components/PageLoading";

type AppLinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };

export default function AppLink({ href, onNavigate, ...props }: AppLinkProps) {
  const { startNavigation } = usePageLoading();
  return <NextLink {...props} href={href} onNavigate={(event) => {
    let cancelled = false;
    onNavigate?.({ preventDefault: () => { cancelled = true; event.preventDefault(); } });
    if (!cancelled) startNavigation(href);
  }} />;
}
