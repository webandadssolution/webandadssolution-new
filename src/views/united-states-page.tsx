"use client"

import { useState } from "react"
import Link from "next/link"
import ContactForm from "../components/contact-form"
import OtherLocations from "../components/other-locations"
import { unitedStatesFaqs } from "../data/faq-content"
import "../styles/united-states-page.css"

const services = [
  {
    title: "PPC Agency in USA",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=PPC",
    alt: "PPC agency in USA campaign management",
    desc:
      "As a performance-focused ppc agency in USA, we manage Google Ads, paid social, and shopping campaigns built around cost-per-lead and ROAS, not just clicks. Whether you need a dedicated ppc agency USA team or an online marketing agency USA partner to scale spend efficiently, campaigns are built to convert from day one.",
  },
  {
    title: "Social Media Marketing Agency USA",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Social",
    alt: "Social media marketing agency USA services",
    desc:
      "Our team runs organic and paid social as a full social media marketing agency USA businesses can lean on for consistent growth content calendars, community management, and paid social funnels that turn followers into leads.",
  },
  {
    title: "Local SEO Agency USA",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Local+SEO",
    alt: "Local SEO agency USA - Google Business Profile optimization",
    desc:
      "For businesses competing in specific markets, our work as a local seo agency USA partner focuses on Google Business Profile optimization, local citations, and map-pack visibility, so you show up where your customers are already searching.",
  },
  {
    title: "B2B Digital Marketing Agency USA",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=B2B",
    alt: "B2B digital marketing agency USA services",
    desc:
      "We also work as a b2b digital marketing agency USA companies bring in for longer sales cycles building lead-gen funnels, LinkedIn strategy, and content designed to move prospects from awareness to a signed deal.",
  },
  {
    title: "Website Development for US Businesses",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Web",
    alt: "Website development for US businesses",
    desc:
      "Every campaign needs a site that can convert. We design and build fast, mobile-first websites structured to support SEO, AEO/GEO, and paid traffic not just look good.",
  },
]


const testimonials = [
  {
    text: "Nash and Yukta have truly become an invaluable part of both Bevilacqua Deck Building and Bevilacqua Homes. From day one, they brought a level of professionalism and care that you don't always find.",
    name: "Anthony Bevilacqua",
    initials: "AB",
  },
  {
    text: "Aastha and her team are excellent to work with. They have delivered consistent positive results in a very difficult product category.",
    name: "Tim",
    initials: "T",
  },
  {
    text: "I found them to be very knowledgeable, honest, and dependable... I would recommend them to anyone.",
    name: "Anthony Calderaio",
    initials: "AC",
  },
  {
    text: "I was pleased with the work that this company did, the team worked very hard... I recommend this company.",
    name: "Jose Cofresi",
    initials: "JC",
  },
]

const UnitedStatesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="us-page">
      {/* ── HERO ── */}
      <section className="us-hero">
        <div className="us-hero-glow us-glow-1" />
        <div className="us-hero-glow us-glow-2" />
        <div className="us-hero-inner">
          <div className="us-hero-content scroll-reveal from-left">
            <h1 className="us-hero-title">Digital Marketing Agency in USA</h1>
            <p className="us-hero-subtext">
              Web &amp; Ads Solution helps businesses across the United States grow with SEO, PPC, and social media
              marketing built around measurable ROI not vanity metrics.
            </p>
            <div className="us-hero-ctas">
              <Link href="/book-a-call" className="us-btn-primary">Book a Strategy Call</Link>
              <a href="#quote" className="us-btn-outline">Get a Free Quote</a>
            </div>
          </div>
          <div className="us-hero-visual scroll-reveal from-right delay-1">
            <img
              src="/images/digital-marketing-agency-in-usa.webp"
              alt="Digital marketing agency in USA - SEO, PPC, social media, local SEO, and web development across all 50 states"
              className="us-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="us-intro">
        <div className="us-container">
          <p className="us-intro-text scroll-reveal">
            With thousands of digital marketing firms in the USA competing for attention, growing a business online
            takes more than guesswork, it takes a team that understands U.S. search behavior, ad platforms, and buyer
            intent. Web &amp; Ads Solution works as a digital agency United States businesses rely on to build SEO,
            paid media, and content strategies around real growth goals. From startups to established brands, we
            align search, social, and paid under one connected strategy built for the U.S. market.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="us-services">
        <div className="us-container">
          <div className="us-section-header scroll-reveal">
            <h2 className="us-section-title">Digital Marketing Services in USA</h2>
            <p className="us-section-desc">
              Every engagement starts with a channel mix built around your business not a one-size-fits-all package.
            </p>
          </div>
          <div className="us-services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="us-service-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <img src={s.icon} alt={s.alt} className="us-service-icon" />
                <h3 className="us-service-title">{s.title}</h3>
                <p className="us-service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER LOCATIONS ── */}
      <OtherLocations />

      {/* ── CTA FORM ── */}
      <section className="us-quote" id="quote">
        <div className="us-container us-quote-inner">
          <ContactForm
            title="Get a Free USA Digital Marketing Quote"
            subtitle="Tell us about your business and goals — we'll come back with a tailored plan."
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="us-testimonials">
        <div className="us-container">
          <span className="us-eyebrow scroll-reveal">Testimonials</span>
          <div className="us-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className="us-testimonial-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <p className="us-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="us-testimonial-author">
                  <img
                    src={`https://placehold.co/100x100/0a0a0a/f06820?text=${t.initials}`}
                    alt={`${t.name} - Web & Ads Solution client, United States`}
                    className="us-testimonial-avatar"
                  />
                  <div>
                    <span className="us-testimonial-name">{t.name}</span>
                    <span className="us-testimonial-role">United States</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="us-faq">
        <div className="us-container">
          <h2 className="us-section-title center scroll-reveal">Frequently Asked Questions</h2>
          <div className="us-faq-list scroll-reveal">
            {unitedStatesFaqs.map((faq, i) => (
              <div key={faq.q} className={`us-faq-item ${openFaq === i ? "open" : ""}`}>
                <button
                  type="button"
                  className="us-faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="us-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="us-faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default UnitedStatesPage
