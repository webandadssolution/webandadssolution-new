import type { MetadataRoute } from "next"
import { PACKAGE_TYPE_ORDER, CURRENCY } from "../data/packages-data"

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
    "/packages",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const packageRoutes = PACKAGE_TYPE_ORDER.flatMap((typeKey) =>
    Object.keys(CURRENCY).map((currencyKey) => ({
      url: `${SITE_URL}/package/${typeKey}-${currencyKey}`,
      lastModified: new Date(),
    }))
  )

  return [...staticRoutes, ...packageRoutes]
}
