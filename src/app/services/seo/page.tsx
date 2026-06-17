import type { Metadata } from "next"
import SEOPage from "../../../views/seo-page"
import { seoFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "SEO Services | Rank Higher & Grow Organic Traffic",
  description:
    "Expert search engine optimization services to help your business rank higher, get found, and grow organic traffic. Get a custom SEO strategy today.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Services | Web and Ads Solutions",
    description:
      "Expert search engine optimization services to help your business rank higher, get found, and grow organic traffic.",
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
