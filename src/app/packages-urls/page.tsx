import type { Metadata } from "next"
import PackagesHubPage from "../../views/packages-hub-page"

export const metadata: Metadata = {
  title: "Packages",
  alternates: { canonical: "/packages-urls" },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <PackagesHubPage />
}
