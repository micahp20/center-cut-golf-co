import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golf Simulator Rental FAQ | Center Cut Golf Co.",
  description: "Answers about mobile golf simulator rental space, setup, power, event staffing, clubs, trade shows, insurance, weather, and custom quotes in Colorado.",
  alternates: { canonical: "https://centercutgolfco.com/faq" },
};

const groups = [
  {
    title: "Space & setup",
    items: [
      ["How much space do you need?", "Space needs depend on the simulator enclosure and your venue. As a preliminary planning example, some event setups use roughly a 15 ft × 15 ft footprint, plus clear space for spectators and a safe swing. Share your available dimensions and we'll confirm whether our setup fits before booking."],
      ["How high does the ceiling need to be?", "A ceiling around 10 feet or higher can be a helpful starting point, but actual clearance depends on the enclosure and the height and swing of guests. We'll confirm the required height and any overhead obstructions for your event."],
      ["What electrical power is required?", "Tell us where the nearest power outlet is located. We’ll confirm electrical requirements and any extension-cord or venue restrictions for your proposed setup before your event."],
      ["Can the simulator be used indoors or outdoors?", "Both types of venues may work depending on access, ground conditions, space, power, and weather. For an outdoor event, we'll discuss a suitable location and a weather contingency."],
      ["How do delivery, load-in, and setup work?", "We’ll coordinate arrival, load-in access, setup, and breakdown with you or your venue. Include loading dock information, stairs, elevators, parking limitations, and any required setup windows in your request."],
    ],
  },
  {
    title: "Guests & experience",
    items: [
      ["Is the simulator beginner-friendly?", "Yes—events can be planned around casual swings and short target challenges so guests with different experience levels can participate. Tell us your audience and we'll discuss a suitable format."],
      ["Are golf clubs provided?", "Club availability, including left-handed and youth options, should be confirmed as part of your quote. Let us know if your group needs specific sizes or orientations."],
      ["Will someone operate the simulator during our event?", "Staffing and attendant coverage depend on the event package. We'll spell out what is included and how participants are supported in your custom quote."],
      ["Can we run a closest-to-the-pin or longest-drive contest?", "We can discuss formats such as closest-to-the-pin challenges, longest-drive contests, and team competitions. Available games, scoring, and leaderboard options depend on the final equipment and event plan."],
      ["What types of events can you serve?", "We plan mobile simulator experiences for weddings, birthdays and private parties, corporate gatherings, trade shows, golf tournaments, and fundraisers. Brand activations and sponsored experiences can be discussed under corporate and trade show bookings."],
    ],
  },
  {
    title: "Trade shows & venues",
    items: [
      ["Can we put a simulator in a trade show booth?", "Potentially. Share booth dimensions, exhibitor rules, power availability, show schedule, and load-in instructions. We'll assess whether the space leaves enough room for a safe swing and visitor traffic."],
      ["Can we add sponsor signage or a branded competition?", "Tell us what you have in mind. Signage placement, contest formats, prize mechanics, and any branding options can be considered with the venue and equipment requirements."],
      ["Are you insured? Can you provide a certificate of insurance (COI)?", "Please contact us with your venue’s liability insurance requirements and any requested COI wording. We’ll confirm current coverage and document availability before making any insurance commitments."],
      ["Does the venue need to approve the setup?", "Some venues require floor plans, proof of insurance, vendor approval, power information, or loading instructions. We recommend checking your venue's requirements early and sending them with your quote request."],
    ],
  },
  {
    title: "Booking & policies",
    items: [
      ["How much does it cost?", "Pricing is quoted for each event based on date, location, rental duration, setup needs, staffing, and requested experience. Request a custom quote with your event details."],
      ["How far in advance should we book?", "Earlier requests give us more flexibility, especially for weekends and large events. Share your date and we'll check availability. A submitted quote request does not reserve the date."],
      ["Do you travel outside Denver?", "Our primary service areas are South Denver, Denver Metro, and Northern Colorado. Send the venue address so we can confirm travel availability and any associated charges."],
      ["What happens if it rains or the event is cancelled?", "Outdoor bookings should include a weather backup plan. Rescheduling, cancellation, deposit, and refund terms will be provided in your written booking agreement; please review those terms before confirming."],
      ["What details should I send for a quote?", "Please include the event date, venue address, event type, approximate guest count, preferred operating hours, indoor or outdoor location, and any known space or venue restrictions."],
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pagehero faq-hero">
        <div className="container">
          <div className="eyebrow">Good to know before you book</div>
          <h1>Frequently Asked Questions</h1>
          <p>From space requirements to event-day details, here’s what to know about bringing Center Cut Golf Co. to your event.</p>
          <Link className="button" href="/book">Get a Custom Quote</Link>
        </div>
      </section>
      <section className="container section faq-layout" aria-label="Frequently asked questions">
        <div className="faq-intro">
          <h2>Everything you need to plan your event</h2>
          <p>Venue requirements and equipment details are confirmed with your quote. Have a different question? <Link href="/contact">Contact our team</Link>.</p>
        </div>
        <div className="faq-groups">
          {groups.map(group => (
            <section className="faq-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.items.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>{question}<span className="faq-plus" aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </section>
          ))}
        </div>
      </section>
      <section className="plan">
        <div className="container plan-inner">
          <div><h2>Ready to bring golf to your event?</h2><p>Tell us your date, location, and guest count. We’ll help you plan the right setup.</p></div>
          <Link href="/book" className="button">Get a Custom Quote</Link>
        </div>
      </section>
    </>
  );
}
