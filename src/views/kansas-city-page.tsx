"use client"

import { useState } from "react"
import Link from "next/link"
import ContactForm from "../components/contact-form"
import OtherLocations from "../components/other-locations"
import { kansasCityFaqs } from "../data/faq-content"
import "../styles/missouri-page.css"

const services = [
  {
    title: "Search Engine Optimization Kansas City",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=SEO",
    alt: "Search engine optimization Kansas City services",
    desc:
      "Search demand for SEO in Kansas City is high, and so is the competition — we work as an seo company in Kansas City businesses trust to build technical SEO, content, and on-page strategy that moves rankings. Whether you're comparing us against another kansas city seo firm or just starting to explore seo services Kansas City has available, our approach is built around long-term, defensible visibility.",
  },
  {
    title: "PPC Agency Kansas City",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=PPC",
    alt: "PPC agency Kansas City campaign management",
    desc:
      "As a ppc agency Kansas City businesses use to control ad spend, we manage Google Ads and paid social built around cost-per-lead — the same discipline you'd expect from any ppc company Kansas City has to offer, minus the guesswork.",
  },
  {
    title: "SEO, Web Design & Marketing Services Kansas City",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Web",
    alt: "SEO web design Kansas City",
    desc:
      "Beyond rankings, we build the sites that convert that traffic — full seo web design & marketing services Kansas City businesses can manage under one roof instead of juggling separate vendors for design, content, and search.",
  },
  {
    title: "Social Media Marketing Kansas City",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Social",
    alt: "Social media marketing Kansas City",
    desc:
      "We're one of the social media marketing companies Kansas City businesses partner with for content strategy, community management, and paid social that turns engagement into leads.",
  },
  {
    title: "AI SEO Services in Kansas City (AEO & GEO)",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=AI+SEO",
    alt: "AI SEO Kansas City - AEO and GEO optimization",
    desc:
      "As AI-driven search grows, we help Kansas City businesses show up in it — AEO (Answer Engine Optimization) to win featured snippets and direct answers, and GEO (Generative Engine Optimization) to build the authority signals that get referenced in AI platforms like ChatGPT and Google AI Overviews.",
  },
]


const testimonials = [
  {
    text: "I have worked with website builders before. The web and ads solution people have been outstanding... She is marvelous, well spoken and knowledgeable.",
    name: "Chuck Rogers",
    role: "United States",
    initials: "CR",
  },
  {
    text: "Aastha and the webandadssolution team helped me with my business... my business now is better; can't wait to upgrade to their social media services.",
    name: "Jacky Huang",
    role: "United States",
    initials: "JH",
  },
  {
    text: "They were great and they explained everything to me throughout the process!",
    name: "Mortellis Huddleston",
    role: "United States",
    initials: "MH",
  },
]

const KansasCityPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="mo-page">
      {/* ── HERO ── */}
      <section className="mo-hero">
        <div className="mo-hero-glow mo-glow-1" />
        <div className="mo-hero-glow mo-glow-2" />
        <div className="mo-hero-inner">
          <div className="mo-hero-content scroll-reveal from-left">
            <h1 className="mo-hero-title">Digital Marketing Agency Kansas City</h1>
            <p className="mo-hero-subtext">
              Web &amp; Ads Solution is a full service digital marketing agency Kansas City businesses turn to for SEO,
              PPC, web design, and AI search visibility.
            </p>
            <div className="mo-hero-ctas">
              <Link href="/book-a-call" className="mo-btn-primary">Book a Strategy Call</Link>
              <a href="#quote" className="mo-btn-outline">Get a Free Quote</a>
            </div>
          </div>
          <div className="mo-hero-visual scroll-reveal from-right delay-1">
            <img
              src="/images/digital-marketing-kansas-city.webp"
              alt="Digital marketing agency Kansas City - Web & Ads Solution"
              className="mo-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mo-intro">
        <div className="mo-container">
          <p className="mo-intro-text scroll-reveal">
            Kansas City sits right on the Missouri-Kansas line, and so do a lot of the businesses competing for
            attention here which makes local search strategy more nuanced than a typical single-state market. As
            a <Link href="/missouri">Missouri-based agency</Link>, Kansas City is practically our backyard, and we
            build SEO and paid campaigns that account for how KC&apos;s metro area actually searches, whether a
            business is working out of the Crossroads Arts District, the Northland, or across the state line. From
            growing tech and logistics companies to established local service brands, we build digital marketing
            around how Kansas City customers actually search and buy.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="mo-services">
        <div className="mo-container">
          <div className="mo-section-header scroll-reveal">
            <h2 className="mo-section-title">Digital Marketing Services in Kansas City</h2>
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
            title="Get a Free Kansas City Digital Marketing Quote"
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
            {kansasCityFaqs.map((faq, i) => (
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

export default KansasCityPage
