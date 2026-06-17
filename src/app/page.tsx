import type { Metadata } from "next"
import Home from "../views/home"
import { homeFaqs } from "../data/faq-content"
import { faqJsonLd, JsonLd } from "../lib/seo"

export const metadata: Metadata = {
  title: "Digital Marketing Agency for SEO, PPC & Web Development",
  description:
    "Full-service digital marketing agency offering SEO, PPC, social media, content marketing, web development, and virtual assistant services to grow your business online.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Web and Ads Solutions | Digital Marketing Agency",
    description:
      "Full-service digital marketing agency offering SEO, PPC, social media, content marketing, web development, and virtual assistant services to grow your business online.",
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
