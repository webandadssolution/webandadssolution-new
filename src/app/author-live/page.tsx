"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import AuthorProfilePage from "../../views/author-profile-page"
import type { AuthorProfile, BlogPost } from "../../lib/blog"
import { fetchAuthorBySlugLive, fetchAuthorPostsLive } from "../../lib/blog-client"

// Fallback shell for /authors/{slug}/ URLs published to the CMS after the last build.
// `.htaccess` rewrites any unmatched path under /authors/ here; the slug comes from
// the URL the browser kept.
export default function AuthorLivePage() {
  const [state, setState] = useState<"loading" | "found" | "not-found">("loading")
  const [data, setData] = useState<{ author: AuthorProfile; posts: BlogPost[] } | null>(null)

  useEffect(() => {
    const segments = window.location.pathname.split("/").filter(Boolean)
    const slug = segments[segments.length - 1]

    if (!slug) {
      setState("not-found")
      return
    }

    let cancelled = false
    ;(async () => {
      const author = await fetchAuthorBySlugLive(slug)
      if (cancelled) return
      if (!author) {
        setState("not-found")
        return
      }

      const posts = await fetchAuthorPostsLive(slug)
      if (cancelled) return

      document.title = author.metaTitle || `${author.name} | Web and Ads Solutions`

      setData({ author, posts })
      setState("found")
    })()

    return () => { cancelled = true }
  }, [])

  if (state === "loading") {
    return <div className="ap-page" style={{ minHeight: "60vh" }} />
  }

  if (state === "not-found" || !data) {
    return (
      <div className="ap-page" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <h1>Author not found</h1>
        <Link href="/blog">← Back to all articles</Link>
      </div>
    )
  }

  return <AuthorProfilePage author={data.author} posts={data.posts} />
}
