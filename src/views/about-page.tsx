"use client"

import { useEffect } from "react"
import Link from "next/link"
import { MdOutlineCheckCircle } from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/about-page.css"
import Our_team from "../components/our_team"

const services = [
  "Search Engine Optimization (SEO)",
  "Social Media Optimization (SMO)",
  "Google Ads Management",
  "Answer Engine Optimization (AEO)",
  "Generative Engine Optimization (GEO)",
  "AI Visibility",
  "Website Optimization",
  "Website Look & Feel Updates",
  "Graphic Design",
  "Virtual Assistant Services",
]

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-grid" />
        <div className="ab-hero-glow g1" />
        <div className="ab-hero-glow g2" />
        <div className="ab-hero-inner" style={{ justifyContent: "flex-start" }}>
          <div className="ab-hero-left scroll-reveal" style={{ maxWidth: "780px" }}>
            <div className="ab-badge">
              <span className="ab-badge-dot" />About Web and Ads Solution
            </div>
            <h1 className="ab-hero-title">
              Good Marketing Starts with<br />
              <span className="ab-accent">Understanding the Business.</span>
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="ab-hero-sub">Digital marketing has never offered more opportunities. It has also never been more fragmented.</p>
              <p className="ab-hero-sub">One agency builds your website. Another manages your ads. Someone else handles SEO. Social media is outsourced to a different team. Before long, you're managing multiple partners, chasing updates, and trying to connect strategies that were never designed to work together.</p>
              <p className="ab-hero-sub">We built Web and Ads Solution to be different.</p>
              <p className="ab-hero-sub">We believe digital marketing works best when every piece supports the same business goal. That's why we bring strategy, creativity, and execution together under one roof, helping businesses build a stronger online presence without the confusion of managing multiple agencies.</p>
            </div>
            <div className="ab-hero-ctas">
              <Link href="/contact" className="ab-btn-primary">Work With Us</Link>
              <Link href="/services" className="ab-btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WE LIKE KEEPING THINGS SIMPLE ── */}
      <section className="ab-story-section">
        <div className="ab-container">
          <div className="sp-split-row">
            <div className="sp-split-text">
              <span className="ab-section-tag scroll-reveal">Our Approach</span>
              <h2 className="ab-h2 scroll-reveal">We Like Keeping Things Simple</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
                <p className="ab-story-text scroll-reveal">Our approach isn't built around complicated marketing language or inflated promises.</p>
                <p className="ab-story-text scroll-reveal">We take the time to understand your business, identify what's holding it back, and recommend solutions that make sense for your goals, budget, and industry.</p>
                <p className="ab-story-text scroll-reveal">Sometimes that means improving your website. Sometimes it means investing in SEO.</p>
                <p className="ab-story-text scroll-reveal">Sometimes the answer is paid advertising or a stronger social media presence.</p>
                <p className="ab-story-text scroll-reveal">The recommendation changes. Our focus doesn't. We're here to help your business grow.</p>
              </div>
            </div>
            <div className="sp-split-img scroll-reveal from-right" style={{ height: "420px" }}>
              <img
                src="/images/ppc-analytics.jpg"
                alt="Simple and clear approach"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE WAY WE WORK ── */}
      <section className="ab-mv-section">
        <div className="ab-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left" style={{ height: "420px" }}>
              <img
                src="/images/smo-brand.jpg"
                alt="The way we work"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
              />
            </div>
            <div className="sp-split-text">
              <span className="ab-section-tag scroll-reveal">How We Operate</span>
              <h2 className="ab-h2 scroll-reveal">The Way We Work</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
                <p className="ab-story-text scroll-reveal">We believe a good agency should be easy to work with.</p>
                <p className="ab-story-text scroll-reveal">That means answering calls, responding to emails, keeping you informed, and being available when you need support.</p>
                <p className="ab-story-text scroll-reveal">When you work with us, you're not passed from department to department or left wondering what's happening with your project.</p>
                <p className="ab-story-text scroll-reveal">You'll have a dedicated account manager, clear communication, and a team that genuinely cares about delivering work we're proud to put our name on.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="ab-values-section">
        <div className="ab-container">
          <div className="ab-section-header scroll-reveal">
            <span className="ab-section-tag">Our Services</span>
            <h2 className="ab-h2">What We Do</h2>
            <p className="ab-lead">Our services are designed to help businesses strengthen every part of their digital presence.</p>
          </div>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div className="sp-why-cards">
              {services.map((service, i) => (
                <div key={i} className="sp-why-card scroll-reveal" style={{ animationDelay: `${i * 0.05}s`, background: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                  <MdOutlineCheckCircle style={{ color: "#f06820", fontSize: "22px", flexShrink: 0, marginTop: "2px" }} />
                  <div><p className="sp-why-card-title" style={{ marginBottom: 0 }}>{service}</p></div>
                </div>
              ))}
            </div>
            <p className="ab-lead scroll-reveal" style={{ textAlign: "left", marginTop: "40px", maxWidth: "100%" }}>Each service plays a different role, but they all work towards the same objective: helping your business become easier to find, easier to trust, and easier to choose.</p>
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES CHOOSE US ── */}
      <section className="ab-stats-section">
        <div className="ab-stats-bg" />
        <div className="ab-container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <span className="ab-section-tag light scroll-reveal">Why Choose Us</span>
            <h2 className="ab-h2 light scroll-reveal">Why Businesses Choose Web and Ads Solution</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "28px" }}>
              <p className="ab-lead scroll-reveal" style={{ textAlign: "left", color: "rgba(255,255,255,0.6)" }}>We know there are plenty of agencies offering similar services.</p>
              <p className="ab-lead scroll-reveal" style={{ textAlign: "left", color: "rgba(255,255,255,0.6)" }}>Clients choose us because they value clear communication, thoughtful strategy, and a team that's easy to reach.</p>
              <p className="ab-lead scroll-reveal" style={{ textAlign: "left", color: "rgba(255,255,255,0.6)" }}>We're responsive, collaborative, and invested in the success of every project we take on.</p>
              <p className="ab-lead scroll-reveal" style={{ textAlign: "left", color: "rgba(255,255,255,0.6)" }}>No unnecessary jargon. No disappearing after onboarding.</p>
              <p className="ab-lead scroll-reveal" style={{ textAlign: "left", color: "rgba(255,255,255,0.6)" }}>No treating your business like just another account. Just practical marketing backed by a team that cares about getting the work right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <Our_team />

      {/* ── CTA ── */}
      <section className="ab-cta-section">
        <div className="ab-cta-glow" />
        <div className="ab-cta-inner scroll-reveal scale-in">
          <span className="ab-section-tag light">Get In Touch</span>
          <h2 className="ab-cta-title">Let's Build Something That Works</h2>
          <p className="ab-cta-desc">Whether you're launching a new business, improving an existing website, or looking for a marketing partner that stays involved, we'd love to hear your story.</p>
          <p className="ab-cta-desc">Let's build a digital presence that works as hard as you do.</p>
          <div className="ab-cta-actions">
            <Link href="/contact" className="ab-btn-primary">Book Your Free Consultation Today</Link>
            <Link href="/services" className="ab-btn-outline">Explore Our Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
