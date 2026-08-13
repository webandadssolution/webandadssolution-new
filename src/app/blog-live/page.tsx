"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import BlogPostPage from "../../views/blog-post-page"
import { JsonLd, buildBlogArticleJsonLd } from "../../lib/seo"
import type { BlogCategory, BlogPost } from "../../lib/blog"
import { fetchBlogPostBySlugLive, fetchBlogPostsLive, fetchCategoriesLive } from "../../lib/blog-client"

// Fallback shell for /{category}/{slug}/ URLs that were published to the CMS after the
// last build, so no static file exists for them yet. `.htaccess` rewrites any unmatched
// two-segment path here; the actual category/slug come from the URL the browser kept.
export default function BlogLivePage() {
  const [state, setState] = useState<"loading" | "found" | "not-found">("loading")
  const [data, setData] = useState<{ post: BlogPost; related: BlogPost[]; recentPosts: BlogPost[]; categories: BlogCategory[] } | null>(null)

  useEffect(() => {
    const segments = window.location.pathname.split("/").filter(Boolean)
    const [category, slug] = segments

    if (!category || !slug) {
      setState("not-found")
      return
    }

    let cancelled = false
    ;(async () => {
      const post = await fetchBlogPostBySlugLive(slug)
      if (cancelled) return
      if (!post || post.categorySlug !== category) {
        setState("not-found")
        return
      }

      const [posts, categories] = await Promise.all([fetchBlogPostsLive(), fetchCategoriesLive()])
      if (cancelled) return

      document.title = post.metaTitle || post.title

      setData({
        post,
        related: posts.filter((p) => p.id !== post.id && p.categorySlug === post.categorySlug).slice(0, 3),
        recentPosts: posts.filter((p) => p.id !== post.id).slice(0, 5),
        categories,
      })
      setState("found")
    })()

    return () => { cancelled = true }
  }, [])

  if (state === "loading") {
    return <div className="bp-page" style={{ minHeight: "60vh" }} />
  }

  if (state === "not-found" || !data) {
    return (
      <div className="bp-page" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <h1>Post not found</h1>
        <Link href="/blog">← Back to all articles</Link>
      </div>
    )
  }

  return (
    <>
      <JsonLd data={buildBlogArticleJsonLd(data.post)} />
      <BlogPostPage post={data.post} related={data.related} recentPosts={data.recentPosts} categories={data.categories} />
    </>
  )
}
