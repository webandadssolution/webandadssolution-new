import type { Metadata } from "next"
import SeoSignaturePlanPage from "../../../../views/seo-signature-plan-page"

export const metadata: Metadata = {
  title: "SEO Signature Plan – EUR",
  description: "Compare Vector, Spectrum, and Nexus SEO & AI Visibility plan pricing and features — EUR.",
  alternates: { canonical: "/packages/seo-packages/seo-signature-plan-eur-458" },
}

const EUR_CHECKOUT_URLS = [
  "https://buy.stripe.com/7sY7sLchCbScahSgf1bV63F",
  "https://buy.stripe.com/eVq9AT1CYbSc9dOgf1bV63H",
  "https://buy.stripe.com/4gM3cv2H28G02Pq9QDbV63J",
]

export default function Page() {
  return <SeoSignaturePlanPage checkoutUrls={EUR_CHECKOUT_URLS} currencySymbol="€" />
}
