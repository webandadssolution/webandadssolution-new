import type { Metadata } from "next"
import ServicesPage from "../../views/services-page"

export const metadata: Metadata = {
  title: "Our Digital Marketing Services | SEO, PPC, and Web Dev",
  description:
    "Explore SEO, PPC, social media, content marketing, web and app development, and virtual assistant services designed to grow your business.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Digital Marketing Services | SEO, PPC, and Web Dev",
    description:
      "Explore SEO, PPC, social media, content marketing, web and app development, and virtual assistant services designed to grow your business.",
    url: "/services",
  },
}

export default function Page() {
  return <ServicesPage />
}
