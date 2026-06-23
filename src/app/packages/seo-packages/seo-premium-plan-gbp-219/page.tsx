import type { Metadata } from "next"
import SeoPremiumPlanPage from "../../../../views/seo-premium-plan-page"

export const metadata: Metadata = {
  title: "SEO Premium Plan – GBP",
  description: "Compare SEO Impact, SEO Apex, and Vector premium SEO plan pricing and features — GBP.",
  alternates: { canonical: "/packages/seo-packages/seo-premium-plan-gbp-219" },
}

const GBP_CHECKOUT_URLS = [
  "https://buy.stripe.com/fZu6oHepKcWggGggf1bV632",
  "https://buy.stripe.com/dRm5kDdlG3lGey85AnbV636",
  "https://buy.stripe.com/aFadR96Xi2hC1Lm5AnbV63j",
]

export default function Page() {
  return <SeoPremiumPlanPage checkoutUrls={GBP_CHECKOUT_URLS} currencySymbol="£" />
}
