import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, locationBySlug } from "../catalog";
type Props={params:Promise<{city:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return locations.map(loc=>({city:loc.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {city}=await params;const loc=locationBySlug(city);if(!loc)notFound();
 const title=`Mobile Golf Simulator Rental in ${loc.city}, CO | Center Cut Golf Co.`;
 const description=`Plan a mobile golf simulator rental in ${loc.city}, Colorado for ${loc.angle.toLowerCase()}. Check venue requirements and request your custom quote.`;
 const url=`https://centercutgolfco.com/locations/${loc.slug}`;
 return {title,description,alternates:{canonical:url},openGraph:{title,description,url,images:[{url:`https://centercutgolfco.com/center-cut/events/${loc.image}.png`,alt:`Golf simulator event experience for ${loc.city}`}]}}
}
export default async function CityPage({params}:Props){
 const {city}=await params;const loc=locationBySlug(city);if(!loc)notFound();
 const quote={pathname:"/book",query:{city:loc.city}};
 return <><section className="location-feature"><div className="container location-feature-grid"><div><Link className="event-back" href="/locations">All Service Areas</Link><div className="eyebrow">{loc.region}</div><h1>Mobile Golf Simulator Rental in {loc.city}, CO</h1><p className="location-lead">{loc.angle}</p><p>Bring an interactive golf experience to the event you're already planning.</p><Link className="button" href={quote}>Get a {loc.city} Quote</Link></div><img src={`/center-cut/events/${loc.image}.png`} alt={`Example mobile golf simulator setup for ${loc.city} event planning`} width="1024" height="680" fetchPriority="high"/></div></section>
 <section className="container section city-details"><article><h2>Golf entertainment for {loc.city} events</h2><p>{loc.venue}</p><p>{loc.format}</p><p>Explore our <Link href="/events/weddings">wedding experiences</Link>, <Link href="/events/corporate-events">corporate events</Link>, <Link href="/events/private-parties">birthdays and private parties</Link>, <Link href="/events/conferences-trade-shows">trade shows</Link>, and <Link href="/events/tournaments-fundraisers">tournaments and fundraisers</Link>.</p></article><article><h2>Planning a setup in {loc.city}</h2><p>{loc.planning}</p><p>Space requirements, power, access, and event staffing depend on the final setup. Read our <Link href="/faq">FAQ</Link> for questions to ask your venue.</p></article><article className="city-faq"><h2>{loc.city} event FAQ</h2><h3>{loc.faq}</h3><p>{loc.answer}</p></article></section>
 <section className="plan"><div className="container plan-inner"><div><h2>Get a quote in {loc.city}</h2><p>Share your date, venue, and guest count. We'll review availability, setup requirements, and any travel terms before confirming your event.</p></div><Link className="button" href={quote}>Get My Event Quote</Link></div></section></>;
}
