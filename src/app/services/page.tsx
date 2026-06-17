import type { Metadata } from "next"
import ServicesPage from "../../views/services-page"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our full range of digital marketing services — SEO, PPC, SMO, content marketing, web development, and virtual assistants — built to grow your business.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Web and Ads Solutions",
    description:
      "Explore our full range of digital marketing services — SEO, PPC, SMO, content marketing, web development, and virtual assistants — built to grow your business.",
    url: "/services",
  },
}

export default function Page() {
  return <ServicesPage />
}
