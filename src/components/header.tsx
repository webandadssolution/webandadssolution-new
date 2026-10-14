"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"
import ThemeToggle from "./theme-toggle"
import { locations } from "../data/locations"
import "../styles/header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [activeNav, setActiveNav] = useState("Home")
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    if (pathname === "/") {
      setActiveNav("Home")
    } else if (pathname.startsWith("/services")) {
      setActiveNav("Services")
    } else if (pathname === "/about") {
      setActiveNav("AboutUs")
    } else if (pathname === "/packages") {
      setActiveNav("Packages")
    } else if (pathname.startsWith("/blog")) {
      setActiveNav("Blog")
    } else if (pathname === "/contact") {
      setActiveNav("Contact")
    } else if (pathname.startsWith("/locations") || locations.some((loc) => pathname.startsWith(loc.href))) {
      setActiveNav("Locations")
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "AboutUs", "Services", "Packages", "Blog", "Locations", "Industry"]

  const dropdownData: Record<string, string[]> = {
    Services: [
      "Application Development",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "AI Visibility",
      "Content Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Optimization (SMO)",
      "Search Engine Optimization (SEO)",
      "Website Optimization",
      "Website Look & Feel Updation",
      "Graphic Design",
      "Website Development",
      "Virtual Assistant Services",
    ],
    Locations: locations.map((loc) => loc.navLabel),
    Industry: [
      "SEO for Lawyers", "Healthcare SEO services", "SEO for Astrologers", "SEO for IT Companies", "SEO for Manufacturing", "SEO Services for Hotels", "Travel SEO services",
    ],
  }

  const handleNavClick = (item: string) => {
    setActiveNav(item)
    setIsMenuOpen(false)
    setOpenDropdown(null)
    setMobileDropdown(null)
  }

  const handleDropdownHover = (item: string) => {
    if (dropdownData[item]) {
      setOpenDropdown(item)
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
              src="/images/logo.webp"
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
                const navRoutes: Record<string, string> = { Home: "/", Services: "/services", AboutUs: "/about", Packages: "/packages", Blog: "/blog", Locations: "/locations" }
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
                    <div className="dropdown-list">
                      {locations.filter((loc) => !loc.parent).map((loc, index) => {
                        const children = locations.filter((child) => child.parent === loc.href)
                        const link = (
                          <Link
                            href={loc.href}
                            className={`dropdown-item ${children.length ? "has-submenu" : ""}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => handleNavClick(item)}
                          >
                            {loc.navLabel}
                            {children.length > 0 && <FaChevronRight className="submenu-arrow" />}
                          </Link>
                        )
                        return children.length ? (
                          <div key={loc.href} className="dropdown-sub">
                            {link}
                            <div className="dropdown-submenu">
                              {children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="dropdown-item"
                                  onClick={() => handleNavClick(item)}
                                >
                                  {child.navLabel}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div key={loc.href}>{link}</div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="dropdown-list">
                      {dropdownData[item].map((option, index) => {
                        const serviceRoutes: Record<string, string> = {
                          "Answer Engine Optimization (AEO)":      "/services/aeo",
                          "Generative Engine Optimization (GEO)":  "/services/geo",
                          "AI Visibility":                          "/services/ai-visibility",
                          "Search Engine Optimization (SEO)":      "/seo-search-engine-optimization",
                          "Content Marketing":                      "/services/content-marketing",
                          "Pay-Per-Click (PPC) Advertising":        "/services/ppc",
                          "Social Media Optimization (SMO)":        "/services/smo",
                          "Website Optimization":                   "/services/website-optimization",
                          "Website Look & Feel Updation":           "/services/website-look-feel",
                          "Graphic Design":                         "/services/graphic-design",
                          "Website Development":                    "/services/web-development",
                          "Virtual Assistant Services":             "/services/virtual-assistant",
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
          <Link href="/contact" className="header-cta-outline no-underline">
            Get A Quote
            </Link>
         <Link href="/book-a-call" className="header-cta-button no-underline">
          Let's Talk
            </Link>
          

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
          const mobileRoutes: Record<string, string> = { Home: "/", Services: "/services", AboutUs: "/about", Packages: "/packages", Blog: "/blog", Locations: "/locations" }
          const to = mobileRoutes[item]
          if (item === "Locations") {
            const isOpen = mobileDropdown === item
            return (
              <div key={item} className="mobile-dropdown">
                <div className="mobile-dropdown-head">
                  <Link
                    href={to}
                    className={`nav-link-mobile ${activeNav === item ? "active" : ""}`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                  </Link>
                  <button
                    type="button"
                    className={`mobile-dropdown-toggle ${isOpen ? "open" : ""}`}
                    onClick={() => setMobileDropdown(isOpen ? null : item)}
                    aria-expanded={isOpen}
                    aria-label="Toggle locations"
                  >
                    <FaChevronDown />
                  </button>
                </div>
                {isOpen && (
                  <div className="mobile-dropdown-list">
                    {locations.filter((loc) => !loc.parent).map((loc) => (
                      <div key={loc.href}>
                        <Link href={loc.href} className="mobile-dropdown-item" onClick={() => handleNavClick(item)}>
                          {loc.navLabel}
                        </Link>
                        {locations.filter((child) => child.parent === loc.href).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="mobile-dropdown-item mobile-dropdown-child"
                            onClick={() => handleNavClick(item)}
                          >
                            {child.navLabel}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          }
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
        <Link href="/book-a-call" className="cta-button-mobile" onClick={() => setIsMenuOpen(false)}>Let's Talk</Link>
      </nav>
    </header>
  )
}

export default Header