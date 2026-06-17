"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "../styles/footer.css"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer-site">
      <div className="footer-container">

        {/* TOP SECTION */}
        <div className="footer-top-row">
          <div className="footer-branding-column">
            <div className="footer-logo-box">
              <img src="https://webandadssolution.com/wp-content/uploads/2025/04/new-logo.png" alt="Logo" className="footer-main-logo" />
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
            <Link href="/contact" className="footer-cta-circle">
              <span className="footer-arrow">↗</span>
            </Link>
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
                <p className="footer-email">info@webandadssolution.com</p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                   </svg>
                </span>
                <p className="footer-phone">(+1) 332 263 5658</p>
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
                <a href="#" className="footer-social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.2c0-.599.401-1 1-1h3v-4h-3c-3.513 0-5 1.591-5 4v3.2z"/></svg>
                </a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
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
            <div className="footer-cert-wrapper">
                <img
                  src="https://webandadssolution.com/wp-content/uploads/2025/01/missouri-777x1024.jpg"
                  alt="Missouri Certificate"
                  className="footer-center-cert-img"
                />
            </div>
          </div>

          {/* RIGHT: Links */}
          <div className="footer-column footer-links-col">
            <div className="footer-link-group">
              <h4 className="footer-group-title">Solutions</h4>
              <ul className="footer-list">
                <li><Link href="/services/seo"><span className="full-text">Search Engine Optimization (SEO)</span><span className="short-text">SEO</span></Link></li>
                <li><Link href="/services/smo"><span className="full-text">Social Media Optimization (SMO)</span><span className="short-text">SMO</span></Link></li>
                <li><Link href="/services/content-marketing"><span className="full-text">Content Marketing</span><span className="short-text">Content</span></Link></li>
                <li><Link href="/services/web-development"><span className="full-text">Web Development</span><span className="short-text">Web Dev</span></Link></li>
                <li><Link href="/services/ppc"><span className="full-text">Pay-Per-Click (PPC) Advertising</span><span className="short-text">PPC Ads</span></Link></li>
                <li><a href="#"><span className="full-text">Application Development</span><span className="short-text">App Dev</span></a></li>
                <li><Link href="/services/virtual-assistant"><span className="full-text">Virtual Assistant Services</span><span className="short-text">VA Services</span></Link></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h4 className="footer-group-title">Quick Links</h4>
              <ul className="footer-list">
                <li><Link href="/about"><span className="full-text">About Us</span><span className="short-text">About</span></Link></li>
                <li><Link href="/blog"><span className="full-text">Blog & Insights</span><span className="short-text">Blog</span></Link></li>
                <li><Link href="/contact"><span className="full-text">Contact Us</span><span className="short-text">Contact</span></Link></li>
                <li><a href="#"><span className="full-text">Casino SEO</span><span className="short-text">Casino SEO</span></a></li>
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

      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;