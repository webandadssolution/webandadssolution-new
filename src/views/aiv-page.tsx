"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlineHub,
  MdOutlineVerified,
  MdOutlineStars,
  MdOutlineTravelExplore,
  MdOutlineRefresh,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/aiv-page.css"

const whatWeFocusOn = [
  { icon: <MdOutlineHub />,           title: "Building a Strong Digital Presence", desc: "Creating a foundation that helps AI platforms understand your business and the services you provide." },
  { icon: <MdOutlineVerified />,      title: "Content That AI Can Trust",          desc: "Developing clear, well-structured content that demonstrates expertise and answers real customer questions." },
  { icon: <MdOutlineStars />,         title: "Strengthening Brand Authority",      desc: "Improving the credibility of your business through consistent information, quality content, and trusted digital signals." },
  { icon: <MdOutlineTravelExplore />, title: "Visibility Beyond Google",           desc: "Preparing your business for AI-powered search while continuing to support traditional search visibility through SEO, AEO, and GEO." },
  { icon: <MdOutlineRefresh />,        title: "Adapting as AI Evolves",             desc: "AI search is changing quickly. We continuously refine strategies to help your business stay visible as new platforms and search experiences emerge." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Prompt communication",
  "Transparent reporting",
  "Practical strategies tailored to your business",
]

export default function AIVPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page aiv-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />AI Visibility Services
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              AI Is Recommending Businesses.<br /><span className="accent">Let's Make Sure It Knows Yours.</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>People no longer rely on a single search engine to discover products and services. They're asking ChatGPT for recommendations, comparing businesses in Gemini, exploring Perplexity, and using AI-powered search experiences before making a decision.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>If your business isn't visible across these platforms, you're missing opportunities before customers even visit your website.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, we help businesses strengthen their AI visibility by improving how they're understood, referenced, and recommended across today's AI-powered search landscape.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/aiv-hero.jpg"
              alt="AI Visibility Services"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── YOUR ONLINE PRESENCE IS BIGGER THAN YOUR WEBSITE ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/aiv-presence.jpg"
                alt="Your digital presence"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>Your Online Presence Is Bigger Than Your Website</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>AI doesn't judge your business based on a single web page.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>It looks at your website, your content, your authority, your consistency, and the signals your brand sends across the web.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>When those signals are weak or disconnected, visibility suffers.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Our job is to strengthen every piece so your business is easier for AI platforms to recognize and easier for potential customers to discover.</p>
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

      {/* ── STAY VISIBLE WHEREVER CUSTOMERS ARE SEARCHING ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">Stay Visible Wherever<br /><span className="a">Customers Are Searching</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>The way people discover businesses is evolving, but the goal remains the same.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Your business needs to be easy to find, easy to understand, and easy to trust.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>That's exactly what our AI Visibility services are designed to achieve.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/aiv-future.jpg"
              alt="Stay visible in AI search"
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
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "12px" }}>Technology changes. Good service shouldn't.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>When you partner with us, you'll work with a team that's responsive, proactive, and invested in your success.</p>
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
          <h2 className="sp-cta-title">Let's Future-Proof Your Online Visibility</h2>
          <p className="sp-cta-desc">AI is already influencing how customers discover businesses.</p>
          <p className="sp-cta-desc">Let's make sure your business is part of that conversation.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
