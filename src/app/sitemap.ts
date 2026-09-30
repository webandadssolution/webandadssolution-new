import type { MetadataRoute } from "next"
import { getBlogPosts, getAuthors } from "../lib/blog"

export const dynamic = "force-static"

const SITE_URL = "https://webandadssolution.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/book-a-call",
    "/blog",
    "/services",
    "/seo-search-engine-optimization",
    "/services/aeo",
    "/services/geo",
    "/services/ai-visibility",
    "/services/content-marketing",
    "/services/ppc",
    "/services/smo",
    "/services/web-development",
    "/services/website-look-feel",
    "/services/website-optimization",
    "/services/graphic-design",
    "/services/virtual-assistant",
    "/packages",
    "/packages/seo-packages",
    "/packages/seo-packages/seo-packages-with-velocity-plan",
    "/packages/seo-packages/seo-signature-plan",
    "/packages/seo-packages/seo-premium-plan",
    "/packages/seo-packages/seo-without-velocity-plan",
    "/packages/ppc-packages",
    "/packages/smo-packages",
    "/packages/website-packages",
    "/locations",
    "/united-states",
    "/missouri",
    "/kansas-city",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const [posts, authors] = await Promise.all([getBlogPosts(), getAuthors()])

  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}/${post.categorySlug}/${post.slug}`,
    lastModified: new Date(post.dateIso),
  }))

  const authorRoutes = authors.map((author) => ({
    url: `${SITE_URL}/authors/${author.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...postRoutes, ...authorRoutes]
}
