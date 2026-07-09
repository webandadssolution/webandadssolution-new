import type { Metadata } from "next"
import AEOPage from "../../../views/aeo-page"

export const metadata: Metadata = {
  title: "Answer Engine Optimization (AEO) Services",
  description:
    "Prepare your business for AI-powered search. Our AEO services help your content get discovered by ChatGPT, Gemini, Google AI Overviews, and voice assistants.",
  alternates: { canonical: "/services/aeo" },
  openGraph: {
    title: "Answer Engine Optimization (AEO) Services | Web and Ads Solutions",
    description:
      "Prepare your business for AI-powered search. Our AEO services help your content get discovered by ChatGPT, Gemini, Google AI Overviews, and voice assistants.",
    url: "/services/aeo",
  },
}

export default function Page() {
  return <AEOPage />
}
