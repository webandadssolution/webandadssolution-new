"use client"

import Link from "next/link"

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px" }}>
      <div style={{ maxWidth: 640, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Something went wrong</h1>
        <p style={{ color: "#4a5568", marginBottom: "1.5rem", lineHeight: 1.7 }}>
          The page encountered an unexpected issue. Refresh to try again, or return to the home page.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "0.85rem 1.25rem",
              border: "none",
              borderRadius: "0.5rem",
              background: "#2563eb",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Refresh
          </button>
          <Link
            href="/"
            style={{
              padding: "0.85rem 1.25rem",
              borderRadius: "0.5rem",
              background: "#edf2f7",
              color: "#1f2937",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
