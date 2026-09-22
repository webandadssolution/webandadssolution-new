import type { Metadata } from "next"
import MissouriPage from "../../views/missouri-page"
import { missouriFaqs } from "../../data/faq-content"
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd, JsonLd } from "../../lib/seo"

const SITE_URL = "https://webandadssolution.com"
const TITLE = "Digital Marketing Agency in Missouri | Web & Ads Solution"
const DESCRIPTION =
  "Missouri digital marketing agency offering SEO, PPC, web design & AI SEO. Based in Harrisonville, MO. Get a free strategy call today."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/missouri" },
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
    url: `${SITE_URL}/missouri`,
    siteName: "Web & Ads Solution",
    images: [{ url: "https://webandadssolution.com/images/logo.webp" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Missouri digital marketing agency offering SEO, PPC, web design & AI SEO.",
    images: ["https://webandadssolution.com/images/logo.webp"],
  },
}

const services = [
  { serviceType: "Search Engine Optimization", name: "SEO Agency in Missouri" },
  { serviceType: "Pay-Per-Click Advertising", name: "PPC Agency in Missouri" },
  { serviceType: "Web Design", name: "Web Design Missouri" },
  { serviceType: "Social Media Marketing", name: "Social Media Marketing Missouri" },
  {
    serviceType: "AI Search Engine Optimization",
    name: "AI SEO Services in Missouri",
    description:
      "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) services helping Missouri businesses appear in AI-driven search results.",
  },
]

export default function Page() {
  return (
    <>
      {services.map((s) => (
        <JsonLd key={s.name} data={serviceJsonLd(s.serviceType, s.name, "Missouri", "State", s.description)} />
      ))}
      <JsonLd data={faqJsonLd(missouriFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Missouri", url: `${SITE_URL}/missouri` },
        ])}
      />
      <MissouriPage />
    </>
  )
}
