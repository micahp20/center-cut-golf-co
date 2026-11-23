import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import "./club.css";

export const metadata: Metadata = {
  title: "Center Cut Golf Co | Colorado Mobile Golf Simulator",
  description: "Bring mobile simulator golf to weddings, company events and family parties along Colorado’s Front Range.",
  icons: { icon: "/center-cut/emblem.png" }
};

const pages = ["Experiences", "Packages", "About", "Contact"];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <header className="club-header">
      <Link className="club-brand" href="/">
        <img src="/center-cut/emblem.png" alt="" width="50" height="50" />
        <span>Center Cut Golf Co</span>
      </Link>
      <nav aria-label="Main navigation">{pages.map(page =>
        <Link href={"/" + page.toLowerCase()} key={page}>{page}</Link>
      )}</nav>
      <Link className="book-link" href="/book">Get a quote</Link>
    </header>
    <main>{children}</main>
    <footer><div className="container club-footer">
      <div><strong>Center Cut Golf Co</strong><p>Denver · Boulder · Northern Colorado</p></div>
      <div><a href="mailto:info@centercutgolfco.com">info@centercutgolfco.com</a>
      <p><a href="tel:+17209281208">(720) 928-1208</a></p>
      <p><Link href="/privacy">Privacy policy</Link> · <Link href="/admin">Team login</Link></p></div>
    </div></footer>
  </body></html>;
}
