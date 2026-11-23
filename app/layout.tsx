import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./club.css";
import EventMenu from "./event-menu";

export const metadata: Metadata = {
  title: "Center Cut Golf Co | Colorado Mobile Golf Simulator",
  description: "Bring mobile simulator golf to weddings, company events and family parties in South Denver, Denver Metro, and Northern Colorado."
};

const pages = ["Packages", "About", "Contact"];

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
        {pages.map(page =>
        <Link href={"/" + page.toLowerCase()} key={page}>{page}</Link>
      )}</nav>
      <Link className="book-link" href="/book">Get a quote</Link>
    </header>
    <main>{children}</main>
    <footer><div className="container club-footer">
      <div><strong>Center Cut Golf Co</strong><p>South Denver · Denver Metro · Northern Colorado</p></div>
      <div><a href="mailto:info@centercutgolfco.com">info@centercutgolfco.com</a>
      <p><a href="tel:+17209281208">(720) 928-1208</a></p>
      <p><Link href="/privacy">Privacy policy</Link> · <Link href="/admin">Team login</Link></p></div>
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
