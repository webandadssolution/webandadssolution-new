import type { Metadata } from "next"
import BlankPackagePage from "../../../views/blank-package-page"

export const metadata: Metadata = {
  title: "SMO Packages",
  alternates: { canonical: "/packages/smo-packages" },
}

export default function Page() {
  return <BlankPackagePage title="SMO Packages" />
}
