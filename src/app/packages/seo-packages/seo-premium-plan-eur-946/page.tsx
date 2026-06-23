import type { Metadata } from "next"
import SeoPremiumPlanPage from "../../../../views/seo-premium-plan-page"

export const metadata: Metadata = {
  title: "SEO Premium Plan – EUR",
  description: "Compare SEO Impact, SEO Apex, and Vector premium SEO plan pricing and features — EUR.",
  alternates: { canonical: "/packages/seo-packages/seo-premium-plan-eur-946" },
}

const EUR_CHECKOUT_URLS = [
  "https://buy.stripe.com/00w3cv95q6xSblW4wjbV63b",
  "https://buy.stripe.com/cNi14nftO5tOahSe6TbV63f",
  "https://buy.stripe.com/7sY7sLchCbScahSgf1bV63F",
]

export default function Page() {
  return <SeoPremiumPlanPage checkoutUrls={EUR_CHECKOUT_URLS} currencySymbol="€" />
}
