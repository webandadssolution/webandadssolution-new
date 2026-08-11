"use client"
import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { generateCaptcha } from "../lib/captcha"
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
  const router = useRouter()
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: defaultService, budget: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [captchaCode, setCaptchaCode] = useState("")
  const [captchaInput, setCaptchaInput] = useState("")

  useEffect(() => {
    setCaptchaCode(generateCaptcha())
  }, [])

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha())
    setCaptchaInput("")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      setError("Incorrect verification code. Please try again.")
      refreshCaptcha()
      return
    }

    setLoading(true)
    try {
      const sendRes = await fetch("/contact.php", {
        method: "POST",
        credentials: "same-origin",
        body: new URLSearchParams({
          ...form,
          page_url: window.location.href,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      })
      const sendData = await sendRes.json()
      if (sendData.success) {
        router.push("/thank-you/")
      } else {
        setError(sendData.message || "Could not send your message. Please try again.")
        refreshCaptcha()
      }
    } catch {
      setError("Network error. Please try again.")
      refreshCaptcha()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ct-form-col">
      <div className="ct-form-header">
        <h2 className="ct-form-title">{title}</h2>
        <p className="ct-form-sub">{subtitle}</p>
      </div>

      <form className="ct-form" onSubmit={handleSubmit}>
        <div className="ct-form-row">
          <div className="ct-field">
            <label>Full Name <span className="ct-req">*</span></label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
          </div>
          <div className="ct-field">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
          </div>
        </div>
        <div className="ct-form-row">
          <div className="ct-field">
            <label>Email Address <span className="ct-req">*</span></label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
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
        <div className="ct-field">
          <label>Verification Code <span className="ct-req">*</span></label>
          <div className="ct-captcha-row">
            <span className="ct-captcha-code">{captchaCode}</span>
            <button type="button" className="ct-captcha-refresh" onClick={refreshCaptcha} aria-label="Generate new code">↻</button>
            <input
              type="text"
              value={captchaInput}
              onChange={e => setCaptchaInput(e.target.value)}
              placeholder="Enter code above"
              className="ct-captcha-input"
              autoComplete="off"
              required
            />
          </div>
        </div>
        {error && <p className="ct-form-error">{error}</p>}
        <button type="submit" className="ct-submit" disabled={loading}>
          {loading ? <span className="ct-spinner" /> : "Send Message →"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
