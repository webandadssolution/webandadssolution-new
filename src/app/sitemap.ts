import type { MetadataRoute } from "next"
import { getBlogPosts, getAuthors } from "../lib/blog"

export const dynamic = "force-static"

const SITE_URL = "https://webandadssolution.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
