import PricingTierCards from "../components/pricing-tier-cards"
import { seq } from "../lib/pricing-helpers"
import type { PricingTier, PricingCategory } from "../lib/pricing-helpers"
import "../styles/sp-base.css"
import "../styles/ppc-packages-page.css"

const baseTiers: Omit<PricingTier, "checkoutUrl">[] = [
  { name: "PPC Launch", priceUSD: 399 },
  { name: "PPC Growth", priceUSD: 599, badge: "Best Seller" },
  { name: "PPC Velocity", priceUSD: 799 },
  { name: "PPC Dominator", priceUSD: 999 },
]

const checkoutUrls: (string | undefined)[] = [undefined, undefined, undefined, undefined]

const categories: PricingCategory[] = [
  {
    name: "Plan Features",
    items: [
      seq(["Setup Fee - $200", "Setup Fee - $350", "Setup Fee - $500", "Setup Fee - $750"]),
      seq(["10 Days Free Trial!", "10 Days Free Trial!", "10 Days Free Trial!", "10 Days Free Trial!"]),
      seq([
        "Advertising Budget $0 - $2999/month",
        "Advertising Budget $3000 - $4999/month",
        "Advertising Budget $5000 - $7500/month",
        "Advertising Budget $7500 - $10000/month",
      ]),
      seq([
        "Full Optimizations per month - 1",
        "Full Optimizations per month - 2",
        "Full Optimizations per month - 3",
        "Full Optimizations per month - 5",
      ]),
      seq(["Ad Groups Up To 5", "Ad Groups Up To 10", "Ad Groups Up To 20", "Ad Groups Up To 40"]),
      seq([
        "Up To 2 Ads per Ad Group (No A/B testing)",
        "Up To 3 Ads per Ad Group (No A/B testing)",
        "Up To 4 Ads per Ad Group",
        "Up To 6 Ads per Ad Group",
      ]),
      seq(["Keywords - Up To 50", "Keywords - Up To 100", "Keywords - Up To 200", "Keywords - Up To 750"]),
      seq(["Negative Keywords", "Negative Keywords", "Negative Keywords", "Negative Keywords"]),
      seq(["Conversion Tracking", "Conversion Tracking", "Conversion Tracking", "Conversion Tracking"]),
      seq(["Monthly Reporting", "Monthly Reporting", "Monthly Reporting", "Monthly Reporting"]),
      seq(["No Contracts", "No Contracts", "No Contracts", "No Contracts"]),
      seq([
        "Ad Networks - Google",
        "Ad Networks - Google",
        "Ad Networks - Google, Yahoo & LinkedIn",
        "Ad Networks - Google, Yahoo, Facebook & LinkedIn",
      ]),
      seq([null, null, null, "Mobile Ads"]),
      seq(["Call Extensions", "Call Extensions", "Call Extensions", "Call Extensions"]),
      seq(["Sitelink Extensions", "Sitelink Extensions", "Sitelink Extensions", "Sitelink Extensions"]),
      seq([null, "Remarketing", "Remarketing", "Remarketing"]),
      seq([null, "Monthly Conference Calls", "Monthly Conference Calls", "Monthly Conference Calls"]),
      seq([null, null, null, "Display/Image Ads - Upto 2 Ads per month"]),
    ],
  },
]

const PpcPackagesPage = () => {
  const tiers: PricingTier[] = baseTiers.map((tier, i) => ({ ...tier, checkoutUrl: checkoutUrls[i] }))

  return (
    <div className="sp-page ppc-packages-page">
      <section className="sp-container" style={{ paddingTop: 120, paddingBottom: 56, textAlign: "center" }}>
        <span className="sp-tag">Transparent Pricing</span>
        <h1 className="sp-h2">Choose Your PPC Power</h1>
        <p className="sp-lead">Four tiers built for every ad budget — from first campaign to full-scale domination.</p>
      </section>
      <PricingTierCards tiers={tiers} categories={categories} />
    </div>
  )
}

export default PpcPackagesPage
