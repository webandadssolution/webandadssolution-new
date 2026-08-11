import type { Metadata } from "next"
import ThankYouPage from "../../views/thank-you-page"

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
}

export default function Page() {
  return <ThankYouPage />
}
