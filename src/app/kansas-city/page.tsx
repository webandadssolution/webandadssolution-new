import type { Metadata } from "next"
import KansasCityPage from "../../views/kansas-city-page"
import { kansasCityFaqs } from "../../data/faq-content"
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd, JsonLd } from "../../lib/seo"

const SITE_URL = "https://webandadssolution.com"
const TITLE = "SEO & Digital Marketing Agency Kansas City | Web & Ads Solution"
const DESCRIPTION =
  "Kansas City SEO company & full service digital marketing agency offering PPC, web design, social media & AI SEO. Get a free strategy call."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/kansas-city" },
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
    url: `${SITE_URL}/kansas-city`,
    siteName: "Web & Ads Solution",
    images: [{ url: "https://webandadssolution.com/images/logo.webp" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Kansas City SEO company & full service digital marketing agency offering PPC, web design, social media & AI SEO.",
    images: ["https://webandadssolution.com/images/logo.webp"],
  },
}

const services = [
  { serviceType: "Search Engine Optimization", name: "Search Engine Optimization Kansas City" },
  { serviceType: "Pay-Per-Click Advertising", name: "PPC Agency Kansas City" },
  { serviceType: "Web Design", name: "SEO, Web Design & Marketing Services Kansas City" },
  { serviceType: "Social Media Marketing", name: "Social Media Marketing Kansas City" },
  {
    serviceType: "AI Search Engine Optimization",
    name: "AI SEO Services in Kansas City",
    description:
      "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) services helping Kansas City businesses appear in AI-driven search results.",
  },
]

export default function Page() {
  return (
    <>
      {services.map((s) => (
        <JsonLd
          key={s.name}
          data={serviceJsonLd(s.serviceType, s.name, "Kansas City", "City", s.description, "Missouri")}
        />
      ))}
      <JsonLd data={faqJsonLd(kansasCityFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Kansas City", url: `${SITE_URL}/kansas-city` },
        ])}
      />
      <KansasCityPage />
    </>
  )
}
