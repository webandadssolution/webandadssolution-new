import type { Metadata } from "next"
import AboutPage from "../../views/about-page"

export const metadata: Metadata = {
  title: "About Us | 10+ Years of Digital Marketing Results",
  description:
    "Meet the agency behind 350+ brands' growth. A decade of SEO, PPC, content & web development results built on transparency, not jargon.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | 10+ Years of Digital Marketing Results | Web and Ads Solutions",
    description:
      "Meet the agency behind 350+ brands' growth. A decade of SEO, PPC, content & web development results built on transparency, not jargon.",
    url: "/about",
  },
}

export default function Page() {
  return <AboutPage />
}
