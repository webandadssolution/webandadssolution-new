"use client"

import { useState } from "react"
import Link from "next/link"
import {
  MdOutlineBuild,
  MdOutlineTravelExplore,
  MdOutlineArticle,
  MdOutlineLink,
  MdOutlineLocationOn,
  MdOutlineEditNote,
  MdOutlineBarChart,
  MdOutlineStorefront,
  MdOutlineShoppingCart,
  MdOutlineMapsHomeWork,
  MdOutlineAutoAwesome,
  MdOutlineForum,
} from "react-icons/md"
import { seoServicesFaqs } from "../data/faq-content"
import "../styles/seo-search-engine-optimization-page.css"

const offers = [
  {
    icon: <MdOutlineBuild size={26} />,
    title: "Technical SEO Audit",
    desc: "We fix the structural landmines under the hood—crawl errors, broken architecture, slow page speeds, and messy canonicals—so search engines and AI bots can index your site effortlessly.",
  },
  {
    icon: <MdOutlineTravelExplore size={26} />,
    title: "Keyword Research & Intent Strategy",
    desc: "We don't waste time targeting vanity terms with zero commercial value. An experienced seo specialist maps out what your ideal customers search when they are ready to buy.",
  },
  {
    icon: <MdOutlineEditNote size={26} />,
    title: "On-Page Optimization",
    desc: "From sharp title tags and clear header structures to intent-matching copy and internal linking, we optimize every single element on your core money pages.",
  },
  {
    icon: <MdOutlineLink size={26} />,
    title: "Link Building & Authority Growth",
    desc: "No spammy link farms or sketchy networks. We earn high-authority, relevant backlinks that tell Google and AI crawlers your domain is a trusted leader in your space.",
  },
  {
    icon: <MdOutlineLocationOn size={26} />,
    title: "Local SEO Services",
    desc: "Capture nearby buyers right when they need you. Our local seo services optimize your Google Business Profile, local citations, and geo-targeted landing pages so you dominate the local map pack.",
  },
  {
    icon: <MdOutlineArticle size={26} />,
    title: "Content Strategy & Optimization",
    desc: "We craft search-optimized, engaging articles and landing copy that directly answer customer questions, building topical authority while capturing organic search traffic.",
  },
  {
    icon: <MdOutlineBarChart size={26} />,
    title: "SEO Reporting & Pipeline Analytics",
    desc: "No confusing jargon or vanity metric dumps. You get clear, regular updates showing ranking progress, organic traffic growth, and actual leads generated.",
  },
]

const businessTypes = [
  {
    icon: <MdOutlineStorefront size={26} />,
    title: "Affordable SEO for Small Businesses",
    desc: "Small businesses don't need bloated enterprise retainers to rank locally. We tailor practical strategies that help local businesses out-rank regional competitors without draining capital. Getting practical seo help for small business growth means focusing strictly on high-impact wins first.",
  },
  {
    icon: <MdOutlineShoppingCart size={26} />,
    title: "SEO Marketing for Growing Ecommerce Brands",
    desc: "Scale product page visibility, solve duplicate content headaches, and capture high-intent shoppers searching for your specific inventory across Google and AI search bars.",
  },
  {
    icon: <MdOutlineMapsHomeWork size={26} />,
    title: "Local SEO Services for Service-Area Businesses",
    desc: "Whether you operate across three zip codes or three states, our seo marketing for small business systems ensure service-area providers capture local map pack placements and high-converting phone leads.",
  },
]

const processSteps = [
  {
    title: "Discovery & Technical Audit",
    desc: "We analyze your existing domain health, technical flaws, and current rankings. Your dedicated seo consultant maps out where the immediate quick wins live.",
  },
  {
    title: "Keyword & Competitor Decryption",
    desc: "We dissect your top competitors' strategy to see what keywords they rank for, where their links come from, and how we can out-structure their content.",
  },
  {
    title: "On-Page & Structural Fixes",
    desc: "We deploy technical fixes, re-architect page hierarchies, optimize meta data, and refine page copy for maximum conversion impact.",
  },
  {
    title: "Authority & Content Execution",
    desc: "We publish high-intent content assets and execute targeted outreach to secure high-authority backlinks that elevate your domain.",
  },
  {
    title: "Iteration & Pipeline Growth",
    desc: "Search algorithms shift, and so do we. We monitor performance, double down on what works, and constantly refine your strategy.",
  },
]

const pricingTiers = [
  {
    title: "Local Search Tier",
    desc: "Built for local service providers looking to capture immediate local map pack market share.",
  },
  {
    title: "Regional / Growth Tier",
    desc: "Designed for scaling businesses expanding into multiple markets or competing in moderate-difficulty niches.",
  },
  {
    title: "National / Enterprise Tier",
    desc: "Tailored for e-commerce brands, SaaS platforms, or enterprise businesses requiring aggressive content scale, technical engineering, and continuous authority acquisition.",
  },
]

const firstNinetyDays = [
  {
    title: "Month 1",
    desc: "Deep technical cleanup, baseline keyword mapping, and immediate structural on-page optimizations.",
  },
  {
    title: "Month 2",
    desc: "Content publishing kicks into gear, local citation alignment, and foundational link outreach begins.",
  },
  {
    title: "Month 3",
    desc: "Initial ranking movements on high-intent terms, increased indexing speed, and early organic lead signals. Our google seo services focus on building long-term, penalty-proof momentum.",
  },
]

const caseStudies = [
  {
    title: "B2B Industrial Client",
    stat: "+210% Organic Lead Growth",
    desc: "after re-architecting domain structure, resolving legacy technical errors, and publishing targeted high-intent content pillars over 6 months.",
  },
  {
    title: "Multi-Location Healthcare Brand",
    stat: "+180% Local Map Traffic",
    desc: "by standardizing Google Business Profiles across multiple locations and building geo-targeted landing pages.",
  },
]

const SeoServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="ss-page">
      {/* ── HERO ── */}
      <section className="ss-hero">
        <div className="ss-hero-glow ss-glow-1" />
        <div className="ss-hero-glow ss-glow-2" />
        <div className="ss-hero-inner scroll-reveal">
          <h1 className="ss-hero-title">SEO Services That Grow Your Business</h1>
          <Link href="/contact" className="ss-btn-primary">Get My Free SEO Audit</Link>
        </div>
      </section>

      {/* ── WHAT OUR SEO SERVICES DELIVER ── */}
      <section className="ss-section">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">What Our SEO Services Deliver</h2>
          <p className="ss-text scroll-reveal">
            Most agencies will sell you &ldquo;visibility&rdquo; and hand you a 40-page PDF full of technical jargon
            while your phone remains dead silent. We do things differently. Our seo services focus on driving
            high-intent organic traffic that actually translates into qualified leads and signed deals. By combining
            modern seo marketing tactics with direct-response optimization, we turn your website from a passive
            digital brochure into an active revenue engine. If you're looking for an online seo service that cares
            more about your pipeline than vanity impressions, you're in the right place.
          </p>
          <div className="ss-badge-row scroll-reveal">
            {["Page 1 Rankings Delivered", "Organic Traffic Engine Built", "Multi-Industry Expertise", "Battle-Tested Strategy"].map((b) => (
              <span key={b} className="ss-badge-chip">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SEO MARKETING STILL WINS ── */}
      <section className="ss-section alt">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">Why SEO Marketing Still Wins</h2>
          <div className="ss-two-col">
            <div className="ss-col scroll-reveal from-left">
              <h3 className="ss-sub-title">Google Search vs. AI Platforms — What's Changed</h3>
              <p className="ss-text">
                The playbook evolved. Searchers aren't just typing three keywords into Google and clicking the top
                blue link—they're asking ChatGPT for vendor recommendations, skimming Google AI Overviews, and
                double-checking local maps. Modern search optimization means positioning your brand as the definitive
                authority across both classic search engines and generative AI tools.
              </p>
            </div>
            <div className="ss-col scroll-reveal from-right">
              <h3 className="ss-sub-title">How SEO Drives Qualified Traffic and Revenue</h3>
              <p className="ss-text">
                Paid ads stop working the exact second your daily budget hits zero. Organic search compounds.
                Investing in a comprehensive search engine optimization service builds an enduring digital asset that
                brings high-intent buyers straight to your landing pages month after month without paying a toll for
                every single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="ss-section">
        <div className="ss-container">
          <h2 className="ss-section-title center scroll-reveal">What We Offer</h2>
          <div className="ss-offer-grid">
            {offers.map((o, i) => (
              <div key={o.title} className="ss-offer-card scroll-reveal" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="ss-offer-icon">{o.icon}</div>
                <h3 className="ss-offer-title">{o.title}</h3>
                <p className="ss-offer-desc">{o.desc}</p>
              </div>
            ))}
          </div>
          <div className="ss-inline-cta scroll-reveal">
            <p className="ss-text center">
              Not sure where to start? Our team will audit your site and show you exactly what's holding your
              rankings back—no pitch, no fluff.
            </p>
            <div className="ss-cta-actions">
              <Link href="/contact" className="ss-btn-primary">Get a Free SEO Audit</Link>
              <Link href="/book-a-call" className="ss-btn-outline">Talk to an SEO Specialist</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO OPTIMIZATION FOR EVERY BUSINESS ── */}
      <section className="ss-section alt">
        <div className="ss-container">
          <h2 className="ss-section-title center scroll-reveal">SEO Optimization for Every Business</h2>
          <div className="ss-business-grid">
            {businessTypes.map((b, i) => (
              <div key={b.title} className="ss-business-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="ss-offer-icon">{b.icon}</div>
                <h3 className="ss-offer-title">{b.title}</h3>
                <p className="ss-offer-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW OUR SEO PROCESS WORKS ── */}
      <section className="ss-section">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">How Our SEO Process Works</h2>
          <p className="ss-text scroll-reveal">
            Working with seasoned seo professionals shouldn't feel like black-box magic. Here is the exact process we
            use to consistently move rankings and build search equity:
          </p>
          <div className="ss-process-list">
            {processSteps.map((step, i) => (
              <div key={step.title} className="ss-process-item scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                <span className="ss-process-num">{String(i + 1).padStart(2, "0")}</span>
                <p className="ss-text"><strong>{step.title}:</strong> {step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="ss-section alt">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">SEO Services Pricing That Fits Your Scope</h2>
          <h3 className="ss-sub-title scroll-reveal">What Affects the Cost of SEO Services</h3>
          <p className="ss-text scroll-reveal">
            SEO isn't one-size-fits-all. The investment required depends on your site's current authority, industry
            competition, geographic scope, and how aggressively you want to scale.
          </p>
          <h3 className="ss-sub-title scroll-reveal" style={{ marginTop: "2.5rem" }}>Flexible Engagement Models</h3>
          <div className="ss-pricing-grid">
            {pricingTiers.map((t, i) => (
              <div key={t.title} className="ss-pricing-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <h4 className="ss-pricing-title">{t.title}</h4>
                <p className="ss-offer-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI VISIBILITY ── */}
      <section className="ss-section">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">SEO Visibility on AI Platforms</h2>
          <div className="ss-two-col">
            <div className="ss-col scroll-reveal from-left">
              <div className="ss-offer-icon"><MdOutlineAutoAwesome size={26} /></div>
              <h3 className="ss-sub-title">How to Rank in Google AI Overviews</h3>
              <p className="ss-text">
                Google AI Overviews summarize complex queries right at the top of search result pages. We structure
                your site data, schema markup, and content formatting so search algorithms pull your brand directly
                into these featured AI summaries.
              </p>
            </div>
            <div className="ss-col scroll-reveal from-right">
              <div className="ss-offer-icon"><MdOutlineForum size={26} /></div>
              <h3 className="ss-sub-title">Getting Your Business Found on ChatGPT and Perplexity</h3>
              <p className="ss-text">
                Generative Engine Optimization (GEO) is the new frontier. When potential buyers ask AI assistants for
                vendor recommendations, our authority-building strategies ensure your business is cited as a trusted
                solution in your niche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-HOUSE VS AGENCY ── */}
      <section className="ss-section alt">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">In-House SEO vs. Hiring an Agency</h2>
          <div className="ss-two-col">
            <div className="ss-col scroll-reveal from-left">
              <h3 className="ss-sub-title">When to Hire an SEO Specialist or Consultant</h3>
              <p className="ss-text">
                Hiring an in-house seo specialist sounds straightforward until you calculate the salary, benefits,
                and thousands per month in enterprise software tools required.
              </p>
            </div>
            <div className="ss-col scroll-reveal from-right">
              <h3 className="ss-sub-title">What to Look for in an SEO Services Provider</h3>
              <p className="ss-text">
                Working with a dedicated seo services provider gives you immediate access to a full team—technical
                strategists, copywriters, link builders, and analytics experts. If you want expert strategy without
                the management overhead, partnering with an external team or best seo expert is usually the smartest
                financial move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIRST 90 DAYS ── */}
      <section className="ss-section">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">What to Expect in the First 90 Days</h2>
          <p className="ss-text scroll-reveal">
            Anyone promising #1 rankings in 14 days is selling snake oil. Real organic search building takes
            systematic execution:
          </p>
          <div className="ss-timeline">
            {firstNinetyDays.map((m, i) => (
              <div key={m.title} className="ss-timeline-item scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="ss-timeline-dot" />
                <p className="ss-text"><strong>{m.title}:</strong> {m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL RESULTS ── */}
      <section className="ss-section alt">
        <div className="ss-container">
          <h2 className="ss-section-title scroll-reveal">Real Results from Real Clients</h2>
          <p className="ss-text scroll-reveal">
            We measure our value in traffic growth, lead volume, and bottom-line impact. Here is what happens when
            you partner with a team delivering top seo services:
          </p>
          <div className="ss-case-grid">
            {caseStudies.map((c, i) => (
              <div key={c.title} className="ss-case-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <h3 className="ss-offer-title">{c.title}</h3>
                <span className="ss-case-stat">{c.stat}</span>
                <p className="ss-offer-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="ss-cta-section">
        <div className="ss-cta-glow" />
        <div className="ss-container ss-cta-content scroll-reveal">
          <h2 className="ss-cta-title">Ready to Rank Higher? Let's Talk.</h2>
          <p className="ss-text center">
            Get a free website audit and competitor analysis from our team. No long-term traps, no sales scripts—just
            a clear roadmap to grow your search traffic and pipeline.
          </p>
          <div className="ss-cta-actions">
            <Link href="/contact" className="ss-btn-primary">Get My Free SEO Audit</Link>
            <Link href="/book-a-call" className="ss-btn-outline">Speak to an SEO Consultant</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ss-section">
        <div className="ss-container">
          <h2 className="ss-section-title center scroll-reveal">Frequently Asked Questions About SEO Services</h2>
          <div className="ss-faq-list scroll-reveal">
            {seoServicesFaqs.map((faq, i) => (
              <div key={faq.q} className={`ss-faq-item ${openFaq === i ? "open" : ""}`}>
                <button
                  type="button"
                  className="ss-faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="ss-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="ss-faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SeoServicesPage
