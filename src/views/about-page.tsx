"use client"

import { useEffect } from "react"
import Link from "next/link"
import "../styles/sp-base.css"
import "../styles/about-page.css"
import Who_we_are from "../components/who_we_are"
import Our_team from "../components/our_team"

const values = [
  { icon: "🎯", title: "Results First",       desc: "Every strategy we build is tied to measurable business outcomes. Impressions don't pay salaries — results do." },
  { icon: "🤝", title: "Radical Transparency", desc: "You always know what we're doing, why, and what it's producing. No black boxes, no agency jargon, no surprises." },
  { icon: "🧠", title: "Continuous Learning",  desc: "Digital marketing evolves daily. Our team dedicates time every week to stay ahead of algorithm changes and trends." },
  { icon: "⚡", title: "Move Fast",            desc: "We move with the urgency your business deserves. Fast execution, rapid iteration, zero bureaucracy." },
  { icon: "🌍", title: "Think Global",         desc: "We've worked across 40+ countries and 20+ industries. A global perspective shapes every local strategy we build." },
  { icon: "❤️", title: "Long-Term Partnership", desc: "We don't churn clients. Our average client relationship is 3+ years because we grow together, not just deliver once." },
]

const milestones = [
  { year: "2015", event: "Founded in Harrisonville, Missouri with a team of 3" },
  { year: "2017", event: "Expanded to 20+ clients and opened our digital marketing division" },
  { year: "2019", event: "Launched our PPC & social media practice, serving 100+ brands" },
  { year: "2021", event: "Grew to a global team of 50+ specialists across 3 continents" },
  { year: "2023", event: "Crossed 350+ active clients and $42M in managed ad spend" },
  { year: "2025", event: "Recognized as a Top 100 Digital Agency with 500+ keywords ranked" },
]

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const counters = document.querySelectorAll(".ab-count[data-target]")
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
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-grid" />
        <div className="ab-hero-glow g1" />
        <div className="ab-hero-glow g2" />
        <div className="ab-hero-inner">
          <div className="ab-hero-left scroll-reveal">
            <div className="ab-badge">
              <span className="ab-badge-dot" />About Us
            </div>
            <h1 className="ab-hero-title">
              We're the Agency<br />
              <span className="ab-accent">Behind Your Growth.</span>
            </h1>
            <p className="ab-hero-sub">
              For over a decade, Web and Ads Solution has helped businesses across 40+ countries build their digital presence, scale their revenue, and outperform their competition online.
            </p>
            <div className="ab-hero-ctas">
              <Link href="/contact" className="ab-btn-primary">Work With Us</Link>
              <a href="#story" className="ab-btn-outline">Our Story</a>
            </div>
          </div>

          <div className="ab-hero-right scroll-reveal delay-2">
            <div className="ab-stats-visual">
              {[
                { num: "10", suffix: "+", label: "Years of Excellence" },
                { num: "350", suffix: "+", label: "Brands Transformed" },
                { num: "40", suffix: "+", label: "Countries Served" },
                { num: "50", suffix: "+", label: "Team Specialists" },
              ].map((s, i) => (
                <div key={i} className="ab-stat-box">
                  <span className="ab-stat-big">{s.num}<span className="ab-stat-suffix">{s.suffix}</span></span>
                  <span className="ab-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="ab-hero-badge-strip">
              <span>🏆 Top 100 Digital Agency 2025</span>
              <span>⭐ 4.9/5 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="ab-story-section" id="story">
        <div className="ab-container">
          <div className="ab-story-inner">
            <div className="ab-story-left scroll-reveal from-left">
              <span className="ab-section-tag">Our Story</span>
              <h2 className="ab-h2">Started Small.<br />Scaled Globally.</h2>
              <p className="ab-story-text">
                Web and Ads Solution was born in 2017 in Harrisonville, Missouri — a small office, a big vision, and a belief that every business deserves world-class digital marketing, not just the Fortune 500.
              </p>
              <p className="ab-story-text">
                We started with three people and a handful of local clients. Over the next decade, we built a team of 50+ specialists, expanded to serve clients across 40 countries, and developed proven systems for SEO, PPC, content, social media, and web development.
              </p>
              <p className="ab-story-text">
                Today, we manage over $42M in annual ad spend and have helped 350+ brands grow from startup to industry leader. But our mission is still the same as day one: <strong>make digital marketing work for the people who need it most.</strong>
              </p>
            </div>

            <div className="ab-timeline scroll-reveal from-right">
              <span className="ab-section-tag">Our Journey</span>
              {milestones.map((m, i) => (
                <div key={i} className="ab-timeline-item">
                  <div className="ab-timeline-year">{m.year}</div>
                  <div className="ab-timeline-dot" />
                  <div className="ab-timeline-event">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="ab-mv-section">
        <div className="ab-container">
          <div className="ab-mv-grid scroll-reveal">
            <div className="ab-mv-card mission">
              <div className="ab-mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver data-driven digital marketing solutions that create real, measurable growth for every client — regardless of size, industry, or starting point.</p>
            </div>
            <div className="ab-mv-card vision">
              <div className="ab-mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the most trusted digital growth partner for ambitious businesses worldwide — a team known for integrity, innovation, and outcomes that outlast trends.</p>
            </div>
            <div className="ab-mv-card impact">
              <div className="ab-mv-icon">💡</div>
              <h3>Our Approach</h3>
              <p>Strategy before tactics. Data before instinct. Long-term relationships before short-term wins. We build systems, not just campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="ab-values-section">
        <div className="ab-container">
          <div className="ab-section-header scroll-reveal">
            <span className="ab-section-tag">What We Stand For</span>
            <h2 className="ab-h2">Six Values That Drive Everything We Do</h2>
            <p className="ab-lead">These aren't wall posters — they're the principles that shape every decision, every hire, and every campaign.</p>
          </div>
          <div className="ab-values-grid">
            {values.map((v, i) => (
              <div key={i} className="ab-value-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="ab-value-icon">{v.icon}</span>
                <h3 className="ab-value-title">{v.title}</h3>
                <p className="ab-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="ab-stats-section">
        <div className="ab-stats-bg" />
        <div className="ab-container ab-stats-inner">
          <div className="ab-section-header scroll-reveal">
            <span className="ab-section-tag light">By the Numbers</span>
            <h2 className="ab-h2 light">A Decade of Measurable Impact</h2>
          </div>
          <div className="ab-stats-grid">
            {[
              { t: 10,   s: "+",  l: "Years in Business" },
              { t: 350,  s: "+",  l: "Brands Grown" },
              { t: 42,   s: "M",  l: "In Ad Spend Managed" },
              { t: 500,  s: "+",  l: "Page 1 Keyword Rankings" },
              { t: 40,   s: "+",  l: "Countries Served" },
              { t: 98,   s: "%",  l: "Client Retention Rate" },
            ].map((s, i) => (
              <div key={i} className="ab-stat-item scroll-reveal scale-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="ab-count" data-target={s.t} data-suffix={s.s}>0{s.s}</span>
                <span className="ab-stat-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
     <Our_team /> 

      {/* ── CTA ── */}
      <section className="ab-cta-section">
        <div className="ab-cta-glow" />
        <div className="ab-cta-inner scroll-reveal scale-in">
          <span className="ab-section-tag light">Let's Work Together</span>
          <h2 className="ab-cta-title">Ready to Build Something Great?</h2>
          <p className="ab-cta-desc">Join 350+ brands that trust Web and Ads Solution to drive their digital growth. Let's start with a free strategy consultation.</p>
          <div className="ab-cta-actions">
            <Link href="/contact" className="ab-btn-primary">Get a Free Consultation</Link>
            <Link href="/services" className="ab-btn-outline">Explore Our Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
