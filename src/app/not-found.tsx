import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div style={{ padding: "160px 24px 120px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>404 — Page Not Found</h1>
      <p style={{ marginBottom: "2rem", color: "#555" }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link href="/" style={{ color: "#f06820", fontWeight: 600 }}>
        Back to Home
      </Link>
    </div>
  )
}
