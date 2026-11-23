import type { MetadataRoute } from "next";
import { events, siteUrl } from "./events/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/events", "/packages", "/about", "/contact", "/book", "/privacy", ...events.map(event => `/events/${event.slug}`)]
    .map(path => ({ url: siteUrl + path }));
}
