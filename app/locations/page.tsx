import Link from "next/link";
import type { Metadata } from "next";
import { locations } from "./catalog";
export const metadata:Metadata = {
  title:"Colorado Mobile Golf Simulator Rental Service Areas | Center Cut Golf Co.",
  description:"Explore mobile golf simulator rental service areas from Castle Rock to Wellington, including Denver Metro, Boulder County, and Northern Colorado.",
  alternates:{canonical:"https://centercutgolfco.com/locations"}
};
const regions=["South Metro","Denver Metro","West Metro","East Metro","Northwest Metro","Boulder County","Northern Front Range","Northern Service Boundary"];
export default function LocationsPage(){
 return <><section className="pagehero locations-hero"><div className="container"><div className="eyebrow">Our service area</div><h1>We bring the golf to you.</h1><p>Mobile golf simulator experiences across the Denver region and Northern Colorado — from Castle Rock to Wellington. Find your city and plan your event.</p><Link className="button" href="/book">Get a Custom Quote</Link></div></section>
 <section className="container section"><div className="location-intro"><h2>Where we bring the simulator</h2><p>Explore our location guides for venue planning, event ideas, and local quote requests. The exact venue, equipment needs, travel terms, and availability are confirmed before booking.</p></div><div className="location-grid">{locations.map(loc=><article className="location-card" key={loc.slug}><img src={`/center-cut/events/${loc.image}.png`} alt={`Example of mobile golf simulator entertainment for ${loc.city} events`} loading="lazy"/><div><span className="location-region">{loc.region}</span><h2><Link href={`/locations/${loc.slug}`}>{loc.city}, Colorado</Link></h2><p>{loc.angle}</p><Link className="text-link" href={`/locations/${loc.slug}`}>Explore {loc.city}</Link></div></article>)}</div></section>
 <section className="plan"><div className="container plan-inner"><div><h2>Don't see your venue?</h2><p>Our current planned coverage runs from Castle Rock to Wellington. Send your location for a travel and setup review.</p></div><Link className="button" href="/book">Request a Quote</Link></div></section></>;
}
