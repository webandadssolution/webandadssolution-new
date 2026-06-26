import type { Metadata } from "next"
import BookACallPage from "../../views/book-a-call-page"

export const metadata: Metadata = {
  title: "Book A Call",
  description:
    "Schedule a free 30-minute strategy call with our team. Pick a time that works for you and let's talk about growing your business.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: "Book A Call | Web and Ads Solutions",
    description:
      "Schedule a free 30-minute strategy call with our team. Pick a time that works for you and let's talk about growing your business.",
    url: "/book-a-call",
  },
}

export default function Page() {
  return <BookACallPage />
}
