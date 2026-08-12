"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlineAutoGraph,
  MdOutlineVerifiedUser,
  MdOutlineSmartToy,
  MdOutlineTravelExplore,
  MdOutlineRocketLaunch,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/geo-page.css"

const whatWeFocusOn = [
  { icon: <MdOutlineAutoGraph />,      title: "Building Topical Authority",       desc: "Creating content that helps AI platforms understand your expertise and the subjects your business is known for." },
  { icon: <MdOutlineVerifiedUser />,   title: "Strengthening Trust Signals",      desc: "Improving the credibility of your website through structured content, quality mentions, and consistent business information." },
  { icon: <MdOutlineSmartToy />,       title: "AI-Friendly Content",              desc: "Developing content that's clear, well-organized, and easy for AI platforms to interpret and reference." },
  { icon: <MdOutlineTravelExplore />,  title: "Search Visibility Beyond Google",  desc: "Helping your business stay discoverable across AI-powered search experiences without losing sight of traditional SEO." },
  { icon: <MdOutlineRocketLaunch />,   title: "Future-Ready Strategy",            desc: "Combining GEO with SEO and AEO to create a search strategy that's built for where digital discovery is heading." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Prompt communication",
  "Transparent reporting",
  "Strategies tailored to your business goals",
]

export default function GEOPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page geo-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Generative Engine Optimization (GEO)
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Your Customers Are Asking AI<br /><span className="accent">for Recommendations. Is Your Business Part of the Answer?</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Search is no longer limited to Google.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>People are asking ChatGPT, Gemini, Perplexity, and other AI platforms to recommend businesses, compare services, and explain their options before making a decision.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>If your business isn't visible in these conversations, you're missing a growing source of discovery.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, our Generative Engine Optimization (GEO) services help improve your visibility across AI-powered search platforms by strengthening the signals these platforms rely on to understand and recommend businesses.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/geo-hero.jpg"
              alt="Generative Engine Optimization"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── VISIBILITY IS NO LONGER LIMITED TO SEARCH ENGINES ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/geo-visibility.jpg"
                alt="AI-powered visibility"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>Visibility Is No Longer Limited to Search Engines</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>AI platforms don't rank websites the way traditional search engines do. Instead, they analyze trusted sources, relevant content, and authority signals to generate responses.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>That means businesses need to think beyond keywords.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>They need content that demonstrates expertise, a website that's easy to understand, and a digital presence that builds credibility across the web.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>That's exactly what GEO is designed to support.</p>
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

      {/* ── GEO WORKS BEST ALONGSIDE SEO ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">GEO Works Best<br /><span className="a">Alongside SEO</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>GEO isn't a replacement for SEO.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>A strong SEO foundation gives AI platforms better information to understand your business. GEO builds on that foundation by improving how your business is represented in AI-generated responses.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>When SEO, AEO, and GEO work together, your business has more opportunities to be discovered across traditional search engines and AI-powered platforms.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/geo-strategy.jpg"
              alt="GEO and SEO working together"
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
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "12px" }}>Digital marketing continues to evolve, but one thing hasn't changed.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>You deserve a team that's easy to reach and invested in your success.</p>
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
          <h2 className="sp-cta-title">Get Your Business Ready for AI Search</h2>
          <p className="sp-cta-desc">AI-powered search is changing how people discover businesses. The sooner your business adapts, the stronger your position becomes.</p>
          <p className="sp-cta-desc">Let's build a visibility strategy that prepares your business for what's next.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
