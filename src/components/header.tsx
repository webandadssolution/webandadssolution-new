"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./theme-toggle"
import "../styles/header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [activeNav, setActiveNav] = useState("Home")
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const locationScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pathname === "/") {
      setActiveNav("Home")
    } else if (pathname === "/services") {
      setActiveNav("Services")
    } else if (pathname === "/about") {
      setActiveNav("AboutUs")
    } else if (pathname === "/blog") {
      setActiveNav("Blogs")
    } else if (pathname === "/contact") {
      setActiveNav("Contact")
    } else if (pathname.startsWith("/package")) {
      setActiveNav("Packages")
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "AboutUs", "Blogs", "Services", "Locations", "Industry", "Packages"]

  const dropdownData: Record<string, string[]> = {
    Services: [
      "Application Development",
      "Content Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Optimization (SMO)",
      "Search Engine Optimization (SEO)",
      "Website Development",
      "Virtual Assistant Services",
    ],
    Locations: [
      "Argentina", "Atlanta", "Austin, Texas", "Barcelona", "Berlin", "Boston", "Brazil", "Charlotte", "Chicago", "Colombia", "Columbus, Ohio", "Costa Rica", "Dallas", "Denver", "Detroit", "Dubai", "Fort Worth, Texas", "Geneva", "Honduras", "Houston, TX", "Indianapolis", "Indonesia", "Jacksonville", "Las Vegas", "Los Angeles", "Madrid", "Melbourne", "Mexico", "Miami", "Munich", "Nashville", "New York", "Oklahoma", "Philadelphia", "Philippines", "Phoenix", "San Antonio", "San Diego", "San Francisco", "San Jose", "Seattle", "Shanghai", "Singapore", "Toronto", "Uruguay", "Washington", "Zurich",
    ],
    Industry: [
      "Casino SEO", "SEO for Lawyers", "Healthcare SEO services", "SEO for Astrologers", "SEO for IT Companies", "SEO for Manufacturing", "SEO Services for Hotels", "Travel SEO services",
    ],
    Packages: ["Web Packages", "SMO Packages", "SEO Packages", "PPC Packages"],
  }

  const handleNavClick = (item: string) => {
    setActiveNav(item)
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }

  const handleDropdownHover = (item: string) => {
    if (dropdownData[item]) {
      setOpenDropdown(item)
      if (item === "Locations" && locationScrollRef.current) {
        setTimeout(() => {
          if (locationScrollRef.current) locationScrollRef.current.scrollTop = 0
        }, 0)
      }
    }
  }

  const handleDropdownLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <Link href="/">
            <img
              src="https://webandadssolution.com/wp-content/uploads/2025/04/new-logo.png"
              alt="Web and Ads Solutions Logo"
              className="logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <div
              key={item}
              className="nav-item-wrapper"
              onMouseEnter={() => handleDropdownHover(item)}
              onMouseLeave={handleDropdownLeave}
            >
              {(() => {
                const navRoutes: Record<string, string> = { Home: "/", Services: "/services", AboutUs: "/about", Blogs: "/blog", Packages: "/packages" }
                const to = navRoutes[item]
                return to ? (
                  <Link
                    href={to}
                    className={`nav-link ${activeNav === item ? "active" : ""}`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item === "AboutUs" ? "About Us" : item}
                    {dropdownData[item] && <span className="dropdown-arrow">▼</span>}
                  </Link>
                ) : (
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`nav-link ${activeNav === item ? "active" : ""}`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                    {dropdownData[item] && <span className="dropdown-arrow">▼</span>}
                  </a>
                )
              })()}

              {dropdownData[item] && (
                <div className={`dropdown-menu ${openDropdown === item ? "open" : ""}`}>
                  {item === "Locations" ? (
                    <div className="dropdown-grid" ref={locationScrollRef}>
                      {dropdownData[item].map((option, index) => (
                        <a
                          key={index}
                          href={`#${option.toLowerCase()}`}
                          className="dropdown-item"
                          style={{
                            animationDelay: `${index * 0.05}s`,
                          }}
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="dropdown-list">
                      {dropdownData[item].map((option, index) => {
                        const serviceRoutes: Record<string, string> = {
                          "Search Engine Optimization (SEO)":      "/services/seo",
                          "Content Marketing":                      "/services/content-marketing",
                          "Pay-Per-Click (PPC) Advertising":        "/services/ppc",
                          "Social Media Optimization (SMO)":        "/services/smo",
                          "Website Development":                    "/services/web-development",
                          "Virtual Assistant Services":             "/services/virtual-assistant",
                          "Web Packages":                           "/package/web-usd",
                          "SMO Packages":                           "/package/smo-usd",
                          "SEO Packages":                           "/package/seo-usd",
                          "PPC Packages":                           "/package/ppc-usd",
                        }
                        const to = serviceRoutes[option]
                        return to ? (
                          <Link
                            key={index}
                            href={to}
                            className="dropdown-item"
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => handleNavClick(item)}
                          >
                            {option}
                          </Link>
                        ) : (
                          <a
                            key={index}
                            href={`#${option.toLowerCase()}`}
                            className="dropdown-item"
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            {option}
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section - CTA & Menu */}
        <div className="right-section">
          <button className="header-cta-outline" onClick={() => document.querySelector('.services-section')?.scrollIntoView({ behavior: 'smooth' })}>Our Work</button>
          <button className="header-cta-button" onClick={() => document.querySelector('.footer-site')?.scrollIntoView({ behavior: 'smooth' })}>Let's Talk</button>

          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle menu-toggle-always ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => {
          const mobileRoutes: Record<string, string> = { Home: "/", Services: "/services", AboutUs: "/about", Blogs: "/blog", Packages: "/packages" }
          const to = mobileRoutes[item]
          return to ? (
            <Link
              key={item}
              href={to}
              className={`nav-link-mobile ${activeNav === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item === "AboutUs" ? "About Us" : item}
            </Link>
          ) : (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link-mobile ${activeNav === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </a>
          )
        })}
        <button className="cta-button-mobile" onClick={() => { document.querySelector('.footer-site')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Let's Talk</button>
      </nav>
    </header>
  )
}

export default Header