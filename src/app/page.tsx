import type { Metadata } from "next"
import Home from "../views/home"
import { homeFaqs } from "../data/faq-content"
import { faqJsonLd, JsonLd } from "../lib/seo"

export const metadata: Metadata = {
  title: "The Digital Marketing Agency Built for the AI Search Era",
  description:
    "Full-service SEO, PPC, content, web design, and AEO/GEO agency with 10+ years and 350+ brands served. Free strategy call see what we can do for you.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Digital Marketing Agency Built for the AI Search Era | Web and Ads Solutions",
    description:
      "Full-service SEO, PPC, content, web design, and AEO/GEO agency with 10+ years and 350+ brands served. Free strategy call see what we can do for you.",
    url: "/",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs.map(({ question, answer }) => ({ q: question, a: answer })))} />
      <Home />
    </>
  )
}
