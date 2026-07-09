"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Script from "next/script"
import "../styles/book-a-call.css"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

const CALENDLY_URL = "https://calendly.com/max-webandadssolution/30min"

export default function BookACallPage() {
  const widgetFrameRef = useRef<HTMLDivElement>(null)
  const calendlyContainerRef = useRef<HTMLDivElement>(null)
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const node = widgetFrameRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadWidget(true)
          observer.disconnect()
        }
      },
      { rootMargin: "400px" }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const initCalendlyWidget = useCallback(() => {
    const container = calendlyContainerRef.current
    if (!container || !window.Calendly) return
    container.innerHTML = ""
    window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: container })
  }, [])

  useEffect(() => {
    if (shouldLoadWidget && window.Calendly) initCalendlyWidget()
  }, [shouldLoadWidget, initCalendlyWidget])

  return (
    <div className="bac-page">
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="preconnect" href="https://assets.calendly.com" />

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
        <div className="bac-widget-frame" ref={widgetFrameRef}>
          <div className="bac-widget-loading">
            <span className="bac-widget-spinner" />
            <p>Loading booking calendar…</p>
          </div>
          {shouldLoadWidget && (
            <div
              ref={calendlyContainerRef}
              style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
            />
          )}
        </div>
      </section>

      {shouldLoadWidget && (
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={initCalendlyWidget}
        />
      )}
    </div>
  )
}
