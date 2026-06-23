import type { Metadata } from "next"
import SeoVelocityPlanPage from "../../../../views/seo-velocity-plan-page"

export const metadata: Metadata = {
  title: "SEO Packages with Velocity Plan – EUR",
  description: "Compare SEO Launchpad, Momentum, Impact, Velocity, and Apex plan pricing and features — EUR.",
  alternates: { canonical: "/packages/seo-packages/seo-packages-with-velocity-plan-eur-893" },
}

const EUR_CHECKOUT_URLS = [
  "https://buy.stripe.com/dRm14na9u7BWgGg7IvbV607",
  "https://buy.stripe.com/6oU6oH6Xi8G04Xye6TbV639",
  "https://buy.stripe.com/00w3cv95q6xSblW4wjbV63b",
  "https://buy.stripe.com/8x28wPa9uaO8fCcfaXbV63d",
  "https://buy.stripe.com/cNi14nftO5tOahSe6TbV63f",
]

export default function Page() {
  return <SeoVelocityPlanPage checkoutUrls={EUR_CHECKOUT_URLS} currencySymbol="€" />
}
