import PricingTierCards from "../components/pricing-tier-cards"
import { always, from, qty, tierQty, seq } from "../lib/pricing-helpers"
import type { PricingTier, PricingCategory } from "../lib/pricing-helpers"
import "../styles/sp-base.css"
import "../styles/seo-velocity-plan-page.css"

const baseTiers: Omit<PricingTier, "checkoutUrl">[] = [
  { name: "SEO Launchpad", priceUSD: 399 },
  { name: "SEO Momentum", priceUSD: 699 },
  { name: "SEO Impact", priceUSD: 999, badge: "Most Popular" },
  { name: "SEO Velocity", priceUSD: 1399 },
  { name: "SEO Apex", priceUSD: 1799 },
]

const USD_CHECKOUT_URLS = [
  "https://buy.stripe.com/14A8wPgxS6xS75GbYLbV605",
  "https://buy.stripe.com/fZu00jepKbSc89KaUHbV62O",
  "https://buy.stripe.com/eVq3cv6XiaO8gGg6ErbV62T",
  "https://buy.stripe.com/cNi3cvchC7BWcq0e6TbV616",
  "https://buy.stripe.com/bJe28r2H28G01Lm2obbV62W",
]

const categories: PricingCategory[] = [
  {
    name: "Performance Pledge",
    items: [
      tierQty([25, 50, 75, 100, 150], "Keywords"),
      tierQty([50, 100, 150, 200, 250], "Backlinks"),
      tierQty([5, 10, 15, 30, 40], "Landing Pages"),
      from(1, "Google My Business (GMB) Optimization"),
      from(2, "Geotagging"),
      from(3, "G.E.O (Generative Engine Optimization)"),
      from(3, "A.E.O (Answer Engine Optimization)"),
      always("AI Compatibility Testing"),
      seq(["AI Visibility Audit – 2 Pages", "AI Visibility Audit – 4 Pages", "AI Visibility Audit – 6 Pages", "AI Visibility Audit – 8 Pages", "AI Visibility Audit – 10 Pages"]),
    ],
  },
  {
    name: "First Hand SEO Analysis",
    items: [
      always("Pre-Optimization Website Analysis"),
      always("Competitor Analysis"),
      always("Keyword Research & Analysis"),
      always("Baseline Ranking Check"),
      from(1, "Duplicate Content Check"),
      from(2, "Google Penalty Check"),
      from(3, "Back Link Analysis (If Required)"),
    ],
  },
  {
    name: "On-Page Optimization Activities",
    items: [
      always("Website Canonical Check"),
      always("Title Tag Optimization"),
      always("Meta Tags Optimization"),
      from(1, "Heading Tags Optimization"),
      always("Image Alt Tags Optimization"),
      always("Content Optimization"),
      always("SEO Friendly URL Setup"),
      from(3, "Site Navigation Analysis"),
      always("404 Page Implementation"),
      from(2, "Broken Links Check"),
      always("Website Speed Check"),
      always("Google Indexed Pages Check"),
      always("Robots.txt Creation"),
      always("Google XML Sitemap"),
      from(4, "HTML Sitemap Setup"),
      always("Google Webmasters Tool Setup"),
      always("Google Analytics Setup"),
      from(4, "Structured Data Setup"),
      always("On-Site Blog Section Creation"),
      qty(1, 1, "On-Site Blog Posting"),
    ],
  },
  {
    name: "Off-Page Optimization Activities",
    items: [
      always("Search Engine Submission – Manual"),
      qty(1, 1, "Article Writing"),
      qty(1, 1, "Article Submissions"),
      qty(5, 5, "Article Marketing"),
      tierQty([3, 5, 10, 15, 20], "Classified Submissions"),
      always("Business Listing"),
      qty(1, 1, "Blog Creation (One-Time)"),
      qty(1, 1, "Blog Writing"),
      qty(1, 1, "Blog Posting"),
      tierQty([5, 10, 15, 20, 30], "Blog Marketing"),
      tierQty([5, 8, 10, 15, 20], "Third Party Blog Pinging"),
      qty(2, 2, "Image Sharing"),
      seq([null, null, null, "1 PPT Submissions", "2 PPT Submissions"]),
      tierQty([10, 15, 20, 30, 50], "Social Bookmarking"),
      always("Profile Creation"),
      always("Product Listing"),
      always("Video Marketing (if Client Provides)"),
      always("Press Release (if Client Provides News)"),
      from(2, "OSB Marketing"),
      from(2, "Quora Q&A"),
      from(2, "Infographic Submission"),
      from(2, "Guest Post"),
    ],
  },
  {
    name: "Social Media Optimization (SMO) Activities",
    items: [
      seq([null, "Facebook – 4 Posts/Month", "Facebook – 8 Posts/Month", "Facebook – 16 Posts/Month", "Facebook – 20 Posts/Month"]),
      seq([null, "Instagram – 4 Posts/Month", "Instagram – 8 Posts/Month", "Instagram – 16 Posts/Month", "Instagram – 20 Posts/Month"]),
      seq([null, null, null, "Twitter – 16 Posts/Month", "Twitter – 20 Posts/Month"]),
      seq([null, null, null, "Pinterest – 16 Posts/Month", "Pinterest – 20 Posts/Month"]),
      from(4, "LinkedIn – 20 Posts/Month"),
    ],
  },
  {
    name: "Reports",
    items: [
      always("Monthly Website Analytics Report"),
      always("Monthly Keywords Ranking Report"),
      always("Monthly Off Page Submission Report"),
      from(3, "Bi-Monthly Website Progress Report"),
    ],
  },
  {
    name: "Customer Support",
    items: [
      always("Email Support"),
      always("Phone Support"),
      from(1, "Live Chat Support"),
      from(2, "Google/Zoom Meeting"),
    ],
  },
]

const SeoVelocityPlanPage = ({
  checkoutUrls = USD_CHECKOUT_URLS,
  currencySymbol = "$",
}: {
  checkoutUrls?: string[]
  currencySymbol?: string
}) => {
  const tiers: PricingTier[] = baseTiers.map((tier, i) => ({ ...tier, checkoutUrl: checkoutUrls[i] }))

  return (
    <div className="sp-page seo-velocity-plan-page">
      <section className="sp-container" style={{ paddingTop: 120, paddingBottom: 56, textAlign: "center" }}>
        <span className="sp-tag">SEO Packages with Velocity Plan</span>
        <h1 className="sp-h2">Smart Pricing. No Surprises. Just What You Need.</h1>
        <p className="sp-lead">Plans that scale with you — simple, transparent, and flexible.</p>
      </section>
      <PricingTierCards tiers={tiers} categories={categories} currencySymbol={currencySymbol} />
    </div>
  )
}

export default SeoVelocityPlanPage
