import type { Metadata } from "next"
import WLFPage from "../../../views/wlf-page"

export const metadata: Metadata = {
  title: "Website Look & Feel Updation Services",
  description:
    "Refresh your website's design, layout, and user experience without rebuilding from scratch. Modern, professional, and aligned with your brand.",
  alternates: { canonical: "/services/website-look-feel" },
  openGraph: {
    title: "Website Look & Feel Updation | Web and Ads Solutions",
    description:
      "Refresh your website's design, layout, and user experience without rebuilding from scratch. Modern, professional, and aligned with your brand.",
    url: "/services/website-look-feel",
  },
}

export default function Page() {
  return <WLFPage />
}
