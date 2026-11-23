export const siteUrl = "https://centercutgolfco.com";

export const events = [
  {
    slug: "corporate-events",
    name: "Corporate Events",
    menu: "Team outings, company parties, and client entertainment",
    title: "Corporate Golf Simulator Rental in Denver",
    heading: "Mobile Golf Simulator for Corporate Events",
    description: "Bring a mobile golf simulator to your Denver-area team outing, company party, brand activation, or client event. Request availability and a custom quote.",
    tagline: "Give coworkers and clients something fun to do together.",
    alt: "Corporate guests enjoying a golf simulator at an elegant company reception",
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
    alt: "Bridesmaid swinging at a golf simulator as the wedding party cheers at an indoor reception",
    quoteType: "Wedding",
    sections: [
      ["Make cocktail hour more interactive", "Guests can take turns while the wedding party is taking photos or drop in during the reception. A few practice shots or a quick challenge give families and friends of different skill levels an activity they can share."],
      ["Coordinate with your venue and planner", "Send your wedding date, venue, guest count, and reception schedule. If you have an indoor location and an outdoor option, tell us about both so we can discuss the best fit and a weather backup."],
    ],
  },
  {
    slug: "private-parties",
    name: "Birthdays & Private Parties",
    menu: "Birthdays, backyard parties, and family get-togethers",
    title: "Golf Simulator Rental for Parties in Denver",
    heading: "Mobile Golf Simulator for Parties",
    description: "Rent a mobile golf simulator for a Denver-area birthday, backyard party, or family get-together. Share your date and venue for a custom quote.",
    tagline: "Make the backyard the place everyone wants to play.",
    alt: "Guests celebrating a backyard birthday with balloons, cake, and a mobile golf simulator",
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
    alt: "Trade show attendees visiting a branded golf simulator exhibit booth",
    quoteType: "Corporate",
    sections: [
      ["Keep it easy to join between sessions", "A short target challenge can give visitors an opener for a conversation with your team. For conferences, consider a designated activity area during breaks or an evening networking reception, when attendees have more room to stop and play."],
      ["Check the floor plan and exhibitor rules", "Send the event schedule, booth or activity-area dimensions, and any venue rules about load-in, power, and queuing. That information helps us assess where the simulator could go and whether there is room for spectators and waiting guests."],
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
    alt: "Golf tournament spectators in golf attire cheering around a simulator fundraiser on a course",
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
