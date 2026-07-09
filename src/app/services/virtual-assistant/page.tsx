import type { Metadata } from "next"
import VAPage from "../../../views/va-page"

export const metadata: Metadata = {
  title: "Virtual Assistant Services | Hire a VA in 48 Hours",
  description:
    "Hire a trained, dedicated virtual assistant in 48 hours. Save up to 70% vs a full-time hire, email, CRM, research, social media & more handled for you.",
  alternates: { canonical: "/services/virtual-assistant" },
  openGraph: {
    title: "Virtual Assistant Services | Hire a VA in 48 Hours",
    description:
      "Hire a trained, dedicated virtual assistant in 48 hours. Save up to 70% vs a full-time hire, email, CRM, research, social media & more handled for you.",
    url: "/services/virtual-assistant",
  },
}

export default function Page() {
  return <VAPage />
}
