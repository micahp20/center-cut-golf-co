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
  ["Birthdays & Private Parties", "/events/private-parties", "Put first-time golfers and family regulars on the same tee for a birthday or reunion."]
];

const rentalOptions = [
  {
    title: "Private Gatherings",
    description: "Give guests something to play between the food, photos, and festivities.",
    occasions: "Birthdays, reunions, and backyard parties",
    action: "Get a Party Quote",
    href: "/book?event=Private%20Party",
  },
  {
    title: "Corporate Experiences",
    description: "Give coworkers and clients an easy way to mingle over a friendly golf challenge.",
    occasions: "Team outings, client events, and company celebrations",
    action: "Get a Corporate Quote",
    href: "/book?event=Corporate",
  },
  {
    title: "Custom Events",
    description: "Tell us what you’re planning and we’ll put together a quote around your event.",
    occasions: "Weddings, tournaments, and fundraisers",
    action: "Request a Custom Quote",
    href: "/book",
  },
];

export default function Home() {
  return <>
    <section className="opening">
      <div className="opening-copy">
        <h1 className="rental-title">Mobile Golf<br />Simulator Rentals<br /><em>for Denver Events</em></h1>
        <p className="lead">We bring the simulator to your venue for corporate events, weddings, parties, and tournaments across South Denver, Denver Metro, and Northern Colorado.</p>
        <div className="opening-actions">
          <Link className="button home-quote-button" href="/book">Get My Event Quote</Link>
          <a href="#rental-options" className="text-link">Compare Rental Options</a>
        </div>
        <p className="home-quote-note">No payment required to request a quote.</p>
      </div>
      <figure className="venue"><img src="/center-cut/simulator.jpg" alt="Center Cut’s enclosed simulator with a putting surface and projected golf course in an event space" /></figure>
    </section>
    <div className="motto">Community <span>•</span> Quality <span>•</span> Good times</div>
    <section className="home-rentals" id="rental-options" aria-labelledby="home-rentals-title">
      <div className="container">
        <div className="home-rentals-intro">
          <h2 id="home-rentals-title">Find the right fit for your event</h2>
          <p>Tell us your date, location, and guest count. We’ll check availability and quote your mobile golf simulator rental.</p>
        </div>
        <div className="home-rentals-grid">
          {rentalOptions.map(({ title, description, occasions, action, href }) => (
            <article className="home-rental" key={title}>
              <h3>{title}</h3>
              <p className="home-rental-occasions">{occasions}</p>
              <p>{description}</p>
              <Link className="home-rental-link" href={href}>{action}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="occasions container"><h2>Golf Simulator Rentals by Event</h2>
      <div className="occasion-list">{occasions.map(([title, href, copy]) =>
        <article key={title}><h3><Link href={href}>{title}</Link></h3><p>{copy}</p></article>
      )}</div><Link className="text-link" href="/events">Explore all event types</Link>
    </section>
    <section className="plan"><div className="container plan-inner"><div>
      <h2>Have a date in mind?</h2><p>Send your date, venue and guest count. We’ll check availability and put together a quote for your event.</p>
    </div><Link href="/book" className="button home-quote-button">Get My Event Quote</Link></div></section>
  </>;
}
