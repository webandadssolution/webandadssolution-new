import type { Metadata } from "next"
import SeoVelocityPlanOverviewPage from "../../../../views/seo-velocity-plan-overview-page"

export const metadata: Metadata = {
  title: "SEO Packages with Velocity Plan",
  description: "SEO built to move fast and compound — explore the Velocity Plan tiers, what's included, and get a custom strategy call.",
  alternates: { canonical: "/packages/seo-packages/seo-packages-with-velocity-plan" },
}

export default function Page() {
  return <SeoVelocityPlanOverviewPage />
}
