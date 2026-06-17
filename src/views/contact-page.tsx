"use client"

import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import Link from "next/link"
import "../styles/contact-page.css"

const services = [
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click (PPC) Advertising",
  "Social Media Optimization (SMO)",
  "Content Marketing",
  "Website Development",
  "Virtual Assistant Services",
  "Multiple Services",
  "Other",
]

const contactInfo = [
  { icon: "📧", label: "Email Us",      value: "info@webandadssolution.com",   sub: "We reply within 2 business hours" },
  { icon: "📞", label: "Call Us",       value: "(+1) 332 263 5658",            sub: "Mon – Fri, 9am – 6pm CST" },
  { icon: "📍", label: "Our Office",    value: "117 S Lexington St STE 100",   sub: "Harrisonville, MO 64701, USA" },
  { icon: "⚡", label: "Response Time", value: "Under 2 Hours",                sub: "Guaranteed during business hours" },
]

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero-grid" />
        <div className="ct-hero-glow" />
        <div className="ct-hero-inner">
          <div className="ct-hero-text scroll-reveal">
            <div className="ct-badge"><span className="ct-badge-dot" />Get In Touch</div>
            <h1 className="ct-hero-title">
              Let's Build Something<br />
              <span className="ct-accent">Amazing Together.</span>
            </h1>
            <p className="ct-hero-sub">
              Ready to grow your business? Fill out the form and one of our specialists will reach out within 2 hours with a custom strategy for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT LAYOUT ── */}
      <section className="ct-main-section">
        <div className="ct-main-inner">

          {/* ── FORM ── */}
          <div className="ct-form-col scroll-reveal from-left">
            <div className="ct-form-header">
              <h2 className="ct-form-title">Send Us a Message</h2>
              <p className="ct-form-sub">Tell us about your project and goals — we'll come back with a tailored plan.</p>
            </div>

            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Thanks, <strong>{form.name}</strong>! We'll be in touch within 2 hours. Check your inbox at <strong>{form.email}</strong>.</p>
                <button className="ct-success-reset" onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", service:"", budget:"", message:"" }) }}>Send Another Message</button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div className="ct-field">
                    <label>Full Name <span className="ct-req">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  <div className="ct-field">
                    <label>Email Address <span className="ct-req">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                  </div>
                </div>
                <div className="ct-form-row">
                  <div className="ct-field">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="ct-field">
                    <label>Service Interested In <span className="ct-req">*</span></label>
                    <select name="service" value={form.service} onChange={handleChange} required>
                      <option value="">Select a service…</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="ct-field">
                  <label>Monthly Budget</label>
                  <div className="ct-budget-row">
                    {["Under $1k", "$1k – $5k", "$5k – $10k", "$10k+", "Not sure yet"].map((b, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`ct-budget-chip${form.budget === b ? " selected" : ""}`}
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                      >{b}</button>
                    ))}
                  </div>
                </div>
                <div className="ct-field">
                  <label>Tell Us About Your Project <span className="ct-req">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Describe your goals, current challenges, and anything else we should know…" required />
                </div>
                <button type="submit" className="ct-submit" disabled={loading}>
                  {loading ? <span className="ct-spinner" /> : "Send Message →"}
                </button>
                <p className="ct-form-note">🔒 Your information is 100% secure and never shared with third parties.</p>
              </form>
            )}
          </div>

          {/* ── SIDE INFO ── */}
          <div className="ct-info-col scroll-reveal from-right">
            <div className="ct-info-cards">
              {contactInfo.map((c, i) => (
                <div key={i} className="ct-info-card">
                  <div className="ct-info-icon">{c.icon}</div>
                  <div>
                    <p className="ct-info-label">{c.label}</p>
                    <p className="ct-info-value">{c.value}</p>
                    <p className="ct-info-sub">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ct-services-panel">
              <h3 className="ct-services-title">Our Services</h3>
              <div className="ct-services-list">
                {[
                  { label: "SEO",               to: "/services/seo" },
                  { label: "PPC Advertising",    to: "/services/ppc" },
                  { label: "Social Media (SMO)", to: "/services/smo" },
                  { label: "Content Marketing",  to: "/services/content-marketing" },
                  { label: "Web Development",    to: "/services/web-development" },
                  { label: "Virtual Assistant",  to: "/services/virtual-assistant" },
                ].map((s, i) => (
                  <Link key={i} href={s.to} className="ct-service-link">
                    <span>{s.label}</span><span className="ct-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="ct-promise-box">
              <h4>Our Promise to You</h4>
              <ul>
                <li>✓ Response within 2 business hours</li>
                <li>✓ Free strategy consultation</li>
                <li>✓ No pressure, no obligation</li>
                <li>✓ Custom plan for your goals</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── MAP / OFFICE ── */}
      <section className="ct-office-section">
        <div className="ct-office-inner">
          <div className="ct-map-placeholder">
            <div className="ct-map-pin">📍</div>
            <p className="ct-map-addr">117 South Lexington Street STE 100<br />Harrisonville, MO 64701, USA</p>
          </div>
          <div className="ct-office-details scroll-reveal from-right">
            <span className="ct-office-tag">Our Office</span>
            <h2 className="ct-office-title">Come Visit Us</h2>
            <p className="ct-office-desc">
              We're based in Harrisonville, Missouri, but our team serves clients worldwide. Whether you want to drop by or jump on a video call — we're always happy to connect.
            </p>
            <div className="ct-hours">
              <div className="ct-hours-row"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM CST</span></div>
              <div className="ct-hours-row"><span>Saturday</span><span>10:00 AM – 2:00 PM CST</span></div>
              <div className="ct-hours-row"><span>Sunday</span><span>Closed</span></div>
            </div>
            <a href="mailto:info@webandadssolution.com" className="ct-office-btn">Email Us Directly →</a>
          </div>
        </div>
      </section>

    </div>
  )
}
