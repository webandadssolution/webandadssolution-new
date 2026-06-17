"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { contentMarketingFaqs } from "../data/faq-content"
import "../styles/sp-base.css"
import "../styles/content-marketing-page.css"

const contentTypes = [
  { icon: "✍️", title: "Blog & Articles",     desc: "SEO-optimized long-form content that builds authority, drives organic traffic, and answers your audience's exact questions." },
  { icon: "🎬", title: "Video Scripts",        desc: "Compelling scripts for YouTube, Reels, and explainer videos that keep viewers hooked and convert at every stage." },
  { icon: "📊", title: "Infographics",         desc: "Visually stunning data stories that get shared 3x more than any other content type — perfect for backlinks too." },
  { icon: "📧", title: "Email Sequences",      desc: "Nurture campaigns, product launches, and drip sequences engineered to move subscribers from cold to loyal customers." },
  { icon: "🎙️", title: "Podcast Content",     desc: "Episode outlines, show notes, and transcripts that extend your audio reach into search and social simultaneously." },
  { icon: "📱", title: "Social Copy",          desc: "Platform-native captions, carousels, and threads that spark engagement and build community across every channel." },
]

const process = [
  { step: "01", title: "Audience Research",    desc: "We dig deep into your target audience's pain points, search habits, and content preferences before writing a single word." },
  { step: "02", title: "Content Strategy",     desc: "A prioritized editorial calendar tied to your business goals — not just a random list of blog ideas." },
  { step: "03", title: "Expert Creation",      desc: "Every piece is written by specialist writers who understand your industry, voice, and conversion objectives." },
  { step: "04", title: "SEO Optimization",     desc: "On-page optimization, semantic keywords, and internal linking baked in from the first draft — never retrofitted." },
  { step: "05", title: "Distribution",         desc: "We amplify your content across channels — email, social, communities, and strategic partnerships." },
  { step: "06", title: "Track & Iterate",      desc: "Monthly performance reviews with engagement, traffic, and lead data. We double down on what works." },
]

const whyUs = [
  { icon: "🧠", title: "Strategy-Led Writing",   desc: "We don't produce content for content's sake. Every piece has a defined goal, KPI, and funnel stage." },
  { icon: "🎯", title: "Conversion Focus",        desc: "Our writers understand buyer psychology — content that educates and persuades, not just entertains." },
  { icon: "🔍", title: "Built-In SEO",            desc: "Every content piece is optimized for search from day one — you rank and engage at the same time." },
  { icon: "⚡", title: "Consistent Velocity",     desc: "Reliable publishing cadence that keeps your audience engaged and search engines happy year-round." },
  { icon: "🗣️", title: "Voice Matching",         desc: "We study your brand voice and replicate it perfectly — readers never know it wasn't written in-house." },
  { icon: "📈", title: "Measurable ROI",          desc: "Traffic growth, lead generation, and engagement metrics you can take to the boardroom with confidence." },
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

export default function ContentMarketingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const counters = document.querySelectorAll(".sp-stat-num[data-target], .sp-result-num[data-target]")
    const obs = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (!el.isIntersecting) return
        const node   = el.target as HTMLElement
        const target = parseInt(node.dataset.target || "0", 10)
        const suffix = node.dataset.suffix || ""
        let cur = 0
        const step = Math.ceil(target / (1800 / 16))
        const t = setInterval(() => { cur = Math.min(cur + step, target); node.textContent = cur.toLocaleString() + suffix; if (cur >= target) clearInterval(t) }, 16)
        obs.unobserve(node)
      })
    }, { threshold: 0.3 })
    counters.forEach(n => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="sp-page cm-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">

          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Content Marketing
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Content That <br /><span className="accent">Attracts. Converts.<br />Compounds.</span>
            </h1>
            <p className="sp-hero-sub scroll-reveal delay-2">
              We craft strategic content that builds your authority, ranks on search engines, and turns strangers into loyal customers — month after month, compounding over time.
            </p>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Get a Content Strategy</a>
              <a href="#process" className="sp-btn outline">See Our Process</a>
            </div>
            <div className="sp-hero-stats scroll-reveal delay-4">
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">10<span className="a">x</span></span><span className="sp-hero-stat-label">More leads vs. outbound</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">6<span className="a">mo</span></span><span className="sp-hero-stat-label">To measurable ROI</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">3<span className="a">x</span></span><span className="sp-hero-stat-label">More traffic in year one</span></div>
            </div>
          </div>

          {/* Visual */}
          <div className="cm-hero-visual scroll-reveal delay-2">
            <div className="cm-card cm-card-blog">
              <div className="cm-card-tag">BLOG</div>
              <p className="cm-card-title">10 Strategies That Tripled Our Organic Traffic</p>
              <div className="cm-card-meta"><span>✍️ 8 min read</span><span>📈 +2.4k visits</span></div>
              <div className="cm-card-lines"><div /><div /><div /></div>
            </div>
            <div className="cm-card cm-card-video">
              <div className="cm-play">▶</div>
              <div>
                <div className="cm-card-tag">VIDEO</div>
                <p className="cm-card-title">Brand Story — 2.3M Views</p>
              </div>
            </div>
            <div className="cm-card cm-card-infographic">
              <div className="cm-card-tag">INFOGRAPHIC</div>
              <div className="cm-bars">
                <div style={{ height: "55%"  }} />
                <div style={{ height: "80%"  }} />
                <div style={{ height: "40%"  }} />
                <div style={{ height: "95%"  }} />
                <div style={{ height: "65%"  }} />
              </div>
              <div className="cm-card-meta"><span>📊 3.1k shares</span></div>
            </div>
            <div className="cm-card cm-card-email">
              <div className="cm-card-tag">EMAIL</div>
              <div className="cm-email-meta">
                <span className="cm-email-chip">Open: 42%</span>
                <span className="cm-email-chip">CTR: 8.7%</span>
              </div>
              <div className="cm-card-lines short"><div /><div /></div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="sp-stats-strip">
        <div className="sp-stats-grid">
          {[
            { t: 70,   s: "%", l: "of marketers actively invest in content marketing" },
            { t: 3,    s: "x", l: "more leads generated vs. traditional outbound marketing" },
            { t: 62,   s: "%", l: "lower cost per lead than traditional paid advertising" },
            { t: 1000, s: "s", l: "of blog posts we've published across 20+ industries" },
          ].map((d, i) => (
            <div key={i} className="sp-stat-item scroll-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="sp-stat-num" data-target={d.t} data-suffix={d.s}>0{d.s}</span>
              <span className="sp-stat-label">{d.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT TYPES ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">What We Create</span>
            <h2 className="sp-h2">Every Format. Every Funnel Stage.</h2>
            <p className="sp-lead">From top-of-funnel awareness to bottom-of-funnel conversion — we produce content that works at every step of the buyer journey.</p>
          </div>
          <div className="sp-features-grid">
            {contentTypes.map((ct, i) => (
              <div key={i} className="sp-feature-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="sp-feature-icon-wrap"><span>{ct.icon}</span></div>
                <h3 className="sp-feature-title">{ct.title}</h3>
                <p className="sp-feature-desc">{ct.desc}</p>
                <div className="sp-card-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT FUNNEL ── */}
      <section className="cm-funnel-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Framework</span>
            <h2 className="sp-h2">The Content Funnel That Converts</h2>
            <p className="sp-lead">We map every content piece to a specific funnel stage so nothing is created without purpose.</p>
          </div>
          <div className="cm-funnel scroll-reveal delay-2">
            {[
              { stage: "AWARENESS",     icon: "📣", w: "100%", label: "Blogs, Social, Video, Infographics" },
              { stage: "INTEREST",      icon: "🔍", w: "78%",  label: "Case Studies, Guides, Webinars" },
              { stage: "DESIRE",        icon: "💡", w: "58%",  label: "Testimonials, Comparisons, Demos" },
              { stage: "ACTION",        icon: "🚀", w: "40%",  label: "Landing Pages, Email Sequences, CTAs" },
            ].map((f, i) => (
              <div key={i} className="cm-funnel-row" style={{ width: f.w }}>
                <span className="cm-funnel-icon">{f.icon}</span>
                <span className="cm-funnel-stage">{f.stage}</span>
                <span className="cm-funnel-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sp-process-section" id="process">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">How We Work</span>
            <h2 className="sp-h2">A Content Engine, Not a One-Off</h2>
            <p className="sp-lead">A repeatable system that keeps producing results long after the first publish date.</p>
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
            <h2 className="sp-why-title">Content Built to<br /><span className="a">Perform, Not Just Publish</span></h2>
            <p className="sp-why-desc">We've seen what happens when brands publish without strategy — wasted budgets, zero traction. Every piece we create has a goal, a target, and a measurement plan.</p>
            <a href="#contact" className="sp-btn primary">Start Creating Today</a>
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
            <h2 className="sp-h2 light">Proof in the Numbers</h2>
          </div>
          <div className="sp-results-grid">
            {[
              { t: 5000, s: "+", l: "Content Pieces Published" },
              { t: 300,  s: "+", l: "Brands We've Grown" },
              { t: 420,  s: "%", l: "Average Traffic Increase" },
              { t: 12,   s: "+", l: "Content Formats Mastered" },
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
            <h2 className="sp-h2">Questions We Hear Often</h2>
          </div>
          <div className="sp-faq-wrap">
            {contentMarketingFaqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section" id="contact">
        <div className="sp-cta-glow" />
        <div className="sp-cta-inner scroll-reveal scale-in">
          <span className="sp-tag light">Let's Create</span>
          <h2 className="sp-cta-title">Ready to Build a Content Engine?</h2>
          <p className="sp-cta-desc">Get a free content strategy consultation — we'll map out your topics, formats, and publishing plan within 48 hours.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Get My Free Strategy</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
          <p className="sp-cta-note">No commitment · Results-focused · Tailored to your brand</p>
        </div>
      </section>

    </div>
  )
}
