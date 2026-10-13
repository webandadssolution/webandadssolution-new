"use client"

import { useState } from "react"
import Link from "next/link"
import ContactForm from "../components/contact-form"
import OtherLocations from "../components/other-locations"
import { stLouisFaqs } from "../data/faq-content"
import "../styles/missouri-page.css"

const services = [
  {
    title: "SEO Company St. Louis",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=SEO",
    alt: "SEO company St. Louis services",
    desc:
      "Ranking in St. Louis means winning both city and county searches. Our SEO agency St. Louis work covers local listings, service-area pages, technical fixes, and content for businesses from Clayton to Chesterfield.",
  },
  {
    title: "PPC Company St. Louis",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=PPC",
    alt: "PPC company St. Louis campaign management",
    desc:
      "Running paid search in a metro this size gets expensive without tight targeting. Our PPC agency St. Louis campaigns use geo-fenced Google Ads and paid social to put your budget in front of the right ZIP codes and nowhere else.",
  },
  {
    title: "SMO Company St. Louis",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Social",
    alt: "SMO company St. Louis - social media agency",
    desc:
      "Social media optimization for St. Louis brands means profiles, content, and community activity that match how locals discover restaurants, clinics, and services. As a social media agency St. Louis owners can hand the day-to-day to, we handle posting, engagement, and paid social.",
  },
  {
    title: "Web Design Agency St. Louis",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Web",
    alt: "Web design agency St. Louis",
    desc:
      "Your website is where St. Louis searchers decide. Our web design company St. Louis team builds fast, mobile-first sites with clear service pages, click-to-call buttons, and layouts ready for SEO and ad traffic.",
  },
  {
    title: "Web Development Company St. Louis",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=Dev",
    alt: "Web development company St. Louis",
    desc:
      "For custom features, booking tools, e-commerce, or integrations, our web development agency St. Louis team builds on WordPress and custom stacks, with clean code that supports speed and search.",
  },
  {
    title: "Virtual Assistance Agency St. Louis",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=VA",
    alt: "Virtual assistance agency St. Louis",
    desc:
      "Hand off admin, inbox management, scheduling, data entry, and lead follow-up. Our virtual assistance company St. Louis service gives local business owners hours back each week.",
  },
  {
    title: "AI SEO St. Louis (AEO & GEO)",
    icon: "https://placehold.co/80x80/0a0a0a/f06820?text=AI+SEO",
    alt: "AI SEO St. Louis - AEO and GEO optimization",
    desc:
      "More St. Louis customers now ask ChatGPT or Google's AI Overviews who to call. AEO (Answer Engine Optimization) structures your content to win featured snippets and direct answers. GEO (Generative Engine Optimization) builds the authority signals that get your business named in AI-generated recommendations.",
  },
]


const testimonials = [
  {
    text: "Aastha has been conscientious and detail-oriented at every step of re-creating our website, starting with the eradication of all the malware that had plagued us. She also developed a robust SEO strategy, and has protected our site with strong firewalls.",
    name: "Peter Falk",
    role: "United States",
    initials: "PF",
  },
  {
    text: "From my first encounter with Webandadsolution I felt confident I had chosen the right company. Their creativity and dedication to expanding our nonprofit ASA (America Supporting Americans) has been heartwarming. My manager Simi and her crew are professional, always ready to answer questions and follow through on every request.",
    name: "Linda Patterson",
    role: "United States",
    initials: "LP",
  },
  {
    text: "I've had a very positive experience with Webandadssolution - they were very professional, responsive and easy to work with.",
    name: "Fiona",
    role: "United Kingdom",
    initials: "F",
  },
]

const StLouisPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="mo-page">
      {/* ── HERO ── */}
      <section className="mo-hero">
        <div className="mo-hero-glow mo-glow-1" />
        <div className="mo-hero-glow mo-glow-2" />
        <div className="mo-hero-inner">
          <div className="mo-hero-content scroll-reveal from-left">
            <h1 className="mo-hero-title">Digital Marketing Company St. Louis</h1>
            <p className="mo-hero-subtext">
              Web &amp; Ads Solution is a digital marketing agency St. Louis businesses hire for SEO, PPC, social
              media, web design, and AI search visibility.
            </p>
            <div className="mo-hero-ctas">
              <Link href="/book-a-call" className="mo-btn-primary">Book a Strategy Call</Link>
              <a href="#quote" className="mo-btn-outline">Get a Free Quote</a>
            </div>
          </div>
          <div className="mo-hero-visual scroll-reveal from-right delay-1">
            <img
              src="/images/digital-marketing-st-louis.webp"
              alt="Digital marketing company St. Louis - Web & Ads Solution"
              className="mo-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mo-intro">
        <div className="mo-container">
          <p className="mo-intro-text scroll-reveal">
            St. Louis is a river city with a metro area of nearly 3 million people, and it competes online the way
            it does offline: neighborhood by neighborhood. A bakery on The Hill, a law firm in Clayton, a clinic
            near the Cortex Innovation Community, and a brewery in Soulard are all fighting for different searches.
            The city of St. Louis is also separate from St. Louis County, so &quot;near me&quot; results shift a lot
            between the two. Home to Anheuser-Busch, Enterprise Holdings, BJC HealthCare, and a fast-growing
            bioscience scene, the market rewards businesses that show up with local, specific messaging instead of
            a generic pitch. We build campaigns around that reality.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="mo-services">
        <div className="mo-container">
          <div className="mo-section-header scroll-reveal">
            <h2 className="mo-section-title">Digital Marketing Agency St. Louis</h2>
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
            title="Get a Free St. Louis Digital Marketing Quote"
            subtitle="Tell us about your business and goals, and we'll come back with a plan built for the St. Louis market."
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
            {stLouisFaqs.map((faq, i) => (
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

export default StLouisPage
