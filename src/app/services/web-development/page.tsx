import type { Metadata } from "next"
import WebDevPage from "../../../views/web-dev-page"
import { webDevFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "Web Design and Development Services | Built to Convert",
  description:
    "Fast, mobile-friendly websites built around user experience and conversion, ready to support SEO, AEO, GEO, and paid campaigns. Get a free quote.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Web Design and Development Services | Built to Convert | Web and Ads Solutions",
    description:
      "Fast, mobile-friendly websites built around user experience and conversion, ready to support SEO, AEO, GEO, and paid campaigns. Get a free quote.",
    url: "/services/web-development",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(webDevFaqs)} />
      <WebDevPage />
    </>
  )
}
