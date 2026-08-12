"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlineQuestionAnswer,
  MdOutlineSchema,
  MdOutlineVerified,
  MdOutlineRecordVoiceOver,
  MdOutlineSmartToy,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/aeo-page.css"

const whatWeFocusOn = [
  { icon: <MdOutlineQuestionAnswer />,  title: "Answer-Focused Content",      desc: "We create and optimize content that addresses the questions your audience is already asking." },
  { icon: <MdOutlineSchema />,          title: "Structured Information",       desc: "Organizing your website so search engines and AI platforms can understand your content more easily." },
  { icon: <MdOutlineVerified />,        title: "Featured Snippet Optimization",desc: "Improving your chances of appearing in answer boxes and featured search results." },
  { icon: <MdOutlineRecordVoiceOver />, title: "Voice Search Readiness",       desc: "Optimizing content for the natural, conversational way people speak to voice assistants." },
  { icon: <MdOutlineSmartToy />,        title: "AI-Friendly Content",          desc: "Creating content that's clear, credible, and easy for answer engines to reference." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Fast, responsive communication",
  "Clear reporting",
  "Practical strategies built around your goals",
]

export default function AEOPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page aeo-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Answer Engine Optimization (AEO)
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              People Aren't Just Searching<br /><span className="accent">Anymore. They're Asking.</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Think about how you search today.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Instead of typing a few keywords into Google, you're probably asking complete questions in ChatGPT, Gemini, Siri, Alexa, or Google AI Overviews.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Search has become conversational.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>The businesses that provide clear, trustworthy answers are becoming easier to discover, while others are getting left behind.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, our AEO services help prepare your website for this shift by making your content easier for answer engines to understand, trust, and present to users.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/aeo-hero.jpg"
              alt="Answer Engine Optimization"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── EVERY ANSWER STARTS SOMEWHERE ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/aeo-search.jpg"
                alt="Search and answer engines"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>Every Answer Starts Somewhere</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>When someone asks an AI assistant or search engine a question, it doesn't invent the answer. It gathers information from sources it considers reliable and relevant.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>If your website clearly answers customer questions, demonstrates expertise, and is structured correctly, you're more likely to become one of those trusted sources.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>That's exactly what Answer Engine Optimization is designed to improve.</p>
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

      {/* ── STAY VISIBLE AS SEARCH EVOLVES ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">Stay Visible as<br /><span className="a">Search Evolves</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Search isn't disappearing. It's changing.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Businesses that adapt early are better positioned to stay visible as customers rely more on AI-powered search experiences.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Our AEO strategies work alongside your existing SEO efforts, helping you strengthen your visibility across both traditional search engines and modern answer engines.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/aeo-visibility.jpg"
              alt="Stay visible in evolving search"
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
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "12px" }}>Technology changes quickly. Good support shouldn't.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>When you work with us, you'll always know what we're doing, why we're doing it, and how it supports your business.</p>
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
          <h2 className="sp-cta-title">Let's Prepare Your Business for the Next Generation of Search</h2>
          <p className="sp-cta-desc">Your customers are already asking AI platforms for recommendations and answers.</p>
          <p className="sp-cta-desc">Let's help your business become part of those conversations.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
