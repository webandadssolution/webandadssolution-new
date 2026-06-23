import PremiumPlanCards from "../components/premium-plan-cards"
import type { PremiumPlanTier } from "../components/premium-plan-cards"
import "../styles/sp-base.css"
import "../styles/seo-premium-plan-page.css"

const baseTiers: Omit<PremiumPlanTier, "checkoutUrl">[] = [
  {
    name: "SEO Impact",
    tagline: "Perfect for businesses stepping into organic growth with AI-ready foundations.",
    priceUSD: 999,
    highlights: [
      { value: "75", label: "Keywords" },
      { value: "150", label: "Backlinks" },
      { value: "15", label: "Landing Pages" },
      { value: "6", label: "AI Audit Pages" },
    ],
    categories: [
      {
        name: "AI Visibility",
        items: [
          { text: "Google My Business (GMB)" },
          { text: "Geotagging" },
          { text: "G.E.O (Generative Engine Optimization)" },
          { text: "A.E.O (Answer Engine Optimization)" },
          { text: "AI Compatibility Testing" },
          { text: "AI Visibility Audit", qty: "6 pages" },
        ],
      },
      {
        name: "Initial Analysis",
        items: [
          { text: "First Hand SEO Analysis" },
          { text: "Pre-Optimization Website Analysis" },
          { text: "Competitor Analysis" },
          { text: "Keyword Research & Analysis" },
          { text: "Baseline Ranking Check" },
          { text: "Duplicate Content Check" },
          { text: "Google Penalty Check" },
          { text: "Back Link Analysis (If Required)" },
        ],
      },
      {
        name: "On-Page Optimization",
        items: [
          { text: "Website Canonical Check" },
          { text: "Title Tag & Meta Tags Optimization" },
          { text: "Heading Tags Optimization" },
          { text: "Image Alt Tags Optimization" },
          { text: "Content Optimization" },
          { text: "SEO Friendly URL Setup" },
          { text: "Site Navigation Analysis" },
          { text: "404 Page Implementation" },
          { text: "Broken Links Check" },
          { text: "Website Speed Check" },
          { text: "Google Indexed Pages Check" },
          { text: "Robots.txt Creation" },
          { text: "Google XML Sitemap" },
          { text: "HTML Sitemap Setup" },
          { text: "Google Webmasters Tool Setup" },
          { text: "Google Analytics Setup" },
          { text: "Structured Data Setup" },
          { text: "On-Site Blog Section Creation" },
          { text: "On-Site Blog Posting", qty: "3/mo" },
        ],
      },
      {
        name: "Off-Page Optimization",
        items: [
          { text: "Search Engine Submission – Manual" },
          { text: "Article Writing", qty: "3" },
          { text: "Article Submissions", qty: "3" },
          { text: "Article Marketing", qty: "15" },
          { text: "Classified Submissions", qty: "10" },
          { text: "Business Listing" },
          { text: "Blog Creation (One-Time)", qty: "3" },
          { text: "Blog Writing", qty: "3" },
          { text: "Blog Posting", qty: "3" },
          { text: "Blog Marketing", qty: "15" },
          { text: "Third Party Blog Pinging", qty: "10" },
          { text: "Image Sharing", qty: "6" },
          { text: "PPT Submissions" },
          { text: "Social Bookmarking", qty: "20" },
          { text: "Profile Creation" },
          { text: "Product Listing" },
          { text: "Video Marketing (if Client Provides)" },
          { text: "Press Release (If Client Provides News)" },
          { text: "OSB Marketing" },
          { text: "Quora Q&A" },
          { text: "Infographic Submission" },
          { text: "Guest Post" },
        ],
      },
      {
        name: "Social Media (SMO)",
        items: [
          { text: "Facebook Posts", qty: "8/mo" },
          { text: "Instagram Posts", qty: "8/mo" },
          { text: "Twitter" },
          { text: "LinkedIn" },
          { text: "Pinterest" },
        ],
      },
      {
        name: "Reports & Support",
        items: [
          { text: "Monthly Website Analytics Report" },
          { text: "Monthly Keywords Ranking Report" },
          { text: "Monthly Off Page Submission Report" },
          { text: "Bi-Monthly Website Progress Report" },
          { text: "Email / Phone / Chat Support" },
          { text: "Google / Zoom Meeting" },
        ],
      },
    ],
  },
  {
    name: "SEO Apex",
    badge: "Most Popular",
    tagline: "Accelerate rankings with deeper coverage, stronger backlinks, and AI-powered visibility.",
    priceUSD: 1799,
    highlights: [
      { value: "150", label: "Keywords" },
      { value: "300", label: "Backlinks" },
      { value: "40", label: "Landing Pages" },
      { value: "10", label: "AI Audit Pages" },
    ],
    categories: [
      {
        name: "AI Visibility",
        items: [
          { text: "Google My Business (GMB)" },
          { text: "Geotagging" },
          { text: "G.E.O (Generative Engine Optimization)" },
          { text: "A.E.O (Answer Engine Optimization)" },
          { text: "AI Compatibility Testing" },
          { text: "AI Visibility Audit", qty: "10 pages" },
        ],
      },
      {
        name: "Initial Analysis",
        items: [
          { text: "First Hand SEO Analysis" },
          { text: "Pre-Optimization Website Analysis" },
          { text: "Competitor Analysis" },
          { text: "Keyword Research & Analysis" },
          { text: "Baseline Ranking Check" },
          { text: "Duplicate Content Check" },
          { text: "Google Penalty Check" },
          { text: "Back Link Analysis (If Required)" },
        ],
      },
      {
        name: "On-Page Optimization",
        items: [
          { text: "Website Canonical Check" },
          { text: "Title Tag & Meta Tags Optimization" },
          { text: "Heading Tags Optimization" },
          { text: "Image Alt Tags Optimization" },
          { text: "Content Optimization" },
          { text: "SEO Friendly URL Setup" },
          { text: "Site Navigation Analysis" },
          { text: "404 Page Implementation" },
          { text: "Broken Links Check" },
          { text: "Website Speed Check" },
          { text: "Google Indexed Pages Check" },
          { text: "Robots.txt Creation" },
          { text: "Google XML Sitemap" },
          { text: "HTML Sitemap Setup" },
          { text: "Google Webmasters Tool Setup" },
          { text: "Google Analytics Setup" },
          { text: "Structured Data Setup" },
          { text: "On-Site Blog Section Creation" },
          { text: "On-Site Blog Posting", qty: "5/mo" },
        ],
      },
      {
        name: "Off-Page Optimization",
        items: [
          { text: "Search Engine Submission – Manual" },
          { text: "Article Writing", qty: "5" },
          { text: "Article Submissions", qty: "5" },
          { text: "Article Marketing", qty: "25" },
          { text: "Classified Submissions", qty: "20" },
          { text: "Business Listing" },
          { text: "Blog Creation (One-Time)", qty: "5" },
          { text: "Blog Writing", qty: "5" },
          { text: "Blog Posting", qty: "5" },
          { text: "Blog Marketing", qty: "30" },
          { text: "Third Party Blog Pinging", qty: "20" },
          { text: "Image Sharing", qty: "10" },
          { text: "PPT Submissions", qty: "2" },
          { text: "Social Bookmarking", qty: "50" },
          { text: "Profile Creation" },
          { text: "Product Listing" },
          { text: "Video Marketing (if Client Provides)" },
          { text: "Press Release (If Client Provides News)" },
          { text: "OSB Marketing" },
          { text: "Quora Q&A" },
          { text: "Infographic Submission" },
          { text: "Guest Post" },
        ],
      },
      {
        name: "Social Media (SMO)",
        items: [
          { text: "Facebook Posts", qty: "20/mo" },
          { text: "Instagram Posts", qty: "20/mo" },
          { text: "Twitter Posts", qty: "20/mo" },
          { text: "LinkedIn Posts", qty: "20/mo" },
          { text: "Pinterest" },
        ],
      },
      {
        name: "Reports & Support",
        items: [
          { text: "Monthly Website Analytics Report" },
          { text: "Monthly Keywords Ranking Report" },
          { text: "Monthly Off Page Submission Report" },
          { text: "Bi-Monthly Website Progress Report" },
          { text: "Email / Phone / Chat Support" },
          { text: "Google / Zoom Meeting" },
        ],
      },
    ],
  },
  {
    name: "Vector",
    tagline: "Enterprise-grade SEO dominance with full AI optimization and custom strategy at scale.",
    priceUSD: 2800,
    highlights: [
      { value: "200", label: "Keywords" },
      { value: "300", label: "Backlinks" },
      { value: "70", label: "Pages Optimized" },
      { value: "20", label: "Referral Links" },
    ],
    categories: [
      {
        name: "AI Visibility",
        items: [
          { text: "G.E.O (Generative Engine Optimization)" },
          { text: "A.E.O (Answer Engine Optimization)" },
          { text: "AI Compatibility Testing" },
          { text: "AI Visibility Audit", qty: "Full Site" },
          { text: "AI Semantic Entity Optimization", qty: "Advanced NLP" },
          { text: "AI Prompt Injection Testing" },
          { text: "Schema Validator & Repair" },
          { text: "Featured Snippet Testing (A/B)" },
          { text: "AI Index Monitoring", qty: "Weekly" },
          { text: "AI-Attributed Image & Infographic Optimization", qty: "6/mo" },
          { text: "Website Structure & AI Parsability", qty: "Full" },
          { text: "Internal Linking Optimization", qty: "Advanced" },
          { text: "Conversational AI Optimization" },
          { text: "Voice Search Optimization" },
          { text: "Zero-Click Optimization" },
          { text: "AI Prompt-Based Landing Pages", qty: "4" },
          { text: "AI-Optimized Blog Posts", qty: "2/mo" },
          { text: "AI-Optimized Prompt FAQs" },
          { text: "In-Depth Competitor AI Analysis" },
          { text: "AI Ranking & Visibility Report", qty: "Monthly" },
        ],
      },
      {
        name: "On-Page Optimization",
        items: [
          { text: "Website Structure Analysis" },
          { text: "Title Tag & Meta Tag Optimization" },
          { text: "Heading Tags & Image Alt Tags Optimization" },
          { text: "Keyword Mapping to Target Pages" },
          { text: "Canonicalization Analysis" },
          { text: "Content Editing & Optimization" },
          { text: "Schema Markup Implementation" },
          { text: "Google Search Console & Analytics Setup" },
          { text: "Bing Search Console Setup" },
          { text: "XML Sitemap & Robots.txt Creation" },
          { text: "404 Page & Broken Links Fix" },
          { text: "On-Site Blog Section Creation", qty: "6/mo" },
        ],
      },
      {
        name: "Local Search",
        items: [
          { text: "Google Business Profile Setup & Verification" },
          { text: "Local Schema Setup" },
          { text: "Local / City Pages Created", qty: "Up to 5" },
          { text: "Local Citations", qty: "20" },
        ],
      },
      {
        name: "Content Marketing",
        items: [
          { text: "Blog Writing & Posting", qty: "3/mo" },
          { text: "Informative Article Writing & Posting", qty: "1/mo" },
          { text: "Guest Blog Writing & Posting", qty: "5/mo" },
          { text: "Onsite Blog Writing & Posting", qty: "4/mo" },
          { text: "Press Release Writing", qty: "2/mo" },
          { text: "Press Release Posting", qty: "20" },
        ],
      },
      {
        name: "Off-Page Optimization",
        items: [
          { text: "Video Creation & Submission", qty: "2" },
          { text: "Business Listing", qty: "10" },
          { text: "Local Classifieds Listing", qty: "10" },
          { text: "Social Bookmarking", qty: "15" },
          { text: "Onsite Blog Marketing", qty: "20" },
          { text: "Blog Marketing", qty: "50" },
          { text: "Article Marketing", qty: "5" },
          { text: "PDF Submission", qty: "5" },
          { text: "PPT Submission", qty: "5" },
          { text: "Competitor Backlink Analysis & Posting", qty: "30" },
        ],
      },
      {
        name: "Online Reputation",
        items: [
          { text: "Quora Promotion", qty: "20" },
          { text: "Social Profile Creation", qty: "30" },
          { text: "Infographic Creation", qty: "1" },
          { text: "Infographic Submission", qty: "5" },
          { text: "Twitter / Facebook / Instagram / Pinterest", qty: "18 each" },
        ],
      },
      {
        name: "Audit Reports",
        items: [
          { text: "Website Audit Report" },
          { text: "Competitor Analysis & Review Report" },
          { text: "On-Page Recommendation & Implementation Report" },
          { text: "Google Analytics / GA4 Datastudio Report" },
          { text: "Bing Analytics / Microsoft Clarity Report" },
          { text: "Keywords Ranking Report" },
          { text: "Offpage / Backlinks Reports" },
          { text: "Google Business Profile Report" },
        ],
      },
    ],
  },
]

const USD_CHECKOUT_URLS = [
  "https://buy.stripe.com/eVq3cv6XiaO8gGg6ErbV62T",
  "https://buy.stripe.com/bJe28r2H28G01Lm2obbV62W",
  "https://buy.stripe.com/8x2cN5ftOg8sahS6ErbV63g",
]

const SeoPremiumPlanPage = ({
  checkoutUrls = USD_CHECKOUT_URLS,
  currencySymbol = "$",
}: {
  checkoutUrls?: string[]
  currencySymbol?: string
}) => {
  const tiers: PremiumPlanTier[] = baseTiers.map((tier, i) => ({ ...tier, checkoutUrl: checkoutUrls[i] }))

  return (
    <div className="sp-page seo-premium-plan-page">
      <section className="sp-container" style={{ paddingTop: 120, paddingBottom: 56, textAlign: "center" }}>
        <span className="sp-tag">Transparent Pricing</span>
        <h1 className="sp-h2">Choose Your SEO Power</h1>
        <p className="sp-lead">Three tiers built for every stage of growth — from launch to market dominance.</p>
      </section>
      <PremiumPlanCards tiers={tiers} currencySymbol={currencySymbol} />
    </div>
  )
}

export default SeoPremiumPlanPage
