"use client"
import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/navigation"
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
  const [step, setStep] = useState<"form" | "otp">("form")
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [error, setError] = useState("")
  const [otp, setOtp] = useState("")
  const [otpError, setOtpError] = useState("")
  const [resendCooldown, setResendCooldown] = useState(0)

  useEffect(() => {
    if (resendCooldown <= 0) return
    const timer = setTimeout(() => setResendCooldown(c => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [resendCooldown])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const sendOtp = async () => {
    setError("")
    setLoading(true)
    try {
      const res = await fetch("/send-otp.php", {
        method: "POST",
        credentials: "same-origin",
        body: new URLSearchParams({ email: form.email, name: form.name }),
      })
      const data = await res.json()
      if (data.success) {
        setStep("otp")
        setOtp("")
        setOtpError("")
        setResendCooldown(45)
      } else {
        setError(data.message || "Could not send verification code. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleSendOtp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendOtp()
  }

  const handleVerifyAndSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOtpError("")
    setVerifying(true)
    try {
      const verifyRes = await fetch("/verify-otp.php", {
        method: "POST",
        credentials: "same-origin",
        body: new URLSearchParams({ email: form.email, otp }),
      })
      const verifyData = await verifyRes.json()
      if (!verifyData.success) {
        setOtpError(verifyData.message || "Incorrect code.")
        return
      }

      const sendRes = await fetch("/contact.php", {
        method: "POST",
        credentials: "same-origin",
        body: new URLSearchParams(form),
      })
      const sendData = await sendRes.json()
      if (sendData.success) {
        router.push("/thank-you/")
      } else {
        setOtpError(sendData.message || "Could not send your message. Please try again.")
      }
    } catch {
      setOtpError("Network error. Please try again.")
    } finally {
      setVerifying(false)
    }
  }

  const handleResend = () => {
    if (resendCooldown > 0 || loading) return
    sendOtp()
  }

  return (
    <div className="ct-form-col">
      <div className="ct-form-header">
        <h2 className="ct-form-title">{title}</h2>
        <p className="ct-form-sub">{subtitle}</p>
      </div>

      {step === "otp" ? (
        <form className="ct-form" onSubmit={handleVerifyAndSend}>
          <div className="ct-otp-intro">
            <p>We sent a 6-digit verification code to <strong>{form.email}</strong>.</p>
            <button type="button" className="ct-otp-edit" onClick={() => setStep("form")}>Edit details</button>
          </div>
          <div className="ct-field">
            <label>Verification Code <span className="ct-req">*</span></label>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
              placeholder="123456"
              className="ct-otp-input"
              required
              autoFocus
            />
          </div>
          {otpError && <p className="ct-form-error">{otpError}</p>}
          <button type="submit" className="ct-submit" disabled={verifying || otp.length !== 6}>
            {verifying ? <span className="ct-spinner" /> : "Verify & Send Message →"}
          </button>
          <button
            type="button"
            className="ct-otp-resend"
            onClick={handleResend}
            disabled={resendCooldown > 0 || loading}
          >
            {resendCooldown > 0 ? `Resend code in ${resendCooldown}s` : loading ? "Sending…" : "Resend code"}
          </button>
        </form>
      ) : (
        <form className="ct-form" onSubmit={handleSendOtp}>
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
          {error && <p className="ct-form-error">{error}</p>}
          <button type="submit" className="ct-submit" disabled={loading}>
            {loading ? <span className="ct-spinner" /> : "Send Verification Code →"}
          </button>
          <p className="ct-form-note">🔒 We&apos;ll email you a code to verify it&apos;s really you before sending your message.</p>
        </form>
      )}
    </div>
  )
}

export default ContactForm
