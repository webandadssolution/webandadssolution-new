import type { Metadata } from "next"
import SeoPremiumPlanPage from "../../../../views/seo-premium-plan-page"

export const metadata: Metadata = {
  title: "SEO Premium Plan – USD",
  description: "Compare SEO Impact, SEO Apex, and Vector premium SEO plan pricing and features — USD.",
  alternates: { canonical: "/packages/seo-packages/seo-premium-plan-usd-785" },
}

export default function Page() {
  return <SeoPremiumPlanPage />
}
