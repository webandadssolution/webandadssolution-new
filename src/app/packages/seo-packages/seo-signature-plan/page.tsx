import type { Metadata } from "next"
import BlankPackagePage from "../../../../views/blank-package-page"

export const metadata: Metadata = {
  title: "SEO Signature Plan",
  alternates: { canonical: "/packages/seo-packages/seo-signature-plan" },
}

export default function Page() {
  return <BlankPackagePage title="SEO Signature Plan" />
}
