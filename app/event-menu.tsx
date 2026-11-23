"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { events } from "./events/catalog";

export default function EventMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      const target = event.target;
      if (menu.current?.open && target instanceof Node && !menu.current.contains(target)) {
        menu.current.open = false;
      }
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  return (
    <details className="event-menu" ref={menu} onKeyDown={event => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        summary.current?.focus();
      }
    }}>
      <summary ref={summary}>Events</summary>
      <ul className="event-dropdown" aria-label="Explore events">
        <li><Link href="/events">All Events</Link></li>
        <li><Link href="/packages">Golf Simulator Rentals<span>Rental options and what affects your quote</span></Link></li>
        {events.map(event => (
          <li key={event.slug}><Link href={`/events/${event.slug}`}>{event.name}<span>{event.menu}</span></Link></li>
        ))}
      </ul>
    </details>
  );
}
