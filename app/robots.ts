import type { MetadataRoute } from "next";
import { siteUrl } from "./events/catalog";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/admin"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
