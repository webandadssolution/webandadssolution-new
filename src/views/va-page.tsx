"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlineManageAccounts,
  MdOutlineForum,
  MdOutlineTableChart,
  MdOutlineWorkOutline,
  MdOutlineTune,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/va-page.css"

const howWeCanHelp = [
  { icon: <MdOutlineManageAccounts />, title: "Administrative Support",    desc: "Managing emails, calendars, appointments, and day-to-day administrative tasks." },
  { icon: <MdOutlineForum />,          title: "Customer Communication",    desc: "Responding to enquiries, following up with clients, and keeping conversations moving." },
  { icon: <MdOutlineTableChart />,     title: "Data Entry & Research",     desc: "Organizing information, updating records, conducting online research, and maintaining accurate documentation." },
  { icon: <MdOutlineWorkOutline />,    title: "Business Support",          desc: "Assisting with reports, presentations, document preparation, and routine operational tasks." },
  { icon: <MdOutlineTune />,           title: "Flexible Assistance",       desc: "Support that grows with your business, whether you need occasional help or consistent day-to-day assistance." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Responsive communication",
  "Flexible support plans",
  "Reliable, detail-oriented assistance",
]

export default function VAPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page va-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Virtual Assistant Services
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Spend More Time Growing Your Business.<br /><span className="accent">We'll Handle the Rest.</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Running a business means wearing too many hats.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Between answering emails, scheduling meetings, updating spreadsheets, following up with customers, and managing day-to-day tasks, it's easy to spend more time on administration than on growth.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>Our Virtual Assistant services help take those tasks off your plate, giving you more time to focus on your customers, your team, and your business.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/va-hero.jpg"
              alt="Virtual Assistant Services"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── SMALL TASKS ADD UP ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/va-tasks.jpg"
                alt="Small tasks add up"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>Small Tasks Add Up</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Administrative work is essential, but it shouldn't consume your day.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>As your business grows, so does the list of recurring tasks that need attention. Delegating those responsibilities to a reliable virtual assistant keeps your operations organized without the cost of hiring a full-time employee.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Whether you need a few hours of support each week or ongoing assistance, we'll adapt to the way you work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE CAN HELP ── */}
      <section className="sp-process-section" id="services">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Services</span>
            <h2 className="sp-h2">How We Can Help</h2>
          </div>
          <div className="sp-features-grid">
            {howWeCanHelp.map((item, i) => (
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

      {/* ── RELIABLE SUPPORT WITHOUT THE OVERHEAD ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">Reliable Support<br /><span className="a">Without the Overhead</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Hiring full-time staff isn't always the right solution.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>A virtual assistant gives you the flexibility to get the support you need without the long-term commitment of expanding your team.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>We focus on accuracy, confidentiality, and clear communication, so you always know your work is in good hands.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/va-support.jpg"
              alt="Reliable virtual assistant support"
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
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>Working with us means having a team that's easy to reach and committed to making your day easier.</p>
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
          <h2 className="sp-cta-title">Let's Free Up Your Time</h2>
          <p className="sp-cta-desc">Every hour spent on repetitive tasks is an hour you could spend growing your business.</p>
          <p className="sp-cta-desc">Let's discuss how our Virtual Assistant services can help you work more efficiently and focus on what matters most.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
