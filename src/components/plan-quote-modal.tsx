"use client"
import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { generateCaptcha } from "../lib/captcha"
import "../styles/plan-quote-modal.css"

const pagesOptions = ["1 – 10", "10 – 50", "50 – 150", "150 – 250", "250+"]
const styleOptions = ["Simple", "Moderate", "High end", "World class"]
const cmsIntegrationOptions = ["Basic", "Advanced", "Full"]
const copywritingOptions = ["5 – 10", "10 – 25", "25 – 50"]
const ecommerceOptions = ["Basic", "Advanced", "Enterprise"]
const seoOptions = ["30 Keywords", "80 Keywords", "150 Keywords"]
const cmsOptions = ["Standard", "Advanced", "Enterprise"]

type Questionnaire = {
  pages: string
  responsive: string
  style: string
  cmsIntegration: string
  copywriting: string
  ecommerce: string
  seo: string
  cms: string
}

const emptyQuestionnaire: Questionnaire = {
  pages: "",
  responsive: "",
  style: "",
  cmsIntegration: "",
  copywriting: "",
  ecommerce: "",
  seo: "",
  cms: "",
}

const emptyLead = { name: "", email: "", phone: "", company: "", website: "", notes: "" }

const PlanQuoteModal = ({ planName, onClose }: { planName: string; onClose: () => void }) => {
  const [step, setStep] = useState<"questionnaire" | "lead" | "success">("questionnaire")
  const [answers, setAnswers] = useState<Questionnaire>(emptyQuestionnaire)
  const [lead, setLead] = useState(emptyLead)
  const [captchaCode, setCaptchaCode] = useState("")
  const [captchaInput, setCaptchaInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setCaptchaCode(generateCaptcha())
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha())
    setCaptchaInput("")
  }

  const handleAnswerChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setAnswers(a => ({ ...a, [e.target.name]: e.target.value }))

  const handleLeadChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setLead(l => ({ ...l, [e.target.name]: e.target.value }))

  const buildMessage = () => {
    const lines = [
      `Plan: ${planName}`,
      "",
      "Project details:",
      `- Number of Pages: ${answers.pages || "-"}`,
      `- Responsive Design: ${answers.responsive || "-"}`,
      `- Style of Design: ${answers.style || "-"}`,
      `- CMS Integration: ${answers.cmsIntegration || "-"}`,
      `- Copywriting: ${answers.copywriting || "-"}`,
      `- E-Commerce Functionality: ${answers.ecommerce || "-"}`,
      `- SEO: ${answers.seo || "-"}`,
      `- CMS: ${answers.cms || "-"}`,
    ]
    if (lead.company) lines.push("", `Company: ${lead.company}`)
    if (lead.website) lines.push(`Website: ${lead.website}`)
    if (lead.notes) lines.push("", `Notes:\n${lead.notes}`)
    return lines.join("\n")
  }

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
      const res = await fetch("/contact.php", {
        method: "POST",
        credentials: "same-origin",
        body: new URLSearchParams({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          service: `Website Design – ${planName}`,
          budget: "",
          message: buildMessage(),
          page_url: window.location.href,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStep("success")
      } else {
        setError(data.message || "Could not send your request. Please try again.")
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
    <div className="pqm-overlay" onClick={onClose}>
      <div className="pqm-modal" onClick={e => e.stopPropagation()}>
        <div className="pqm-topbar">
          <button type="button" className="pqm-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="pqm-body">
        {step === "questionnaire" && (
          <>
            <h3 className="pqm-title">{planName} — Get Your Price</h3>
            <p className="pqm-sub">Tell us about your project and we&apos;ll send you a tailored quote.</p>

            <div className="pqm-grid">
              <div className="pqm-field">
                <label>Number of Pages</label>
                <select name="pages" value={answers.pages} onChange={handleAnswerChange}>
                  <option value="">Select Number of Pages</option>
                  {pagesOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="pqm-field">
                <label>Responsive Design</label>
                <select name="responsive" value={answers.responsive} onChange={handleAnswerChange}>
                  <option value="">Do you want a responsive design?</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="pqm-field">
                <label>Style of Design</label>
                <select name="style" value={answers.style} onChange={handleAnswerChange}>
                  <option value="">Select Style of Design</option>
                  {styleOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="pqm-field">
                <label>CMS Integration</label>
                <select name="cmsIntegration" value={answers.cmsIntegration} onChange={handleAnswerChange}>
                  <option value="">Select CMS Integration</option>
                  {cmsIntegrationOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="pqm-field">
                <label>Copywriting # of Pages</label>
                <select name="copywriting" value={answers.copywriting} onChange={handleAnswerChange}>
                  <option value="">Select Copywriting # of Pages</option>
                  {copywritingOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="pqm-field">
                <label>E-Commerce Functionality</label>
                <select name="ecommerce" value={answers.ecommerce} onChange={handleAnswerChange}>
                  <option value="">Select E-Commerce Functionality</option>
                  {ecommerceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="pqm-field">
                <label>SEO</label>
                <select name="seo" value={answers.seo} onChange={handleAnswerChange}>
                  <option value="">Select SEO Package</option>
                  {seoOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="pqm-field">
                <label>CMS</label>
                <select name="cms" value={answers.cms} onChange={handleAnswerChange}>
                  <option value="">Select your CMS</option>
                  {cmsOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <button type="button" className="pqm-btn primary full" onClick={() => setStep("lead")}>
              See Pricing →
            </button>
          </>
        )}

        {step === "lead" && (
          <>
            <h3 className="pqm-title">Almost there!</h3>
            <p className="pqm-sub">Share your details and a strategist will send your {planName} quote shortly.</p>

            <form className="pqm-form" onSubmit={handleSubmit}>
              <div className="pqm-grid">
                <div className="pqm-field">
                  <label>Full Name <span className="pqm-req">*</span></label>
                  <input type="text" name="name" value={lead.name} onChange={handleLeadChange} placeholder="John Smith" required />
                </div>
                <div className="pqm-field">
                  <label>Email Address <span className="pqm-req">*</span></label>
                  <input type="email" name="email" value={lead.email} onChange={handleLeadChange} placeholder="john@company.com" required />
                </div>
                <div className="pqm-field">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={lead.phone} onChange={handleLeadChange} placeholder="+1 (555) 000-0000" />
                </div>
                <div className="pqm-field">
                  <label>Company</label>
                  <input type="text" name="company" value={lead.company} onChange={handleLeadChange} placeholder="Company name" />
                </div>
                <div className="pqm-field full">
                  <label>Website</label>
                  <input type="text" name="website" value={lead.website} onChange={handleLeadChange} placeholder="https://yourwebsite.com" />
                </div>
                <div className="pqm-field full">
                  <label>Quote Details</label>
                  <textarea name="notes" value={lead.notes} onChange={handleLeadChange} rows={3} placeholder="Anything else we should know?" />
                </div>
                <div className="pqm-field full">
                  <label>Verification Code <span className="pqm-req">*</span></label>
                  <div className="pqm-captcha-row">
                    <span className="pqm-captcha-code">{captchaCode}</span>
                    <button type="button" className="pqm-captcha-refresh" onClick={refreshCaptcha} aria-label="Generate new code">↻</button>
                    <input
                      type="text"
                      value={captchaInput}
                      onChange={e => setCaptchaInput(e.target.value)}
                      placeholder="Enter code above"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
              </div>

              {error && <p className="pqm-error">{error}</p>}

              <div className="pqm-actions">
                <button type="button" className="pqm-btn outline" onClick={() => setStep("questionnaire")}>← Back</button>
                <button type="submit" className="pqm-btn primary" disabled={loading}>
                  {loading ? <span className="pqm-spinner" /> : "Request My Quote"}
                </button>
              </div>
            </form>
          </>
        )}

        {step === "success" && (
          <div className="pqm-success">
            <div className="pqm-success-icon">✓</div>
            <h3 className="pqm-title">Request Sent!</h3>
            <p className="pqm-sub">
              Thanks {lead.name.split(" ")[0] || "there"} — a strategist will email your {planName} quote within one business day.
            </p>
            <button type="button" className="pqm-btn primary" onClick={onClose}>Close</button>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default PlanQuoteModal
