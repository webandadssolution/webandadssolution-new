"use client"

import { useEffect, useState } from "react"
import type { FormEvent } from "react"
import Link from "next/link"
import "../styles/blog-page.css"

const categories = ["All", "SEO", "PPC", "Social Media", "Content", "Web Dev", "Digital Marketing"]

const posts = [
  {
    id: 1, category: "SEO", featured: true,
    title: "10 SEO Strategies That Will Dominate Google in 2025",
    excerpt: "Search algorithms have evolved dramatically. Here are the tactics that are actually moving the needle this year — based on data from 350+ client campaigns.",
    author: "Sarah Mitchell", date: "June 10, 2026", readTime: "9 min read",
    tags: ["SEO", "Rankings", "Strategy"],
    color: "#f06820",
  },
  {
    id: 2, category: "PPC",
    title: "Why Your Google Ads Are Losing Money (And How to Fix It)",
    excerpt: "Most PPC campaigns waste 30-50% of their budget on the wrong audiences and keywords. Here's our step-by-step audit process to stop the bleeding.",
    author: "Emily Chen", date: "June 5, 2026", readTime: "7 min read",
    tags: ["PPC", "Google Ads", "ROI"],
    color: "#f06820",
  },
  {
    id: 3, category: "Social Media",
    title: "The Instagram Algorithm in 2025: What Actually Works",
    excerpt: "After testing 200+ brand accounts, we've cracked the code on what Instagram rewards right now. Hint: it's not what most agencies are telling you.",
    author: "Priya Sharma", date: "May 28, 2026", readTime: "6 min read",
    tags: ["Instagram", "Social Media", "Algorithm"],
    color: "#f06820",
  },
  {
    id: 4, category: "Content",
    title: "How to Build a Content Strategy That Actually Generates Leads",
    excerpt: "Content marketing works — but only when it's tied to a strategy. Here's the exact framework we use for clients who go from 0 to 50k monthly visitors.",
    author: "Marcus Johnson", date: "May 20, 2026", readTime: "8 min read",
    tags: ["Content Marketing", "Lead Gen", "Strategy"],
    color: "#f06820",
  },
  {
    id: 5, category: "Web Dev",
    title: "Why Your Website Speed Is Killing Your Conversions",
    excerpt: "A 1-second delay reduces conversions by 7%. Here's how to diagnose speed issues and fix them — with or without a developer.",
    author: "Arjun Patel", date: "May 14, 2026", readTime: "5 min read",
    tags: ["Web Dev", "Speed", "Conversions"],
    color: "#f06820",
  },
  {
    id: 6, category: "Digital Marketing",
    title: "The Full-Funnel Digital Strategy Guide for 2025",
    excerpt: "Most businesses focus on one channel and wonder why growth stalls. Here's how to build a cohesive digital presence that converts at every stage.",
    author: "Nitesh Kumar", date: "May 7, 2026", readTime: "12 min read",
    tags: ["Strategy", "Full-Funnel", "Growth"],
    color: "#f06820",
  },
  {
    id: 7, category: "SEO",
    title: "Local SEO in 2025: The Complete Guide for Small Businesses",
    excerpt: "Local search has never been more competitive. Learn how to dominate the map pack, earn reviews, and out-rank national chains in your own backyard.",
    author: "Sarah Mitchell", date: "April 30, 2026", readTime: "10 min read",
    tags: ["Local SEO", "Small Business", "Google Maps"],
    color: "#f06820",
  },
  {
    id: 8, category: "Content",
    title: "Email Marketing Benchmarks: What Good Looks Like in 2025",
    excerpt: "Is your 22% open rate actually good? We analyzed 10,000 campaigns across industries to give you the benchmarks that matter — and how to beat them.",
    author: "Marcus Johnson", date: "April 22, 2026", readTime: "6 min read",
    tags: ["Email Marketing", "Benchmarks", "Data"],
    color: "#f06820",
  },
  {
    id: 9, category: "PPC",
    title: "Meta Ads vs. Google Ads: Which Should You Choose in 2025?",
    excerpt: "The answer depends on your business, offer, and audience — not which platform is \"trending.\" Here's a clear decision framework with real data.",
    author: "Emily Chen", date: "April 15, 2026", readTime: "8 min read",
    tags: ["Meta Ads", "Google Ads", "Comparison"],
    color: "#f06820",
  },
]

export default function BlogPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")

  const featured = posts.find(p => p.featured)
  const filtered = posts.filter(p => !p.featured).filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="blog-page">

      {/* ── HERO ── */}
      <section className="bl-hero">
        <div className="bl-hero-grid" />
        <div className="bl-hero-glow" />
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

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="bl-featured-section">
          <div className="bl-container">
            <span className="bl-section-tag">Featured Article</span>
            <div className="bl-featured-card scroll-reveal">
              <div className="bl-featured-img">
                <div className="bl-featured-overlay" />
                <div className="bl-featured-content">
                  <span className="bl-cat-chip">{featured.category}</span>
                  <h2 className="bl-featured-title">{featured.title}</h2>
                  <p className="bl-featured-excerpt">{featured.excerpt}</p>
                  <div className="bl-featured-meta">
                    <div className="bl-author-row">
                      <div className="bl-author-avatar">{featured.author[0]}</div>
                      <span className="bl-author-name">{featured.author}</span>
                      <span className="bl-meta-divider">·</span>
                      <span>{featured.date}</span>
                      <span className="bl-meta-divider">·</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <Link href={`/blog/${featured.id}`} className="bl-read-btn">Read Article →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FILTER + GRID ── */}
      <section className="bl-grid-section">
        <div className="bl-container">
          {/* Category Filter */}
          <div className="bl-filter-row scroll-reveal">
            {categories.map(cat => (
              <button
                key={cat}
                className={`bl-filter-chip${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >{cat}</button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="bl-posts-grid">
              {filtered.map((post, i) => (
                <div key={post.id} className="bl-post-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="bl-post-img-wrap">
                    <div className="bl-post-img" />
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
                        <div className="bl-author-avatar sm">{post.author[0]}</div>
                        <span className="bl-author-name sm">{post.author}</span>
                        <span className="bl-meta-divider">·</span>
                        <span className="bl-post-date">{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`} className="bl-post-link">Read →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bl-empty">
              <span className="bl-empty-icon">📭</span>
              <p>No articles match your search. <button onClick={() => { setSearch(""); setActiveCategory("All") }}>Clear filters</button></p>
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
