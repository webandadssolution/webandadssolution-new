"use client"

import { useEffect, useRef, useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { seoFaqs } from "../data/faq-content"
import "../styles/seo-page.css"

const SEOPage = () => {
  const statsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const counters = document.querySelectorAll(".seo-stat-number[data-target]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = parseInt(el.getAttribute("data-target") || "0", 10)
            const suffix = el.getAttribute("data-suffix") || ""
            const duration = 1800
            const step = Math.ceil(target / (duration / 16))
            let current = 0
            const timer = setInterval(() => {
              current = Math.min(current + step, target)
              el.textContent = current.toLocaleString() + suffix
              if (current >= target) clearInterval(timer)
            }, 16)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    counters.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const seoServices = [
    {
      icon: "🔍",
      title: "On-Page SEO",
      desc: "Optimize every element on your website — meta tags, headings, content structure, internal linking, and keyword placement — to rank higher and convert visitors into customers.",
      color: "#f06820",
    },
    {
      icon: "🔗",
      title: "Off-Page SEO & Link Building",
      desc: "Build domain authority through high-quality backlinks from trusted sources. We develop white-hat link-building strategies that boost your credibility and search rankings sustainably.",
      color: "#6c25f7",
    },
    {
      icon: "⚙️",
      title: "Technical SEO",
      desc: "Fix crawl errors, improve site speed, implement structured data, optimize Core Web Vitals, and ensure search engines can properly index your entire website.",
      color: "#0cb666",
    },
    {
      icon: "📍",
      title: "Local SEO",
      desc: "Dominate local search results with optimized Google Business Profile, local citations, geo-targeted content, and review management — perfect for businesses serving specific locations.",
      color: "#0055cc",
    },
    {
      icon: "🛒",
      title: "E-Commerce SEO",
      desc: "Drive qualified traffic to your product pages with category optimization, schema markup, product content strategies, and conversion-focused SEO tailored for online stores.",
      color: "#e91e99",
    },
    {
      icon: "✍️",
      title: "Content SEO",
      desc: "Create high-value, search-intent-aligned content that ranks and converts. Our content strategies include keyword research, topic clusters, and editorial calendars.",
      color: "#00a2c2",
    },
  ]

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      desc: "We perform an in-depth audit of your website, competitors, and market landscape to identify opportunities and roadblocks.",
    },
    {
      step: "02",
      title: "Keyword Research & Strategy",
      desc: "We uncover high-intent, profitable keywords your target audience uses and build a prioritized content strategy around them.",
    },
    {
      step: "03",
      title: "On-Page Optimization",
      desc: "We optimize your existing pages and create new content targeting the right keywords with the right structure.",
    },
    {
      step: "04",
      title: "Technical Fixes & Speed",
      desc: "We resolve technical issues — crawlability, speed, structured data, mobile UX — that hold your rankings back.",
    },
    {
      step: "05",
      title: "Authority Building",
      desc: "We earn powerful backlinks through digital PR, outreach, and content amplification to strengthen your domain authority.",
    },
    {
      step: "06",
      title: "Track, Report & Scale",
      desc: "Monthly reports with ranking movement, traffic growth, and ROI. We iterate and scale what works.",
    },
  ]

  const whyUs = [
    { icon: "📈", title: "Data-Driven Decisions", desc: "Every strategy is backed by real data — no guesswork, only proven tactics that move the needle." },
    { icon: "🤝", title: "100% White-Hat SEO", desc: "We only use ethical, Google-approved techniques that build long-term rankings without penalty risk." },
    { icon: "🎯", title: "Industry-Specific Expertise", desc: "From healthcare to e-commerce, we understand your niche and craft strategies that speak to your audience." },
    { icon: "📊", title: "Transparent Reporting", desc: "You always know what we're doing and why. Clear, honest reports with real metrics that matter." },
    { icon: "⚡", title: "Fast Turnaround", desc: "We move quickly without cutting corners — optimizations deployed within days, not months." },
    { icon: "🏆", title: "Proven Track Record", desc: "Hundreds of keywords ranked on Page 1, across industries ranging from local businesses to global brands." },
  ]

  const industries = [
    "Healthcare", "E-Commerce", "Real Estate", "Legal / Law Firms", "Finance & Banking",
    "Technology / SaaS", "Hospitality & Hotels", "Travel & Tourism", "Education", "Manufacturing",
    "Casino & Gaming", "Astrology", "IT Companies", "Retail",
  ]

  return (
    <div className="seo-page">

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg-grid" />
        <div className="seo-hero-glow seo-glow-1" />
        <div className="seo-hero-glow seo-glow-2" />

        <div className="seo-hero-inner">
        <div className="seo-hero-content">
          <div className="seo-badge scroll-reveal">
            <span className="seo-badge-dot" />
            Search Engine Optimization
          </div>

          <h1 className="seo-hero-title scroll-reveal delay-1">
            Rank Higher. <br />
            <span className="seo-title-accent">Get Found. Grow Faster.</span>
          </h1>

          <p className="seo-hero-subtitle scroll-reveal delay-2">
            We build custom SEO strategies that put your business in front of the right audience at the right moment —
            turning search traffic into predictable, scalable revenue.
          </p>

          <div className="seo-hero-ctas scroll-reveal delay-3">
            <a href="#contact" className="seo-btn-primary">Get a Free SEO Audit</a>
            <a href="#process" className="seo-btn-outline">See How We Work</a>
          </div>

          <div className="seo-hero-stats scroll-reveal delay-4">
            <div className="seo-hero-stat">
              <span className="seo-hero-stat-number">500<span className="seo-hero-stat-plus">+</span></span>
              <span className="seo-hero-stat-label">Keywords on Page 1</span>
            </div>
            <div className="seo-hero-stat-divider" />
            <div className="seo-hero-stat">
              <span className="seo-hero-stat-number">3x</span>
              <span className="seo-hero-stat-label">Average Traffic Growth</span>
            </div>
            <div className="seo-hero-stat-divider" />
            <div className="seo-hero-stat">
              <span className="seo-hero-stat-number">98<span className="seo-hero-stat-plus">%</span></span>
              <span className="seo-hero-stat-label">Client Retention Rate</span>
            </div>
          </div>
        </div>

        <div className="seo-hero-visual scroll-reveal delay-2">
          <div className="seo-rank-card">
            <div className="seo-rank-header">
              <div className="seo-rank-dot green" /><div className="seo-rank-dot yellow" /><div className="seo-rank-dot red" />
              <span>Search Rankings</span>
            </div>
            <div className="seo-rank-list">
              {["your-brand.com", "competitor-a.com", "competitor-b.com", "competitor-c.com"].map((domain, i) => (
                <div key={i} className={`seo-rank-row ${i === 0 ? "top-rank" : ""}`}>
                  <span className="seo-rank-pos">#{i + 1}</span>
                  <div className="seo-rank-bar-wrap">
                    <div className="seo-rank-bar" style={{ width: `${100 - i * 18}%`, background: i === 0 ? "#f06820" : "#e0e0e0" }} />
                  </div>
                  <span className="seo-rank-domain">{domain}</span>
                </div>
              ))}
            </div>
            <div className="seo-rank-footer">
              <span className="seo-rank-badge">↑ 14 positions this month</span>
            </div>
          </div>

          <div className="seo-traffic-card">
            <span className="seo-traffic-label">Organic Traffic</span>
            <span className="seo-traffic-value">+247%</span>
            <div className="seo-traffic-bars">
              {[30, 42, 38, 55, 48, 70, 88, 95].map((h, i) => (
                <div key={i} className="seo-traffic-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </div>
        </div>{/* end seo-hero-inner */}
      </section>

      {/* ── STATS STRIP ── */}
      <section className="seo-stats-strip" ref={statsRef}>
        <div className="seo-stats-container">
          {[
            { target: 93, suffix: "%", label: "of online experiences begin with a search engine" },
            { target: 75, suffix: "%", label: "of users never scroll past the first page of results" },
            { target: 1000, suffix: "%", label: "more traffic from organic vs. paid search over time" },
            { target: 14, suffix: "x", label: "higher close rate for SEO leads than outbound" },
          ].map((stat, i) => (
            <div key={i} className="seo-stat-item scroll-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="seo-stat-number" data-target={stat.target} data-suffix={stat.suffix}>0{stat.suffix}</span>
              <span className="seo-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="seo-services-section" id="services">
        <div className="seo-section-container">
          <div className="seo-section-header scroll-reveal">
            <span className="seo-section-tag">What We Do</span>
            <h2 className="seo-section-title">Comprehensive SEO Services</h2>
            <p className="seo-section-desc">
              From technical foundations to content authority — every dimension of SEO, handled by specialists.
            </p>
          </div>

          <div className="seo-services-grid">
            {seoServices.map((service, i) => (
              <div key={i} className="seo-service-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="seo-service-icon-wrap" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                  <span className="seo-service-icon">{service.icon}</span>
                </div>
                <h3 className="seo-service-title">{service.title}</h3>
                <p className="seo-service-desc">{service.desc}</p>
                <div className="seo-service-accent" style={{ background: service.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="seo-process-section" id="process">
        <div className="seo-section-container">
          <div className="seo-section-header scroll-reveal">
            <span className="seo-section-tag">Our Methodology</span>
            <h2 className="seo-section-title">A Process Built for Results</h2>
            <p className="seo-section-desc">
              A proven 6-step framework that transforms your organic presence from the ground up.
            </p>
          </div>

          <div className="seo-process-grid">
            {process.map((item, i) => (
              <div key={i} className="seo-process-card scroll-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="seo-process-step-num">{item.step}</div>
                <div className="seo-process-line" />
                <h3 className="seo-process-title">{item.title}</h3>
                <p className="seo-process-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="seo-why-section">
        <div className="seo-section-container">
          <div className="seo-why-inner">
            <div className="seo-why-left scroll-reveal from-left">
              <span className="seo-section-tag light">Why Choose Us</span>
              <h2 className="seo-why-title">
                SEO That Delivers<br />
                <span className="seo-title-accent-dark">Real Business Growth</span>
              </h2>
              <p className="seo-why-desc">
                We don't chase vanity metrics. Every tactic we employ is tied to rankings, traffic, leads, and revenue that
                actually matter to your bottom line.
              </p>
              <a href="#contact" className="seo-btn-primary-dark">Start Growing Today</a>
            </div>

            <div className="seo-why-right">
              {whyUs.map((item, i) => (
                <div key={i} className="seo-why-card scroll-reveal from-right" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="seo-why-icon">{item.icon}</div>
                  <div>
                    <h4 className="seo-why-card-title">{item.title}</h4>
                    <p className="seo-why-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS COUNTER ── */}
      <section className="seo-results-section">
        <div className="seo-results-bg" />
        <div className="seo-section-container seo-results-container">
          <div className="seo-section-header scroll-reveal">
            <span className="seo-section-tag">Our Impact</span>
            <h2 className="seo-section-title light">Numbers That Speak For Themselves</h2>
          </div>
          <div className="seo-results-grid">
            {[
              { target: 500, suffix: "+", label: "Keywords Ranked on Page 1" },
              { target: 350, suffix: "+", label: "Clients Served Globally" },
              { target: 247, suffix: "%", label: "Average Organic Traffic Increase" },
              { target: 8, suffix: "+", label: "Years of SEO Excellence" },
            ].map((r, i) => (
              <div key={i} className="seo-result-item scroll-reveal scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="seo-stat-number" data-target={r.target} data-suffix={r.suffix}>0{r.suffix}</span>
                <span className="seo-result-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="seo-industries-section">
        <div className="seo-section-container">
          <div className="seo-section-header scroll-reveal">
            <span className="seo-section-tag">Who We Serve</span>
            <h2 className="seo-section-title">Industries We Specialize In</h2>
            <p className="seo-section-desc">
              Deep niche expertise means strategies built for your market — not generic playbooks.
            </p>
          </div>
          <div className="seo-industries-grid scroll-reveal delay-2">
            {industries.map((industry, i) => (
              <div key={i} className="seo-industry-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="seo-faq-section">
        <div className="seo-section-container seo-faq-container">
          <div className="seo-section-header scroll-reveal">
            <span className="seo-section-tag">FAQ</span>
            <h2 className="seo-section-title">Common Questions, Honest Answers</h2>
          </div>
          <div className="seo-faq-list">
            {seoFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="seo-cta-section" id="contact">
        <div className="seo-cta-glow" />
        <div className="seo-cta-content scroll-reveal scale-in">
          <span className="seo-cta-tag">Let's Get Started</span>
          <h2 className="seo-cta-title">Ready to Dominate Search Rankings?</h2>
          <p className="seo-cta-desc">
            Get a free, no-obligation SEO audit of your website and a custom growth strategy — delivered within 48 hours.
          </p>
          <div className="seo-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="seo-btn-cta-primary">Get My Free SEO Audit</a>
            <Link href="/services" className="seo-btn-cta-outline">Explore All Services</Link>
          </div>
          <p className="seo-cta-note">No credit card required · Results-focused · Cancel anytime</p>
        </div>
      </section>

    </div>
  )
}

function FAQItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [open, setOpen] = useToggle(false)

  return (
    <div className={`seo-faq-item scroll-reveal ${open ? "faq-open" : ""}`} style={{ animationDelay: `${delay}s` }}>
      <button className="seo-faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="seo-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="seo-faq-answer" style={{ maxHeight: open ? "300px" : "0" }}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

function useToggle(initial: boolean): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [state, setState] = useState(initial)
  return [state, setState]
}

export default SEOPage
