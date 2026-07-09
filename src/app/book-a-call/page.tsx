import type { Metadata } from "next"
import BookACallPage from "../../views/book-a-call-page"

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Schedule a free 30-minute strategy call. No pressure, no obligation just a custom growth plan for your SEO, PPC, and marketing goals.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: "Book a Free Strategy Call | Web and Ads Solutions",
    description:
      "Schedule a free 30-minute strategy call. No pressure, no obligation just a custom growth plan for your SEO, PPC, and marketing goals.",
    url: "/book-a-call",
  },
}

export default function Page() {
  return <BookACallPage />
}
