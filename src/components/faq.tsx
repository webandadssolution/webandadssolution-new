"use client"

import { useState } from "react"
import Link from "next/link"
import { FaHeadset } from "react-icons/fa"
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
                  <Link href="/book-a-call" className="faq-visual-card-sub">Talk to a Growth Specialist</Link>
                </div>
              </div>
            </div>

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
