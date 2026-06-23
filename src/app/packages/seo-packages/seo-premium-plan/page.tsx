import type { Metadata } from "next"
import BlankPackagePage from "../../../../views/blank-package-page"

export const metadata: Metadata = {
  title: "SEO Premium Plan",
  alternates: { canonical: "/packages/seo-packages/seo-premium-plan" },
}

export default function Page() {
  return <BlankPackagePage title="SEO Premium Plan" />
}
