"use client"

import { useEffect, useState } from "react"
import type { CSSProperties } from "react"
import Link from "next/link"
import { webDevFaqs } from "../data/faq-content"
import "../styles/sp-base.css"
import "../styles/web-dev-page.css"

const services = [
  { icon: "🏢", title: "Corporate Websites",    desc: "Professional, conversion-focused brand websites that establish credibility and drive qualified enquiries around the clock." },
  { icon: "🛒", title: "E-Commerce Stores",     desc: "High-converting online stores with seamless checkout, inventory management, and mobile-first shopping experiences." },
  { icon: "🚀", title: "Landing Pages",          desc: "Precision-engineered landing pages optimized for a single conversion goal — built to outperform your competitors." },
  { icon: "📱", title: "Progressive Web Apps",  desc: "App-like experiences in the browser — offline support, push notifications, and blazing fast load times." },
  { icon: "🔌", title: "Custom Web Apps",       desc: "Bespoke web applications with complex logic, user authentication, dashboards, and third-party integrations." },
  { icon: "🔄", title: "Website Redesigns",     desc: "Transform outdated websites into modern, fast, and conversion-ready platforms without losing your SEO equity." },
]

const techStack = [
  { name: "React",      color: "#61dafb" },
  { name: "Next.js",    color: "#fff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js",    color: "#68a063" },
  { name: "WordPress",  color: "#21759b" },
  { name: "Shopify",    color: "#96bf48" },
  { name: "Webflow",    color: "#4353ff" },
  { name: "MongoDB",    color: "#47a248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "AWS",        color: "#ff9900" },
  { name: "Vercel",     color: "#fff" },
  { name: "Tailwind",   color: "#38bdf8" },
]

const process = [
  { step: "01", title: "Discovery & Scope",      desc: "We define goals, user personas, technical requirements, and success metrics before a single line of code is written." },
  { step: "02", title: "UX/UI Design",           desc: "Wireframes, design systems, and high-fidelity mockups — approved by you before development begins." },
  { step: "03", title: "Development Sprint",     desc: "Clean, scalable code built with modern frameworks. Weekly progress demos so you're never in the dark." },
  { step: "04", title: "Testing & QA",           desc: "Cross-browser, cross-device, accessibility, and performance testing — we don't launch anything that isn't perfect." },
  { step: "05", title: "Launch & Deploy",         desc: "Zero-downtime deployment with rollback capability. We handle DNS, SSL, CDN, and hosting configuration." },
  { step: "06", title: "Support & Iterate",      desc: "Post-launch monitoring, bug fixes, and iterative improvements based on real user behavior and analytics." },
]

const whyUs = [
  { icon: "⚡", title: "Performance-First Builds", desc: "Every site we build achieves 90+ Lighthouse scores for speed, accessibility, and best practices out of the box." },
  { icon: "📱", title: "Mobile-First Design",      desc: "Over 60% of web traffic is mobile. We design for mobile first, then scale up — not the other way around." },
  { icon: "🔒", title: "Security by Default",      desc: "HTTPS, content security policies, dependency audits, and secure coding practices baked into every project." },
  { icon: "🎨", title: "Pixel-Perfect Design",     desc: "We don't use cookie-cutter templates. Every design is custom-crafted to match your brand identity exactly." },
  { icon: "📈", title: "Built for Conversions",    desc: "CTA placement, form optimization, page speed — every decision is made with conversion rate in mind." },
  { icon: "🤝", title: "Collaborative Process",    desc: "Weekly demos, Slack access, and a dedicated project manager. You're always in the loop, never in the dark." },
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

export default function WebDevPage() {
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
    <div className="sp-page wd-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">

          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Website Development
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Websites That<br /><span className="accent">Work While You Sleep.</span>
            </h1>
            <p className="sp-hero-sub scroll-reveal delay-2">
              We design and develop fast, beautiful, and conversion-optimized websites that represent your brand perfectly and turn visitors into customers — 24/7, automatically.
            </p>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Start My Project</a>
              <a href="#services" className="sp-btn outline">What We Build</a>
            </div>
            <div className="sp-hero-stats scroll-reveal delay-4">
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">90<span className="a">+</span></span><span className="sp-hero-stat-label">Lighthouse score guaranteed</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">400<span className="a">+</span></span><span className="sp-hero-stat-label">Websites launched</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">4<span className="a">wk</span></span><span className="sp-hero-stat-label">Average delivery time</span></div>
            </div>
          </div>

          {/* Visual — Browser Mockup */}
          <div className="wd-hero-visual scroll-reveal delay-2">
            <div className="wd-browser">
              <div className="wd-browser-bar">
                <div className="wd-dots"><span/><span/><span/></div>
                <div className="wd-url-bar">https://your-brand.com</div>
                <div className="wd-lighthouse">
                  <span className="wd-score">98</span>
                  <span className="wd-score-label">Perf</span>
                </div>
              </div>
              <div className="wd-browser-content">
                <div className="wd-split">
                  <div className="wd-code-pane">
                    <div className="wd-code-line"><span className="kw">const</span> <span className="fn">Hero</span> = () =&gt; &#123;</div>
                    <div className="wd-code-line i1"><span className="kw">return</span> (</div>
                    <div className="wd-code-line i2"><span className="tag">&lt;section</span> <span className="attr">className</span>=<span className="str">"hero"</span><span className="tag">&gt;</span></div>
                    <div className="wd-code-line i3"><span className="tag">&lt;h1&gt;</span><span className="str">Your Brand</span><span className="tag">&lt;/h1&gt;</span></div>
                    <div className="wd-code-line i3"><span className="tag">&lt;button&gt;</span><span className="str">Get Started</span><span className="tag">&lt;/button&gt;</span></div>
                    <div className="wd-code-line i2"><span className="tag">&lt;/section&gt;</span></div>
                    <div className="wd-code-line i1">)</div>
                    <div className="wd-code-line">&#125;</div>
                    <div className="wd-cursor" />
                  </div>
                  <div className="wd-preview-pane">
                    <div className="wd-preview-hero">
                      <div className="wd-preview-logo" />
                      <div className="wd-preview-h1" />
                      <div className="wd-preview-h2" />
                      <div className="wd-preview-btn">Get Started →</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wd-metric-chips">
              <div className="wd-chip green">✓ SEO Ready</div>
              <div className="wd-chip blue">✓ Mobile First</div>
              <div className="wd-chip purple">✓ Blazing Fast</div>
              <div className="wd-chip orange">✓ Accessible</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="sp-stats-strip">
        <div className="sp-stats-grid">
          {[
            { t: 88,  s: "%", l: "of users won't return after a bad website experience" },
            { t: 3,   s: "s", l: "max load time before 53% of users abandon a page" },
            { t: 400, s: "+", l: "websites built and launched across every major industry" },
            { t: 40,  s: "%", l: "average conversion rate increase after our redesigns" },
          ].map((d, i) => (
            <div key={i} className="sp-stat-item scroll-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="sp-stat-num" data-target={d.t} data-suffix={d.s}>0{d.s}</span>
              <span className="sp-stat-label">{d.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sp-features-section" id="services">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">What We Build</span>
            <h2 className="sp-h2">Every Type of Web Experience</h2>
            <p className="sp-lead">From simple landing pages to complex web applications — we've built them all, and we've built them to perform.</p>
          </div>
          <div className="sp-features-grid">
            {services.map((s, i) => (
              <div key={i} className="sp-feature-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="sp-feature-icon-wrap"><span>{s.icon}</span></div>
                <h3 className="sp-feature-title">{s.title}</h3>
                <p className="sp-feature-desc">{s.desc}</p>
                <div className="sp-card-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="wd-tech-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Stack</span>
            <h2 className="sp-h2">Best-in-Class Technologies</h2>
            <p className="sp-lead">We use the right tool for the right job — modern, battle-tested technologies that scale with your business.</p>
          </div>
          <div className="wd-tech-grid scroll-reveal delay-2">
            {techStack.map((t, i) => (
              <div key={i} className="wd-tech-chip" style={{ '--chip-color': t.color, animationDelay: `${i * 0.05}s` } as CSSProperties}>
                <span className="wd-tech-dot" style={{ background: t.color }} />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sp-process-section" id="process">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Process</span>
            <h2 className="sp-h2">From Idea to Live in Weeks</h2>
            <p className="sp-lead">A transparent, collaborative process with no surprises — just a beautiful, working website delivered on time.</p>
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
            <h2 className="sp-why-title">Code That's Clean.<br /><span className="a">Results That Are Real.</span></h2>
            <p className="sp-why-desc">We've seen agencies ship beautiful websites that don't convert. We've seen developers ship ugly sites that do. We do both — and we back it up with data.</p>
            <a href="#contact" className="sp-btn primary">Start My Website</a>
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
            <span className="sp-tag light">Our Portfolio</span>
            <h2 className="sp-h2 light">Built for Performance</h2>
          </div>
          <div className="sp-results-grid">
            {[
              { t: 400, s: "+", l: "Websites Launched" },
              { t: 98,  s: "",  l: "Average Lighthouse Score" },
              { t: 40,  s: "%", l: "Avg Conversion Uplift" },
              { t: 8,   s: "+", l: "Years of Web Expertise" },
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
            <h2 className="sp-h2">Web Development Questions</h2>
          </div>
          <div className="sp-faq-wrap">
            {webDevFaqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section" id="contact">
        <div className="sp-cta-glow" />
        <div className="sp-cta-inner scroll-reveal scale-in">
          <span className="sp-tag light">Let's Build</span>
          <h2 className="sp-cta-title">Ready to Build Your Dream Website?</h2>
          <p className="sp-cta-desc">Get a free project scoping call — we'll outline the approach, timeline, and investment within 24 hours.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Start My Project</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
          <p className="sp-cta-note">Fixed-price projects · On-time delivery · Post-launch support</p>
        </div>
      </section>

    </div>
  )
}
