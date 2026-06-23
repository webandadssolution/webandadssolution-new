import type { Metadata } from "next"
import BlankPackagePage from "../../../../views/blank-package-page"

export const metadata: Metadata = {
  title: "SEO Plan without Velocity Plan",
  alternates: { canonical: "/packages/seo-packages/seo-without-velocity-plan" },
}

export default function Page() {
  return <BlankPackagePage title="SEO Plan without Velocity Plan" />
}
