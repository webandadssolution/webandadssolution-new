"use client"

import { useEffect } from "react"
import Link from "next/link"
import { PACKAGE_TYPES, PACKAGE_TYPE_ORDER, CURRENCY } from "../data/packages-data"
import type { CurrencyKey } from "../types/packages"
import "../styles/packages-hub-page.css"

const TAB_ICONS = { seo: "🔍", smo: "📣", web: "💻", ppc: "🎯" }
const TAB_DESC = {
  seo: "Rank higher, drive organic traffic, and grow visibility on search engines.",
  smo: "Build engagement and brand presence across social media platforms.",
  web: "Custom websites built to convert visitors into customers.",
  ppc: "High-ROI paid ad campaigns across Google, Display, and Social.",
}

const PackagesHubPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pkghub-page">
      <section className="pkghub-hero">
        <div className="pkghub-hero-bg-grid" />
        <h1 className="pkghub-hero-title">Our Packages</h1>
        <p className="pkghub-hero-sub">Pick a service to see plans, pricing, and what's included.</p>
      </section>

      <div className="pkghub-grid">
        {PACKAGE_TYPE_ORDER.map((key) => (
          <div key={key} className="pkghub-card">
            <div className="pkghub-card-icon">{TAB_ICONS[key]}</div>
            <h3 className="pkghub-card-title">{PACKAGE_TYPES[key].label}</h3>
            <p className="pkghub-card-desc">{TAB_DESC[key]}</p>

            <div className="pkghub-card-currency-row">
              {(Object.keys(CURRENCY) as CurrencyKey[]).map((cKey) => (
                <Link key={cKey} href={`/package/${key}-${cKey}`} className="pkghub-currency-btn">
                  {CURRENCY[cKey].symbol} {CURRENCY[cKey].code}
                </Link>
              ))}
            </div>

            <Link href={`/package/${key}-usd`} className="pkghub-card-cta">View Plans →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PackagesHubPage
