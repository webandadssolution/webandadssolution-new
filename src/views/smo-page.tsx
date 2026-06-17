"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { smoFaqs } from "../data/faq-content"
import "../styles/sp-base.css"
import "../styles/smo-page.css"

const platforms = [
  { icon: "📸", name: "Instagram",  desc: "Reels, Stories, and feed posts engineered for reach and saves. We turn scrollers into followers and followers into buyers." },
  { icon: "👥", name: "Facebook",   desc: "Community management, targeted content, and group strategies that build brand loyalty and drive consistent traffic." },
  { icon: "💼", name: "LinkedIn",   desc: "Thought leadership content that positions your brand in front of professionals, decision-makers, and potential partners." },
  { icon: "🐦", name: "X (Twitter)",desc: "Real-time engagement, trending topic participation, and conversation strategies that keep your brand relevant and visible." },
  { icon: "🎵", name: "TikTok",     desc: "Trend-native short-form content that reaches millions of users organically before you spend a single dollar on ads." },
  { icon: "📌", name: "Pinterest",  desc: "High-intent visual discovery content that drives traffic directly to your website — powerful for e-commerce and lifestyle brands." },
]

const process = [
  { step: "01", title: "Brand Audit",         desc: "We assess your current social presence, competitor landscape, and audience demographics to find your white space." },
  { step: "02", title: "Strategy Blueprint",  desc: "A platform-by-platform content strategy with defined posting frequency, content pillars, and growth KPIs." },
  { step: "03", title: "Content Creation",    desc: "Our creative team produces on-brand graphics, captions, carousels, Reels scripts, and story sequences." },
  { step: "04", title: "Scheduling & Posting",desc: "We post at peak engagement windows for your specific audience using data-backed scheduling tools." },
  { step: "05", title: "Community Management",desc: "Daily monitoring of comments, DMs, and mentions — building genuine relationships with your audience." },
  { step: "06", title: "Analytics & Growth",  desc: "Monthly performance decks with follower growth, reach, engagement rate, and link-in-bio conversions." },
]

const whyUs = [
  { icon: "🎨", title: "Platform-Native Creative", desc: "We don't repurpose the same content across platforms. Each post is crafted for its specific platform and audience." },
  { icon: "📊", title: "Data-Backed Decisions",    desc: "Every content decision is informed by analytics — we know what your audience responds to and we double down on it." },
  { icon: "💬", title: "Real Community Building",   desc: "We engage with comments and DMs as your brand voice — building authentic relationships that drive loyalty." },
  { icon: "📅", title: "Consistent Presence",       desc: "No ghosting. We maintain a consistent publishing schedule that keeps your brand top of mind, 365 days a year." },
  { icon: "🚀", title: "Organic Growth Focus",      desc: "Algorithm-smart content strategies that grow your following with real, high-quality followers — not vanity metrics." },
  { icon: "🤝", title: "Influencer Network",         desc: "Access to our curated network of micro and macro influencers to amplify your reach in your target niche." },
]

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sp-faq-item${open ? " open" : ""} scroll-reveal`} style={{ animationDelay: `${delay}s` }}>
      <button className="sp-faq-q" onClick={() => setOpen(o => !o)}>
        <span>{q}</span><span className="sp-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="sp-faq-answer" style={{ maxHeight: open ? "300px" : "0" }}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function SMOPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const counters = document.querySelectorAll(".sp-stat-num[data-target], .sp-result-num[data-target]")
    const obs = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (!el.isIntersecting) return
        const node = el.target as HTMLElement, target = parseInt(node.dataset.target || "0", 10), suffix = node.dataset.suffix || ""
        let cur = 0; const step = Math.ceil(target / (1800 / 16))
        const t = setInterval(() => { cur = Math.min(cur + step, target); node.textContent = cur.toLocaleString() + suffix; if (cur >= target) clearInterval(t) }, 16)
        obs.unobserve(node)
      })
    }, { threshold: 0.3 })
    counters.forEach(n => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="sp-page smo-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">

          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Social Media Optimization
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Build a Community.<br /><span className="accent">Dominate Every Feed.</span>
            </h1>
            <p className="sp-hero-sub scroll-reveal delay-2">
              We transform your social channels into powerful brand-building engines — creating content your audience loves, conversations that convert, and communities that grow themselves.
            </p>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Get a Social Audit</a>
              <a href="#platforms" className="sp-btn outline">Our Platforms</a>
            </div>
            <div className="sp-hero-stats scroll-reveal delay-4">
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">5<span className="a">x</span></span><span className="sp-hero-stat-label">Average engagement growth</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">6<span className="a">+</span></span><span className="sp-hero-stat-label">Platforms managed</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">200<span className="a">+</span></span><span className="sp-hero-stat-label">Brands grown globally</span></div>
            </div>
          </div>

          {/* Visual — Social Cards */}
          <div className="smo-hero-visual scroll-reveal delay-2">
            <div className="smo-phone smo-phone-1">
              <div className="smo-phone-notch" />
              <div className="smo-phone-screen">
                <div className="smo-app-header">
                  <span className="smo-app-icon">📸</span><span className="smo-app-name">Instagram</span>
                </div>
                <div className="smo-post-preview">
                  <div className="smo-post-img" />
                  <div className="smo-post-actions">
                    <span>❤️ 4.2k</span><span>💬 318</span><span>📤 892</span>
                  </div>
                  <div className="smo-post-caption-lines"><div /><div /></div>
                </div>
                <div className="smo-stat-row">
                  <div className="smo-mini-stat"><span>12.4k</span><small>Followers</small></div>
                  <div className="smo-mini-stat"><span>+8.2%</span><small>This week</small></div>
                </div>
              </div>
            </div>

            <div className="smo-phone smo-phone-2">
              <div className="smo-phone-notch" />
              <div className="smo-phone-screen">
                <div className="smo-app-header">
                  <span className="smo-app-icon">💼</span><span className="smo-app-name">LinkedIn</span>
                </div>
                <div className="smo-linkedin-post">
                  <div className="smo-lk-avatar" />
                  <div className="smo-lk-lines"><div /><div /><div /></div>
                </div>
                <div className="smo-lk-stats">
                  <span>👁 42k impressions</span>
                  <span>🔗 1.2k clicks</span>
                </div>
              </div>
            </div>

            <div className="smo-phone smo-phone-3">
              <div className="smo-phone-notch" />
              <div className="smo-phone-screen">
                <div className="smo-app-header">
                  <span className="smo-app-icon">🎵</span><span className="smo-app-name">TikTok</span>
                </div>
                <div className="smo-tiktok-preview">
                  <div className="smo-play-btn">▶</div>
                  <div className="smo-tiktok-stats">
                    <div><span>👁</span><span>2.3M</span></div>
                    <div><span>❤️</span><span>184k</span></div>
                    <div><span>💬</span><span>8.4k</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="sp-stats-strip">
        <div className="sp-stats-grid">
          {[
            { t: 4,    s: "B+", l: "people use social media worldwide every day" },
            { t: 54,   s: "%",  l: "of social browsers use platforms to research products" },
            { t: 73,   s: "%",  l: "of marketers say social media marketing has been effective" },
            { t: 200,  s: "+",  l: "brands whose social presence we've transformed" },
          ].map((d, i) => (
            <div key={i} className="sp-stat-item scroll-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="sp-stat-num" data-target={d.t} data-suffix={d.s}>0{d.s}</span>
              <span className="sp-stat-label">{d.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="sp-features-section" id="platforms">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Platforms We Master</span>
            <h2 className="sp-h2">Everywhere Your Audience Lives</h2>
            <p className="sp-lead">We don't just manage pages — we build platform-native strategies that understand how each algorithm rewards content.</p>
          </div>
          <div className="sp-features-grid">
            {platforms.map((p, i) => (
              <div key={i} className="sp-feature-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="sp-feature-icon-wrap"><span>{p.icon}</span></div>
                <h3 className="sp-feature-title">{p.name}</h3>
                <p className="sp-feature-desc">{p.desc}</p>
                <div className="sp-card-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sp-process-section" id="process">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Approach</span>
            <h2 className="sp-h2">From Invisible to Unmissable</h2>
            <p className="sp-lead">A six-step system that turns dormant profiles into thriving brand communities.</p>
          </div>
          <div className="sp-process-grid">
            {process.map((p, i) => (
              <div key={i} className="sp-process-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="sp-process-num">{p.step}</div>
                <div className="sp-process-rule" />
                <h3 className="sp-process-title">{p.title}</h3>
                <p className="sp-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="sp-why-section">
        <div className="sp-why-inner">
          <div className="sp-why-left scroll-reveal from-left">
            <span className="sp-tag light">Why Choose Us</span>
            <h2 className="sp-why-title">Social That Grows Your<br /><span className="a">Business, Not Just Your Feed</span></h2>
            <p className="sp-why-desc">We've managed social for brands at every stage. The difference between accounts that stagnate and those that explode comes down to strategy, creativity, and consistency — and we deliver all three.</p>
            <a href="#contact" className="sp-btn primary">Grow My Social Today</a>
          </div>
          <div className="sp-why-cards">
            {whyUs.map((w, i) => (
              <div key={i} className="sp-why-card scroll-reveal from-right" style={{ animationDelay: `${i * 0.07}s` }}>
                <span className="sp-why-card-icon">{w.icon}</span>
                <div><h4 className="sp-why-card-title">{w.title}</h4><p className="sp-why-card-desc">{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="sp-results-section">
        <div className="sp-results-bg" />
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag light">Our Impact</span>
            <h2 className="sp-h2 light">Growth You Can See</h2>
          </div>
          <div className="sp-results-grid">
            {[
              { t: 200,  s: "+", l: "Brands Managed Globally" },
              { t: 50,   s: "M+",l: "Organic Impressions Generated" },
              { t: 5,    s: "x", l: "Average Engagement Lift" },
              { t: 6,    s: "+", l: "Platforms We Master" },
            ].map((r, i) => (
              <div key={i} className="sp-result-item scroll-reveal scale-in" style={{ animationDelay: `${i * 0.09}s` }}>
                <span className="sp-result-num" data-target={r.t} data-suffix={r.s}>0{r.s}</span>
                <span className="sp-result-label">{r.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-faq-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">FAQ</span>
            <h2 className="sp-h2">Social Media Questions, Answered</h2>
          </div>
          <div className="sp-faq-wrap">
            {smoFaqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section" id="contact">
        <div className="sp-cta-glow" />
        <div className="sp-cta-inner scroll-reveal scale-in">
          <span className="sp-tag light">Let's Grow</span>
          <h2 className="sp-cta-title">Ready to Own Your Social Presence?</h2>
          <p className="sp-cta-desc">Get a free social media audit and a custom growth plan — delivered within 48 hours, no obligation.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Get My Free Social Audit</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
          <p className="sp-cta-note">No setup fees · Cancel anytime · Real results guaranteed</p>
        </div>
      </section>

    </div>
  )
}
