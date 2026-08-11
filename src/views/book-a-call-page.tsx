"use client"

import { useEffect } from "react"
import Script from "next/script"
import "../styles/book-a-call.css"

const CALENDLY_URL = "https://calendly.com/max-webandadssolution/30min"

export default function BookACallPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="bac-page">
      <section className="bac-hero">
        <div className="bac-hero-inner">
          <div className="bac-badge"><span className="bac-badge-dot" />Book A Call</div>
          <h1 className="bac-title">
            Let's Talk About<br />
            <span className="bac-accent">Growing Your Business.</span>
          </h1>
          <p className="bac-sub">
            Pick a time that works for you — grab a free 30-minute strategy call with our team, no pressure, no obligation.
          </p>
        </div>
      </section>

      <section className="bac-widget-section">
        <div className="bac-widget-frame">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
