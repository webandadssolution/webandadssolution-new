import type { PricingCategory, PricingTier } from "../lib/pricing-helpers"
import "../styles/pricing-tier-cards.css"

const PricingTierCards = ({
  tiers,
  categories,
  currencySymbol = "$",
}: {
  tiers: PricingTier[]
  categories: PricingCategory[]
  currencySymbol?: string
}) => {
  const lastTier = tiers.length - 1

  return (
    <div className="ptc-grid">
      {tiers.map((tier, tierIndex) => (
        <div key={tier.name} className={`ptc-card ${tier.badge ? "featured" : ""}`}>
          {tier.badge && <div className="ptc-card-badge">{tier.badge}</div>}

          <div className="ptc-card-head">
            <h3 className="ptc-card-name">{tier.name}</h3>
            {tier.tagline && <p className="ptc-card-tagline">{tier.tagline}</p>}
            <div className="ptc-card-price">
              <span className="ptc-card-price-symbol">{currencySymbol}</span>
              {tier.priceUSD.toLocaleString()}
              <span className="ptc-card-price-period">{tier.pricePeriod ?? "/mo"}</span>
            </div>
            {tier.checkoutUrl ? (
              <a
                href={tier.checkoutUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="ptc-card-cta"
              >
                Let&apos;s Get Started
              </a>
            ) : (
              <a href="/contact" className="ptc-card-cta">Let&apos;s Get Started</a>
            )}
          </div>

          {tier.highlights && (
            <div className="ptc-highlights">
              {tier.highlights.map((h) => (
                <div key={h.label} className="ptc-hl-item">
                  <div className="ptc-hl-val">{h.value}</div>
                  <div className="ptc-hl-label">{h.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="ptc-card-body">
            {categories.map((cat) => {
              const items = cat.items.map((fn) => {
                const value = fn(tierIndex)
                return { text: value !== null ? value : fn(lastTier), included: value !== null }
              })
              return (
                <div key={cat.name} className="ptc-card-category">
                  <h4 className="ptc-card-category-title">{cat.name}</h4>
                  <ul className="ptc-feature-list">
                    {items.map((item, i) => (
                      <li key={i} className={item.included ? "is-included" : "is-excluded"}>
                        <span className="ptc-feature-icon">{item.included ? "✓" : "✗"}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PricingTierCards
