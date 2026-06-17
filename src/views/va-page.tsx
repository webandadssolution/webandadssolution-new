"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { vaFaqs } from "../data/faq-content"
import "../styles/sp-base.css"
import "../styles/va-page.css"

const services = [
  { icon: "📧", title: "Email & Calendar Management", desc: "Inbox zero strategies, meeting scheduling, appointment coordination, and email drafting — so your calendar works for you, not against you." },
  { icon: "🔍", title: "Research & Reports",          desc: "Market research, competitor analysis, lead research, and report compilation — delivered in clean, actionable formats." },
  { icon: "📊", title: "Data Entry & CRM",            desc: "Accurate data entry, CRM management, database cleaning, and spreadsheet organization at scale." },
  { icon: "🌐", title: "Social Media Assistance",     desc: "Scheduling posts, responding to comments, tracking mentions, and maintaining your social content calendar." },
  { icon: "💳", title: "E-Commerce Support",          desc: "Order processing, product listing, customer support tickets, and inventory tracking for online stores." },
  { icon: "✍️", title: "Content Assistance",          desc: "Blog editing, proofreading, formatting, and publishing — so your content team focuses on creating, not logistics." },
]

const taskCategories = [
  { label: "Email Management",      saved: "8h/wk" },
  { label: "Calendar Scheduling",   saved: "4h/wk" },
  { label: "Data Entry",            saved: "6h/wk" },
  { label: "Research Tasks",        saved: "5h/wk" },
  { label: "Social Media",          saved: "3h/wk" },
  { label: "Customer Support",      saved: "7h/wk" },
]

const process = [
  { step: "01", title: "Needs Assessment",     desc: "We map out your recurring tasks, time sinks, and delegation priorities in a detailed onboarding call." },
  { step: "02", title: "VA Matching",          desc: "We match you with a VA who has the exact skill set your business needs — not just any available resource." },
  { step: "03", title: "SOPs & Handover",      desc: "We document your workflows as standard operating procedures so your VA executes exactly how you want." },
  { step: "04", title: "Soft Start",           desc: "Your VA begins with supervised tasks, with daily check-ins to ensure quality meets your expectations." },
  { step: "05", title: "Full Operations",      desc: "Your VA takes full ownership of delegated tasks. You get regular updates and a dedicated Slack channel." },
  { step: "06", title: "Review & Scale",       desc: "Monthly review of hours, tasks, and output quality. Scale hours up or down as your needs evolve." },
]

const whyUs = [
  { icon: "🎓", title: "Trained Professionals",    desc: "Every VA goes through our rigorous training program covering communication, tools, and client management." },
  { icon: "🔐", title: "100% Confidential",        desc: "NDAs signed before onboarding. Your business data, credentials, and processes stay completely private." },
  { icon: "🌍", title: "24/7 Coverage Available",  desc: "We can staff VAs across time zones so your business operations never stop — even while you sleep." },
  { icon: "⚡", title: "48-Hour Onboarding",        desc: "From agreement to your first task completed in 48 hours. No lengthy setup processes or bureaucracy." },
  { icon: "📈", title: "Scalable Capacity",         desc: "Start with 10 hours a week, scale to a full dedicated VA team as your needs grow — no hiring overhead." },
  { icon: "💬", title: "Direct Communication",      desc: "Your VA is reachable via your preferred channel — Slack, email, WhatsApp. No ticket systems or delays." },
]

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sp-faq-item${open ? " open" : ""} scroll-reveal`} style={{ animationDelay: `${delay}s` }}>
      <button className="sp-faq-q" onClick={() => setOpen(o => !o)}>
        <span>{q}</span><span className="sp-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="sp-faq-answer" style={{ maxHeight: open ? "300px" : "0" }}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function VAPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const counters = document.querySelectorAll(".sp-stat-num[data-target], .sp-result-num[data-target]")
    const obs = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (!el.isIntersecting) return
        const node = el.target as HTMLElement, target = parseInt(node.dataset.target || "0", 10), suffix = node.dataset.suffix || ""
        let cur = 0; const step = Math.ceil(target / (1800 / 16))
        const t = setInterval(() => { cur = Math.min(cur + step, target); node.textContent = cur.toLocaleString() + suffix; if (cur >= target) clearInterval(t) }, 16)
        obs.unobserve(node)
      })
    }, { threshold: 0.3 })
    counters.forEach(n => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="sp-page va-page">

      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid-bg" />
        <div className="sp-hero-glow g1" /><div className="sp-hero-glow g2" />
        <div className="sp-hero-inner">

          <div className="sp-hero-content">
            <div className="sp-hero-badge scroll-reveal">
              <span className="sp-hero-badge-dot" />Virtual Assistant Services
            </div>
            <h1 className="sp-hero-title scroll-reveal delay-1">
              Delegate More.<br /><span className="accent">Achieve More.</span>
            </h1>
            <p className="sp-hero-sub scroll-reveal delay-2">
              Skilled virtual assistants who handle the tasks that eat your time — so you can focus exclusively on the high-value work that moves your business forward.
            </p>
            <div className="sp-hero-ctas scroll-reveal delay-3">
              <a href="#contact" className="sp-btn primary">Hire My VA Today</a>
              <a href="#services" className="sp-btn outline">What We Handle</a>
            </div>
            <div className="sp-hero-stats scroll-reveal delay-4">
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">33<span className="a">h</span></span><span className="sp-hero-stat-label">Avg hours saved per week</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">48<span className="a">h</span></span><span className="sp-hero-stat-label">Average onboarding time</span></div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat"><span className="sp-hero-stat-num">70<span className="a">%</span></span><span className="sp-hero-stat-label">Cost savings vs. full-time hire</span></div>
            </div>
          </div>

          {/* Visual — Task Dashboard */}
          <div className="va-hero-visual scroll-reveal delay-2">
            <div className="va-dashboard">
              <div className="va-dash-header">
                <span className="va-dash-title">My Tasks</span>
                <span className="va-dash-add">+ Add Task</span>
              </div>
              <div className="va-task-list">
                {[
                  { task: "Reply to 14 client emails",       done: true  },
                  { task: "Schedule next week's meetings",   done: true  },
                  { task: "Update CRM with new leads",       done: true  },
                  { task: "Research 5 competitor pricing",   done: false, active: true },
                  { task: "Format Q3 sales report",          done: false },
                ].map((t, i) => (
                  <div key={i} className={`va-task-row${t.done ? " done" : ""}${t.active ? " active" : ""}`}>
                    <span className="va-task-check">{t.done ? "✓" : t.active ? "◉" : "○"}</span>
                    <span className="va-task-label">{t.task}</span>
                    {t.done   && <span className="va-task-badge done">Done</span>}
                    {t.active && <span className="va-task-badge active">In Progress</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="va-time-card">
              <div className="va-time-label">Time Saved This Week</div>
              <div className="va-time-val">33h <span>/ 40h target</span></div>
              <div className="va-time-bar-bg">
                <div className="va-time-bar-fill" style={{ width: "82%" }} />
              </div>
              <div className="va-time-chips">
                <span>📧 Email</span><span>📅 Calendar</span><span>📊 Reports</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="sp-stats-strip">
        <div className="sp-stats-grid">
          {[
            { t: 33,   s: "h", l: "average hours saved per client every single week" },
            { t: 70,   s: "%", l: "lower cost than hiring a full-time in-house assistant" },
            { t: 500,  s: "+", l: "clients who have freed their time with our VA services" },
            { t: 48,   s: "h", l: "from contract signed to your first task completed" },
          ].map((d, i) => (
            <div key={i} className="sp-stat-item scroll-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="sp-stat-num" data-target={d.t} data-suffix={d.s}>0{d.s}</span>
              <span className="sp-stat-label">{d.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sp-features-section" id="services">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">What We Handle</span>
            <h2 className="sp-h2">Every Task That Drains Your Day</h2>
            <p className="sp-lead">If it's repetitive, time-consuming, and doesn't require your unique expertise — your VA can handle it better and faster.</p>
          </div>
          <div className="sp-features-grid">
            {services.map((s, i) => (
              <div key={i} className="sp-feature-card scroll-reveal" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="sp-feature-icon-wrap"><span>{s.icon}</span></div>
                <h3 className="sp-feature-title">{s.title}</h3>
                <p className="sp-feature-desc">{s.desc}</p>
                <div className="sp-card-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIME SAVINGS ── */}
      <section className="va-savings-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">Time ROI</span>
            <h2 className="sp-h2">Hours Reclaimed, Every Week</h2>
            <p className="sp-lead">Here's how much time our clients typically save per task category — time they reinvest into growth and strategy.</p>
          </div>
          <div className="va-savings-grid scroll-reveal delay-2">
            {taskCategories.map((c, i) => (
              <div key={i} className="va-savings-card">
                <span className="va-savings-label">{c.label}</span>
                <span className="va-savings-val">{c.saved}</span>
                <div className="va-savings-bar-bg">
                  <div className="va-savings-bar" style={{ width: `${60 + i * 6}%`, animationDelay: `${i * 0.1}s` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sp-process-section" id="process">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">How It Works</span>
            <h2 className="sp-h2">Up and Running in 48 Hours</h2>
            <p className="sp-lead">A smooth, structured onboarding that gets your VA productive from their very first day.</p>
          </div>
          <div className="sp-process-grid">
            {process.map((p, i) => (
              <div key={i} className="sp-process-card scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="sp-process-num">{p.step}</div>
                <div className="sp-process-rule" />
                <h3 className="sp-process-title">{p.title}</h3>
                <p className="sp-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="sp-why-section">
        <div className="sp-why-inner">
          <div className="sp-why-left scroll-reveal from-left">
            <span className="sp-tag light">Why Choose Us</span>
            <h2 className="sp-why-title">Your Time Is Your<br /><span className="a">Most Valuable Asset</span></h2>
            <p className="sp-why-desc">Every hour you spend on admin is an hour not spent on strategy, sales, or scaling. Our VAs give you your time back — reliably, professionally, and affordably.</p>
            <a href="#contact" className="sp-btn primary">Get My VA Now</a>
          </div>
          <div className="sp-why-cards">
            {whyUs.map((w, i) => (
              <div key={i} className="sp-why-card scroll-reveal from-right" style={{ animationDelay: `${i * 0.07}s` }}>
                <span className="sp-why-card-icon">{w.icon}</span>
                <div><h4 className="sp-why-card-title">{w.title}</h4><p className="sp-why-card-desc">{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="sp-results-section">
        <div className="sp-results-bg" />
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag light">Our Impact</span>
            <h2 className="sp-h2 light">Freedom, By the Numbers</h2>
          </div>
          <div className="sp-results-grid">
            {[
              { t: 500,  s: "+", l: "Clients Served Globally" },
              { t: 33,   s: "h", l: "Avg Weekly Hours Saved Per Client" },
              { t: 70,   s: "%", l: "Lower Cost vs. Full-Time Hire" },
              { t: 98,   s: "%", l: "Client Satisfaction Rate" },
            ].map((r, i) => (
              <div key={i} className="sp-result-item scroll-reveal scale-in" style={{ animationDelay: `${i * 0.09}s` }}>
                <span className="sp-result-num" data-target={r.t} data-suffix={r.s}>0{r.s}</span>
                <span className="sp-result-label">{r.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-faq-section">
        <div className="sp-container">
          <div className="sp-section-header scroll-reveal">
            <span className="sp-tag">FAQ</span>
            <h2 className="sp-h2">Virtual Assistant Questions</h2>
          </div>
          <div className="sp-faq-wrap">
            {vaFaqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section" id="contact">
        <div className="sp-cta-glow" />
        <div className="sp-cta-inner scroll-reveal scale-in">
          <span className="sp-tag light">Get Started</span>
          <h2 className="sp-cta-title">Ready to Get Your Time Back?</h2>
          <p className="sp-cta-desc">Tell us what's on your plate and we'll match you with the perfect VA — ready to start within 48 hours.</p>
          <div className="sp-cta-actions">
            <a href="mailto:dev@webandadssolution.com" className="sp-btn primary cta">Hire My VA Today</a>
            <Link href="/services" className="sp-btn outline cta">Explore All Services</Link>
          </div>
          <p className="sp-cta-note">No long-term contracts · Flexible hours · Replace anytime</p>
        </div>
      </section>

    </div>
  )
}
