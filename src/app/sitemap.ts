import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE_URL = "https://webandadssolution.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/services/seo",
    "/services/content-marketing",
    "/services/ppc",
    "/services/smo",
    "/services/web-development",
    "/services/virtual-assistant",
    "/about",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  return staticRoutes
}
