"use client"
import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/navigation"

const SidebarContactForm = () => {
  const router = useRouter()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
        body: new URLSearchParams({ ...form, service: "Blog Sidebar Inquiry" }),
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
    <div className="bp-cf">
      {step === "otp" ? (
        <form className="bp-cf-form" onSubmit={handleVerifyAndSend}>
          <p className="bp-cf-otp-intro">Code sent to <strong>{form.email}</strong>.</p>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            value={otp}
            onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="123456"
            className="bp-cf-otp-input"
            required
            autoFocus
          />
          {otpError && <p className="bp-cf-error">{otpError}</p>}
          <button type="submit" className="bp-cf-submit" disabled={verifying || otp.length !== 6}>
            {verifying ? <span className="bp-cf-spinner" /> : "Verify & Send"}
          </button>
          <button type="button" className="bp-cf-resend" onClick={handleResend} disabled={resendCooldown > 0 || loading}>
            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : loading ? "Sending…" : "Resend code"}
          </button>
        </form>
      ) : (
        <form className="bp-cf-form" onSubmit={handleSendOtp}>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
          <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="How can we help?" required />
          {error && <p className="bp-cf-error">{error}</p>}
          <button type="submit" className="bp-cf-submit" disabled={loading}>
            {loading ? <span className="bp-cf-spinner" /> : "Send Message →"}
          </button>
        </form>
      )}
    </div>
  )
}

export default SidebarContactForm
