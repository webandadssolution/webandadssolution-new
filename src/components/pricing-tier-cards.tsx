import { Fragment } from "react"
import type { CSSProperties } from "react"
import type { PricingCategory, PricingTier } from "../lib/pricing-helpers"
import "../styles/pricing-tier-cards.css"

const PlanCta = ({ tier, className }: { tier: PricingTier; className: string }) =>
  tier.checkoutUrl ? (
    <a href={tier.checkoutUrl} target="_blank" rel="nofollow noopener noreferrer" className={className}>
      Let&apos;s Get Started
    </a>
  ) : (
    <a href="/contact" className={className}>Let&apos;s Get Started</a>
  )

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
    <>
      {/* Card view — desktop / laptop */}
      <div className="ptc-grid ptc-cards-view" style={{ "--tier-count": tiers.length } as CSSProperties}>
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
              <PlanCta tier={tier} className="ptc-card-cta" />
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

      {/* Table view — tablet / mobile */}
      <div className="ptc-table-view">
        <div className="ptc-table-wrap">
          <table className="ptc-table">
            <thead>
              <tr>
                <th className="ptc-table-feature-col">Plan</th>
                {tiers.map((tier) => (
                  <th key={tier.name} className={`ptc-table-plan-col${tier.badge ? " featured" : ""}`}>
                    <div className="ptc-table-plan-head">
                      {tier.badge && <span className="ptc-table-badge">{tier.badge}</span>}
                      <span className="ptc-table-plan-name">{tier.name}</span>
                      <span className="ptc-table-plan-price">
                        <span className="ptc-table-price-symbol">{currencySymbol}</span>
                        {tier.priceUSD.toLocaleString()}
                        <span className="ptc-table-price-period">{tier.pricePeriod ?? "/mo"}</span>
                      </span>
                      <PlanCta tier={tier} className="ptc-table-cta" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <Fragment key={cat.name}>
                  <tr className="ptc-table-category-row">
                    <td colSpan={tiers.length + 1}>{cat.name}</td>
                  </tr>
                  {cat.items.map((fn, itemIndex) => (
                    <tr key={itemIndex}>
                      <td className="ptc-table-feature-col">{fn.label}</td>
                      {tiers.map((tier, tierIndex) => {
                        const value = fn(tierIndex)
                        return (
                          <td key={tier.name} className={`ptc-table-plan-col${tier.badge ? " featured" : ""}`}>
                            {value === null ? (
                              <span className="ptc-table-dash">–</span>
                            ) : value === fn.label ? (
                              <span className="ptc-table-check">✓</span>
                            ) : (
                              <span className="ptc-table-text">{value}</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PricingTierCards
