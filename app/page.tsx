import Link from "next/link";

const occasions = [
  ["Weddings", "Give the wedding party a reason to gather between the ceremony and the first dance."],
  ["Company events", "Pair up colleagues for a friendly challenge at your next team or client event."],
  ["Family parties", "Put first-time golfers and family regulars on the same tee for a birthday or reunion."]
];

export default function Home() {
  return <>
    <section className="opening">
      <div className="opening-copy">
        <p className="location">COLORADO MOBILE GOLF</p>
        <h1>Your party.<br/><em>Our fairway.</em></h1>
        <p className="lead">A golf simulator at your venue, ready for the first swing. Bring your family, your coworkers, or the whole wedding party.</p>
        <Link className="button" href="/book">Check event availability</Link>
      </div>
      <figure className="venue"><img src="/center-cut/simulator.jpg" alt="Center Cut’s enclosed simulator with a putting surface and projected golf course in an event space" /></figure>
    </section>
    <div className="motto">Community <span>•</span> Quality <span>•</span> Good times</div>
    <section className="occasions container"><h2>Who’s on the tee?</h2>
      <div className="occasion-list">{occasions.map(([title, copy]) =>
        <article key={title}><h3>{title}</h3><p>{copy}</p></article>
      )}</div><Link className="text-link" href="/experiences">Explore all event types</Link>
    </section>
    <section className="plan"><div className="container plan-inner"><div>
      <h2>Have a date in mind?</h2><p>Send your date, venue and guest count. We’ll check availability and put together a quote for your event.</p>
    </div><Link href="/book" className="button">Request a quote</Link></div></section>
  </>;
}
