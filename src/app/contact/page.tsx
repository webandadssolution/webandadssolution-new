import type { Metadata } from "next"
import ContactPage from "../../views/contact-page"

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Marketing Consultation",
  description:
    "Want to reach out to Web and Ads Solutions? Call us or fill out our form to speak with a strategist and get a free, customized growth plan.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Get a Free Marketing Consultation | Web and Ads Solutions",
    description:
      "Want to reach out to Web and Ads Solutions? Call us or fill out our form to speak with a strategist and get a free, customized growth plan.",
    url: "/contact",
  },
}

export default function Page() {
  return <ContactPage />
}
