import PricingTierCards from "../components/pricing-tier-cards"
import { always, from, seq } from "../lib/pricing-helpers"
import type { PricingTier, PricingCategory } from "../lib/pricing-helpers"
import "../styles/sp-base.css"
import "../styles/smo-packages-page.css"

const baseTiers: Omit<PricingTier, "checkoutUrl">[] = [
  { name: "SMO Launch", priceUSD: 200, pricePeriod: "/channel" },
  { name: "SMO Growth", priceUSD: 300, badge: "Best Seller", pricePeriod: "/channel" },
  { name: "SMO Scale", priceUSD: 400, pricePeriod: "/channel" },
]

const checkoutUrls: (string | undefined)[] = [undefined, undefined, undefined]

const categories: PricingCategory[] = [
  {
    name: "Period*",
    items: [
      seq(["No. of Hours per Channel - 15", "No. of Hours per Channel - 40", "No. of Hours per Channel - 60"]),
    ],
  },
  {
    name: "Organic Promotion",
    items: [
      always("Competitor Analysis"),
      always("Strategy Formation"),
      always("Hashtag Creation and Promotion"),
      seq(["Monthly Creative Creation - 5", "Monthly Creative Creation - 8", "Monthly Creative Creation - 12"]),
      seq(["Monthly Postings - 5", "Monthly Postings - 8", "Monthly Postings - 12"]),
      always("Analytics Tracking"),
      always("Account Management"),
      always("Engagement With Active Communities and Groups"),
      always("Monthly Reporting"),
      always("Network Build-Up"),
      always("Engagement With Third-Party Posts"),
      always("Content Optimization"),
    ],
  },
  {
    name: "Paid Promotion",
    items: [
      from(1, "Budget Estimate"),
      from(1, "Setting Up Campaigns"),
      from(1, "Ad Creative Creation"),
      from(1, "Daily Account Optimization"),
      from(1, "Setting Up Sales Funnel for Conversion Objective"),
      from(1, "Conversion Tracking Assisted by Google Analytics"),
    ],
  },
  {
    name: "Remarketing",
    items: [
      from(2, "Creation of Audience Lists"),
      from(2, "Setting Up Campaigns"),
      from(2, "Ad Creative Creation"),
      from(2, "Daily Account Optimization"),
      from(2, "Setting Up Sales Funnel for Conversion Objective"),
      from(2, "Conversion Tracking Assisted by Google Analytics"),
    ],
  },
  {
    name: "SMO Activities",
    items: [
      always("Monthly Report Generation With Insights"),
      always("Next Month's Line of Action"),
    ],
  },
  {
    name: "Customer Support",
    items: [
      always("Email Support"),
      always("Phone Support"),
      always("Chat Support"),
    ],
  },
]

const SmoPackagesPage = () => {
  const tiers: PricingTier[] = baseTiers.map((tier, i) => ({ ...tier, checkoutUrl: checkoutUrls[i] }))

  return (
    <div className="sp-page smo-packages-page">
      <section className="sp-container" style={{ paddingTop: 120, paddingBottom: 56, textAlign: "center" }}>
        <span className="sp-tag">Transparent Pricing</span>
        <h1 className="sp-h2">Choose Your SMO Power</h1>
        <p className="sp-lead">Three tiers built per channel — from organic foundations to full paid + remarketing coverage.</p>
      </section>
      <PricingTierCards tiers={tiers} categories={categories} />
    </div>
  )
}

export default SmoPackagesPage
