import type { Metadata } from "next"
import AboutPage from "../../views/about-page"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We're the digital marketing agency behind your growth — a decade of measurable impact across SEO, PPC, content, and web development.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Web and Ads Solutions",
    description:
      "We're the digital marketing agency behind your growth — a decade of measurable impact across SEO, PPC, content, and web development.",
    url: "/about",
  },
}

export default function Page() {
  return <AboutPage />
}
