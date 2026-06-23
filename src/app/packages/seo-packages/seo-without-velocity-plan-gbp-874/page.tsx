import type { Metadata } from "next"
import SeoWithoutVelocityPlanPage from "../../../../views/seo-without-velocity-plan-page"

export const metadata: Metadata = {
  title: "SEO Plan without Velocity Plan – GBP",
  description: "Compare SEO Launchpad, Momentum, Impact, and Apex plan pricing and features — GBP.",
  alternates: { canonical: "/packages/seo-packages/seo-without-velocity-plan-gbp-874" },
}

const GBP_CHECKOUT_URLS = [
  "https://buy.stripe.com/6oUdR9gxS3lGey8e6TbV62Y",
  "https://buy.stripe.com/14A00jdlG8G09dO8MzbV630",
  "https://buy.stripe.com/fZu6oHepKcWggGggf1bV632",
  "https://buy.stripe.com/dRm5kDdlG3lGey85AnbV636",
]

export default function Page() {
  return <SeoWithoutVelocityPlanPage checkoutUrls={GBP_CHECKOUT_URLS} currencySymbol="£" />
}
