import type { Metadata } from "next"
import WOPage from "../../../views/wo-page"

export const metadata: Metadata = {
  title: "Website Optimization Services",
  description:
    "Improve your website's speed, mobile experience, and conversions. Our website optimization services help turn more visitors into leads and customers.",
  alternates: { canonical: "/services/website-optimization" },
  openGraph: {
    title: "Website Optimization Services | Web and Ads Solutions",
    description:
      "Improve your website's speed, mobile experience, and conversions. Our website optimization services help turn more visitors into leads and customers.",
    url: "/services/website-optimization",
  },
}

export default function Page() {
  return <WOPage />
}
