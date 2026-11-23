import type { Metadata } from "next";
import Link from "next/link";
import { eventPhoto, events, siteUrl } from "./catalog";

export const metadata: Metadata = {
  title: "Mobile Golf Simulator Rentals for Denver Events | Center Cut Golf Co.",
  description: "Explore mobile golf simulator rentals for corporate events, parties, weddings, trade shows, and tournaments in the Denver area and Northern Colorado.",
  alternates: { canonical: `${siteUrl}/events` },
};

export default function EventsPage() {
  return (
    <>
      <section className="pagehero event-hero">
        <div className="container">
          <h1>Mobile Golf Simulator Rentals for Events</h1>
          <p>Bring golf to your venue in South Denver, Denver Metro, or Northern Colorado. Explore ideas for your event, then tell us your date and location for a custom quote.</p>
          <Link href="/book" className="button">Get a Custom Quote</Link>
        </div>
      </section>
      <section className="container section" aria-label="Event types">
        <div className="event-cards">
          {events.map(event => (
            <article key={event.slug} className="event-card">
              <img src={eventPhoto(event.slug)} alt={event.alt} width={960} height={640} loading="lazy" decoding="async" />
              <div>
                <h2><Link href={`/events/${event.slug}`}>{event.name}</Link></h2>
                <p>{event.tagline}</p>
                <Link className="text-link" href={`/events/${event.slug}`}>Explore {event.name}</Link>
              </div>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/packages">Explore rental packages</Link>
      </section>
    </>
  );
}
