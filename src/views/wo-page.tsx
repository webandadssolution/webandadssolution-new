"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlineSpeed,
  MdOutlinePhoneIphone,
  MdOutlineRoute,
  MdOutlineSettings,
  MdOutlineTrendingUp,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/wo-page.css"

const whatWeOptimize = [
  { icon: <MdOutlineSpeed />,         title: "Website Speed",            desc: "Faster-loading pages create a smoother experience and reduce the chances of visitors leaving before your content appears." },
  { icon: <MdOutlinePhoneIphone />,   title: "Mobile Experience",        desc: "Your website should perform just as well on a phone as it does on a desktop." },
  { icon: <MdOutlineRoute />,         title: "User Journey",             desc: "We improve navigation, page layouts, and calls to action so visitors can find information quickly and take the next step with confidence." },
  { icon: <MdOutlineSettings />,      title: "Technical Performance",    desc: "From broken links and image optimization to Core Web Vitals and performance improvements, we help keep your website running efficiently." },
  { icon: <MdOutlineTrendingUp />,    title: "Conversion Opportunities", desc: "Every page should guide visitors towards an action, whether that's making an enquiry, booking a consultation, or completing a purchase." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Responsive support",
  "Transparent communication",
  "Practical recommendations that make a difference",
]

export default function WOPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page wo-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Website Optimization
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Your Website Is Getting Visitors.<br /><span className="accent">Is It Giving Them a Reason to Stay?</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>A slow website, confusing navigation, broken pages, or a poor mobile experience can drive potential customers away before they even learn about your business.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Every visitor who leaves too soon is a missed opportunity.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, we optimize websites to improve performance, usability, and user experience, helping you turn more visitors into enquiries, leads, and customers.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/wo-hero.jpg"
              alt="Website Optimization"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── SMALL ISSUES CAN HAVE A BIG IMPACT ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/wo-issues.jpg"
                alt="Website performance issues"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>Small Issues Can Have a Big Impact</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Website problems aren't always obvious.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>A page that takes a few extra seconds to load, a contact form that doesn't work properly, or a layout that's difficult to navigate on mobile can quietly affect your results.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>These issues don't just frustrate visitors. They can also influence search rankings and conversion rates.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Our goal is to identify what's holding your website back and improve the experience from the moment someone lands on your site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OPTIMIZE ── */}
      <section className="sp-process-section" id="services">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Approach</span>
            <h2 className="sp-h2">What We Optimize</h2>
          </div>
          <div className="sp-features-grid">
            {whatWeOptimize.map((item, i) => (
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

      {/* ── A BETTER WEBSITE DOES MORE THAN LOOK GOOD ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">A Better Website Does<br /><span className="a">More Than Look Good</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Design creates the first impression.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Performance shapes the experience.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>An optimized website loads faster, works better, ranks more effectively, and gives visitors fewer reasons to leave.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>That's the difference between a website that simply exists and one that supports your business.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/wo-better.jpg"
              alt="Better website performance"
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
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "12px" }}>Website optimization doesn't end with a checklist.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>We continue refining your website based on performance, usability, and your business goals.</p>
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
          <h2 className="sp-cta-title">Let's Get More From Your Website</h2>
          <p className="sp-cta-desc">If your website isn't performing the way it should, we'll help you find out why.</p>
          <p className="sp-cta-desc">Book your free consultation and let's turn your website into a stronger asset for your business.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
