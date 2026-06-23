import type { Metadata } from "next"
import BlankPackagePage from "../../../views/blank-package-page"

export const metadata: Metadata = {
  title: "PPC Packages",
  alternates: { canonical: "/packages/ppc-packages" },
}

export default function Page() {
  return <BlankPackagePage title="PPC Packages" />
}
