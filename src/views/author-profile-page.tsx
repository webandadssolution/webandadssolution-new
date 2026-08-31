"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import type { AuthorProfile, BlogPost } from "../lib/blog"
import "../styles/blog-page.css"
import "../styles/author-profile-page.css"

export default function AuthorProfilePage({ author, posts }: { author: AuthorProfile; posts: BlogPost[] }) {
  const [visibleCount, setVisibleCount] = useState(6)
  const visiblePosts = useMemo(() => posts.slice(0, visibleCount), [posts, visibleCount])
  const hasMore = visibleCount < posts.length

  return (
    <div className="ap-page">
      <section className="ap-header">
        <div className="ap-badge"><span className="ap-badge-dot" />Author Profile</div>
        <div className="ap-avatar">
          {author.image ? <img src={author.image} alt={author.name} /> : author.name.charAt(0)}
        </div>
        <h1 className="ap-name">{author.name}</h1>
        {author.role && <p className="ap-role">{author.role}</p>}
      </section>

      <section className="ap-body-section">
        <div className="ap-container">
          {(author.description || author.expertise?.length) ? (
            <div className="ap-body-grid">
              {author.description && (
                <div className="ap-bio" dangerouslySetInnerHTML={{ __html: author.description }} />
              )}
              {author.expertise?.length ? (
                <aside className="ap-sidebar-box">
                  <h3 className="ap-sidebar-title">Expertise</h3>
                  <div className="ap-expertise-list">
                    {author.expertise.map((item) => (
                      <div key={item} className="ap-expertise-item">
                        <span className="ap-expertise-dot" />
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>
              ) : null}
            </div>
          ) : null}

          <h2 className="ap-articles-title">Latest articles</h2>

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
                        <div className="bl-author-avatar sm">
                        {post.authorImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={post.authorImage} alt={post.author} />
                        ) : (
                          post.author[0]
                        )}
                      </div>
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
