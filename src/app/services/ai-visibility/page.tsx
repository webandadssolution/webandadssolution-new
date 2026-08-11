import type { Metadata } from "next"
import AIVPage from "../../../views/aiv-page"

export const metadata: Metadata = {
  title: "AI Visibility Services",
  description:
    "Strengthen your business visibility across ChatGPT, Gemini, Perplexity, and AI-powered search platforms. Our AI Visibility services help you get discovered where customers are searching.",
  alternates: { canonical: "/services/ai-visibility" },
  openGraph: {
    title: "AI Visibility Services | Web and Ads Solutions",
    description:
      "Strengthen your business visibility across ChatGPT, Gemini, Perplexity, and AI-powered search platforms.",
    url: "/services/ai-visibility",
  },
}

export default function Page() {
  return <AIVPage />
}
