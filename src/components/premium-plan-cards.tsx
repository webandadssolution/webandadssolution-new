"use client"

import { useState } from "react"
import "../styles/premium-plan-cards.css"

export interface PremiumPlanItem {
  text: string
  qty?: string
}

export interface PremiumPlanCategory {
  name: string
  items: PremiumPlanItem[]
}

export interface PremiumPlanTier {
  name: string
  tagline: string
  priceUSD: number
  badge?: string
  checkoutUrl?: string
  highlights: { value: string; label: string }[]
  categories: PremiumPlanCategory[]
}

const TickIcon = () => (
  <svg viewBox="0 0 8 8" fill="none">
    <path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 12 12" fill="none" className={`premc-chevron ${open ? "open" : ""}`}>
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PremiumCard = ({
  tier,
  index,
  currencySymbol,
}: {
  tier: PremiumPlanTier
  index: number
  currencySymbol: string
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`premc-card ${tier.badge ? "featured" : ""} scroll-reveal scale-in delay-${index + 1}`}>
      <div className="premc-head">
        <div className="premc-badge-row">
          <span className="premc-tier-label">Tier {String(index + 1).padStart(2, "0")}</span>
          {tier.badge && <span className="premc-badge">{tier.badge}</span>}
        </div>
        <div className="premc-name">{tier.name}</div>
        <p className="premc-tagline">{tier.tagline}</p>
        <div className="premc-price-row">
          <span className="premc-currency">{currencySymbol}</span>
          <span className="premc-price">{tier.priceUSD.toLocaleString()}</span>
          <span className="premc-period">/ month</span>
        </div>
        {tier.checkoutUrl ? (
          <a href={tier.checkoutUrl} target="_blank" rel="nofollow noopener noreferrer" className="premc-cta">
            Let&apos;s Get Started
          </a>
        ) : (
          <a href="/contact" className="premc-cta">Let&apos;s Get Started</a>
        )}
      </div>

      <div className="premc-highlights">
        {tier.highlights.map((h) => (
          <div key={h.label} className="premc-hl-item">
            <div className="premc-hl-val">{h.value}</div>
            <div className="premc-hl-label">{h.label}</div>
          </div>
        ))}
      </div>

      <div className={`premc-body-scroll ${expanded ? "expanded" : ""}`}>
        <div className="premc-body">
          {tier.categories.map((cat) => (
            <div key={cat.name} className="premc-category">
              <div className="premc-section-label">{cat.name}</div>
              <ul className="premc-feat-list">
                {cat.items.map((item) => (
                  <li key={item.text} className="premc-feat-item">
                    {item.qty ? (
                      <span className="premc-qty">{item.qty}</span>
                    ) : (
                      <span className="premc-tick"><TickIcon /></span>
                    )}
                    <span className="premc-feat-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {!expanded && <div className="premc-fade" />}
      </div>

      <button className="premc-toggle" onClick={() => setExpanded((e) => !e)}>
        {expanded ? "Show Less" : "View Full Feature List"}
        <ChevronIcon open={expanded} />
      </button>
    </div>
  )
}

const PremiumPlanCards = ({
  tiers,
  currencySymbol = "$",
}: {
  tiers: PremiumPlanTier[]
  currencySymbol?: string
}) => (
  <div className="premc-grid">
    {tiers.map((tier, i) => (
      <PremiumCard key={tier.name} tier={tier} index={i} currencySymbol={currencySymbol} />
    ))}
  </div>
)

export default PremiumPlanCards
