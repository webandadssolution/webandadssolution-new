"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlineEditCalendar,
  MdOutlinePalette,
  MdOutlineForum,
  MdOutlineAccountCircle,
  MdOutlineRefresh,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/smo-page.css"

const whatWeFocusOn = [
  { icon: <MdOutlineEditCalendar />,    title: "Content Planning",    desc: "Creating content that aligns with your business goals and keeps your profiles active and engaging." },
  { icon: <MdOutlinePalette />,         title: "Creative Design",     desc: "Developing graphics and visuals that help your brand stand out in crowded feeds." },
  { icon: <MdOutlineForum />,           title: "Audience Engagement", desc: "Helping strengthen relationships through meaningful interactions and timely responses." },
  { icon: <MdOutlineAccountCircle />,   title: "Profile Optimization",desc: "Ensuring your social profiles are complete, professional, and aligned with your brand." },
  { icon: <MdOutlineRefresh />,         title: "Consistency",         desc: "Building a steady presence that keeps your business visible throughout the customer journey." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Fast communication",
  "No long support queues",
  "Creative support and content planning",
  "Strategies tailored to your business",
]

export default function SMOPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page smo-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Social Media Optimization (SMO)
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Posting Regularly Isn't the<br /><span className="accent">Same as Building a Presence</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>A lot of businesses show up on social media.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Very few leave an impression.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Content gets posted. A few likes come in. Then everything disappears into the feed.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Meanwhile, potential customers are forming opinions about your business long before they visit your website or pick up the phone.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Social media has become one of the first places people go to learn about a brand. An inactive profile raises questions. A poorly managed profile creates doubt. A strong presence builds confidence.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, we help businesses create social media profiles that look professional, stay active, and support broader business goals.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book a Free Consultation</a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/smo-hero.jpg"
              alt="Social Media Optimization"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── YOUR AUDIENCE IS PAYING ATTENTION ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/smo-audience.jpg"
                alt="Audience on social media"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>Your Audience Is Paying Attention</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Before making a purchase, people often check social media.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>They're looking for signs that a business is active, trustworthy, and engaged with its audience.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>An inconsistent presence can send the wrong message.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Our approach focuses on helping businesses stay visible, relevant, and recognizable through content that reflects their expertise and brand personality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE FOCUS ON ── */}
      <section className="sp-process-section" id="services">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Approach</span>
            <h2 className="sp-h2">What We Focus On</h2>
          </div>
          <div className="sp-features-grid">
            {whatWeFocusOn.map((item, i) => (
              <div key={i} className="sp-feature-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="sp-feature-icon-wrap" style={{ fontSize: "26px" }}>{item.icon}</div>
                <h3 className="sp-feature-title">{item.title}</h3>
                <p className="sp-feature-desc">{item.desc}</p>
                <div className="sp-card-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA SHOULD SUPPORT YOUR BUSINESS ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">Social Media Should<br /><span className="a">Support Your Business</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Likes and followers are nice to have.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Trust, visibility, and brand recognition are far more valuable.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Our goal is to help businesses create a social media presence that supports growth, strengthens credibility, and keeps them connected with their audience.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/smo-brand.jpg"
              alt="Brand building and social presence"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES WORK WITH WEB AND ADS SOLUTION ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Why Choose Us</span>
            <h2 className="sp-h2">Why Businesses Work With Web and Ads Solution</h2>
          </div>
          <div className="scroll-reveal delay-1" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "12px" }}>We believe communication shouldn't stop after onboarding.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>When you work with us, you'll have direct access to a team that stays involved and keeps you informed.</p>
            <div className="sp-why-cards">
              {whyUsPoints.map((point, i) => (
                <div key={i} className="sp-why-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s`, background: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                  <MdOutlineCheckCircle style={{ color: "var(--accent)", fontSize: "22px", flexShrink: 0, marginTop: "2px" }} />
                  <div><p className="sp-why-card-title" style={{ marginBottom: 0 }}>{point}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section" id="contact">
        <div className="sp-cta-glow" />
        <div className="sp-cta-inner scroll-reveal scale-in">
          <span className="sp-tag light">Get Started</span>
          <h2 className="sp-cta-title">Let's Build a Stronger Social Presence</h2>
          <p className="sp-cta-desc">If your social media feels inconsistent, outdated, or disconnected from your business goals, let's change that.</p>
          <p className="sp-cta-desc">Book a free consultation and discover how a stronger social presence can support your brand and your growth.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book a Free Consultation</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
