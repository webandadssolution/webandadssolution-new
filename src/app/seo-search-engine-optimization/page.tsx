import type { Metadata } from "next"
import SeoServicesPage from "../../views/seo-search-engine-optimization-page"
import { seoServicesFaqs } from "../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../lib/seo"

export const metadata: Metadata = {
  title: "SEO Services That Grow Your Business",
  description:
    "Our SEO services focus on driving high-intent organic traffic that actually translates into qualified leads and signed deals.",
  alternates: { canonical: "/seo-search-engine-optimization" },
  openGraph: {
    title: "SEO Services That Grow Your Business",
    description:
      "Our SEO services focus on driving high-intent organic traffic that actually translates into qualified leads and signed deals.",
    url: "/seo-search-engine-optimization",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(seoServicesFaqs)} />
      <SeoServicesPage />
    </>
  )
}
