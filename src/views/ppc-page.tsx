"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlinePeopleAlt,
  MdOutlineMoneyOff,
  MdOutlineEditNote,
  MdOutlineTune,
  MdOutlineTrackChanges,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/ppc-page.css"

const whatWeFocusOn = [
  { icon: <MdOutlinePeopleAlt />,    title: "Reaching The Right Audience", desc: "Showing your ads to people actively searching for your products and services." },
  { icon: <MdOutlineMoneyOff />,     title: "Reducing Wasted Spend",       desc: "Identifying opportunities to improve efficiency and eliminate unnecessary costs." },
  { icon: <MdOutlineEditNote />,     title: "Creating Better Ads",         desc: "Writing compelling ad copy that encourages action and improves click-through rates." },
  { icon: <MdOutlineTune />,         title: "Campaign Optimization",       desc: "Monitoring performance and making ongoing adjustments based on real data." },
  { icon: <MdOutlineTrackChanges />, title: "Conversion Tracking",         desc: "Understanding which campaigns, keywords, and ads are contributing to business growth." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Fast responses when you need support",
  "Transparent reporting",
  "Clear communication",
  "Campaigns aligned with your business goals",
]

export default function PPCPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page ppc-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Google Ads Management
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Spending Money on Google Ads<br /><span className="accent">Shouldn't Feel Like a Gamble</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Google Ads can put your business in front of potential customers within hours.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>It can also burn through your budget just as quickly.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>The difference often comes down to strategy.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>We've spoken with business owners who were getting clicks but no enquiries. Others were spending consistently without knowing which campaigns were actually generating results. Some weren't even sure where their budget was going.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Running ads is easy.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Running profitable ads takes experience.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, we create and manage Google Ads campaigns designed to attract the right audience, reduce wasted spend, and generate meaningful business opportunities.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="ppc-hero-img scroll-reveal delay-2">
            <img
              src="/images/ppc-hero.jpg"
              alt="Google Ads Management"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "18px" }}
            />
          </div>
        </div>
      </section>

      {/* ── MORE CLICKS DON'T ALWAYS MEAN BETTER RESULTS ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="ppc-split-row">
            <div className="ppc-split-img scroll-reveal from-left">
              <img
                src="/images/ppc-analytics.jpg"
                alt="Analytics dashboard"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
              />
            </div>
            <div className="ppc-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>More Clicks Don't Always Mean Better Results</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>A campaign can generate hundreds of clicks and still underperform.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>What matters is what happens after someone clicks.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Are they finding what they expected?</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Are they taking action?</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Are they becoming customers?</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Our focus isn't simply on increasing traffic. We look at the entire journey, from keyword selection and ad copy to landing page experience and conversion performance.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Because a successful campaign isn't measured by clicks.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>It's measured by outcomes.</p>
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

      {/* ── EVERY CLICK HAS A COST ── */}
      <section className="sp-why-section">
        <div className="ppc-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="ppc-split-text">
            <h2 className="sp-why-title scroll-reveal">Every Click Has a Cost.<br /><span className="a">Let's Make It Count.</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Google Ads provides valuable insights into customer behaviour, but data alone doesn't improve performance.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Success comes from understanding what the numbers mean and knowing what changes to make next.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>That's where an experienced team can make a difference.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>We continuously review campaign performance, identify opportunities, and refine strategies to improve results over time.</p>
            </div>
          </div>
          <div className="ppc-split-img scroll-reveal from-right">
            <img
              src="/images/ppc-results.jpg"
              alt="Campaign results and ROI"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
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
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "12px" }}>We're not interested in running campaigns on autopilot.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>Every account receives attention, communication, and ongoing support.</p>
            <div className="sp-why-cards">
              {whyUsPoints.map((point, i) => (
                <div key={i} className="sp-why-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s`, background: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                  <MdOutlineCheckCircle style={{ color: "var(--accent)", fontSize: "22px", flexShrink: 0, marginTop: "2px" }} />
                  <div><p className="sp-why-card-title" style={{ marginBottom: 0 }}>{point}</p></div>
                </div>
              ))}
            </div>
            <p className="sp-lead" style={{ textAlign: "left", marginTop: "40px" }}>You should always know how your campaigns are performing and where your investment is going.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section" id="contact">
        <div className="sp-cta-glow" />
        <div className="sp-cta-inner scroll-reveal scale-in">
          <span className="sp-tag light">Get Started</span>
          <h2 className="sp-cta-title">Let's Turn Ad Spend Into Opportunity</h2>
          <p className="sp-cta-desc">If you're investing in Google Ads or considering it for the first time, let's have a conversation.</p>
          <p className="sp-cta-desc">We'll review your goals, identify opportunities, and discuss how a well-managed campaign can support your growth.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
