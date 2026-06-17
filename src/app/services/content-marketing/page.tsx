import type { Metadata } from "next"
import ContentMarketingPage from "../../../views/content-marketing-page"
import { contentMarketingFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: "Content Marketing Services",
  description:
    "Content marketing that attracts, converts, and compounds. We create content funnels that turn visitors into loyal customers.",
  alternates: { canonical: "/services/content-marketing" },
  openGraph: {
    title: "Content Marketing Services | Web and Ads Solutions",
    description:
      "Content marketing that attracts, converts, and compounds. We create content funnels that turn visitors into loyal customers.",
    url: "/services/content-marketing",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(contentMarketingFaqs)} />
      <ContentMarketingPage />
    </>
  )
}
