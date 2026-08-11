"use client"

import Link from "next/link"
import {
  MdOutlineVisibility,
  MdOutlineArticle,
  MdOutlineLink,
  MdOutlineLocationOn,
  MdOutlineSmartToy,
  MdOutlineCardGiftcard,
  MdOutlinePerson,
  MdOutlineBolt,
  MdOutlineBarChart,
  MdOutlineDoNotDisturb,
  MdOutlineTrackChanges,
  MdOutlineSearch,
  MdOutlineMap,
  MdOutlineRecordVoiceOver,
  MdOutlinePhoneIphone,
  MdOutlineAutoAwesome,
  MdOutlineTrendingUp,
  MdOutlineEmojiEvents,
} from "react-icons/md"
import "../styles/seo-page.css"

const SEOPage = () => {
  return (
    <div className="seo-page">

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg-grid" />
        <div className="seo-hero-glow seo-glow-1" />
        <div className="seo-hero-glow seo-glow-2" />
        <div className="seo-hero-glow seo-glow-3" />

        <div className="seo-hero-inner">
          <div className="seo-hero-content">
            <div className="seo-badge scroll-reveal">
              <span className="seo-badge-dot" />
              SEO Services
            </div>

            <h1 className="seo-hero-title scroll-reveal delay-1">
              Your Website Should Be<br />
              Bringing In Opportunities.{" "}
              <span className="seo-title-accent">Not Sitting Quietly.</span>
            </h1>

            <div className="seo-hero-body scroll-reveal delay-2">
              <p>A surprising number of businesses invest heavily in their website and then wonder why enquiries remain inconsistent.</p>
              <p>The design looks good. The services are clearly explained. Everything appears to be in place.</p>
              <p className="seo-hero-callout">Yet competitors keep showing up first.</p>
              <p className="seo-hero-emphasis">Visibility is often the missing piece.</p>
              <p>If potential customers can't find your business when they're actively searching for your services, your website never gets the chance to do its job.</p>
              <p className="seo-hero-pivot">That's where SEO comes in.</p>
              <p>At Web and Ads Solution, we help businesses improve their visibility across search engines, local search results, and emerging AI-powered search experiences. The objective isn't simply to generate traffic. It's to put your business in front of people who are already looking for what you offer.</p>
            </div>

            <div className="seo-hero-stats scroll-reveal delay-2">
              <div className="seo-hero-stat">
                <span className="seo-hero-stat-num">500<span>+</span></span>
                <span className="seo-hero-stat-label">Clients Served</span>
              </div>
              <div className="seo-stat-div" />
              <div className="seo-hero-stat">
                <span className="seo-hero-stat-num">8<span>yr</span></span>
                <span className="seo-hero-stat-label">Experience</span>
              </div>
              <div className="seo-stat-div" />
              <div className="seo-hero-stat">
                <span className="seo-hero-stat-num">247<span>%</span></span>
                <span className="seo-hero-stat-label">Avg Traffic Growth</span>
              </div>
            </div>

            <div className="seo-hero-ctas scroll-reveal delay-3">
              <Link href="/book-a-call" className="seo-btn-primary">Book a Free Consultation</Link>
              <a href="#focus" className="seo-btn-outline">What We Focus On</a>
            </div>
          </div>

          <div className="seo-hero-visual scroll-reveal delay-2">
            <div className="seo-visual-wrap">
              <div className="seo-kw-bubble seo-kw-1"><MdOutlineEmojiEvents size={14} /> #1 SEO Agency</div>
              <div className="seo-kw-bubble seo-kw-2"><MdOutlineTrendingUp size={14} /> 3.2x ROI</div>

              <div className="seo-rank-card">
                <div className="seo-rank-header">
                  <div className="seo-rank-dot green" /><div className="seo-rank-dot yellow" /><div className="seo-rank-dot red" />
                  <span>Search Rankings</span>
                </div>
                <div className="seo-rank-list">
                  {["your-brand.com", "competitor-a.com", "competitor-b.com", "competitor-c.com"].map((domain, i) => (
                    <div key={i} className={`seo-rank-row ${i === 0 ? "top-rank" : ""}`}>
                      <span className="seo-rank-pos">#{i + 1}</span>
                      <div className="seo-rank-bar-wrap">
                        <div className="seo-rank-bar" style={{ width: `${100 - i * 18}%`, background: i === 0 ? "#f06820" : "rgba(255,255,255,0.15)" }} />
                      </div>
                      <span className="seo-rank-domain">{domain}</span>
                    </div>
                  ))}
                </div>
                <div className="seo-rank-footer">
                  <span className="seo-rank-badge">↑ 14 positions this month</span>
                </div>
              </div>

              <div className="seo-traffic-card">
                <span className="seo-traffic-label">Organic Traffic</span>
                <span className="seo-traffic-value">+247%</span>
                <div className="seo-traffic-bars">
                  {[30, 42, 38, 55, 48, 70, 88, 95].map((h, i) => (
                    <div key={i} className="seo-traffic-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOD BUSINESSES GET OVERLOOKED ── */}
      <section className="seo-overlooked-section">
        <div className="seo-section-container">
          <div className="seo-overlooked-inner">
            <div className="seo-overlooked-left scroll-reveal from-left">
              <div className="seo-overlooked-num">01</div>
              <h2 className="seo-overlooked-heading">Good Businesses Get Overlooked Every Day</h2>
              <div className="seo-overlooked-accent-bar" />
            </div>
            <div className="seo-overlooked-right scroll-reveal from-right">
              <p>Search results aren't reserved for the best businesses.</p>
              <p>They're reserved for the businesses search engines understand best.</p>
              <p>We've seen companies with excellent products, strong reputations, and talented teams struggle online because their competitors were easier to find.</p>
              <p className="seo-overlooked-highlight">SEO helps close that gap.</p>
              <p>By improving your website's structure, content, authority, and search presence, we help search engines understand who you are, what you do, and why your business deserves attention.</p>
            </div>
          </div>
          <div className="seo-section-img-wrap scroll-reveal" style={{ marginTop: "56px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.18)", maxHeight: "420px" }}>
            <img src="/images/seo-overlooked.jpg" alt="Good businesses get overlooked" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ── WHAT WE FOCUS ON ── */}
      <section className="seo-focus-section" id="focus">
        <div className="seo-section-container">
          <div className="seo-section-header scroll-reveal">
            <span className="seo-section-tag">What We Focus On</span>
            <h2 className="seo-section-title">Every business has different goals, audiences, and challenges.</h2>
            <p className="seo-section-desc">That's why we don't approach SEO with a generic checklist. Our work focuses on:</p>
          </div>

          <div className="seo-focus-grid">
            {[
              { num: "01", icon: <MdOutlineVisibility size={28} />, title: "Improving Visibility",    desc: "Helping your website appear for searches that are relevant to your business and your customers.", color: "#f06820" },
              { num: "02", icon: <MdOutlineArticle   size={28} />, title: "Strengthening Content",    desc: "Creating and optimizing content that answers questions, demonstrates expertise, and supports search performance.", color: "#6c25f7" },
              { num: "03", icon: <MdOutlineLink      size={28} />, title: "Building Authority",        desc: "Developing trust signals that help search engines view your business as a credible source within your industry.", color: "#0cb666" },
              { num: "04", icon: <MdOutlineLocationOn size={28} />, title: "Local Search Growth",      desc: "Helping nearby customers find your business through local SEO strategies and Google Business Profile optimization.", color: "#0055cc" },
              { num: "05", icon: <MdOutlineSmartToy  size={28} />, title: "Preparing for AI Search",  desc: "Search is evolving. We incorporate AEO and GEO strategies to help businesses remain visible across AI-powered search experiences, answer engines, and emerging discovery platforms.", color: "#e91e99" },
            ].map((item, i) => (
              <div
                key={i}
                className={`seo-focus-card scroll-reveal ${i === 4 ? "seo-focus-card-wide" : ""}`}
                style={{ "--card-color": item.color } as React.CSSProperties}
              >
                <div className="seo-focus-card-top">
                  <div className="seo-focus-card-icon-wrap">
                    <span className="seo-focus-card-icon" style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <span className="seo-focus-card-num">{item.num}</span>
                </div>
                <div className="seo-focus-card-text">
                  <h3 className="seo-focus-card-title">{item.title}</h3>
                  <p className="seo-focus-card-desc">{item.desc}</p>
                </div>
                <div className="seo-focus-card-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO IS CHANGING ── */}
      <section className="seo-changing-section">
        <div className="seo-section-container">
          <div className="seo-changing-inner">

            <div className="seo-changing-left scroll-reveal from-left">
              <span className="seo-section-tag light">The Landscape</span>
              <h2 className="seo-changing-title">SEO Is Changing.<br /><span className="seo-title-accent-dark">Visibility Still Matters.</span></h2>
              <div className="seo-changing-body">
                <p>People don't search the same way they did a few years ago.</p>
                <p>The platforms are changing.</p>
                <p className="seo-changing-bold">The goal isn't.</p>
                <p>Your business needs to be visible wherever customers are looking for answers.</p>
                <p>That's why our approach combines traditional SEO with modern search strategies designed for the way people discover information today.</p>
              </div>
              <div className="scroll-reveal" style={{ marginTop: "36px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.3)" }}>
                <img src="/images/seo-strategy.jpg" alt="SEO strategy" style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            <div className="seo-changing-right scroll-reveal from-right">
              <p className="seo-changing-intro">Some use Google. Some use Maps. Some ask ChatGPT. Others rely on AI-generated recommendations before visiting a website.</p>
              <div className="seo-platform-grid">
                {[
                  { icon: <MdOutlineSearch           size={22} />, label: "Google Search",  active: true  },
                  { icon: <MdOutlineMap              size={22} />, label: "Google Maps",    active: true  },
                  { icon: <MdOutlineSmartToy         size={22} />, label: "ChatGPT",         active: true  },
                  { icon: <MdOutlineAutoAwesome      size={22} />, label: "AI Answers",      active: true  },
                  { icon: <MdOutlinePhoneIphone      size={22} />, label: "Social Search",   active: false },
                  { icon: <MdOutlineRecordVoiceOver  size={22} />, label: "Voice Search",    active: false },
                ].map((p, i) => (
                  <div key={i} className={`seo-platform-chip ${p.active ? "active" : ""}`} style={{ animationDelay: `${i * 0.12}s` }}>
                    <span className="seo-platform-icon" style={{ display:"flex", alignItems:"center" }}>{p.icon}</span>
                    <span className="seo-platform-label">{p.label}</span>
                    {p.active && <span className="seo-platform-dot" />}
                  </div>
                ))}
              </div>
              <p className="seo-changing-note">We optimise for every channel your customers actually use.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES ENJOY WORKING WITH US ── */}
      <section className="seo-why-section">
        <div className="seo-section-container">
          <div className="seo-why-inner">

            <div className="seo-why-left scroll-reveal from-left">
              <span className="seo-section-tag light">Why Choose Us</span>
              <h2 className="seo-why-title">
                Why Businesses Enjoy<br />
                <span className="seo-title-accent-dark">Working With Us</span>
              </h2>
              <p className="seo-why-desc">
                We're not interested in disappearing behind support tickets and automated responses.
                When you work with Web and Ads Solution, you'll have direct communication, a dedicated account manager,
                and a team that takes your concerns seriously.
              </p>
              <p className="seo-why-closing">Good service shouldn't be difficult to find.</p>
              <Link href="/book-a-call" className="seo-btn-primary-dark">Book a Free Consultation</Link>
            </div>

            <div className="seo-why-right">
              {[
                { icon: <MdOutlineCardGiftcard     size={24} />, title: "Free first consultation",               color: "#f06820" },
                { icon: <MdOutlinePerson           size={24} />, title: "Dedicated account manager",             color: "#6c25f7" },
                { icon: <MdOutlineBolt             size={24} />, title: "Fast responses and clear communication", color: "#f59e0b" },
                { icon: <MdOutlineBarChart         size={24} />, title: "Transparent reporting",                 color: "#0cb666" },
                { icon: <MdOutlineDoNotDisturb     size={24} />, title: "No long support queues",                color: "#e91e99" },
                { icon: <MdOutlineTrackChanges     size={24} />, title: "Strategies built around your goals",    color: "#0055cc" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="seo-why-card scroll-reveal"
                  style={{ animationDelay: `${i * 0.08}s`, "--why-color": item.color } as React.CSSProperties}
                >
                  <div className="seo-why-icon-wrap">
                    <span className="seo-why-icon" style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <div className="seo-why-card-body">
                    <h4 className="seo-why-card-title">{item.title}</h4>
                    <div className="seo-why-check">✓</div>
                  </div>
                  <div className="seo-why-card-glow" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="seo-cta-section" id="contact">
        <div className="seo-cta-glow-1" />
        <div className="seo-cta-glow-2" />
        <div className="seo-cta-content scroll-reveal scale-in">
          <span className="seo-cta-tag">Let's Get Started</span>
          <h2 className="seo-cta-title">Let's Make Your Business Easier to Find</h2>
          <p className="seo-cta-desc">
            Your customers are already searching.<br />
            Let's make sure they're finding you.<br />
            Book a free consultation and discover where your biggest visibility opportunities are.
          </p>
          <div className="seo-cta-actions">
            <Link href="/book-a-call" className="seo-btn-cta-primary">Book a Free Consultation</Link>
            <Link href="/services" className="seo-btn-cta-outline">Explore All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SEOPage
