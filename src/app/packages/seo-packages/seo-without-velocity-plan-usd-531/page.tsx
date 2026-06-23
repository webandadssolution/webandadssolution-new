import type { Metadata } from "next"
import SeoWithoutVelocityPlanPage from "../../../../views/seo-without-velocity-plan-page"

export const metadata: Metadata = {
  title: "SEO Plan without Velocity Plan – USD",
  description: "Compare SEO Launchpad, Momentum, Impact, and Apex plan pricing and features — USD.",
  alternates: { canonical: "/packages/seo-packages/seo-without-velocity-plan-usd-531" },
}

export default function Page() {
  return <SeoWithoutVelocityPlanPage />
}
