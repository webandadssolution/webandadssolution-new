import type { Metadata } from "next"
import PPCPage from "../../../views/ppc-page"
import { ppcFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "PPC Advertising Services | Maximize Your ROI",
  description:
    "Pay-per-click advertising managed for maximum ROI and zero wasted spend. Get profitable PPC campaigns built around your goals.",
  alternates: { canonical: "/services/ppc" },
  openGraph: {
    title: "PPC Advertising Services | Web and Ads Solutions",
    description:
      "Pay-per-click advertising managed for maximum ROI and zero wasted spend. Get profitable PPC campaigns built around your goals.",
    url: "/services/ppc",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(ppcFaqs)} />
      <PPCPage />
    </>
  )
}
