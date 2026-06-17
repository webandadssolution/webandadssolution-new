import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Space_Grotesk } from "next/font/google"
import Header from "../components/header"
import Footer from "../components/footer"
import GsapEffects from "../components/gsap_effects"
import SiteChrome from "../components/site-chrome"
import ThemeScript from "../components/theme-script"
import "../styles/index.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const SITE_URL = "https://webandadssolution.com"
const SITE_NAME = "Web and Ads Solutions"
const SITE_DESCRIPTION =
  "Web and Ads Solutions — Expert digital marketing, SEO, PPC, social media, web development, and app development services to grow your business online."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Digital Marketing Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Digital Marketing Agency`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [{ url: "/logo512.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Digital Marketing Agency`,
    description: SITE_DESCRIPTION,
    images: ["/logo512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: "https://webandadssolution.com/wp-content/uploads/2025/04/new-logo.png",
  description: SITE_DESCRIPTION,
  email: "info@webandadssolution.com",
  telephone: "+1-332-263-5658",
  address: {
    "@type": "PostalAddress",
    streetAddress: "117 South Lexington Street STE 100",
    addressLocality: "Harrisonville",
    addressRegion: "MO",
    postalCode: "64701",
    addressCountry: "US",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteChrome />
        <GsapEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
