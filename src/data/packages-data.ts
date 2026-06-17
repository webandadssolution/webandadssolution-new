import type {
  CurrencyInfo,
  CurrencyKey,
  FeatureFn,
  PackageType,
  PackageTypeKey,
} from "../types/packages"

// ── Helpers for building per-tier feature checklists ──────────────────────
// always(text)            -> shown on every tier
// from(tierIndex, text)    -> shown only from tierIndex (0-based) onward
// qty(base, step, unit)    -> grows per tier, e.g. qty(5,5,"Keywords") => 5,10,15,20,25
const always = (text: string): FeatureFn => () => text
const from = (tier: number, text: string): FeatureFn => (i) => (i >= tier ? text : null)
const qty = (base: number, step: number, unit: string): FeatureFn => (i) => `${base + step * i} ${unit}`

const CURRENCY: Record<CurrencyKey, CurrencyInfo> = {
  usd: { code: "USD", symbol: "$", rate: 1 },
  gbp: { code: "GBP", symbol: "£", rate: 0.79 },
  euro: { code: "EUR", symbol: "€", rate: 0.92 },
}

function convert(usdPrice: number, currencyKey: string): number {
  const { rate } = CURRENCY[currencyKey as CurrencyKey] || CURRENCY.usd
  return Math.round((usdPrice * rate) / 9) * 9 // keep prices ending in clean increments of 9
}

// ── SEO ─────────────────────────────────────────────────────────────────
const seo: PackageType = {
  label: "SEO Packages",
  tagline: "Smart Pricing. No Surprises. Just What You Need.",
  tiers: [
    { name: "SEO Launchpad", priceUSD: 399 },
    { name: "SEO Momentum", priceUSD: 699 },
    { name: "SEO Impact", priceUSD: 999, badge: "Most Popular" },
    { name: "SEO Velocity", priceUSD: 1399 },
    { name: "SEO Apex", priceUSD: 1799 },
  ],
  categories: [
    {
      name: "Performance Pledge",
      items: [
        qty(5, 5, "Keywords"),
        qty(50, 50, "Backlinks"),
        qty(1, 1, "Landing Pages"),
        always("Google My Business (GMB) Optimization"),
        always("Geotagging"),
        always("SEO Compatibility Setup"),
      ],
    },
    {
      name: "Pre-Optimization Website Analysis",
      items: [
        always("Per Optimization Website Analysis"),
        always("Competitor Analysis"),
        always("Keyword Research (Volume)"),
        always("Baseline Ranking Check"),
        from(2, "Back Link Analysis (5+ Required)"),
      ],
    },
    {
      name: "On-Page Optimization Activities",
      items: [
        always("Title Tag Optimization"),
        always("Meta Tag Optimization"),
        always("Heading Tag Optimization"),
        always("Image Optimization"),
        from(1, "301 Redirects Setup"),
        from(2, "XML Sitemap & Robots.txt Optimization"),
        from(3, "Schema Markup Implementation"),
        from(3, "Page Speed Optimization"),
        from(4, "Mobile Friendliness Optimization"),
      ],
    },
    {
      name: "Off-Page Optimization Activities",
      items: [
        qty(2, 2, "Article Submissions"),
        qty(2, 2, "Classified Submissions"),
        qty(1, 1, "Press Release Distribution"),
        from(1, "Guest Blog Posting"),
        from(2, "Forum Posting"),
        from(3, "Influencer Outreach"),
        from(4, "Premium Niche Edits"),
      ],
    },
    {
      name: "Social Media Optimization (SMO) Activities",
      items: [
        always("Facebook Profile Setup"),
        always("Twitter/X Setup"),
        from(1, "Instagram Setup"),
        from(2, "LinkedIn Company Page Setup"),
        from(3, "Pinterest Setup"),
        qty(2, 2, "Social Media Posts/Month"),
      ],
    },
    {
      name: "Reports",
      items: [
        always("Monthly Website Analytics Report"),
        always("Monthly Keyword Ranking Report"),
        from(1, "Monthly Backlink Report"),
        from(2, "Monthly Competitor Analysis Report"),
        from(3, "Quarterly Strategy Review Call"),
      ],
    },
    {
      name: "Customer Support",
      items: [
        always("Email Support"),
        from(1, "Phone Support"),
        from(2, "Live Chat Support"),
        from(3, "Dedicated Account Manager"),
        from(4, "Priority 24/7 Support"),
      ],
    },
  ],
}

// ── SMO ─────────────────────────────────────────────────────────────────
const smo: PackageType = {
  label: "SMO Packages",
  tagline: "Grow Your Audience. Build Real Engagement.",
  tiers: [
    { name: "SMO Spark", priceUSD: 299 },
    { name: "SMO Buzz", priceUSD: 549 },
    { name: "SMO Engage", priceUSD: 899, badge: "Most Popular" },
    { name: "SMO Amplify", priceUSD: 1299 },
    { name: "SMO Apex", priceUSD: 1699 },
  ],
  categories: [
    {
      name: "Performance Pledge",
      items: [
        qty(2, 1, "Platforms Managed"),
        qty(8, 4, "Posts/Month"),
        qty(2, 1, "Custom Graphics/Month"),
        always("Profile Setup & Optimization"),
        always("Competitor Benchmarking"),
      ],
    },
    {
      name: "Account Setup & Audit",
      items: [
        always("Social Media Audit"),
        always("Brand Voice Guidelines"),
        always("Competitor Analysis"),
        from(2, "Content Calendar Planning"),
      ],
    },
    {
      name: "Content Creation Activities",
      items: [
        qty(2, 1, "Reels/Videos per Month"),
        from(1, "Story Creation"),
        from(2, "Carousel Posts"),
        from(3, "UGC Curation"),
        from(4, "Influencer Collaboration Posts"),
      ],
    },
    {
      name: "Community Management",
      items: [
        always("Comment Moderation"),
        always("Message Response Management"),
        from(1, "Follower Growth Campaigns"),
        from(2, "Hashtag Research & Optimization"),
        from(3, "Contest/Giveaway Management"),
      ],
    },
    {
      name: "Paid Social Boost",
      items: [
        from(2, "Boosted Posts (Ad Budget Excluded)"),
        from(3, "Retargeting Campaign Setup"),
        from(4, "Full Paid Social Strategy"),
      ],
    },
    {
      name: "Reports",
      items: [
        always("Monthly Engagement Report"),
        from(1, "Monthly Growth Report"),
        from(2, "Competitor Benchmark Report"),
        from(3, "Quarterly Strategy Review Call"),
      ],
    },
    {
      name: "Customer Support",
      items: [
        always("Email Support"),
        from(1, "Phone Support"),
        from(2, "Live Chat Support"),
        from(3, "Dedicated Account Manager"),
        from(4, "Priority 24/7 Support"),
      ],
    },
  ],
}

// ── Web Development ────────────────────────────────────────────────────
const web: PackageType = {
  label: "Web Packages",
  tagline: "Websites Built to Convert. Starting at a Price That Fits.",
  tiers: [
    { name: "Web Essential", priceUSD: 799 },
    { name: "Web Growth", priceUSD: 1499 },
    { name: "Web Professional", priceUSD: 2499, badge: "Most Popular" },
    { name: "Web Advanced", priceUSD: 3999 },
    { name: "Web Enterprise", priceUSD: 5999 },
  ],
  categories: [
    {
      name: "Design & Planning",
      items: [
        always("Custom Design Mockup"),
        always("Wireframing"),
        from(1, "UX Research"),
        from(2, "Brand Style Guide"),
        from(3, "A/B Design Testing"),
        from(4, "Conversion Rate Optimization Audit"),
      ],
    },
    {
      name: "Development",
      items: [
        qty(5, 5, "Custom Pages"),
        always("Mobile Responsive Build"),
        from(1, "CMS Integration"),
        from(2, "E-Commerce Functionality"),
        from(3, "Custom Web App Features"),
        from(4, "Multi-Language Support"),
      ],
    },
    {
      name: "SEO & Performance",
      items: [
        always("Basic On-Page SEO Setup"),
        from(1, "Speed Optimization"),
        from(2, "Schema Markup"),
        from(3, "Advanced Core Web Vitals Tuning"),
        from(4, "Dedicated SEO Sprint (1 Month)"),
      ],
    },
    {
      name: "Integrations",
      items: [
        from(1, "Payment Gateway Integration"),
        from(1, "Contact Form & CRM Integration"),
        from(2, "Email Marketing Integration"),
        from(3, "Live Chat/Chatbot Integration"),
        from(4, "Custom API Integrations"),
      ],
    },
    {
      name: "Support & Maintenance",
      items: [
        always("30 Days Free Bug Fixing"),
        from(1, "3 Months Free Maintenance"),
        from(2, "6 Months Free Maintenance"),
        from(3, "12 Months Free Maintenance"),
        from(4, "Dedicated Account Manager"),
      ],
    },
    {
      name: "Reports",
      items: [
        always("Project Milestone Reports"),
        from(2, "Monthly Performance Report"),
      ],
    },
    {
      name: "Customer Support",
      items: [
        always("Email Support"),
        from(1, "Phone Support"),
        from(2, "Live Chat Support"),
        from(3, "Dedicated Account Manager"),
        from(4, "Priority 24/7 Support"),
      ],
    },
  ],
}

// ── PPC ─────────────────────────────────────────────────────────────────
const ppc: PackageType = {
  label: "PPC Packages",
  tagline: "Every Click Counts. Pricing That Maximizes ROI.",
  tiers: [
    { name: "PPC Ignite", priceUSD: 399 },
    { name: "PPC Accelerate", priceUSD: 699 },
    { name: "PPC Scale", priceUSD: 1099, badge: "Most Popular" },
    { name: "PPC Dominate", priceUSD: 1599 },
    { name: "PPC Apex", priceUSD: 2199 },
  ],
  categories: [
    {
      name: "Campaign Setup",
      items: [
        always("Account Setup & Audit"),
        always("Conversion Tracking Setup"),
        qty(1, 1, "Ad Campaigns"),
        from(1, "Competitor PPC Analysis"),
        from(2, "Landing Page Review"),
        from(3, "A/B Ad Copy Testing"),
        from(4, "Advanced Audience Segmentation"),
      ],
    },
    {
      name: "Ad Management",
      items: [
        always("Keyword Research & Bid Strategy"),
        always("Ad Copywriting"),
        from(1, "Display Ads Management"),
        from(2, "Shopping Ads Management"),
        from(3, "YouTube Ads Management"),
        from(4, "Remarketing Campaign Management"),
      ],
    },
    {
      name: "Optimization",
      items: [
        always("Weekly Bid Adjustments"),
        from(1, "Negative Keyword Refinement"),
        from(2, "Quality Score Optimization"),
        from(3, "Ad Extensions Management"),
        from(4, "Cross-Channel Budget Optimization"),
      ],
    },
    {
      name: "Tracking & Analytics",
      items: [
        always("Google Analytics Setup"),
        from(1, "Google Tag Manager Setup"),
        from(2, "Call Tracking Integration"),
        from(3, "Custom Dashboard Setup"),
        from(4, "ROI/ROAS Deep Analysis"),
      ],
    },
    {
      name: "Reports",
      items: [
        always("Monthly Performance Report"),
        from(1, "Monthly Spend Analysis"),
        from(2, "Competitor Ad Spend Report"),
        from(3, "Quarterly Strategy Review Call"),
      ],
    },
    {
      name: "Customer Support",
      items: [
        always("Email Support"),
        from(1, "Phone Support"),
        from(2, "Live Chat Support"),
        from(3, "Dedicated Account Manager"),
        from(4, "Priority 24/7 Support"),
      ],
    },
  ],
}

export const PACKAGE_TYPES: Record<PackageTypeKey, PackageType> = { seo, smo, web, ppc }

export const PACKAGE_TYPE_ORDER: PackageTypeKey[] = ["seo", "smo", "web", "ppc"]

export { CURRENCY, convert }
