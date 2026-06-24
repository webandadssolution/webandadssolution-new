"use client"
import { useRef, useLayoutEffect } from "react"
import type { MouseEvent as ReactMouseEvent } from "react"
import gsap from "gsap"
import "../styles/hero.css"

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden states for entry animations
      gsap.set(".hero-badge",          { opacity: 0, y: -16 })
      gsap.set(".hero-word",           { yPercent: 115, skewX: -3 })
      gsap.set(".hero-period",         { opacity: 0, scale: 0.5 })
      gsap.set(".hero-subtitle",       { opacity: 0, y: 24 })
      gsap.set(".cta-buttons",         { opacity: 0, y: 18 })
      gsap.set(".hero-dashboard-mockup", { opacity: 0, y: 40, scale: 0.96 })
      gsap.set(".chart-line-path",     { strokeDasharray: 500, strokeDashoffset: 500 })
      gsap.set(".chart-fill-path",     { opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.15 })

      tl.to(".hero-badge",          { opacity: 1, y: 0, duration: 0.55 })
      tl.to(".hero-word",           { yPercent: 0, skewX: 0, stagger: 0.045, duration: 0.75 }, "-=0.25")
      tl.to(".hero-period",         { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }, "-=0.4")
      tl.to(".hero-subtitle",       { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      tl.to(".cta-buttons",         { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
      
      // Animate dashboard entry
      tl.to(".hero-dashboard-mockup", { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.4")
      // Animate SVG path drawing
      tl.to(".chart-line-path",     { strokeDashoffset: 0, duration: 1.4, ease: "power2.out" }, "-=0.6")
      // Fade in the SVG chart fill
      tl.to(".chart-fill-path",     { opacity: 1, duration: 0.6 }, "-=0.8")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Interactive 3D tilt effect on mouse move inside Hero
  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024 || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Smooth micro tilt
    gsap.to(".hero-dashboard-mockup", {
      rotateY: x * 0.015,
      rotateX: -y * 0.015,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.6
    })
  }

  const handleMouseLeave = () => {
    gsap.to(".hero-dashboard-mockup", {
      rotateY: 0,
      rotateX: 0,
      ease: "power2.out",
      duration: 0.6
    })
  }

  return (
    <section className="hero" ref={heroRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Editorial CSS grid background lines */}
      <div className="hero-grid-lines" />
      <div className="hero-grid-glow" />

      <div className="hero-content">
        {/* Left Column: Copy & Actions */}
        <div className="hero-text-wrapper">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">Web & Ads Solution</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line">
              <span className="word-mask"><span className="hero-word font-light">Creative</span></span>
              <span className="word-space">&nbsp;</span>
              <span className="word-mask"><span className="hero-word font-light">Digital</span></span>
              <span className="word-space">&nbsp;</span>
              <span className="word-mask"><span className="hero-word font-bold text-accent">Marketing,</span></span>
            </span>
            <span className="hero-line hero-title-line2">
              <span className="word-mask"><span className="hero-word font-bold">Designed</span></span>
              <span className="word-space">&nbsp;</span>
              <span className="word-mask"><span className="hero-word font-bold">Around</span></span>
              <span className="word-space">&nbsp;</span>
              <span className="word-mask"><span className="hero-word font-bold">Your</span></span>
              <span className="word-space">&nbsp;</span>
              <span className="word-mask"><span className="hero-word font-bold">Business</span></span>
              <span className="word-space">&nbsp;</span>
              <span className="word-mask"><span className="hero-word font-bold text-growth">Goals</span></span>
              <span className="hero-period">.</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Web development, social media, Ai Visibility and performance advertising designed to help growing businesses.
          </p>

          <div className="cta-buttons">
            <button
              className="cta-button-primary"
              onClick={() => document.querySelector('.footer-site')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Strategy Call &nbsp;→
            </button>
            <button
              className="cta-button-secondary"
              onClick={() => document.querySelector('.services-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Campaigns Dashboard Mockup */}
        <div className="hero-dashboard-container">
          <div className="hero-dashboard-mockup">
            
            {/* Card A: Live Traffic Acquisition Chart */}
            <div className="dashboard-card card-analytics">
              <div className="card-header-section">
                <div className="card-header-left">
                  <span className="card-indicator pulsing-orange" />
                  <span className="card-header-title">Live Traffic Acquisition</span>
                </div>
                <span className="card-meta">Realtime Feed</span>
              </div>
              <div className="card-body-section">
                <div className="analytics-metrics">
                  <div className="metric">
                    <span className="metric-num">+342%</span>
                    <span className="metric-sub">Daily Traffic</span>
                  </div>
                  <div className="metric">
                    <span className="metric-num">7.8%</span>
                    <span className="metric-sub">CTR Avg</span>
                  </div>
                </div>
                
                {/* SVG Line Graph */}
                <div className="svg-chart-container">
                  <svg viewBox="0 0 320 100" className="chart-svg">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f06820" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#f06820" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Gradient fill */}
                    <path 
                      d="M0 90 Q30 50 60 75 T120 35 T180 60 T240 25 T320 12 L320 100 L0 100 Z" 
                      fill="url(#chartGrad)" 
                      className="chart-fill-path"
                    />
                    {/* Bezier data line */}
                    <path 
                      d="M0 90 Q30 50 60 75 T120 35 T180 60 T240 25 T320 12" 
                      fill="none" 
                      stroke="#f06820" 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                      className="chart-line-path"
                    />
                    {/* End point pulse */}
                    <circle cx="320" cy="12" r="5" fill="#f06820" className="chart-point" />
                    <circle cx="320" cy="12" r="10" fill="none" stroke="#f06820" strokeWidth="2" className="chart-point-pulse" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card B: Live Ad Campaigns Status */}
            <div className="dashboard-card card-campaigns">
              <div className="card-header-section">
                <span className="card-header-title">Campaign Manager</span>
                <span className="card-status-active">Active</span>
              </div>
              <div className="campaign-items">
                <div className="campaign-row">
                  <div className="campaign-info">
                    <div className="campaign-icon google">G</div>
                    <div>
                      <span className="camp-name">Google Search Ads</span>
                      <span className="camp-sub">ROAS Target 4.5x</span>
                    </div>
                  </div>
                  <div className="campaign-stats">
                    <span className="camp-stat-val">4.8x</span>
                    <span className="camp-stat-lbl">ROAS</span>
                  </div>
                </div>
                <div className="campaign-row">
                  <div className="campaign-info">
                    <div className="campaign-icon meta">M</div>
                    <div>
                      <span className="camp-name">Facebook Retargeting</span>
                      <span className="camp-sub">Direct Funnel</span>
                    </div>
                  </div>
                  <div className="campaign-stats">
                    <span className="camp-stat-val">+284%</span>
                    <span className="camp-stat-lbl">Conv.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card C: AI Budget Optimizer Status */}
            <div className="dashboard-card card-ai-optimizer">
              <div className="ai-optimizer-header">
                <div className="ai-icon-wrapper">
                  <span className="ai-bolt-icon">⚡</span>
                </div>
                <div className="ai-text">
                  <span className="ai-title">AI Spend Optimizer</span>
                  <span className="ai-desc">Max ROI Allocation</span>
                </div>
              </div>
              <div className="ai-status-row">
                <span className="ai-status-text">Efficiency: 98%</span>
                <span className="ai-pulse-dot" />
              </div>
              <div className="ai-progress-bar">
                <div className="ai-progress-fill" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
