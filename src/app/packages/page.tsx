import type { Metadata } from "next"
import PackagesHubPage from "../../views/packages-hub-page"

export const metadata: Metadata = {
  title: "Pricing Packages",
  description:
    "Pick a service to see plans, pricing, and what's included. Transparent digital marketing packages for SEO, SMO, web, and PPC.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Pricing Packages | Web and Ads Solutions",
    description:
      "Pick a service to see plans, pricing, and what's included. Transparent digital marketing packages for SEO, SMO, web, and PPC.",
    url: "/packages",
  },
}

export default function Page() {
  return <PackagesHubPage />
}
