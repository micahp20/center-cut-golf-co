import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golf Simulator Rental Packages in Denver | Center Cut Golf Co.",
  description: "Explore mobile golf simulator rental options for private parties, corporate events, weddings, and tournaments in the Denver area and Northern Colorado.",
  alternates: { canonical: "https://centercutgolfco.com/packages" },
};

export default function Page(){return <><section className="pagehero"><div className="container"><div className="eyebrow">Packages</div><h1>Mobile Golf Simulator Rental Packages</h1><p>Custom quotes based on location, duration, guest count and event requirements.</p></div></section><section className="section container"><div className="grid">{[["Private Gatherings","A great fit for birthdays and smaller celebrations."],["Corporate Experiences","Designed for team events and company celebrations."],["Custom Events","Tailored experiences for weddings, tournaments and fundraisers."]].map(([a,b])=><article className="tile" key={a}><h3>{a}</h3><p>{b}</p><Link href="/book">Get a Custom Quote</Link></article>)}</div><p className="intro">Availability, venue requirements and inclusions are confirmed with each quote.</p></section></>}
