"use client"

import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
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

const ContactForm = ({
  title = "Send Us a Message",
  subtitle = "Tell us about your project and goals — we'll come back with a tailored plan.",
  defaultService = "",
}: {
  title?: string
  subtitle?: string
  defaultService?: string
}) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: defaultService, budget: "", message: "" })
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
    <div className="ct-form-col">
      <div className="ct-form-header">
        <h2 className="ct-form-title">{title}</h2>
        <p className="ct-form-sub">{subtitle}</p>
      </div>

      {submitted ? (
        <div className="ct-success">
          <div className="ct-success-icon">✓</div>
          <h3>Message Received!</h3>
          <p>Thanks, <strong>{form.name}</strong>! We&apos;ll be in touch within 2 hours. Check your inbox at <strong>{form.email}</strong>.</p>
          <button
            className="ct-success-reset"
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: defaultService, budget: "", message: "" }) }}
          >
            Send Another Message
          </button>
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
  )
}

export default ContactForm
