import type { Metadata } from "next"
import PpcPackagesPage from "../../../views/ppc-packages-page"

export const metadata: Metadata = {
  title: "PPC Packages – USD",
  description: "Compare PPC Launch, Growth, Velocity, and Dominator plan pricing and features — USD.",
  alternates: { canonical: "/packages/ppc-packages-usd-615" },
}

export default function Page() {
  return <PpcPackagesPage />
}
