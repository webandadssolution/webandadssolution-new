import type { Metadata } from "next"
import SeoSignaturePlanPage from "../../../../views/seo-signature-plan-page"

export const metadata: Metadata = {
  title: "SEO Signature Plan – GBP",
  description: "Compare Vector, Spectrum, and Nexus SEO & AI Visibility plan pricing and features — GBP.",
  alternates: { canonical: "/packages/seo-packages/seo-signature-plan-gbp-627" },
}

const GBP_CHECKOUT_URLS = [
  "https://buy.stripe.com/aFadR96Xi2hC1Lm5AnbV63j",
  "https://buy.stripe.com/00wfZh1CY6xSblW4wjbV63A",
  "https://buy.stripe.com/fZucN54PaaO80Hi7IvbV63D",
]

export default function Page() {
  return <SeoSignaturePlanPage checkoutUrls={GBP_CHECKOUT_URLS} currencySymbol="£" />
}
