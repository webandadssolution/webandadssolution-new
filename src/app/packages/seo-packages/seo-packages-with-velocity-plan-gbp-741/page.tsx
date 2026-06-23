import type { Metadata } from "next"
import SeoVelocityPlanPage from "../../../../views/seo-velocity-plan-page"

export const metadata: Metadata = {
  title: "SEO Packages with Velocity Plan – GBP",
  description: "Compare SEO Launchpad, Momentum, Impact, Velocity, and Apex plan pricing and features — GBP.",
  alternates: { canonical: "/packages/seo-packages/seo-packages-with-velocity-plan-gbp-741" },
}

const GBP_CHECKOUT_URLS = [
  "https://buy.stripe.com/6oUdR9gxS3lGey8e6TbV62Y",
  "https://buy.stripe.com/14A00jdlG8G09dO8MzbV630",
  "https://buy.stripe.com/fZu6oHepKcWggGggf1bV632",
  "https://buy.stripe.com/eVqfZhbdy2hCdu41k7bV634",
  "https://buy.stripe.com/dRm5kDdlG3lGey85AnbV636",
]

export default function Page() {
  return <SeoVelocityPlanPage checkoutUrls={GBP_CHECKOUT_URLS} currencySymbol="£" />
}
