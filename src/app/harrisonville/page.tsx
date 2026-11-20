import type { Metadata } from "next"
import HarrisonvillePage from "../../views/harrisonville-page"
import { harrisonvilleFaqs } from "../../data/faq-content"
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd, JsonLd } from "../../lib/seo"

const SITE_URL = "https://webandadssolution.com"
const TITLE = "Digital Marketing Agency in Harrisonville | Web & Ads Solution"
const DESCRIPTION =
  "Harrisonville digital marketing agency offering SEO, PPC, web design, social media & AI SEO for Cass County businesses. Get a free quote today."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/harrisonville" },
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
    url: `${SITE_URL}/harrisonville`,
    siteName: "Web & Ads Solution",
    images: [{ url: "https://webandadssolution.com/images/digital-marketing-harrisonville.webp" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Harrisonville digital marketing agency offering SEO, PPC, web design, social media & AI SEO.",
    images: ["https://webandadssolution.com/images/digital-marketing-harrisonville.webp"],
  },
}

const services = [
  { serviceType: "Search Engine Optimization", name: "SEO Agency Near Me in Harrisonville" },
  { serviceType: "Pay-Per-Click Advertising", name: "PPC Agency in Harrisonville" },
  { serviceType: "Web Design", name: "Web Design & Internet Marketing Services Near Me" },
  { serviceType: "Social Media Marketing", name: "Social Media Marketing in Harrisonville" },
  {
    serviceType: "AI Search Engine Optimization",
    name: "AI SEO Services in Harrisonville",
    description:
      "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) services helping Harrisonville businesses appear in AI-driven search results.",
  },
]

export default function Page() {
  return (
    <>
      {services.map((s) => (
        <JsonLd
          key={s.name}
          data={serviceJsonLd(s.serviceType, s.name, "Harrisonville", "City", s.description, "Missouri")}
        />
      ))}
      <JsonLd data={faqJsonLd(harrisonvilleFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Harrisonville", url: `${SITE_URL}/harrisonville/` },
        ])}
      />
      <HarrisonvillePage />
    </>
  )
}
