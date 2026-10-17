"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { menuCategories, menuItems } from "@/data/menu";
import { trackIntent } from "@/lib/whatsapp";

const rupees = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function MenuExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [filtersInView, setFiltersInView] = useState(false);
  const panelRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollStyles = useRef<{ overflow: string; paddingRight: string } | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return menuItems.filter((item) => {
      const categoryName = menuCategories.find((entry) => entry.id === item.categoryId)?.name ?? "";
      return (category === "all" || item.categoryId === category)
        && (!normalized || `${item.name} ${item.description ?? ""} ${categoryName}`.toLowerCase().includes(normalized));
    });
  }, [query, category]);
  const activeCategory = menuCategories.find((item) => item.id === category);

  const restoreScroll = useCallback(() => {
    if (!scrollStyles.current) return;
    document.body.style.overflow = scrollStyles.current.overflow;
    document.body.style.paddingRight = scrollStyles.current.paddingRight;
    scrollStyles.current = null;
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    return () => { panel?.close(); restoreScroll(); };
  }, [restoreScroll]);

  useEffect(() => {
    const catalog = document.getElementById("menu-catalog");
    if (!catalog) return;
    let observer: IntersectionObserver;
    function observeNotchPosition() {
      observer?.disconnect();
      // Show the notch beside the catalog, without covering the hero or footer.
      const top = window.innerHeight * .45;
      const bottom = window.innerHeight - top - 76;
      observer = new IntersectionObserver(([entry]) => setFiltersInView(entry.isIntersecting), {
        rootMargin: `-${top}px 0px -${Math.max(0, bottom)}px 0px`
      });
      observer.observe(catalog!);
    }
    observeNotchPosition();
    window.addEventListener("resize", observeNotchPosition);
    return () => { observer.disconnect(); window.removeEventListener("resize", observeNotchPosition); };
  }, []);

  function openFilters() {
    if (!panelRef.current || panelRef.current.open) return;
    scrollStyles.current = { overflow: document.body.style.overflow, paddingRight: document.body.style.paddingRight };
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbar > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbar}px`;
    document.body.style.overflow = "hidden";
    panelRef.current.showModal();
    closeRef.current?.focus();
    setOpen(true);
  }

  function closeFilters(showResults = false) {
    panelRef.current?.close();
    if (showResults) requestAnimationFrame(() => document.getElementById("menu-catalog")?.scrollIntoView({ behavior: "smooth" }));
  }

  function chooseCategory(id: string) {
    setCategory(id);
    trackIntent("menu_view", { category: id });
    closeFilters(true);
  }

  function reset() { setQuery(""); setCategory("all"); }

  function trapFocus(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>("button, input");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  }

  return (
    <div className="menu-explorer">
      <button ref={triggerRef} className="menu-filter-notch" type="button" aria-label="Open menu filters"
        aria-hidden={!filtersInView} inert={!filtersInView}
        aria-haspopup="dialog" aria-expanded={open} aria-controls="menu-filter-panel" onClick={openFilters}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>Filters</span>
      </button>

      <dialog ref={panelRef} id="menu-filter-panel" className="menu-filter-panel" aria-labelledby="menu-filter-title"
        onKeyDown={trapFocus} onCancel={(event) => { event.preventDefault(); closeFilters(); }}
        onClose={() => { restoreScroll(); setOpen(false); triggerRef.current?.focus({ preventScroll: true }); }}
        onClick={(event) => { if (event.target === event.currentTarget && event.clientX > event.currentTarget.getBoundingClientRect().right) closeFilters(); }}>
        <div className="menu-filter-head">
          <div><p className="eyebrow">Explore the menu</p><h2 id="menu-filter-title">Find your favourites.</h2></div>
          <button ref={closeRef} className="mobile-menu-close" type="button" onClick={() => closeFilters()} aria-label="Close menu filters"><span aria-hidden="true" /></button>
        </div>
        <label className="menu-filter-search">
          Search dishes
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try paneer, parantha, chai…" />
        </label>
        <nav className="menu-filter-categories" aria-label="Menu categories">
          <button type="button" aria-pressed={category === "all"} onClick={() => chooseCategory("all")}>
            <span>All dishes</span><small>{menuItems.length}</small>
          </button>
          {menuCategories.map((item) => (
            <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => chooseCategory(item.id)}>
              <span>{item.name}</span><small>{menuItems.filter((dish) => dish.categoryId === item.id).length}</small>
            </button>
          ))}
        </nav>
        <div className="menu-filter-bottom">
          <button className="button button-primary" type="button" onClick={() => closeFilters(true)}>Show {filtered.length} dishes</button>
          <button className="menu-reset" type="button" onClick={reset}>Clear filters</button>
        </div>
      </dialog>

      <div className="menu-results-bar">
        <div><p className="eyebrow">Fresh from our kitchen</p><h2>{activeCategory?.name ?? "The menu"}</h2></div>
        <div className="menu-results-summary">
          <p role="status">{filtered.length} {filtered.length === 1 ? "dish" : "dishes"}{query.trim() ? ` matching “${query.trim()}”` : " to explore"}</p>
          {query || category !== "all" ? <button className="menu-reset" type="button" onClick={reset}>Clear filters</button> : null}
        </div>
      </div>

      <div className="menu-category-list">
        {menuCategories.map((entry, index) => {
          const dishes = filtered.filter((item) => item.categoryId === entry.id);
          if (!dishes.length) return null;
          return (
            <section className="menu-category-section" key={entry.id} aria-labelledby={`category-${entry.id}`}>
              <div className="menu-category-heading">
                <span className="menu-category-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 id={`category-${entry.id}`}>{entry.name}</h3><p>{entry.description}</p></div>
              </div>
              <ul className="menu-dishes">
                {dishes.map((item) => (
                  <li className="menu-dish" key={item.id}>
                    <div className="menu-dish-top"><h4>{item.name}</h4><span className="menu-dish-rule" aria-hidden="true" /><strong>{item.price !== undefined ? rupees.format(item.price) : "At the dhaba"}</strong></div>
                    {item.description ? <p>{item.description}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
        {!filtered.length ? <div className="empty-state"><h3>No dishes found.</h3><p>Try another search or category.</p><button className="button button-secondary" type="button" onClick={reset}>Show all dishes</button></div> : null}
      </div>
    </div>
  );
}
