import type { Metadata } from "next"
import PPCPage from "../../../views/ppc-page"
import { ppcFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "PPC Agency | Google Ads and Paid Ads",
  description:
    "Drive qualified leads with PPC campaigns across Google Ads, social media & e-commerce. 10+ years managing ad spend. Get a free quote today.",
  alternates: { canonical: "/services/ppc" },
  openGraph: {
    title: "PPC Agency | Google Ads and Paid Ads | Web and Ads Solutions",
    description:
      "Drive qualified leads with PPC campaigns across Google Ads, social media & e-commerce. 10+ years managing ad spend. Get a free quote today.",
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
