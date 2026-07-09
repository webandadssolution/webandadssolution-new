import type { Metadata } from "next"
import GDPage from "../../../views/gd-page"

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description:
    "Professional graphic design for social media creatives, marketing materials, digital ads, brand assets, and website graphics. Designs that build trust.",
  alternates: { canonical: "/services/graphic-design" },
  openGraph: {
    title: "Graphic Design Services | Web and Ads Solutions",
    description:
      "Professional graphic design for social media creatives, marketing materials, digital ads, brand assets, and website graphics. Designs that build trust.",
    url: "/services/graphic-design",
  },
}

export default function Page() {
  return <GDPage />
}
