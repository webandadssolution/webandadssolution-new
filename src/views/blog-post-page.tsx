import Link from "next/link"
import "../styles/blog-page.css"
import "../styles/blog-post-page.css"
import type { BlogCategory, BlogPost } from "../lib/blog"
import SidebarContactForm from "../components/sidebar-contact-form"

export default function BlogPostPage({
  post,
  related,
  recentPosts,
  categories,
}: {
  post: BlogPost
  related: BlogPost[]
  recentPosts: BlogPost[]
  categories: BlogCategory[]
}) {
  return (
    <div className="bp-page">

      {/* ── HERO ── */}
      <section className="bp-hero">
        <div className="bp-hero-glow" />
        <div className="bp-hero-content">
          <div className="bp-hero-inner">
            <div className="bp-breadcrumb">
              <Link href="/blog">Blog</Link> / {post.category}
            </div>
            <h1 className="bp-title">{post.title}</h1>
            <div className="bp-meta">
              {post.authorSlug ? (
                <Link href={`/authors/${post.authorSlug}`} className="bp-author-link">
                  <div className="bp-avatar">
                    {post.authorImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.authorImage} alt={post.author} />
                    ) : (
                      post.author[0]
                    )}
                  </div>
                  <span className="bp-meta-name">{post.author}</span>
                </Link>
              ) : (
                <>
                  <div className="bp-avatar">
                    {post.authorImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.authorImage} alt={post.author} />
                    ) : (
                      post.author[0]
                    )}
                  </div>
                  <span className="bp-meta-name">{post.author}</span>
                </>
              )}
              <span className="bp-dot">·</span>
              <span>{post.date}</span>
              <span className="bp-dot">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          {post.image && (
            <div className="bp-hero-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} className="bp-hero-img" />
            </div>
          )}
        </div>
      </section>

      {/* ── ARTICLE + SIDEBAR ── */}
      <section className="bp-body-section">
        <div className="bp-body-grid">
          <article className="bp-article" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content={post.title} />
            <meta itemProp="description" content={post.excerpt} />
            <meta itemProp="author" content={post.author} />
            <meta itemProp="datePublished" content={post.dateIso} />
            <meta itemProp="dateModified" content={post.dateIso} />
            {post.image && <meta itemProp="image" content={post.image} />}
            <div className="bp-article-content" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="bp-tags-row">
              {post.tags.map((t, i) => <span key={i} className="bl-tag">{t}</span>)}
            </div>

            <div className="bp-back-row">
              <Link href="/blog" className="bp-back-link">← Back to all articles</Link>
            </div>
          </article>

          <aside className="bp-sidebar">
            {recentPosts.length > 0 && (
              <div className="bp-sidebar-box">
                <h3 className="bp-sidebar-title">Recent Posts</h3>
                <div className="bp-recent-list">
                  {recentPosts.map((p) => (
                    <Link key={p.id} href={`/${p.categorySlug}/${p.slug}`} className="bp-recent-item">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.image} alt={p.title} className="bp-recent-thumb" />
                      ) : (
                        <span className="bp-recent-thumb" />
                      )}
                      <span className="bp-recent-info">
                        <span className="bp-recent-title">{p.title}</span>
                        <span className="bp-recent-date">{p.date}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {categories.length > 0 && (
              <div className="bp-sidebar-box">
                <h3 className="bp-sidebar-title">Categories</h3>
                <div className="bp-cat-list">
                  {categories.map((c) => (
                    <Link key={c.slug} href={`/blog#${c.slug}`} className="bp-cat-link">
                      <span>{c.name}</span>
                      <span className="bp-cat-count">{c.postCount}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bp-sidebar-box">
              <h3 className="bp-sidebar-title">Get In Touch</h3>
              <p className="bp-cf-sub">Have a question about this article or your project? Send us a message.</p>
              <SidebarContactForm />
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="bp-related-section">
          <div className="bl-container">
            <h2 className="bp-related-title">You might also like</h2>
            <div className="bl-posts-grid">
              {related.map((p) => (
                <div key={p.id} className="bl-post-card">
                  <div className="bl-post-img-wrap">
                    {p.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.title} className="bl-post-img" />
                    )}
                    <span className="bl-post-cat">{p.category}</span>
                  </div>
                  <div className="bl-post-body">
                    <h3 className="bl-post-title">{p.title}</h3>
                    <p className="bl-post-excerpt">{p.excerpt}</p>
                    <div className="bl-post-footer">
                      <div className="bl-author-row">
                        {p.authorSlug ? (
                          <Link href={`/authors/${p.authorSlug}`} className="bp-author-link">
                            <div className="bl-author-avatar sm">
                              {p.authorImage ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={p.authorImage} alt={p.author} />
                              ) : (
                                p.author[0]
                              )}
                            </div>
                            <span className="bl-author-name sm">{p.author}</span>
                          </Link>
                        ) : (
                          <>
                            <div className="bl-author-avatar sm">
                              {p.authorImage ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={p.authorImage} alt={p.author} />
                              ) : (
                                p.author[0]
                              )}
                            </div>
                            <span className="bl-author-name sm">{p.author}</span>
                          </>
                        )}
                        <span className="bl-meta-divider">·</span>
                        <span className="bl-post-date">{p.readTime}</span>
                      </div>
                      <Link href={`/${p.categorySlug}/${p.slug}`} className="bl-post-link">Read →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
