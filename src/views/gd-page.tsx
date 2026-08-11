"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  MdOutlinePhotoSizeSelectActual,
  MdOutlinePrint,
  MdOutlineCampaign,
  MdOutlineCategory,
  MdOutlineWebAsset,
  MdOutlineCheckCircle,
} from "react-icons/md"
import "../styles/sp-base.css"
import "../styles/gd-page.css"

const whatWeDesign = [
  { icon: <MdOutlinePhotoSizeSelectActual />, title: "Social Media Creatives",   desc: "Eye-catching designs that help your content stand out and keep your brand active across social platforms." },
  { icon: <MdOutlinePrint />,                title: "Marketing Materials",       desc: "Brochures, flyers, banners, presentations, and promotional assets designed to communicate your message clearly." },
  { icon: <MdOutlineCampaign />,             title: "Digital Advertisements",    desc: "Creative assets for Google Ads, display campaigns, and social media advertising that encourage users to take action." },
  { icon: <MdOutlineCategory />,             title: "Brand Assets",              desc: "Logos, icons, brand guidelines, and visual elements that create a consistent identity across every platform." },
  { icon: <MdOutlineWebAsset />,             title: "Website Graphics",          desc: "Custom graphics, icons, and banners that improve the look and feel of your website while supporting the user experience." },
]

const whyUsPoints = [
  "Free first consultation",
  "Dedicated account manager",
  "Responsive communication",
  "Creative designs tailored to your brand",
  "Quick revisions and ongoing support",
]

export default function GDPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp-page gd-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">
          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Graphic Design Services
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Good Design Doesn't Just Get Attention.<br /><span className="accent">It Builds Trust.</span>
            </h1>
            <div className="scroll-reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>People notice your brand long before they read your content.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>A poorly designed social media post, brochure, presentation, or advertisement can make even the best business look unprofessional. On the other hand, strong design creates confidence, communicates credibility, and helps your brand stay memorable.</p>
              <p className="sp-hero-sub" style={{ marginBottom: 0 }}>At Web and Ads Solution, we create designs that do more than look good. Every visual is designed to support your message, strengthen your brand, and leave a lasting impression.</p>
            </div>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Book Your Free Consultation Today</a>
            </div>
          </div>

          <div className="sp-hero-img scroll-reveal delay-2">
            <img
              src="/images/gd-hero.jpg"
              alt="Graphic Design Services"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── EVERY DESIGN REPRESENTS YOUR BUSINESS ── */}
      <section className="sp-features-section">
        <div className="sp-container">
          <div className="sp-split-row">
            <div className="sp-split-img scroll-reveal from-left">
              <img
                src="/images/gd-identity.jpg"
                alt="Brand identity and design"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sp-split-text">
              <h2 className="sp-h2 scroll-reveal" style={{ marginBottom: "32px" }}>Every Design Represents Your Business</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>Your audience sees dozens of brands every day.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>If your visuals are inconsistent, outdated, or difficult to understand, it's easy to get overlooked.</p>
                <p className="sp-lead scroll-reveal" style={{ margin: 0, textAlign: "left" }}>We help businesses create a consistent visual identity across every touchpoint, making it easier for customers to recognize, remember, and trust their brand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DESIGN ── */}
      <section className="sp-process-section" id="services">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Our Services</span>
            <h2 className="sp-h2">What We Design</h2>
          </div>
          <div className="sp-features-grid">
            {whatWeDesign.map((item, i) => (
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

      {/* ── DESIGN WITH PURPOSE ── */}
      <section className="sp-why-section">
        <div className="sp-split-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sp-split-text">
            <h2 className="sp-why-title scroll-reveal">Design<br /><span className="a">With Purpose</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Great design isn't about adding more colours or effects.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>It's about making information easier to understand, highlighting what matters, and creating a brand that people remember.</p>
              <p className="sp-why-desc scroll-reveal" style={{ marginBottom: 0 }}>Every design decision should support a business objective, whether that's building trust, increasing engagement, or encouraging enquiries.</p>
            </div>
          </div>
          <div className="sp-split-img scroll-reveal from-right">
            <img
              src="/images/gd-purpose.jpg"
              alt="Design with purpose"
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
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "12px" }}>We take the time to understand your brand before we start designing.</p>
            <p className="sp-lead" style={{ textAlign: "left", marginBottom: "40px" }}>That means every visual reflects your business, your audience, and your goals, not just the latest design trend.</p>
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
          <h2 className="sp-cta-title">Let's Give Your Brand the Attention It Deserves</h2>
          <p className="sp-cta-desc">Strong design helps people remember your business.</p>
          <p className="sp-cta-desc">Let's create visuals that represent your brand with confidence and consistency.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Book Your Free Consultation Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
