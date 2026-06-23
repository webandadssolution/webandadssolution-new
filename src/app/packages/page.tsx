import type { Metadata } from "next";
import PackagesLandingPage from "../../views/packages-landing-page";

export const metadata: Metadata = {
  title: "Packages",
  alternates: { canonical: "/packages" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PackagesLandingPage />;
}
