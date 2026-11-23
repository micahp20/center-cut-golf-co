import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Golf Simulator Rentals in Denver, CO | Center Cut Golf Co.",
  description: "Rent a mobile golf simulator for corporate events, weddings, parties, and tournaments in South Denver, Denver Metro, and Northern Colorado.",
  alternates: { canonical: "https://centercutgolfco.com/" },
};

const occasions = [
  ["Weddings", "/events/weddings", "Give the wedding party a reason to gather between the ceremony and the first dance."],
  ["Corporate Events", "/events/corporate-events", "Pair up colleagues for a friendly challenge at your next team or client event."],
  ["Private Parties", "/events/private-parties", "Put first-time golfers and family regulars on the same tee for a birthday or reunion."]
];

export default function Home() {
  return <>
    <section className="opening">
      <div className="opening-copy">
        <h1 className="rental-title">Mobile Golf<br />Simulator Rentals<br /><em>for Denver Events</em></h1>
        <p className="lead">We bring the simulator to your venue for corporate events, weddings, parties, and tournaments across South Denver, Denver Metro, and Northern Colorado.</p>
        <div className="opening-actions">
          <Link className="button" href="/book">Get a Custom Quote</Link>
          <Link href="/events" className="text-link">Explore Events</Link>
        </div>
      </div>
      <figure className="venue"><img src="/center-cut/simulator.jpg" alt="Center Cut’s enclosed simulator with a putting surface and projected golf course in an event space" /></figure>
    </section>
    <div className="motto">Community <span>•</span> Quality <span>•</span> Good times</div>
    <section className="occasions container"><h2>Golf Simulator Rentals by Event</h2>
      <div className="occasion-list">{occasions.map(([title, href, copy]) =>
        <article key={title}><h3><Link href={href}>{title}</Link></h3><p>{copy}</p></article>
      )}</div><Link className="text-link" href="/events">Explore all event types</Link>
    </section>
    <section className="plan"><div className="container plan-inner"><div>
      <h2>Have a date in mind?</h2><p>Send your date, venue and guest count. We’ll check availability and put together a quote for your event.</p>
    </div><Link href="/book" className="button">Get a Custom Quote</Link></div></section>
  </>;
}
