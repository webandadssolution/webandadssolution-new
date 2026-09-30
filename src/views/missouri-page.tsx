"use client"

import { useState } from "react"
import Link from "next/link"
import ContactForm from "../components/contact-form"
import OtherLocations from "../components/other-locations"
import { missouriFaqs } from "../data/faq-content"
import "../styles/missouri-page.css"

const services = [
  {
    title: "SEO Agency in Missouri",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=SEO",
    alt: "SEO agency in Missouri services",
    desc:
      "As a Missouri SEO agency, we build organic visibility through on-page optimization, technical SEO, and content strategy tailored to how Missouri businesses actually get searched for — locally and statewide.",
  },
  {
    title: "PPC Agency in Missouri",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=PPC",
    alt: "PPC agency in Missouri campaign management",
    desc:
      "Our work as a Missouri PPC agency covers Google Ads, paid social, and lead-gen campaigns built around cost-per-lead and ROAS, so ad spend turns into pipeline, not just impressions.",
  },
  {
    title: "Web Design Missouri",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Web",
    alt: "Web design Missouri - custom website development",
    desc:
      "We design and build fast, mobile-first websites for Missouri web design clients — structured to support SEO, AI search visibility, and paid campaigns from day one, not bolted on after launch.",
  },
  {
    title: "Social Media Marketing Missouri",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Social",
    alt: "Social media marketing Missouri content and paid social",
    desc:
      "From content calendars to paid social funnels, we manage social media marketing for Missouri businesses that want consistent engagement and leads, not just followers.",
  },
  {
    title: "AI SEO Services in Missouri (AEO & GEO)",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=AI+SEO",
    alt: "AI SEO Missouri - AEO and GEO optimization",
    desc:
      "As search shifts toward AI-driven answers, we help Missouri businesses show up in them. Our AI SEO Missouri approach includes AEO (Answer Engine Optimization) — structuring content to win featured snippets and direct answers — and GEO (Generative Engine Optimization) — building authority signals so AI platforms like ChatGPT and Google AI Overviews recognize and recommend your business.",
  },
]


const testimonials = [
  {
    text: "Great team, great customer services... Fast and beautiful work done. Thank you Web and Ads solution. You did great job for my website.",
    name: "Quyen DoYoder",
    role: "United States",
    initials: "QD",
  },
  {
    text: "Great company. Great service... They are very attentive to details.",
    name: "Jay Behl",
    role: "Canada",
    initials: "JB",
  },
  {
    text: "I am very sceptical about working with businesses that I meet online... Working with Aastha was an absolute pleasure. Really good value for the investment.",
    name: "Mathew Muldoon",
    role: "United States",
    initials: "MM",
  },
  {
    text: "The project manager assigned to our site was very quick to respond to questions and was able to fix quite a few issues with our website in a very short period of time.",
    name: "Linda L.",
    role: "United States",
    initials: "LL",
  },
]

const MissouriPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="mo-page">
      {/* ── HERO ── */}
      <section className="mo-hero">
        <div className="mo-hero-glow mo-glow-1" />
        <div className="mo-hero-glow mo-glow-2" />
        <div className="mo-hero-inner">
          <div className="mo-hero-content scroll-reveal from-left">
            <h1 className="mo-hero-title">Digital Marketing Missouri</h1>
            <p className="mo-hero-subtext">
              Web &amp; Ads Solution is a Missouri digital marketing agency helping local businesses grow with SEO,
              PPC, web design, and AI-driven visibility strategies.
            </p>
            <div className="mo-hero-ctas">
              <Link href="/book-a-call" className="mo-btn-primary">Book a Strategy Call</Link>
              <a href="#quote" className="mo-btn-outline">Get a Free Quote</a>
            </div>
          </div>
          <div className="mo-hero-visual scroll-reveal from-right delay-1">
            <img
              src="/images/digital-marketing-missouri.webp"
              alt="Digital marketing agency in Missouri - Web & Ads Solution"
              className="mo-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mo-intro">
        <div className="mo-container">
          <p className="mo-intro-text scroll-reveal">
            As a Missouri-based digital marketing agency headquartered right here in Harrisonville, we work closely
            with businesses across the state — from Kansas City to St. Louis to Springfield — who want more than a
            distant, generic marketing vendor. Digital marketing in Missouri means understanding local competition,
            regional search behavior, and the industries that drive the state, whether that&apos;s logistics along
            I-70, manufacturing, healthcare, or local services. Being Missouri digital marketing specialists
            ourselves means we&apos;re not guessing at what works here — it&apos;s where we operate every day.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="mo-services">
        <div className="mo-container">
          <div className="mo-section-header scroll-reveal">
            <h2 className="mo-section-title">Digital Marketing Services in Missouri</h2>
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
            title="Get a Free Missouri Digital Marketing Quote"
            subtitle="Tell us about your business and goals — we'll come back with a tailored plan."
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="mo-testimonials">
        <div className="mo-container">
          <span className="mo-eyebrow scroll-reveal">Testimonials</span>
          <div className="mo-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className="mo-testimonial-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <p className="mo-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="mo-testimonial-author">
                  <img
                    src={`https://placehold.co/100x100/0a0a0a/f06820?text=${t.initials}`}
                    alt={`${t.name} - Web & Ads Solution client, ${t.role}`}
                    className="mo-testimonial-avatar"
                  />
                  <div>
                    <span className="mo-testimonial-name">{t.name}</span>
                    <span className="mo-testimonial-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mo-faq">
        <div className="mo-container">
          <h2 className="mo-section-title center scroll-reveal">Frequently Asked Questions</h2>
          <div className="mo-faq-list scroll-reveal">
            {missouriFaqs.map((faq, i) => (
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

export default MissouriPage
