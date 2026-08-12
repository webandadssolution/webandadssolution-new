"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlineDesignServices,
  MdOutlineWebAsset,
  MdOutlinePhoneIphone,
  MdOutlineStyle,
  MdOutlineAdsClick,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/wlf-page.css"

const whatWeImprove = [
  { icon: <MdOutlineDesignServices />, title: "Modern Design",          desc: "Refreshing layouts, colours, typography, and visual elements to give your website a cleaner, more professional appearance." },
  { icon: <MdOutlineWebAsset />,       title: "Better User Experience", desc: "Improving navigation and page structure so visitors can find information quickly and move through your website with ease." },
  { icon: <MdOutlinePhoneIphone />,    title: "Mobile-Friendly Layouts",desc: "Ensuring your website looks polished and performs well across phones, tablets, and desktops." },
  { icon: <MdOutlineStyle />,          title: "Stronger Brand Consistency", desc: "Aligning your website with your current branding, messaging, and business identity." },
  { icon: <MdOutlineAdsClick />,       title: "Better Engagement",      desc: "Creating pages that encourage visitors to stay longer, explore further, and take action." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Fast communication",
  "No long support queues",
  "Design updates tailored to your business",
]

export default function WLFPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page wlf-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Website Look &amp; Feel Updation
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Your Website Should Reflect<br /><span className="accent">the Business You've Become</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Businesses evolve. Websites often don't.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>A site that looked modern a few years ago can quickly start feeling dated. Outdated layouts, inconsistent branding, and poor user experience can affect how visitors perceive your business before they've even read a word.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, we refresh existing websites to create a cleaner, more modern experience without rebuilding everything from scratch.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/wlf-hero.jpg"
              alt="Website Look and Feel"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── FIRST IMPRESSIONS HAPPEN FAST ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/wlf-impression.jpg"
                alt="First impressions matter"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>First Impressions Happen Fast</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Your website is often the first interaction someone has with your business.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>If it feels cluttered, outdated, or difficult to navigate, visitors may question the quality of your products or services, even when they're excellent.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>A thoughtful design update helps your business appear more professional, more credible, and easier to trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE IMPROVE ── */}
      <section className="sp-process-section" id="services">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Approach</span>
            <h2 className="sp-h2">What We Improve</h2>
          </div>
          <div className="sp-features-grid">
            {whatWeImprove.map((item, i) => (
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

      {/* ── A FRESH LOOK. THE SAME BUSINESS. ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">A Fresh Look.<br /><span className="a">The Same Business.</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>A website update doesn't always require starting from scratch.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Sometimes, a series of thoughtful improvements is all it takes to create a stronger first impression and a better experience for your visitors.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Our goal is to modernize your website while preserving everything that's already working.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/wlf-fresh.jpg"
              alt="Fresh website design"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES CHOOSE WEB AND ADS SOLUTION ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Why Choose Us</span>
            <h2 className="sp-h2">Why Businesses Choose Web and Ads Solution</h2>
          </div>
          <div className="scroll-reveal delay-1" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>We believe updating a website should feel collaborative, not complicated.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>You'll have a dedicated account manager, clear communication throughout the project, and a team that's easy to reach whenever you need us.</p>
            <div className="sp-why-cards">
              {whyUsPoints.map((point, i) => (
                <div key={i} className="sp-why-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s`, background: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                  <MdOutlineCheckCircle style={{ color: "var(--accent)", fontSize: "22px", flexShrink: 0, marginTop: "2px" }} />
                  <div><p className="sp-why-card-title" style={{ marginBottom: 0, color: "var(--text-primary)" }}>{point}</p></div>
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
          <h2 className="sp-cta-title">Give Your Website a Fresh Start</h2>
          <p className="sp-cta-desc">If your website no longer reflects the quality of your business, it may be time for an update.</p>
          <p className="sp-cta-desc">Let's create a website that gives visitors the confidence to take the next step.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
