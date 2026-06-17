import type { Metadata } from "next"
import SMOPage from "../../../views/smo-page"
import { smoFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "Social Media Optimization (SMO) Services",
  description:
    "Build an engaged community and dominate every feed with our social media optimization services across all major platforms.",
  alternates: { canonical: "/services/smo" },
  openGraph: {
    title: "Social Media Optimization (SMO) Services | Web and Ads Solutions",
    description:
      "Build an engaged community and dominate every feed with our social media optimization services across all major platforms.",
    url: "/services/smo",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(smoFaqs)} />
      <SMOPage />
    </>
  )
}
