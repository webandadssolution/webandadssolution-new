"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "../styles/footer.css"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const RING_RADIUS = 19
  const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
    <footer className="footer-site">
      <div className="footer-container">

        {/* TOP SECTION */}
        <div className="footer-top-row">
          <div className="footer-branding-column">
            <div className="footer-logo-box">
              <img src="/images/logo.webp" alt="Logo" className="footer-main-logo" />
            </div>
            <div className="footer-about-text-top">
              <p>We are a social marketing company with over 10 years of experience in digital marketing, SEO, and digital media. Located at 117 South Lexington Street STE 100, Harrisonville, MO 64701.</p>
            </div>
          </div>

          <div className="footer-heading-box">
            <div className="footer-talk-title">
              <span className="footer-white-text">Let's Talk</span>
              <span className="footer-accent-text">Work Together</span>
            </div>
            <div className="footer-cta-orbit">
              <svg className="footer-orbit-ring" viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <path id="footerOrbitPath" d="M100,100 m-85,0 a85,85 0 1,1 170,0 a85,85 0 1,1 -170,0" />
                </defs>
                <text>
                  <textPath href="#footerOrbitPath">
                    LET&apos;S START A PROJECT • LET&apos;S START A PROJECT •&nbsp;
                  </textPath>
                </text>
              </svg>
              <Link href="/contact" className="footer-cta-circle" aria-label="Let's talk, start a project">
                <span className="footer-arrow">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="footer-main-grid">

          {/* LEFT: Contact & Subscription */}
          <div className="footer-column footer-left-col">
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <a href="mailto:info@webandadssolution.com" className="footer-email">info@webandadssolution.com</a>
              </div>
              <div className="footer-contact-item footer-contact-item-phones">
                <span className="footer-contact-icon">
                   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                   </svg>
                </span>
                <div className="footer-phone-list">
                  <div className="footer-phone-row">
                    <span className="footer-phone-flag" aria-hidden="true">🇺🇸</span>
                    <a href="tel:+19177087134" className="footer-phone">+1 917 708 7134</a>
                  </div>
                  <div className="footer-phone-row">
                    <span className="footer-phone-flag" aria-hidden="true">🇬🇧</span>
                    <a href="tel:+442046389375" className="footer-phone">+44 20 4638 9375</a>
                  </div>
                  <div className="footer-phone-row">
                    <span className="footer-phone-flag" aria-hidden="true">🇮🇳</span>
                    <a href="tel:+917048955080" className="footer-phone">+91 70489 55080</a>
                  </div>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <p className="footer-location">117 South Lexington Street STE 100, Harrisonville, MO 64701</p>
              </div>
              <div className="footer-social-row">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61578222435005"
    className="footer-social-link"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.2c0-.599.401-1 1-1h3v-4h-3c-3.513 0-5 1.591-5 4v3.2z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/webandadssolution/"
    className="footer-social-link"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/webandadsaolution"
    className="footer-social-link"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@WebAndAdsSolution"
    className="footer-social-link"
    aria-label="YouTube"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M23.5 6.2a2.96 2.96 0 0 0-2.08-2.1C19.57 3.5 12 3.5 12 3.5s-7.57 0-9.42.6A2.96 2.96 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 2.96 2.96 0 0 0 2.08 2.1c1.85.6 9.42.6 9.42.6s7.57 0 9.42-.6a2.96 2.96 0 0 0 2.08-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.75 15.5v-7L16 12l-6.25 3.5z" />
    </svg>
  </a>
  {/* X (Twitter) */}
<a
  href="https://x.com/webadssolution"
  className="footer-social-link"
  aria-label="X (Twitter)"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2H21l-6.56 7.5L22 22h-5.828l-4.563-5.97L6.39 22H3.633l7.017-8.02L2 2h5.977l4.124 5.447L18.244 2zm-0.967 18h1.62L7.097 3.895H5.36L17.277 20z"/>
  </svg>
</a>
</div>
            </div>

            <div className="footer-newsletter">
              <p className="footer-newsletter-label">Get the latest inspiration & insights</p>
              <div className="footer-input-wrapper">
                <input type="email" placeholder="Your Email address" className="footer-email-input" />
                <button className="footer-submit-btn">
                   <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className="footer-plane-icon"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* CENTER: Certificate Image */}
          <div className="footer-column footer-center-col">
            <a
              href="/images/missouri-777x1024.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cert-wrapper"
              aria-label="Open Missouri Certificate full image in a new tab"
            >
                <img
                  src="/images/missouri-777x1024.webp"
                  alt="Missouri Certificate"
                  className="footer-center-cert-img"
                />
            </a>
          </div>

          {/* RIGHT: Links */}
          <div className="footer-column footer-links-col">
            <div className="footer-link-group">
              <h4 className="footer-group-title">Solutions</h4>
              <ul className="footer-list">
                <li><Link href="/"><span className="full-text">Search Engine Optimization (SEO)</span><span className="short-text">SEO</span></Link></li>
                <li><Link href="/"><span className="full-text">Social Media Optimization (SMO)</span><span className="short-text">SMO</span></Link></li>
                <li><Link href="/"><span className="full-text">Content Marketing</span><span className="short-text">Content</span></Link></li>
                <li><Link href="/"><span className="full-text">Web Development</span><span className="short-text">Web Dev</span></Link></li>
                <li><Link href="/"><span className="full-text">Pay-Per-Click (PPC) Advertising</span><span className="short-text">PPC Ads</span></Link></li>
                <li><a href="#"><span className="full-text">Application Development</span><span className="short-text">App Dev</span></a></li>
                <li><Link href="/"><span className="full-text">Virtual Assistant Services</span><span className="short-text">VA Services</span></Link></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h4 className="footer-group-title">Quick Links</h4>
              <ul className="footer-list">
                <li><Link href="/about"><span className="full-text">About Us</span><span className="short-text">About</span></Link></li>
                <li><Link href="/"><span className="full-text">Blog & Insights</span><span className="short-text">Blog</span></Link></li>
                <li><Link href="/contact"><span className="full-text">Contact Us</span><span className="short-text">Contact</span></Link></li>               
                <li><a href="#"><span className="full-text">SEO For IT Companies</span><span className="short-text">IT SEO</span></a></li>
                <li><a href="#"><span className="full-text">SEO For Manufacturing</span><span className="short-text">Mfg SEO</span></a></li>
                <li><a href="#"><span className="full-text">Healthcare SEO Services</span><span className="short-text">Healthcare SEO</span></a></li>
                <li><a href="#"><span className="full-text">SEO For Lawyers</span><span className="short-text">Lawyer SEO</span></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">© 2026 Web and Ads Solution. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
    </footer>

      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <svg className="scroll-progress-ring" viewBox="0 0 44 44" aria-hidden="true">
            <circle className="scroll-progress-track" cx="22" cy="22" r={RING_RADIUS} />
            <circle
              className="scroll-progress-fill"
              cx="22"
              cy="22"
              r={RING_RADIUS}
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={RING_CIRCUMFERENCE - (scrollProgress / 100) * RING_CIRCUMFERENCE}
            />
          </svg>
          <span className="scroll-to-top-icon">↑</span>
        </button>
      )}
    </>
  );
};

export default Footer;