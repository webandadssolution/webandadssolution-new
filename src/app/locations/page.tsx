import type { Metadata } from "next"
import LocationsPage from "../../views/locations-page"
import { locations } from "../../data/locations"
import { breadcrumbJsonLd, JsonLd } from "../../lib/seo"

const SITE_URL = "https://webandadssolution.com"
const TITLE = "Locations We Serve | Web & Ads Solution"
const DESCRIPTION =
  "Explore the locations Web & Ads Solution serves with SEO, PPC, web design, social media & AI SEO — across the USA, Missouri, and Kansas City."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/locations" },
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
    url: `${SITE_URL}/locations`,
    siteName: "Web & Ads Solution",
    images: [{ url: "https://webandadssolution.com/images/logo.webp" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://webandadssolution.com/images/logo.webp"],
  },
}

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Locations We Serve",
  itemListElement: locations.map((loc, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: loc.name,
    url: `${SITE_URL}${loc.href}`,
  })),
}

export default function Page() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Locations", url: `${SITE_URL}/locations` },
        ])}
      />
      <LocationsPage />
    </>
  )
}
