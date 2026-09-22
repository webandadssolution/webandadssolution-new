import type { Metadata } from "next"
import Home from "../views/home"
import { homeFaqs } from "../data/faq-content"
import { faqJsonLd, JsonLd } from "../lib/seo"

export const metadata: Metadata = {
  title: "Performance-Driven Digital Marketing Agency for the AI Search Era",
  description:
    "Web and Ads Solution builds performance-driven digital strategies that keep your brand visible, authoritative, and impossible to ignore on Google and in AI search.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Performance-Driven Digital Marketing Agency for the AI Search Era",
    description:
      "Web and Ads Solution builds performance-driven digital strategies that keep your brand visible, authoritative, and impossible to ignore on Google and in AI search.",
    url: "/",
  },
}

export default function Page() {
  return (
    <>
      <Home />
      <JsonLd data={faqJsonLd(homeFaqs.map(({ question, answer }) => ({ q: question, a: answer })))} />
    </>
  )
}
