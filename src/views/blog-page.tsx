"use client"

import { useEffect, useMemo, useState } from "react"
import type { FormEvent } from "react"
import Link from "next/link"
import "../styles/blog-page.css"
import type { BlogCategory, BlogPost } from "../lib/blog"

export default function BlogPage({ posts, categories }: { posts: BlogPost[]; categories: BlogCategory[] }) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [search, setSearch] = useState("")

  const tabs = useMemo(() => [{ name: "All", slug: "all" }, ...categories], [categories])

  useEffect(() => {
    const updateCategoryFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      const validHash = tabs.some((t) => t.slug === hash)
      setActiveCategory(validHash ? hash : "all")
    }

    updateCategoryFromHash()
    window.addEventListener("hashchange", updateCategoryFromHash)
    return () => window.removeEventListener("hashchange", updateCategoryFromHash)
  }, [tabs])

  const handleTabClick = (slug: string) => {
    setActiveCategory(slug)
    window.history.replaceState(null, "", `#${slug}`)
  }

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "all" || p.categorySlug === activeCategory
    const loweredSearch = search.toLowerCase()
    const matchSearch = !loweredSearch || p.title.toLowerCase().includes(loweredSearch) || p.excerpt.toLowerCase().includes(loweredSearch)
    return matchCat && matchSearch
  })

  return (
    <div className="blog-page">

      {/* ── HERO ── */}
      <section className="bl-hero">
        <div className="bl-hero-grid" />
        <div className="bl-hero-glow" />
        <div className="bl-hero-glow-2" />
        <div className="bl-hero-inner">
          <div className="scroll-reveal">
            <div className="bl-badge"><span className="bl-badge-dot" />The Growth Blog</div>
            <h1 className="bl-hero-title">
              Insights That<br /><span className="bl-accent">Actually Move the Needle.</span>
            </h1>
            <p className="bl-hero-sub">
              Data-backed articles on SEO, PPC, social media, content, and web development — written by the specialists who manage 350+ brand campaigns.
            </p>
          </div>
          <div className="bl-search-wrap scroll-reveal delay-2">
            <input
              type="text"
              className="bl-search"
              placeholder="Search articles…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="bl-search-icon">🔍</span>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="bl-grid-section">
        <div className="bl-container">
          {/* Category Filter */}
          <div className="bl-filter-row scroll-reveal">
            {tabs.map(tab => (
              <button
                key={tab.slug}
                type="button"
                className={`bl-filter-chip${activeCategory === tab.slug ? " active" : ""}`}
                onClick={() => handleTabClick(tab.slug)}
              >{tab.name}</button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="bl-posts-grid">
              {filtered.map((post, i) => (
                <div key={post.id} className="bl-post-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="bl-post-img-wrap">
                    {post.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.image} alt={post.title} className="bl-post-img" />
                    )}
                    <span className="bl-post-cat">{post.category}</span>
                  </div>
                  <div className="bl-post-body">
                    <h3 className="bl-post-title">{post.title}</h3>
                    <p className="bl-post-excerpt">{post.excerpt}</p>
                    <div className="bl-post-tags">
                      {post.tags.map((t, j) => <span key={j} className="bl-tag">{t}</span>)}
                    </div>
                    <div className="bl-post-footer">
                      <div className="bl-author-row">
                        {post.authorSlug ? (
                          <Link href={`/authors/${post.authorSlug}`} className="bp-author-link">
                            <div className="bl-author-avatar sm">{post.author[0]}</div>
                            <span className="bl-author-name sm">{post.author}</span>
                          </Link>
                        ) : (
                          <>
                            <div className="bl-author-avatar sm">{post.author[0]}</div>
                            <span className="bl-author-name sm">{post.author}</span>
                          </>
                        )}
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
              <span className="bl-empty-icon">📭</span>
              <p>No articles match your search. <button onClick={() => { setSearch(""); setActiveCategory("all") }}>Clear filters</button></p>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bl-newsletter-section">
        <div className="bl-newsletter-glow" />
        <div className="bl-container bl-newsletter-inner scroll-reveal scale-in">
          <div className="bl-newsletter-left">
            <span className="bl-nl-tag">Stay Ahead</span>
            <h2 className="bl-nl-title">Get Weekly Digital Marketing Insights</h2>
            <p className="bl-nl-desc">Join 12,000+ marketers and business owners who get our best articles — no spam, unsubscribe anytime.</p>
          </div>
          <div className="bl-newsletter-right">
            <NewsletterForm />
          </div>
        </div>
      </section>

    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email) setDone(true)
  }

  if (done) return (
    <div className="bl-nl-success">
      <span>✓</span>
      <p>You're in! Check your inbox to confirm your subscription.</p>
    </div>
  )

  return (
    <form className="bl-nl-form" onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required />
      <button type="submit">Subscribe →</button>
    </form>
  )
}
