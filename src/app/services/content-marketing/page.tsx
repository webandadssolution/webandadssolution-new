import type { Metadata } from "next"
import ContentMarketingPage from "../../../views/content-marketing-page"
import { contentMarketingFaqs } from "../../../data/faq-content"
import { faqJsonLd, JsonLd } from "../../../lib/seo"

export const metadata: Metadata = {
  title: { absolute: "Content Marketing Services for SEO and AI Search Visibility" },
  description:
    "Content marketing built for your funnel blogs, landing pages, and campaign copy that rank in search and get cited in AI answers. Free strategy call.",
  alternates: { canonical: "/services/content-marketing" },
  openGraph: {
    title: "Content Marketing Services for SEO and AI Search Visibility",
    description:
      "Content marketing built for your funnel blogs, landing pages, and campaign copy that rank in search and get cited in AI answers. Free strategy call.",
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
