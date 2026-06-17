"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ppcFaqs } from "../data/faq-content"
import "../styles/sp-base.css"
import "../styles/ppc-page.css"

const platforms = [
  { icon: "🔍", name: "Google Ads",    desc: "Search, Display, Shopping, Performance Max — we manage every Google campaign type with proven bidding strategies." },
  { icon: "📘", name: "Meta Ads",      desc: "Facebook & Instagram campaigns engineered for awareness, lead gen, and retargeting with surgical audience targeting." },
  { icon: "💼", name: "LinkedIn Ads",  desc: "B2B-focused campaigns targeting decision-makers by job title, company size, and seniority. Perfect for high-ticket offers." },
  { icon: "🎵", name: "TikTok Ads",    desc: "Short-form video ads that stop the scroll and capture Gen Z and millennial audiences at scale and low CPMs." },
  { icon: "📌", name: "Pinterest Ads", desc: "Visual discovery campaigns that reach buyers in planning mode — ideal for e-commerce, home, fashion, and lifestyle brands." },
  { icon: "▶️", name: "YouTube Ads",   desc: "Skippable and non-skippable video campaigns that build brand awareness and drive action with compelling creative." },
]

const process = [
  { step: "01", title: "Account Audit",         desc: "We review your existing ad accounts, identify wasted spend, and benchmark against competitors in your market." },
  { step: "02", title: "Audience Research",     desc: "We map your ideal buyer profiles and find them across platforms using first-party data, lookalikes, and intent signals." },
  { step: "03", title: "Campaign Architecture", desc: "Strategic campaign structure with proper budget allocation, bidding strategies, and funnel-stage segmentation." },
  { step: "04", title: "Creative Development",  desc: "Ad copy, headlines, and creative briefs optimized for click-through rates and quality scores from day one." },
  { step: "05", title: "Launch & Optimize",     desc: "We A/B test continuously — ad copy, audiences, bids, and landing pages — to drive CPAs down week over week." },
  { step: "06", title: "Report & Scale",        desc: "Weekly performance summaries with ROAS, CPA, and conversion data. We scale what works, cut what doesn't." },
]

const whyUs = [
  { icon: "💰", title: "ROAS-Obsessed",          desc: "Every decision we make is tied to your return on ad spend. If it doesn't improve ROAS, we don't do it." },
  { icon: "🎯", title: "Precision Targeting",    desc: "We go beyond demographics — intent signals, behavioral layers, and custom audiences that find your real buyers." },
  { icon: "📉", title: "CPA Reduction",          desc: "We've cut cost-per-acquisition by an average of 38% within the first 90 days for our clients." },
  { icon: "🔄", title: "Continuous A/B Testing", desc: "Static ads decay. We test new creatives and audiences weekly to keep performance fresh and climbing." },
  { icon: "📊", title: "Live Dashboards",        desc: "Real-time reporting you can access 24/7 — no waiting for monthly PDF reports that are already out of date." },
  { icon: "🤝", title: "No Lock-In Contracts",   desc: "Month-to-month engagements. We keep clients by delivering results, not by trapping them in long contracts." },
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

export default function PPCPage() {
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
    <div className="sp-page ppc-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">

          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Pay-Per-Click Advertising
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Every Click.<br /><span className="accent">Maximum ROI.</span><br />Zero Waste.
            </h1>
            <p className="sp-hero-sub scroll-reveal delay-2">
              We build and manage PPC campaigns across Google, Meta, LinkedIn, and beyond — cutting wasteful spend and scaling what converts into measurable, profitable growth.
            </p>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Get a Free PPC Audit</a>
              <a href="#platforms" className="sp-btn outline">See Platforms</a>
            </div>
            <div className="sp-hero-stats scroll-reveal delay-4">
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">4.2<span className="a">x</span></span><span className="sp-hero-stat-label">Average ROAS delivered</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">38<span className="a">%</span></span><span className="sp-hero-stat-label">Avg CPA reduction in 90 days</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">6<span className="a">+</span></span><span className="sp-hero-stat-label">Ad platforms managed</span></div>
            </div>
          </div>

          {/* Visual — SERP Mockup */}
          <div className="ppc-hero-visual scroll-reveal delay-2">
            <div className="ppc-serp-card">
              <div className="ppc-serp-bar">
                <div className="ppc-serp-dots"><span/><span/><span/></div>
                <div className="ppc-serp-url">🔍 best digital marketing agency near me</div>
              </div>
              <div className="ppc-serp-body">
                <div className="ppc-result ppc-top-result">
                  <div className="ppc-ad-badge">Ad</div>
                  <div className="ppc-result-domain">your-brand.com</div>
                  <div className="ppc-result-title">Award-Winning Digital Marketing Agency · Get Results Today</div>
                  <div className="ppc-result-desc">Proven strategies that drive real growth. Free consultation available. Top-rated by 500+ clients.</div>
                </div>
                <div className="ppc-result ppc-organic">
                  <div className="ppc-result-domain muted">competitor-a.com</div>
                  <div className="ppc-result-title muted">Marketing Services — General Agency</div>
                </div>
                <div className="ppc-result ppc-organic">
                  <div className="ppc-result-domain muted">competitor-b.com</div>
                  <div className="ppc-result-title muted">Digital Marketing — Basic Packages</div>
                </div>
              </div>
            </div>
            <div className="ppc-metrics-row">
              <div className="ppc-metric"><span className="ppc-metric-val">8.4%</span><span className="ppc-metric-label">CTR</span></div>
              <div className="ppc-metric"><span className="ppc-metric-val">4.2x</span><span className="ppc-metric-label">ROAS</span></div>
              <div className="ppc-metric"><span className="ppc-metric-val">$1.24</span><span className="ppc-metric-label">Avg CPC</span></div>
              <div className="ppc-metric"><span className="ppc-metric-val">342</span><span className="ppc-metric-label">Conversions</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="sp-stats-strip">
        <div className="sp-stats-grid">
          {[
            { t: 200,  s: "%", l: "average increase in conversion rate with our campaigns" },
            { t: 38,   s: "%", l: "reduction in cost-per-acquisition within the first 90 days" },
            { t: 96,   s: "%", l: "of our clients report positive ROAS within 60 days" },
            { t: 500,  s: "+", l: "successful campaigns launched across 6 major ad platforms" },
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
            <span className="sp-tag">Where We Advertise</span>
            <h2 className="sp-h2">Every Major Platform, Expertly Managed</h2>
            <p className="sp-lead">We manage campaigns across all major advertising platforms — so your brand is visible wherever your customers are.</p>
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
            <span className="sp-tag">Our Methodology</span>
            <h2 className="sp-h2">From Zero to Profitable in 90 Days</h2>
            <p className="sp-lead">A proven launch and optimization framework that gets campaigns profitable fast and keeps scaling them.</p>
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
            <h2 className="sp-why-title">PPC That Pays For<br /><span className="a">Itself Many Times Over</span></h2>
            <p className="sp-why-desc">Most agencies optimize for activity. We optimize for profit. Every dollar you spend should return multiple — and we have the data to prove it's working.</p>
            <a href="#contact" className="sp-btn primary">Audit My Ad Account</a>
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
            <span className="sp-tag light">Our Results</span>
            <h2 className="sp-h2 light">Numbers We're Proud Of</h2>
          </div>
          <div className="sp-results-grid">
            {[
              { t: 500,  s: "+", l: "Campaigns Launched & Managed" },
              { t: 42,   s: "M", l: "In Ad Spend Managed" },
              { t: 4,    s: "x", l: "Average Return on Ad Spend" },
              { t: 98,   s: "%", l: "Client Retention Rate" },
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
            <h2 className="sp-h2">PPC Questions, Answered Honestly</h2>
          </div>
          <div className="sp-faq-wrap">
            {ppcFaqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section" id="contact">
        <div className="sp-cta-glow" />
        <div className="sp-cta-inner scroll-reveal scale-in">
          <span className="sp-tag light">Get Started</span>
          <h2 className="sp-cta-title">Ready to Turn Ad Spend Into Revenue?</h2>
          <p className="sp-cta-desc">Get a free audit of your current ad accounts — or let us build you a winning campaign from scratch.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Get My Free PPC Audit</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
          <p className="sp-cta-note">No contracts · Performance-focused · Transparent reporting</p>
        </div>
      </section>

    </div>
  )
}
