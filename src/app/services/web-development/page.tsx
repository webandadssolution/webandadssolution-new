import type { Metadata } from "next"
import WebDevPage from "../../../views/web-dev-page"
import { webDevFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "Website Development Services",
  description:
    "Custom website development that works while you sleep — fast, responsive, and built to convert visitors into customers.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Website Development Services | Web and Ads Solutions",
    description:
      "Custom website development that works while you sleep — fast, responsive, and built to convert visitors into customers.",
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
