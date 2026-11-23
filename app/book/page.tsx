import type { Metadata } from "next";
import QuoteForm from "./quote-form";

export const metadata: Metadata = {
  title: "Get a Mobile Golf Simulator Rental Quote | Center Cut Golf Co.",
  description: "Request a custom quote for a mobile golf simulator rental in South Denver, Denver Metro, or Northern Colorado. No payment required.",
  alternates: { canonical: "https://centercutgolfco.com/book" },
};

export default async function Book({
  searchParams,
}: {
  searchParams: Promise<{ event?: string | string[]; city?: string | string[] }> ;
}) {
  const { event, city } = await searchParams;

  return (
    <>
      <section className="pagehero quote-hero">
        <div className="container">
          <h1>Get a Custom Golf Simulator Quote</h1>
          <p>Tell us when and where you’re hosting. We’ll check availability and put together a quote for bringing our mobile golf simulator to your event.</p>
        </div>
      </section>
      <div className="container quote-layout">
        <QuoteForm eventType={typeof event === "string" ? event : undefined} city={typeof city === "string" ? city : undefined} />
        <aside className="quote-help" aria-labelledby="quote-next">
          <h2 id="quote-next">What happens next?</h2>
          <p>We’ll review your date, venue, and guest count, then follow up by email about availability, setup, and pricing.</p>
          <p>No payment is required to request a quote. Your event is confirmed separately.</p>
          <h3>Questions about your venue?</h3>
          <a href="tel:+17209281208">Call (720) 928-1208</a>
          <p>Serving South Denver, Denver Metro, and Northern Colorado.</p>
        </aside>
      </div>
    </>
  );
}
