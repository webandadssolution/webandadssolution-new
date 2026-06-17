import type { Metadata } from "next"
import VAPage from "../../../views/va-page"
import { vaFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "Virtual Assistant Services | Delegate & Grow",
  description:
    "Professional virtual assistant services to help you delegate more and achieve more. Get a dedicated VA up and running in 48 hours.",
  alternates: { canonical: "/services/virtual-assistant" },
  openGraph: {
    title: "Virtual Assistant Services | Web and Ads Solutions",
    description:
      "Professional virtual assistant services to help you delegate more and achieve more. Get a dedicated VA up and running in 48 hours.",
    url: "/services/virtual-assistant",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(vaFaqs)} />
      <VAPage />
    </>
  )
}
