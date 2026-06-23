import type { Metadata } from "next"
import BlankPackagePage from "../../../views/blank-package-page"

export const metadata: Metadata = {
  title: "SEO Packages",
  alternates: { canonical: "/packages/seo-packages" },
}

export default function Page() {
  return <BlankPackagePage title="SEO Packages" />
}
