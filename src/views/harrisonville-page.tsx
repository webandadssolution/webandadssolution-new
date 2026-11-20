"use client"

import { useState } from "react"
import Link from "next/link"
import ContactForm from "../components/contact-form"
import OtherLocations from "../components/other-locations"
import { harrisonvilleFaqs } from "../data/faq-content"
import "../styles/missouri-page.css"

const services = [
  {
    title: "SEO Agency Near Me in Harrisonville",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=SEO",
    alt: "SEO agency near me in Harrisonville",
    desc:
      "Looking for SEO services near me? We build organic visibility through technical SEO, on-page optimization, local SEO, and content, so Harrisonville customers find you on Google and in Maps. No inflated promises, just a clear 90-day roadmap.",
  },
  {
    title: "PPC Agency in Harrisonville",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=PPC",
    alt: "PPC agency in Harrisonville campaign management",
    desc:
      "Our Google Ads and paid social campaigns are built around cost per lead, so ad spend turns into calls and sales, not just clicks.",
  },
  {
    title: "Web Design & Internet Marketing Services Near Me",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Web",
    alt: "Web design and internet marketing services near me in Harrisonville",
    desc:
      "Searching for internet marketing services near me? We design fast, mobile-first websites built to support SEO, AI search, and paid campaigns from day one, so one team handles it all.",
  },
  {
    title: "Social Media Marketing in Harrisonville",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Social",
    alt: "Social media marketing in Harrisonville",
    desc:
      "From content calendars to paid social, we help local businesses earn consistent engagement and inquiries, not just followers.",
  },
  {
    title: "AI SEO Services in Harrisonville (AEO & GEO)",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=AI+SEO",
    alt: "AI SEO services in Harrisonville - AEO and GEO optimization",
    desc: (
      <>
        As search shifts toward AI answers, we help Harrisonville businesses show up in them. AEO helps you win
        featured snippets and direct answers, and GEO builds the authority signals that help ChatGPT and Google AI
        Overviews recognize your business. Learn more in our guide:{" "}
        <Link href="/ai-seo/how-to-rank-in-ai-overviews/">How to Rank in AI Overviews</Link>.
      </>
    ),
  },
]

const HarrisonvillePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="mo-page">
      {/* ── HERO ── */}
      <section className="mo-hero">
        <div className="mo-hero-glow mo-glow-1" />
        <div className="mo-hero-glow mo-glow-2" />
        <div className="mo-hero-inner">
          <div className="mo-hero-content scroll-reveal from-left">
            <h1 className="mo-hero-title">Digital Marketing Agency in Harrisonville</h1>
            <p className="mo-hero-subtext">
              Searching for a digital marketing agency near me? Web &amp; Ads Solution is a Harrisonville agency
              helping local businesses grow with SEO, PPC, web design, and AI-driven visibility.
            </p>
            <div className="mo-hero-ctas">
              <Link href="/book-a-call/" className="mo-btn-primary">Book a Strategy Call</Link>
              <a href="#quote" className="mo-btn-outline">Get a Free Quote</a>
            </div>
          </div>
          <div className="mo-hero-visual scroll-reveal from-right delay-1">
            <img
              src="/images/digital-marketing-harrisonville.webp"
              alt="Digital marketing agency in Harrisonville - Web & Ads Solution"
              className="mo-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mo-intro">
        <div className="mo-container">
          <p className="mo-intro-text scroll-reveal">
            As a <Link href="/missouri/">Missouri-based marketing agency</Link> headquartered right here in
            Harrisonville, we work with businesses across Cass County and the{" "}
            <Link href="/kansas-city">Kansas City</Link> metro who want more than a distant, generic vendor. If
            you&rsquo;ve searched for a marketing agency near me, you know proximity matters: we understand local
            competition, how people here search, and what turns clicks into calls. Whether you run a local service
            company, a clinic, or a growing business in Harrisonville, Belton, Raymore, or Pleasant Hill, we build
            SEO and paid campaigns around how your customers actually search and buy.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="mo-services">
        <div className="mo-container">
          <div className="mo-section-header scroll-reveal">
            <h2 className="mo-section-title">Digital Marketing Services in Harrisonville</h2>
          </div>
          <div className="mo-services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="mo-service-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <img src={s.icon} alt={s.alt} className="mo-service-icon" />
                <h3 className="mo-service-title">{s.title}</h3>
                <p className="mo-service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER LOCATIONS ── */}
      <OtherLocations />

      {/* ── CTA FORM ── */}
      <section className="mo-quote" id="quote">
        <div className="mo-container mo-quote-inner">
          <ContactForm
            title="Get a Free Harrisonville Digital Marketing Quote"
            subtitle="Tell us about your business and goals. We’ll come back with a tailored plan."
          />
          <p className="mo-quote-call">
            Prefer to talk? Call <a href="tel:+19177087134">+1 917 708 7134</a>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mo-faq">
        <div className="mo-container">
          <h2 className="mo-section-title center scroll-reveal">Frequently Asked Questions</h2>
          <div className="mo-faq-list scroll-reveal">
            {harrisonvilleFaqs.map((faq, i) => (
              <div key={faq.q} className={`mo-faq-item ${openFaq === i ? "open" : ""}`}>
                <button
                  type="button"
                  className="mo-faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="mo-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="mo-faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HarrisonvillePage
