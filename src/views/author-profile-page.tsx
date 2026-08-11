"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import type { AuthorProfile, BlogPost } from "../lib/blog"
import "../styles/blog-page.css"

export default function AuthorProfilePage({ author, authors, posts }: { author: AuthorProfile; authors: AuthorProfile[]; posts: BlogPost[] }) {
  const [visibleCount, setVisibleCount] = useState(3)
  const visiblePosts = useMemo(() => posts.slice(0, visibleCount), [posts, visibleCount])
  const hasMore = visibleCount < posts.length

  return (
    <div className="blog-page">
      <section className="bl-hero" style={{ paddingBottom: "40px" }}>
        <div className="bl-hero-inner">
          <div className="scroll-reveal" style={{ maxWidth: "820px" }}>
            <div className="bl-badge"><span className="bl-badge-dot" />Author Profile</div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
              <div style={{ width: 108, height: 108, borderRadius: "999px", overflow: "hidden", background: "#111", display: "grid", placeItems: "center", color: "#fff", fontSize: "34px", fontWeight: 700 }}>
                {author.image ? <img src={author.image} alt={author.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : author.name.charAt(0)}
              </div>
              <div>
                <h1 className="bl-hero-title" style={{ fontSize: "34px", marginBottom: "8px" }}>{author.name}</h1>
                <p className="bl-hero-sub" style={{ margin: 0 }}>{author.role}</p>
              </div>
            </div>
            <p className="bl-hero-sub" style={{ marginTop: "16px", maxWidth: "760px" }}>{author.description}</p>
            {author.expertise?.length ? (
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
                {author.expertise.map((item) => (
                  <span key={item} className="bl-tag" style={{ background: "rgba(255,255,255,0.1)" }}>{item}</span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bl-grid-section">
        <div className="bl-container">
          <div className="bl-filter-row scroll-reveal" style={{ justifyContent: "flex-start", gap: "10px", marginBottom: "24px" }}>
            {authors.map((a) => (
              <Link key={a.slug} href={`/authors/${a.slug}`} className={`bl-filter-chip${a.slug === author.slug ? " active" : ""}`}>
                {a.name}
              </Link>
            ))}
          </div>

          <h2 className="bl-featured-title" style={{ fontSize: "28px", marginBottom: "18px" }}>{author.name}'s latest articles</h2>

          {visiblePosts.length > 0 ? (
            <div className="bl-posts-grid">
              {visiblePosts.map((post, i) => (
                <div key={post.id} className="bl-post-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="bl-post-img-wrap">
                    {post.image && <img src={post.image} alt={post.title} className="bl-post-img" />}
                    <span className="bl-post-cat">{post.category}</span>
                  </div>
                  <div className="bl-post-body">
                    <h3 className="bl-post-title">{post.title}</h3>
                    <p className="bl-post-excerpt">{post.excerpt}</p>
                    <div className="bl-post-footer">
                      <div className="bl-author-row">
                        <div className="bl-author-avatar sm">{post.author[0]}</div>
                        <span className="bl-author-name sm">{post.author}</span>
                        <span className="bl-meta-divider">·</span>
                        <span className="bl-post-date">{post.readTime}</span>
                      </div>
                      <Link href={`/${post.categorySlug}/${post.slug}`} className="bl-post-link">Read →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bl-empty">
              <p>No articles published yet for this author.</p>
            </div>
          )}

          {hasMore && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
              <button type="button" className="bl-read-btn" onClick={() => setVisibleCount((value) => value + 3)}>
                Load more
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
