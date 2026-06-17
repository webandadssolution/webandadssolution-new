import type { Metadata } from "next"
import ContactPage from "../../views/contact-page"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Let's build something amazing together. Get in touch with our digital marketing team for a free consultation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Web and Ads Solutions",
    description:
      "Let's build something amazing together. Get in touch with our digital marketing team for a free consultation.",
    url: "/contact",
  },
}

export default function Page() {
  return <ContactPage />
}
