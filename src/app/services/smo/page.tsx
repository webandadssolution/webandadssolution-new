import type { Metadata } from "next"
import SMOPage from "../../../views/smo-page"
import { smoFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "Social Media Marketing (SMO) Services | Strategy & Growth",
  description:
    "Social media management with defined content themes, thoughtful design and engagement strategies built on trust. Grow your following. Free quote.",
  alternates: { canonical: "/services/smo" },
  openGraph: {
    title: "Social Media Marketing (SMO) Services | Strategy & Growth | Web and Ads Solutions",
    description:
      "Social media management with defined content themes, thoughtful design and engagement strategies built on trust. Grow your following. Free quote.",
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
