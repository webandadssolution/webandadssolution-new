import type { Metadata } from "next"
import SeoSignaturePlanPage from "../../../../views/seo-signature-plan-page"

export const metadata: Metadata = {
  title: "SEO Signature Plan – USD",
  description: "Compare Vector, Spectrum, and Nexus SEO & AI Visibility plan pricing and features — USD.",
  alternates: { canonical: "/packages/seo-packages/seo-signature-plan-usd-314" },
}

export default function Page() {
  return <SeoSignaturePlanPage />
}
