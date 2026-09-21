import type { Metadata } from "next"
import UnitedStatesPage from "../../views/united-states-page"
import { unitedStatesFaqs } from "../../data/faq-content"
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd, JsonLd } from "../../lib/seo"

const SITE_URL = "https://webandadssolution.com"
const TITLE = "Digital Marketing Agency in USA | Web & Ads Solution"
const DESCRIPTION =
  "SEO, PPC & social media marketing for businesses across the USA. Get a free strategy call with Web & Ads Solution today."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/united-states" },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/united-states`,
    siteName: "Web & Ads Solution",
    images: [{ url: "https://webandadssolution.com/images/logo.webp" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "SEO, PPC & social media marketing for businesses across the USA.",
    images: ["https://webandadssolution.com/images/logo.webp"],
  },
}

const services = [
  { serviceType: "PPC Advertising", name: "PPC Agency in USA" },
  { serviceType: "Social Media Marketing", name: "Social Media Marketing Agency USA" },
  { serviceType: "Local SEO", name: "Local SEO Agency USA" },
  { serviceType: "B2B Digital Marketing", name: "B2B Digital Marketing Agency USA" },
  { serviceType: "Website Development", name: "Website Development for US Businesses" },
]

export default function Page() {
  return (
    <>
      {services.map((s) => (
        <JsonLd key={s.name} data={serviceJsonLd(s.serviceType, s.name)} />
      ))}
      <JsonLd data={faqJsonLd(unitedStatesFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "United States", url: `${SITE_URL}/united-states` },
        ])}
      />
      <UnitedStatesPage />
    </>
  )
}
