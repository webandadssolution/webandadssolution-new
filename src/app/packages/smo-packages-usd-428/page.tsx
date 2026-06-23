import type { Metadata } from "next"
import SmoPackagesPage from "../../../views/smo-packages-page"

export const metadata: Metadata = {
  title: "SMO Packages – USD",
  description: "Compare SMO Launch, Growth, and Scale plan pricing and features — USD.",
  alternates: { canonical: "/packages/smo-packages-usd-428" },
}

export default function Page() {
  return <SmoPackagesPage />
}
