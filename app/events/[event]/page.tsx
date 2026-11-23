import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eventPhoto, events, siteUrl } from "../catalog";

type EventPageProps = { params: Promise<{ event: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map(({ slug }) => ({ event: slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { event } = await params;
  const details = events.find(item => item.slug === event);
  if (!details) notFound();

  const title = `${details.title} | Center Cut Golf Co.`;
  const url = `${siteUrl}/events/${details.slug}`;
  return {
    title,
    description: details.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: details.description,
      url,
      type: "website",
      images: [{ url: siteUrl + eventPhoto(details.slug), width: 960, height: 640, alt: details.alt }],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { event } = await params;
  const details = events.find(item => item.slug === event);
  if (!details) notFound();

  const quote = { pathname: "/book", query: { event: details.quoteType } };
  return (
    <>
      <section className="event-feature">
        <div className="container event-feature-inner">
          <div>
            <Link href="/events" className="event-back">All Events</Link>
            <h1>{details.heading}</h1>
            <p className="event-tagline">{details.tagline}</p>
            <Link href={quote} className="button">Get a Custom Quote</Link>
          </div>
          <img src={eventPhoto(details.slug)} alt={details.alt} width={960} height={640} fetchPriority="high" />
        </div>
      </section>
      <section className="container section event-content">
        {details.sections.map(([heading, body]) => (
          <div key={heading}><h2>{heading}</h2><p>{body}</p></div>
        ))}
      </section>
      <section className="plan">
        <div className="container plan-inner">
          <div><h2>Have a date in mind?</h2><p>Send your date and venue for availability and a custom quote. Serving South Denver, Denver Metro, and Northern Colorado.</p></div>
          <Link href={quote} className="button">Get a Custom Quote</Link>
        </div>
      </section>
    </>
  );
}
