"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import Script from "next/script"
import "../styles/achievements.css"

const services = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click (PPC) Advertising",
    "Social Media Optimization (SMO)",
    "Content Marketing",
    "Website Development",
    "Application Development",
    "Virtual Assistant Services",
    "Multiple Services",
    "Other",
]

const RECAPTCHA_SITE_KEY =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

declare global {
    interface Window {
        grecaptcha?: { getResponse: (id?: number) => string; reset: (id?: number) => void }
    }
}

const Achievements = () => {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [recaptchaError, setRecaptchaError] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const token = window.grecaptcha?.getResponse()
        if (!token) {
            setRecaptchaError(true)
            return
        }
        setRecaptchaError(false)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
            window.grecaptcha?.reset()
        }, 1200)
    }

    return (
        <section className="achievements-section">
            <div className="achievements-container">
                {/* Left Side: Title and Stats Card */}
                <div className="achievements-left scroll-reveal from-left">
                    <div className="achievements-header">
                        <span className="achievements-badge">● Our Achievements</span>
                        <h2 className="achievements-title">
                            We are trusted <br />
                            <span className="achievements-ai-text-wrapper">
                                <img
                                    src="/images/icons/icon-1.png"
                                    alt="ai-icon"
                                    className="achievements-ai-graphic"
                                /> Ai Driven-Marketing Agency
                            </span>
                        </h2>
                    </div>

                    <div className="achievements-stats-card-container">
                        <div className="achievements-card-ribbon-strap achievements-left-strap"></div>
                        <div className="achievements-card-ribbon-strap achievements-right-strap"></div>

                        <div className="achievements-stats-card">
                            <div className="achievements-stat-item">
                                <h3>500+</h3>
                                <p>Projects Successfully <br /> Delivered</p>
                            </div>
                            <div className="achievements-stat-item">
                                <h3>95%</h3>
                                <p>Client Satisfaction <br /> Rate on Our Results</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="achievements-right scroll-reveal from-right delay-2">
                    <div className="achievements-contact-form-card">
                        <h3>Ready to collaborate with us?</h3>
                        <p className="achievements-form-subtitle">Who knows where a single message might lead you.</p>

                        {submitted ? (
                            <div className="achievements-form-success">
                                <div className="achievements-success-icon">✓</div>
                                <h4>Message Received!</h4>
                                <p>Thanks for reaching out — our team will get back to you within 2 business hours.</p>
                                <button type="button" className="achievements-success-reset" onClick={() => setSubmitted(false)}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                        <form className="achievements-collab-form" onSubmit={handleSubmit}>
                            <div className="achievements-form-row">
                                <div className="achievements-input-group">
                                    <svg className="achievements-form-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <input type="text" id="name" required placeholder=" " />
                                    <label htmlFor="name" className="achievements-floating-label">Your Name*</label>
                                </div>
                                <div className="achievements-input-group">
                                    <svg className="achievements-form-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <input type="email" id="email" required placeholder=" " />
                                    <label htmlFor="email" className="achievements-floating-label">Email Address*</label>
                                </div>
                            </div>

                            <div className="achievements-form-row">
                                <div className="achievements-input-group">
                                    <svg className="achievements-form-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <input type="text" id="phone" required placeholder=" " />
                                    <label htmlFor="phone" className="achievements-floating-label">Contact No*</label>
                                </div>
                                <div className="achievements-input-group achievements-file-wrapper">
                                    <svg className="achievements-form-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                    <input type="file" id="file" className="achievements-file-input" />
                                    <label htmlFor="file" className="achievements-file-trigger">Attach file...</label>
                                </div>
                            </div>

                            <div className="achievements-input-group achievements-full-width">
                                <svg className="achievements-form-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <select required defaultValue="">
                                    <option value="" disabled></option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>{service}</option>
                                    ))}
                                </select>
                                <label className="achievements-floating-label">Select Service*</label>
                            </div>

                            <div className="achievements-input-group achievements-full-width">
                                <svg className="achievements-form-icon achievements-textarea-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                <textarea id="message" placeholder=" "></textarea>
                                <label htmlFor="message" className="achievements-floating-label">Your Message..</label>
                            </div>

                            <div className="achievements-recaptcha-wrapper">
                                <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY}></div>
                                {recaptchaError && (
                                    <p className="achievements-recaptcha-error">Please verify you're not a robot.</p>
                                )}
                            </div>

                            <button type="submit" className="achievements-submit-btn" disabled={loading}>
                                {loading ? "SENDING..." : "SUBMIT HERE"}
                                <span className="achievements-arrow-container">
                                    <span className="achievements-arrow-icon">↗</span>
                                </span>
                            </button>
                        </form>
                        )}
                    </div>
                </div>
            </div>

            <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />
        </section>
    );
}

export default Achievements;