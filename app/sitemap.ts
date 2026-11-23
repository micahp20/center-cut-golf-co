import type { MetadataRoute } from "next";
import { events, siteUrl } from "./events/catalog";
import { locations } from "./locations/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/events", "/locations", "/packages", "/faq", "/contact", "/book", "/privacy", ...events.map(event => `/events/${event.slug}`), ...locations.map(location => `/locations/${location.slug}`)]
    .map(path => ({ url: siteUrl + path }));
}
