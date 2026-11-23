export const siteUrl = "https://centercutgolfco.com";

export const events = [
  {
    slug: "corporate-events",
    name: "Corporate Events",
    menu: "Team outings, company parties, and client entertainment",
    title: "Corporate Golf Simulator Rental in Denver",
    heading: "Mobile Golf Simulator for Corporate Events",
    description: "Bring a mobile golf simulator to your Denver-area team outing, company party, or client event. Request availability and a custom quote.",
    tagline: "Give coworkers and clients something fun to do together.",
    alt: "Colleagues talking around a standing table at a corporate reception",
    quoteType: "Corporate",
    sections: [
      ["Build an activity into your company event", "Set up a closest-to-the-pin challenge for a team outing or let guests rotate through a few swings during a client reception. Short turns give first-time golfers an easy way to join and keep the activity moving while people mingle."],
      ["Tell us how the day is scheduled", "Share your office or event venue, headcount, and when you want the simulator running. We can discuss where to put it, how guests will take turns, and how it fits around meals, remarks, or other activities."],
    ],
  },
  {
    slug: "weddings",
    name: "Weddings",
    menu: "Cocktail hours, receptions, and wedding weekends",
    title: "Wedding Golf Simulator Rental in Colorado",
    heading: "Mobile Golf Simulator for Weddings",
    description: "Add a mobile golf simulator to your Colorado wedding reception or welcome party in the Denver area or Northern Colorado. Get a custom quote.",
    tagline: "Give guests a first swing before the first dance.",
    alt: "Wedding reception tables with flowers and wooden chairs under a covered pavilion",
    quoteType: "Wedding",
    sections: [
      ["Make cocktail hour more interactive", "Guests can take turns while the wedding party is taking photos or drop in during the reception. A few practice shots or a quick challenge give families and friends of different skill levels an activity they can share."],
      ["Coordinate with your venue and planner", "Send your wedding date, venue, guest count, and reception schedule. If you have an indoor location and an outdoor option, tell us about both so we can discuss the best fit and a weather backup."],
    ],
  },
  {
    slug: "private-parties",
    name: "Private Parties",
    menu: "Birthdays, backyard parties, and family get-togethers",
    title: "Golf Simulator Rental for Parties in Denver",
    heading: "Mobile Golf Simulator for Parties",
    description: "Rent a mobile golf simulator for a Denver-area birthday, backyard party, or family get-together. Share your date and venue for a custom quote.",
    tagline: "Make the backyard the place everyone wants to play.",
    alt: "Family celebrating a birthday on the lawn beside a house",
    quoteType: "Private Party",
    sections: [
      ["Give your guests something to play", "A simulator gives a birthday party, reunion, or weekend get-together an activity guests can drop into throughout the event. Keep it casual with practice swings, or give the competitive guests a quick target challenge."],
      ["Check the space before the party", "Tell us if the party is at home, a clubhouse, or a rented venue. A photo of the proposed setup area or a rough idea of the available floor space and overhead clearance helps us discuss how it can fit."],
    ],
  },
  {
    slug: "conferences-trade-shows",
    name: "Conferences & Trade Shows",
    menu: "Exhibitor booths, conference breaks, and receptions",
    title: "Trade Show Golf Simulator Rental in Denver",
    heading: "Golf Simulator for Conferences & Trade Shows",
    description: "Plan a mobile golf simulator for a Denver trade show booth, conference break, or exhibitor reception. Request a quote and discuss venue requirements.",
    tagline: "Give attendees a reason to stop at your booth.",
    alt: "Attendees moving through a busy convention exhibition hall",
    quoteType: "Corporate",
    sections: [
      ["Keep it easy to join between sessions", "A short target challenge can give visitors an opener for a conversation with your team. For conferences, consider a designated activity area during breaks or an evening networking reception, when attendees have more room to stop and play."],
      ["Check the floor plan and exhibitor rules", "Send the event schedule, booth or activity-area dimensions, and any venue rules about load-in, power, and queuing. That information helps us assess where the simulator could go and whether there is room for spectators and waiting guests."],
    ],
  },
  {
    slug: "brand-activations",
    name: "Brand Activations",
    menu: "Pop-ups, product launches, and sponsor events",
    title: "Mobile Golf Simulator Brand Activations in Denver",
    heading: "Mobile Golf Simulator for Brand Activations",
    description: "Use a mobile golf simulator as an interactive attraction for a Denver-area product launch, pop-up, or sponsor event. Ask about event options.",
    tagline: "Get people involved with a challenge they’ll talk about.",
    alt: "Visitors interacting with an exhibit team at a display counter",
    quoteType: "Other",
    sections: [
      ["Give visitors an activity to join", "At a product launch, pop-up, or sponsor event, a few swings can start a conversation and give visitors something to do while they explore. Consider a rolling target challenge, a timed contest, or a casual try-it station depending on how people will move through the space."],
      ["Share your activation goals", "Tell us who will attend, how long they are likely to stay, and how the simulator fits with your display or event program. Include any signage requests, prize mechanics, and venue restrictions so we can discuss what is feasible before quoting."],
    ],
  },
  {
    slug: "tournaments-fundraisers",
    name: "Tournaments & Fundraisers",
    menu: "Charity golf events, sponsor activities, and skills contests",
    title: "Golf Simulator Rentals for Tournaments & Fundraisers",
    heading: "Golf Simulator for Tournaments & Fundraisers",
    description: "Add a skills contest or sponsor activity to a golf tournament or fundraiser in Denver or Northern Colorado. Request a mobile simulator quote.",
    tagline: "Add a contest that keeps guests playing between tee times.",
    alt: "Golfers playing on a course with open fairways and trees",
    quoteType: "Golf Tournament",
    sections: [
      ["Add a side event to your schedule", "Use the simulator as a warm-up during check-in, a sponsor station near the clubhouse, or an activity during the post-round reception. A closest-to-the-pin challenge gives guests a quick contest they can join between other parts of the event."],
      ["Plan the format and location", "Share the tournament schedule, expected traffic, and whether the station will be indoors or outside. If it’s for a fundraiser, tell us your goals and how you’d like the contest or sponsor activity to fit into the event."],
    ],
  },
];

export function eventPhoto(slug: string) {
  return `/center-cut/events/${slug}.webp`;
}
