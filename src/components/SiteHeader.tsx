"use client";

import Link from "@/components/AppLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { navItems } from "@/data/navigation";
import { buildWhatsAppUrl, trackIntent } from "@/lib/whatsapp";
import { useHeroVisibility } from "@/components/SiteChrome";
import { SocialLinks, WhatsAppIcon } from "@/components/SocialIcons";

function WhatsAppLink({ href, pathname }: { href: string; pathname: string }) {
  return (
    <a className="header-social-link header-whatsapp" href={href} target="_blank" rel="noopener noreferrer"
      aria-label="Chat with Mohan Kamboj on WhatsApp" title="WhatsApp"
      onClick={() => trackIntent("whatsapp_intent_open", { intent: "general", page: pathname })}>
      <WhatsAppIcon />
    </a>
  );
}

function NavigationLinks({ pathname, placement, onNavigate }: {
  pathname: string;
  placement: string;
  onNavigate?: () => void;
}) {
  const activePath = pathname.replace(/\/$/, "") || "/";
  return (
    <>
      {[{ href: "/", label: "Home" }, ...navItems].map((item) => (
        <Link key={item.href} href={item.href} aria-current={activePath === item.href || (item.href === "/menu" && activePath === "/dining") ? "page" : undefined} onClick={onNavigate}>
          {item.label}
        </Link>
      ))}
      <a className={placement === "header" ? "nav-direction" : undefined} href={business.mapUrl} target="_blank" rel="noopener noreferrer" onClick={() => {
        onNavigate?.();
        trackIntent("directions_click", { page: pathname, placement });
      }}>
        Directions
      </a>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const heroInView = useHeroVisibility();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const scrollStylesRef = useRef<{ overflow: string; paddingRight: string } | null>(null);
  const whatsAppHref = buildWhatsAppUrl(`Namaste, I found ${business.name} through the website. I would like help with:`);

  const restoreScroll = useCallback(() => {
    if (!scrollStylesRef.current) return;
    document.body.style.overflow = scrollStylesRef.current.overflow;
    document.body.style.paddingRight = scrollStylesRef.current.paddingRight;
    scrollStylesRef.current = null;
  }, []);

  useEffect(() => {
    const dialog = menuRef.current;
    const desktop = window.matchMedia("(min-width: 921px)");
    const closeOnDesktop = () => {
      if (desktop.matches && dialog?.open) dialog.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      dialog?.close();
      restoreScroll();
    };
  }, [restoreScroll]);

  function openMenu(trigger: HTMLButtonElement) {
    const dialog = menuRef.current;
    if (!dialog || dialog.open) return;
    triggerRef.current = trigger;
    scrollStylesRef.current = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeRef.current?.focus();
    setOpen(true);
  }

  function closeMenu() {
    menuRef.current?.close();
  }

  function handleClose() {
    restoreScroll();
    setOpen(false);
    if (triggerRef.current?.isConnected) triggerRef.current.focus({ preventScroll: true });
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  function menuToggle(hero = false) {
    return (
      <button className={`menu-toggle${hero ? " hero-menu-toggle" : ""}`} type="button"
        aria-label="Open navigation menu" aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-navigation"
        onClick={(event) => openMenu(event.currentTarget)}>
        <span aria-hidden="true" />
      </button>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="hero-navigation" aria-hidden={!heroInView} inert={!heroInView}>
        <nav className="hero-nav-links" aria-label="Hero navigation">
          <NavigationLinks pathname={pathname} placement="hero_navigation" />
        </nav>
        {menuToggle(true)}
      </div>
      <header className="site-header" aria-hidden={heroInView} inert={heroInView}>
        <div className="header-inner">
          <Link href="/" className="brand" aria-label={`${business.name} home`}>
            <Image className="brand-logo" src="/images/mk-logo.png" alt="" width={48} height={48} />
            <span><strong>Mohan Kamboj</strong><small>Dhaba &amp; Hotel</small></span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <NavigationLinks pathname={pathname} placement="header" />
          </nav>
          <div className="header-connect" role="group" aria-label="Connect with us">
            <SocialLinks variant="header" />
            <WhatsAppLink href={whatsAppHref} pathname={pathname} />
          </div>
          {menuToggle()}
        </div>
      </header>
      <dialog ref={menuRef} id="mobile-navigation" className="mobile-navigation" aria-label="Site navigation"
        onClose={handleClose} onKeyDown={handleMenuKeyDown} onCancel={(event) => { event.preventDefault(); closeMenu(); }}>
        <div className="mobile-navigation-top">
          <button ref={closeRef} className="mobile-menu-close" type="button" onClick={closeMenu} aria-label="Close navigation menu">
            <span aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-navigation-links" aria-label="Mobile navigation">
          <NavigationLinks pathname={pathname} placement="mobile_menu" onNavigate={closeMenu} />
        </nav>
        <div className="mobile-nav-socials">
          <span className="mobile-social-heading">Connect with us</span>
          <div className="mobile-social-icons" role="group" aria-label="Social media and WhatsApp">
            <SocialLinks variant="header" />
            <WhatsAppLink href={whatsAppHref} pathname={pathname} />
          </div>
        </div>
      </dialog>
    </>
  );
}

