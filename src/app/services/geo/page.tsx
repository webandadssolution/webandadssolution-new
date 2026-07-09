import type { Metadata } from "next"
import GEOPage from "../../../views/geo-page"

export const metadata: Metadata = {
  title: "Generative Engine Optimization (GEO) Services",
  description:
    "Get your business discovered by ChatGPT, Gemini, and Perplexity. Our GEO services improve your visibility across AI-powered search platforms.",
  alternates: { canonical: "/services/geo" },
  openGraph: {
    title: "Generative Engine Optimization (GEO) Services | Web and Ads Solutions",
    description:
      "Get your business discovered by ChatGPT, Gemini, and Perplexity. Our GEO services improve your visibility across AI-powered search platforms.",
    url: "/services/geo",
  },
}

export default function Page() {
  return <GEOPage />
}
