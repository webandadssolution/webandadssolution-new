"use client"

import { useEffect } from "react"
import Link from "next/link"
import { PACKAGE_TYPES, PACKAGE_TYPE_ORDER, CURRENCY, convert } from "../data/packages-data"
import type { PackageTypeKey, CurrencyKey } from "../types/packages"
import "../styles/packages-page.css"

const TAB_ICONS = { seo: "🔍", smo: "📣", web: "💻", ppc: "🎯" }

const PackagesPage = ({ slug = "seo-usd" }: { slug?: string }) => {
  const [typeKeyRaw, currencyKeyRaw] = slug.split("-")
  const typeKey = (PACKAGE_TYPES[typeKeyRaw as PackageTypeKey] ? typeKeyRaw : "seo") as PackageTypeKey
  const currencyKey = (CURRENCY[currencyKeyRaw as CurrencyKey] ? currencyKeyRaw : "usd") as CurrencyKey

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const pkg = PACKAGE_TYPES[typeKey]
  const currency = CURRENCY[currencyKey]

  return (
    <div className="pkg-page">
      <section className="pkg-hero">
        <div className="pkg-hero-bg-grid" />
        <h1 className="pkg-hero-title">Smart Pricing. No Surprises. Just What You Need.</h1>
        <p className="pkg-hero-sub">Plans that scale with you, simple, transparent, and flexible.</p>
      </section>

      {/* ── Package Type Tabs ── */}
      {/* <div className="pkg-type-tabs">
        {PACKAGE_TYPE_ORDER.map((key) => (
          <Link
            key={key}
            to={`/package/${key}-${currencyKey}`}
            className={`pkg-type-tab ${typeKey === key ? "active" : ""}`}
          >
            <span className="pkg-type-tab-icon">{TAB_ICONS[key]}</span>
            {PACKAGE_TYPES[key].label}
          </Link>
        ))}
      </div> */}

      {/* ── Section Heading ── */}
      <h2 className="pkg-section-heading">{pkg.label.toUpperCase()}</h2>

      <p className="pkg-tagline">{pkg.tagline}</p>

      {/* ── Pricing Cards ── */}
      <div className="pkg-grid">
        {pkg.tiers.map((tier, tierIndex) => {
          const price = convert(tier.priceUSD, currencyKey)
          return (
            <div key={tier.name} className={`pkg-card ${tier.badge ? "featured" : ""}`}>
              {tier.badge && <div className="pkg-card-badge">{tier.badge}</div>}
              <div className="pkg-card-head">
                <div className="pkg-card-icon">{TAB_ICONS[typeKey]}</div>
                <h3 className="pkg-card-name">{tier.name}</h3>
                <div className="pkg-card-price">
                  <span className="pkg-card-price-symbol">{currency.symbol}</span>
                  {price.toLocaleString()}
                  <span className="pkg-card-price-period">/mo</span>
                </div>
                <Link href="/contact" className="pkg-card-cta">Let's Get Started</Link>
              </div>

              <div className="pkg-card-body">
                {pkg.categories.map((cat) => {
                  const lastTier = pkg.tiers.length - 1
                  const allItems = cat.items.map((fn) => {
                    const value = fn(tierIndex)
                    return { text: value !== null ? value : fn(lastTier), included: value !== null }
                  })
                  if (allItems.every((i) => !i.included)) return null
                  return (
                    <div key={cat.name} className="pkg-card-category">
                      <h4 className="pkg-card-category-title">{cat.name}</h4>
                      <ul className="pkg-card-feature-list">
                        {allItems.map((item, i) => (
                          <li key={i} className={item.included ? "is-included" : "is-excluded"}>
                            <span className="pkg-feature-icon">{item.included ? "✓" : "✗"}</span>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <section className="pkg-cta-section">
        <h2 className="pkg-cta-title">Not Sure Which Package Fits?</h2>
        <p className="pkg-cta-desc">Talk to our team and we'll recommend the right plan for your goals and budget.</p>
        <Link href="/contact" className="pkg-cta-btn">Get a Free Consultation</Link>
      </section>
    </div>
  )
}

export default PackagesPage
