"use client"

import { useState } from "react"
import { FaHeadset, FaBolt, FaShieldAlt, FaQuestion } from "react-icons/fa"
import { homeFaqs } from "../data/faq-content"
import "../styles/faq.css"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Side - Support Visual */}
        <div className="faq-images scroll-reveal from-left">
          <div className="faq-visual">
            <span className="faq-visual-glow-q">?</span>

            <div className="faq-visual-card">
              <div className="faq-visual-card-header">
                <span className="faq-visual-avatar"><FaHeadset /></span>
                <div>
                  <span className="faq-visual-card-title">Still Have Questions?</span>
                  <span className="faq-visual-card-sub">We typically reply within minutes</span>
                </div>
              </div>
              <div className="faq-visual-stats">
                <div className="faq-visual-stat">
                  <span className="faq-visual-stat-num">98%</span>
                  <span className="faq-visual-stat-label">Satisfaction</span>
                </div>
                <div className="faq-visual-stat">
                  <span className="faq-visual-stat-num">&lt;2min</span>
                  <span className="faq-visual-stat-label">Avg Response</span>
                </div>
              </div>
            </div>

            <span className="faq-visual-chip chip-1"><FaBolt />Fast Answers</span>
            <span className="faq-visual-chip chip-2"><FaShieldAlt />Trusted Process</span>
            <span className="faq-visual-chip chip-3"><FaQuestion />Clear Guidance</span>
          </div>
        </div>

        {/* Right Side - FAQ Content */}
        <div className="faq-content scroll-reveal from-right delay-2">
          <div className="faq-header">
            <span className="faq-badge">FAQS</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion">
            {homeFaqs.map((faq, index) => (
              <div key={faq.id} className={`faq-item ${openIndex === index ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <svg
                    className="faq-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
