import type { Metadata } from "next"
import StLouisPage from "../../views/st-louis-page"
import { stLouisFaqs } from "../../data/faq-content"
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd, JsonLd } from "../../lib/seo"

const SITE_URL = "https://webandadssolution.com"
const TITLE = "Digital Marketing Company St. Louis | Web & Ads Solution"
const DESCRIPTION =
  "St. Louis digital marketing agency for SEO, PPC, social media, web design, web development & virtual assistants. Book a free strategy call."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/st-louis" },
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
    url: `${SITE_URL}/st-louis`,
    siteName: "Web & Ads Solution",
    images: [{ url: "https://webandadssolution.com/images/logo.webp" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "St. Louis digital marketing agency for SEO, PPC, social media, web design, web development & virtual assistants.",
    images: ["https://webandadssolution.com/images/logo.webp"],
  },
}

const services = [
  { serviceType: "Search Engine Optimization", name: "SEO Company St. Louis" },
  { serviceType: "Pay-Per-Click Advertising", name: "PPC Company St. Louis" },
  { serviceType: "Social Media Optimization", name: "SMO Company St. Louis" },
  { serviceType: "Web Design", name: "Web Design Agency St. Louis" },
  { serviceType: "Web Development", name: "Web Development Company St. Louis" },
  { serviceType: "Virtual Assistant Services", name: "Virtual Assistance Agency St. Louis" },
  {
    serviceType: "AI Search Engine Optimization",
    name: "AI SEO St. Louis",
    description:
      "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) services helping St. Louis businesses appear in AI-driven search results.",
  },
]

export default function Page() {
  return (
    <>
      {services.map((s) => (
        <JsonLd
          key={s.name}
          data={serviceJsonLd(s.serviceType, s.name, "St. Louis", "City", s.description, "Missouri")}
        />
      ))}
      <JsonLd data={faqJsonLd(stLouisFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "St. Louis", url: `${SITE_URL}/st-louis/` },
        ])}
      />
      <StLouisPage />
    </>
  )
}
