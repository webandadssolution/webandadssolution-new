import ContactForm from "../components/contact-form"
import "../styles/sp-base.css"
import "../styles/seo-velocity-plan-page.css"

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5c2.8 1.6 4.5 4.6 4.5 8 0 2-.6 3.8-1.6 5.3L12 18l-2.9-2.2C8.1 14.3 7.5 12.5 7.5 10.5c0-3.4 1.7-6.4 4.5-8Z" />
    <circle cx="12" cy="9.5" r="1.6" />
    <path d="M9 14.5 6 17l1 4 3-2.5M15 14.5l3 2.5-1 4-3-2.5" />
  </svg>
)

const AiChipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M19.2 4.8l-1.6 1.6M6.4 17.6l-1.6 1.6" />
  </svg>
)

const CardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="5.5" width="19" height="13" rx="2.2" />
    <path d="M2.5 9.5h19" />
    <path d="M6 14.5h5" />
  </svg>
)

const highlights = [
  {
    icon: <RocketIcon />,
    title: "Built to Scale With You",
    desc: "Five tiers — Launchpad, Momentum, Impact, Velocity, and Apex — each unlocking more keywords, backlinks, landing pages, and outreach as you grow.",
  },
  {
    icon: <AiChipIcon />,
    title: "AI-Ready Optimization",
    desc: "Every plan includes AI Compatibility Testing and a growing AI Visibility Audit, with G.E.O and A.E.O unlocked on Velocity and Apex for the next wave of search.",
  },
  {
    icon: <CardIcon />,
    title: "Transparent, Tiered Pricing",
    desc: "One clear feature checklist across every tier, billed in USD, GBP, or EUR — no hidden setup fees, no surprise add-ons.",
  },
]

const SeoVelocityPlanOverviewPage = () => (
  <div className="sp-page seo-velocity-plan-page">
    {/* ── Hero ── */}
    <section className="sp-hero">
      <div className="sp-hero-grid-bg" />
      <div className="sp-hero-glow g1" />
      <div className="sp-hero-glow g2" />
      <div className="sp-hero-inner svp-hero-inner">
        <div className="sp-hero-content scroll-reveal from-left">
          <div className="sp-hero-badge">
            <span className="sp-hero-badge-dot" />
            SEO Packages — Velocity Plan
          </div>
          <h1 className="sp-hero-title">
            SEO Built To Move <span className="accent">Fast — And Compound.</span>
          </h1>
          <p className="sp-hero-sub">
            The Velocity Plan blends technical SEO, content, off-page authority, and AI-readiness into one
            accelerated growth engine — scaled across five tiers so you only pay for what your site needs right now.
          </p>
          <div className="sp-hero-ctas">
            <a href="/contact" className="sp-btn primary">Contact Now</a>
            <a href="#seo-velocity-contact" className="sp-btn outline">Talk to an SEO Strategist</a>
          </div>
          <div className="sp-hero-stats">
            <div className="sp-hero-stat">
              <span className="sp-hero-stat-num"><span className="a">5</span></span>
              <span className="sp-hero-stat-label">Plan Tiers</span>
            </div>
            <div className="sp-hero-stat-divider" />
            <div className="sp-hero-stat">
              <span className="sp-hero-stat-num"><span className="a">3</span></span>
              <span className="sp-hero-stat-label">Currencies Supported</span>
            </div>
            <div className="sp-hero-stat-divider" />
            <div className="sp-hero-stat">
              <span className="sp-hero-stat-num"><span className="a">7</span></span>
              <span className="sp-hero-stat-label">Optimization Categories</span>
            </div>
          </div>
        </div>

        <div className="svp-hero-media scroll-reveal from-right">
          <div className="svp-hero-media-glow" />
          <div className="svp-hero-media-frame parallax-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/640x480/0a0a0a/f06820?text=SEO+Velocity+Plan&font=roboto"
              alt="SEO Velocity Plan dashboard preview (placeholder)"
              width={640}
              height={480}
            />
          </div>
          <div className="svp-floating-chip svp-chip-1">
            <span className="svp-chip-dot" />
            AI Visibility Audit Included
          </div>
          <div className="svp-floating-chip svp-chip-2">5 Tiers · 3 Currencies</div>
        </div>
      </div>
    </section>

    {/* ── What's Included ── */}
    <section className="sp-features-section">
      <div className="sp-container">
        <div className="sp-section-header scroll-reveal">
          <span className="sp-tag">What's Included</span>
          <h2 className="sp-h2">Every Velocity Plan Tier Covers the Full SEO Stack</h2>
          <p className="sp-lead">
            From keyword research and on-page fixes to off-page authority building and social signals — the
            checklist scales, the categories stay the same.
          </p>
        </div>
        <div className="sp-features-grid">
          {highlights.map((h, i) => (
            <div key={h.title} className={`sp-feature-card scroll-reveal scale-in delay-${i + 1}`}>
              <div className="sp-feature-icon-wrap svp-icon">{h.icon}</div>
              <h3 className="sp-feature-title">{h.title}</h3>
              <p className="sp-feature-desc">{h.desc}</p>
              <div className="sp-card-accent-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Contact ── */}
    <section id="seo-velocity-contact" className="sp-container" style={{ paddingTop: 80, paddingBottom: 100 }}>
      <div className="scroll-reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
        <ContactForm
          title="Get a Custom SEO Strategy Call"
          subtitle="Tell us about your site and goals — we'll recommend the right Velocity Plan tier for you."
          defaultService="Search Engine Optimization (SEO)"
        />
      </div>
    </section>
  </div>
)

export default SeoVelocityPlanOverviewPage
