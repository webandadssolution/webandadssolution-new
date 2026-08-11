import type { Metadata } from "next"
import SEOPage from "../../../views/seo-page"
import { seoFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "SEO Services That Rank and Drive Real Revenue",
  description:
    "Expert SEO services for businesses of all sizes. From local SEO to full-scale SEO marketing, we deliver rankings that convert. Get a free audit today.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Services That Rank and Drive Real Revenue | Web and Ads Solutions",
    description:
      "Expert SEO services for businesses of all sizes. From local SEO to full-scale SEO marketing, we deliver rankings that convert. Get a free audit today.",
    url: "/services/seo",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(seoFaqs)} />
      <SEOPage />
    </>
  )
}
