import PricingTierCards from "../components/pricing-tier-cards"
import { always, from, seq, tierQty } from "../lib/pricing-helpers"
import type { PricingTier, PricingCategory } from "../lib/pricing-helpers"
import "../styles/sp-base.css"
import "../styles/seo-velocity-plan-page.css"

const baseTiers: Omit<PricingTier, "checkoutUrl">[] = [
  {
    name: "SEO Launchpad",
    tagline: "Start your SEO journey with core essentials and AI compatibility.",
    priceUSD: 399,
    highlights: [
      { value: "25", label: "Keywords" },
      { value: "50", label: "Backlinks" },
      { value: "5", label: "Landing Pages" },
      { value: "2", label: "AI Audit Pages" },
    ],
  },
  {
    name: "SEO Momentum",
    tagline: "Build momentum with GMB, deeper content and social media foundations.",
    priceUSD: 699,
    highlights: [
      { value: "50", label: "Keywords" },
      { value: "100", label: "Backlinks" },
      { value: "10", label: "Landing Pages" },
      { value: "4", label: "AI Audit Pages" },
    ],
  },
  {
    name: "SEO Impact",
    badge: "Best Seller",
    tagline: "Our best-seller — full local SEO, guest posts, OSB marketing and more.",
    priceUSD: 999,
    highlights: [
      { value: "75", label: "Keywords" },
      { value: "150", label: "Backlinks" },
      { value: "15", label: "Landing Pages" },
      { value: "6", label: "AI Audit Pages" },
    ],
  },
  {
    name: "SEO Apex",
    tagline: "Full-suite SEO with every feature, all platforms, complete reporting.",
    priceUSD: 1799,
    highlights: [
      { value: "150", label: "Keywords" },
      { value: "300", label: "Backlinks" },
      { value: "40", label: "Landing Pages" },
      { value: "10", label: "AI Audit Pages" },
    ],
  },
]

const USD_CHECKOUT_URLS = [
  "https://buy.stripe.com/14A8wPgxS6xS75GbYLbV605",
  "https://buy.stripe.com/fZu00jepKbSc89KaUHbV62O",
  "https://buy.stripe.com/eVq3cv6XiaO8gGg6ErbV62T",
  "https://buy.stripe.com/bJe28r2H28G01Lm2obbV62W",
]

const categories: PricingCategory[] = [
  {
    name: "AI Visibility",
    items: [
      from(1, "Google My Business (GMB)"),
      from(2, "Geotagging"),
      from(3, "G.E.O (Generative Engine Optimization)"),
      from(3, "A.E.O (Answer Engine Optimization)"),
      always("AI Compatibility Testing"),
      seq(["AI Visibility Audit – 2 Pages", "AI Visibility Audit – 4 Pages", "AI Visibility Audit – 6 Pages", "AI Visibility Audit – 10 Pages"]),
    ],
  },
  {
    name: "Initial Analysis",
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
    name: "On-Page Optimization",
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
      from(3, "HTML Sitemap Setup"),
      always("Google Webmasters Tool Setup"),
      always("Google Analytics Setup"),
      from(3, "Structured Data Setup"),
      always("On-Site Blog Section Creation"),
      tierQty([1, 2, 3, 5], "On-Site Blog Posting/Month"),
    ],
  },
  {
    name: "Off-Page Optimization",
    items: [
      always("Search Engine Submission – Manual"),
      tierQty([1, 2, 3, 5], "Article Writing"),
      tierQty([1, 2, 3, 5], "Article Submissions"),
      tierQty([5, 10, 15, 25], "Article Marketing"),
      tierQty([3, 5, 10, 20], "Classified Submissions"),
      always("Business Listing"),
      tierQty([1, 2, 3, 5], "Blog Creation (One-Time)"),
      tierQty([1, 2, 3, 5], "Blog Writing"),
      tierQty([1, 2, 3, 5], "Blog Posting"),
      tierQty([5, 10, 15, 30], "Blog Marketing"),
      tierQty([5, 8, 10, 20], "Third Party Blog Pinging"),
      tierQty([2, 4, 6, 10], "Image Sharing"),
      seq([null, null, null, "2 PPT Submissions"]),
      tierQty([10, 15, 20, 50], "Social Bookmarking"),
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
    name: "Social Media (SMO)",
    items: [
      seq([null, "Facebook – 4 Posts/Month", "Facebook – 8 Posts/Month", "Facebook – 20 Posts/Month"]),
      seq([null, "Instagram – 4 Posts/Month", "Instagram – 8 Posts/Month", "Instagram – 20 Posts/Month"]),
      seq([null, null, null, "Twitter – 20 Posts/Month"]),
      seq([null, null, null, "LinkedIn – 20 Posts/Month"]),
      from(3, "Pinterest"),
    ],
  },
  {
    name: "Reports & Support",
    items: [
      always("Monthly Website Analytics Report"),
      always("Monthly Keywords Ranking Report"),
      always("Monthly Off Page Submission Report"),
      from(3, "Bi-Monthly Website Progress Report"),
      always("Email Support"),
      always("Phone Support"),
      from(1, "Live Chat Support"),
      from(2, "Google/Zoom Meeting"),
    ],
  },
]

const SeoWithoutVelocityPlanPage = ({
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
        <span className="sp-tag">Transparent Pricing</span>
        <h1 className="sp-h2">Choose Your SEO Power</h1>
        <p className="sp-lead">Four tiers built for every stage of growth — from launch to full market dominance.</p>
      </section>
      <PricingTierCards tiers={tiers} categories={categories} currencySymbol={currencySymbol} />
    </div>
  )
}

export default SeoWithoutVelocityPlanPage
