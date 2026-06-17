"use client"

import { useEffect, useState, useRef } from "react"
import "../styles/stats.css"

const Stats = () => {
  const [counters, setCounters] = useState({
    branches: 0,
    customers: 0,
    advisors: 0,
    projects: 0,
  })
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLElement>(null)
  const [scrollRotation, setScrollRotation] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000
    const targets = { branches: 200, customers: 748, advisors: 50, projects: 758 }
    const steps = 60
    const interval = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        branches: Math.floor(targets.branches * progress),
        customers: Math.floor(targets.customers * progress),
        advisors: Math.floor(targets.advisors * progress),
        projects: Math.floor(targets.projects * progress),
      })

      if (currentStep >= steps) {
        setCounters(targets)
        clearInterval(timer)
      }
    }, interval)
  }

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-header scroll-reveal">
        <span className="stats-badge">● Performance Highlights </span>
        <h2 className="section-title">Our Impact in Numbers</h2>
        <p className="section-subtitle">Proven results that speak for themselves</p>
      </div>

      <div className="stats-container scroll-reveal delay-2">
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <div className="stat-icon">
              <svg viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="32" cy="32" r="8" fill="currentColor" />
                <path
                  d="M32 4 L32 12 M32 52 L32 60 M4 32 L12 32 M52 32 L60 32"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>
          <h3 className="stat-number">{counters.branches}+</h3>
          <p className="stat-label">Branches In Country</p>
          <div className="stat-progress">
            <div className="progress-bar" style={{ width: isVisible ? "100%" : "0%" }}></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <div className="stat-icon">
              <svg viewBox="0 0 64 64" fill="none">
                <path
                  d="M20 35 L28 43 L44 27"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" />
                <path d="M32 6 L38 18 M26 18 L32 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <h3 className="stat-number">{counters.customers}</h3>
          <p className="stat-label">Happy Customers</p>
          <div className="stat-progress">
            <div className="progress-bar" style={{ width: isVisible ? "100%" : "0%" }}></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <div className="stat-icon">
              <svg viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="22" r="12" stroke="currentColor" strokeWidth="2.5" />
                <path
                  d="M14 54 Q32 42 50 54"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path d="M22 22 L28 28 M36 28 L42 22" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <h3 className="stat-number">{counters.advisors}+</h3>
          <p className="stat-label">Expert Advisors</p>
          <div className="stat-progress">
            <div className="progress-bar" style={{ width: isVisible ? "100%" : "0%" }}></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <div className="stat-icon">
              <svg viewBox="0 0 64 64" fill="none">
                <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" />
                <path d="M22 32 L30 40 L42 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="48" cy="16" r="8" fill="#fbbf24" />
              </svg>
            </div>
          </div>
          <h3 className="stat-number">{counters.projects}</h3>
          <p className="stat-label">Successful Projects</p>
          <div className="stat-progress">
            <div className="progress-bar" style={{ width: isVisible ? "100%" : "0%" }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
