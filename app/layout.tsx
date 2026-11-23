import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./club.css";
import EventMenu from "./event-menu";
import { locations } from "./locations/catalog";

export const metadata: Metadata = {
  title: "Center Cut Golf Co | Colorado Mobile Golf Simulator",
  description: "Bring mobile simulator golf to weddings, company events and family parties in South Denver, Denver Metro, and Northern Colorado."
};

const pages = ["Packages", "FAQ", "Contact"];
const serviceRegions = [
  {
    "title": "South Denver",
    "cities": [
      "Castle Rock",
      "Parker",
      "Highlands Ranch",
      "Lone Tree",
      "Castle Pines",
      "Centennial",
      "Littleton"
    ]
  },
  {
    "title": "Denver Metro",
    "cities": [
      "Denver",
      "Aurora",
      "Lakewood",
      "Arvada",
      "Golden",
      "Westminster",
      "Thornton",
      "Broomfield",
      "Brighton",
      "Greenwood Village"
    ]
  },
  {
    "title": "Northern Colorado",
    "cities": [
      "Fort Collins",
      "Loveland",
      "Longmont",
      "Boulder",
      "Greeley",
      "Windsor",
      "Erie",
      "Lafayette",
      "Louisville",
      "Berthoud",
      "Johnstown",
      "Wellington"
    ]
  }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const analyticsEnabled = measurementId && /^G-[A-Z0-9]+$/.test(measurementId);

  return <html lang="en"><body>
    <header className="club-header">
      <Link className="club-brand" href="/">
        <img src="/center-cut/emblem.png" alt="" width="50" height="50" />
        <span>Center Cut Golf Co</span>
      </Link>
      <nav aria-label="Main navigation">
        <EventMenu />
        <Link href="/locations">Service Areas</Link>
        {pages.map(page =>
        <Link href={"/" + page.toLowerCase()} key={page}>{page}</Link>
      )}</nav>
      <Link className="book-link" href="/book">Get a quote</Link>
    </header>
    <main>{children}</main>
    <footer>
    <div className="container footer-areas">
      <div className="footer-areas-heading"><h2>Popular Service Areas</h2><Link href="/locations">View all service areas</Link></div>
      <div className="footer-region-grid">
        {serviceRegions.map(region => (
          <section className="footer-region" key={region.title} aria-label={region.title}>
            <h3>{region.title}</h3>
            <ul>
              {region.cities.map(city => {
                const page = locations.find(location => location.city === city);
                return <li key={city}>{page ? <Link href={`/locations/${page.slug}`}>{city}</Link> : <span>{city}</span>}</li>;
              })}
            </ul>
          </section>
        ))}
      </div>
      <p>Mobile golf simulator rentals from Castle Rock to Wellington. Venue suitability and availability are confirmed with each quote.</p>
    </div>
    <div className="container club-footer">
      <div><strong>Center Cut Golf Co</strong><p>South Denver · Denver Metro · Northern Colorado</p></div>
      <div><a href="mailto:info@centercutgolfco.com">info@centercutgolfco.com</a>
      <p><a href="tel:+17209281208">(720) 928-1208</a></p>
      <p><Link href="/locations">Service Areas</Link> · <Link href="/faq">FAQ</Link> · <Link href="/privacy">Privacy policy</Link> · <Link href="/admin">Team login</Link></p></div>
    </div></footer>
    {analyticsEnabled && (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
        <Script id="center-cut-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function () { window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', ${JSON.stringify(measurementId)}, {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}</Script>
      </>
    )}
  </body></html>;
}
