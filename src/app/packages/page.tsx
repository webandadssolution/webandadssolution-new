import type { Metadata } from "next";
import PackagesLandingPage from "../../views/packages-landing-page";

export const metadata: Metadata = {
  title: "Packages",
  alternates: { canonical: "/packages" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PackagesLandingPage />;
}
