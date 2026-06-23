import PricingTierCards from "../components/pricing-tier-cards"
import { always, from, seq } from "../lib/pricing-helpers"
import type { PricingTier, PricingCategory } from "../lib/pricing-helpers"
import "../styles/sp-base.css"
import "../styles/seo-signature-plan-page.css"

const baseTiers: Omit<PricingTier, "checkoutUrl">[] = [
  { name: "Vector", priceUSD: 2800 },
  { name: "Spectrum", priceUSD: 4000 },
  { name: "Nexus", priceUSD: 5500, badge: "Premium" },
]

const USD_CHECKOUT_URLS = [
  "https://buy.stripe.com/8x2cN5ftOg8sahS6ErbV63g",
  "https://buy.stripe.com/aFa5kD81m1dy4Xy5AnbV63h",
  "https://buy.stripe.com/28E3cvepKe0kcq01k7bV63i",
]

const categories: PricingCategory[] = [
  {
    name: "Performance Pledge",
    items: [
      seq(["Up to 70 Target Pages Optimized", "Up to 100 Target Pages Optimized", "Up to 150 Target Pages Optimized"]),
      seq(["200 Keywords Researched & Selected", "250 Keywords Researched & Selected", "300 Keywords Researched & Selected"]),
      seq(["300 Backlinks", "400 Backlinks", "500 Backlinks"]),
      seq(["20 Referral Links", "30 Referral Links", "40 Referral Links"]),
      always("G.E.O (Generative Engine Optimization)"),
      always("A.E.O (Answer Engine Optimization)"),
      always("AI Compatibility Testing"),
      always("AI Visibility Audit — Full Site"),
    ],
  },
  {
    name: "Initial Review & Analysis",
    items: [
      always("Search Engine Friendly Analysis"),
      always("Duplicate Content Check"),
      always("Competition Analysis"),
      always("Keyword Analysis"),
      always("Google Indexed Pages Check"),
      always("Link Popularity Analysis"),
      always("Mobile Compatibility Suggestions"),
      always("Website Technical Audit"),
      always("Page Speed Analysis"),
      always("Landing Page Analysis"),
      always("Enquiry Page Analysis"),
      always("Google Penalty Check"),
      always("Initial Rank Report"),
      always("Competitor Analysis & Review"),
      from(2, "Monthly Strategy Development & Discussions"),
    ],
  },
  {
    name: "AI Visibility Activities",
    items: [
      seq(["AI Semantic Entity Optimization — Advanced NLP", "AI Semantic Entity Optimization — Advanced NLP", "AI Semantic Entity Optimization — Full Entity Graph"]),
      always("AI Prompt Injection Testing"),
      always("Schema Validator & Repair"),
      always("AEO (Answer Engine Optimization)"),
      always("GEO (Generative Engine Optimization)"),
      always("Featured Snippet Testing (A/B)"),
      always("AI Index Monitoring — Weekly"),
      seq(["6/mo AI-Attributed Image & Infographic Optimization", "8/mo AI-Attributed Image & Infographic Optimization", "Unlimited AI-Attributed Image & Infographic Optimization"]),
      seq(["Website Structure & AI Parsability — Full", "Website Structure & AI Parsability — Full", "Website Structure & AI Parsability — Custom"]),
      seq(["Internal Linking Optimization — Advanced", "Internal Linking Optimization — Advanced", "Internal Linking Optimization — Custom"]),
      always("Conversational AI Optimization"),
      always("Voice Search Optimization"),
      always("Zero-Click Optimization"),
      seq(["4 AI Prompt-Based Landing Pages", "6 AI Prompt-Based Landing Pages", "Custom AI Prompt-Based Landing Pages"]),
      seq(["2/mo AI-Optimized Blog Posts", "3/mo AI-Optimized Blog Posts", "4/mo AI-Optimized Blog Posts"]),
      always("AI-Optimized Prompt FAQs"),
      always("In-Depth Competitor AI Analysis"),
      seq(["AI Ranking & Visibility Report — Monthly", "AI Ranking & Visibility Report — Bi-Weekly", "AI Ranking & Visibility Report — Custom"]),
    ],
  },
  {
    name: "On-Page Optimization",
    items: [
      always("Website Structure Analysis"),
      always("Title Tag & Meta Tag Optimization"),
      always("Heading Tags Optimization"),
      always("Keyword Mapping to Target Pages"),
      always("Image Alt Tags Optimization"),
      always("Canonicalization Analysis"),
      always("Keyword URL Mapping"),
      always("Content Editing & Optimization"),
      always("Internal Link Optimization / Crosslinking"),
      always("Image Optimization"),
      always("XML Sitemap Creation"),
      always("Robots.txt Creation"),
      always("Implementation of Approved Technical Updates"),
      always("Schema Markup Implementation"),
      always("Google Search Console Set Up"),
      always("Google Analytics / GA4 Set Up"),
      always("Create Events in Google Analytics 4 (If Required)"),
      always("Bing Search Console Set Up"),
      always("Broken Links Check & Fix"),
      always("404 Page Implementation"),
      always("SEO Friendly URL Analysis"),
      always("Site Navigation Analysis"),
      seq(["6/mo On-Site Blog Section Creation", "7/mo On-Site Blog Section Creation", "8/mo On-Site Blog Section Creation"]),
      from(1, "A/B Testing of SERP Title & Description to Improve Clickthrough"),
      from(1, "Core Web Vitals Analysis"),
      from(1, "Bing Analytics / Microsoft Clarity Integration"),
      from(2, "Conversion Rate Optimization"),
    ],
  },
  {
    name: "Local Search Optimization",
    items: [
      always("Google Business Profile Setup & Verification"),
      always("Local Schema Setup"),
      always("Google Business Profile Optimization (If Required)"),
      seq(["Up to 5 Local/City Pages Created", "Up to 10 Local/City Pages Created", "Up to 20 Local/City Pages Created"]),
      seq(["20 Local Citations", "35 Local Citations", "40 Local Citations"]),
      from(1, "Apple Maps Setup & Verification"),
      from(1, "Bing Maps Setup & Verification"),
    ],
  },
  {
    name: "Content Marketing",
    items: [
      seq(["3 Blog Writing & Posting", "4 Blog Writing & Posting", "6 Blog Writing & Posting"]),
      seq(["1 Informative Article Writing & Posting", "2 Informative Article Writing & Posting", "3 Informative Article Writing & Posting"]),
      seq(["5 Guest Blog Writing & Posting", "7 Guest Blog Writing & Posting", "10 Guest Blog Writing & Posting"]),
      seq(["4 Onsite Blog Writing & Posting", "6 Onsite Blog Writing & Posting", "8 Onsite Blog Writing & Posting"]),
      seq(["2 Press Release Writing", "4 Press Release Writing", "6 Press Release Writing"]),
      seq(["20 Press Release Posting", "40 Press Release Posting", "60 Press Release Posting"]),
    ],
  },
  {
    name: "Off-Page Optimization",
    items: [
      seq(["2 Video Creation & Submission", "3 Video Creation & Submission", "4 Video Creation & Submission"]),
      seq(["10 Business Listings", "20 Business Listings", "30 Business Listings"]),
      seq(["10 Local Classifieds Listing", "20 Local Classifieds Listing", "30 Local Classifieds Listing"]),
      seq(["15 Social Bookmarking", "30 Social Bookmarking", "35 Social Bookmarking"]),
      seq(["20 Onsite Blog Marketing", "30 Onsite Blog Marketing", "40 Onsite Blog Marketing"]),
      seq(["50 Blog Marketing", "70 Blog Marketing", "100 Blog Marketing"]),
      seq(["5 Article Marketing", "10 Article Marketing", "15 Article Marketing"]),
      seq(["5 PDF Submission", "10 PDF Submission", "20 PDF Submission"]),
      seq(["5 PPT Submission", "10 PPT Submission", "20 PPT Submission"]),
      seq(["30 Competitor Backlink Analysis & Posting", "40 Competitor Backlink Analysis & Posting", "50 Competitor Backlink Analysis & Posting"]),
      from(1, "Google Product Listing in Merchant (If Required)"),
      from(1, "Amazon Product Optimisation (If Required)"),
    ],
  },
  {
    name: "Online Reputation Management",
    items: [
      seq(["20 Quora Promotion", "25 Quora Promotion", "30 Quora Promotion"]),
      seq(["30 Social Profile Creation", "35 Social Profile Creation", "40 Social Profile Creation"]),
      seq(["1 Infographic Creation", "2 Infographic Creation", "3 Infographic Creation"]),
      seq(["5 Infographic Submission", "10 Infographic Submission", "15 Infographic Submission"]),
      always("18 Twitter Updates"),
      always("18 Facebook Wall Updates"),
      always("18 Instagram Updates"),
      always("18 Pin Images"),
      from(2, "Respond to Questions & Complaints (With Client Input)"),
    ],
  },
  {
    name: "Paid Campaigns",
    items: [
      from(1, "Google Ads Setup & Management (If Required)"),
      from(1, "Google Merchant Center (If Required)"),
      from(1, "Bing Ads Setup & Management (If Required)"),
      from(2, "LinkedIn Ads Setup & Optimization (If Required)"),
      from(2, "Other Platforms (Quora, Amazon Ads, etc.)"),
    ],
  },
  {
    name: "Audit Reports",
    items: [
      always("Website Audit Report (One-Time)"),
      always("Competitor Analysis & Review Report (One-Time)"),
      always("On-Page Recommendation Report (One-Time)"),
      always("On-Page Implementation Report (One-Time)"),
      always("Technical Updates Implementation Report (If Required)"),
      always("Google Analytics / GA4 Datastudio Report"),
      always("Bing Analytics / Microsoft Clarity Report"),
      always("Keywords Ranking Report"),
      always("Offpage / Backlinks Report (Including Referral)"),
      always("Google Business Profile Report (For Local Business)"),
    ],
  },
]

const SeoSignaturePlanPage = ({
  checkoutUrls = USD_CHECKOUT_URLS,
  currencySymbol = "$",
}: {
  checkoutUrls?: string[]
  currencySymbol?: string
}) => {
  const tiers: PricingTier[] = baseTiers.map((tier, i) => ({ ...tier, checkoutUrl: checkoutUrls[i] }))

  return (
    <div className="sp-page seo-signature-plan-page">
      <section className="sp-container" style={{ paddingTop: 120, paddingBottom: 56, textAlign: "center" }}>
        <span className="sp-tag">SEO & AI Visibility Service Packages</span>
        <h1 className="sp-h2">Signature SEO. Built For AI-First Search.</h1>
        <p className="sp-lead">
          Vector, Spectrum, and Nexus — full-stack SEO and AI visibility plans for teams ready to dominate
          both classic search and the next generation of AI-driven discovery.
        </p>
      </section>
      <PricingTierCards tiers={tiers} categories={categories} currencySymbol={currencySymbol} />
    </div>
  )
}

export default SeoSignaturePlanPage
