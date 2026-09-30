import Link from "next/link"
import { locations } from "../data/locations"
import "../styles/locations-page.css"

const LocationsPage = () => (
  <div className="loc-page">
    {/* ── HERO ── */}
    <section className="loc-hero">
      <div className="loc-hero-glow loc-glow-1" />
      <div className="loc-hero-glow loc-glow-2" />
      <div className="loc-container loc-hero-inner scroll-reveal">
        <h1 className="loc-hero-title">Locations We Serve</h1>
        <p className="loc-hero-subtext">
          SEO, PPC, web design, social media, and AI search visibility for businesses in every market we work in.
          Choose your location to see how we help businesses there grow.
        </p>
      </div>
    </section>

    {/* ── LOCATION CARDS ── */}
    <section className="loc-list">
      <div className="loc-container">
        <h2 className="loc-section-title scroll-reveal">All Locations</h2>
        <div className="loc-grid">
          {locations.map((loc, i) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="loc-card scroll-reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="loc-card-media">
                <img src={loc.image} alt={loc.imageAlt} className="loc-card-img" loading="lazy" />
              </div>
              <div className="loc-card-body">
                <h3 className="loc-card-title">{loc.name}</h3>
                <p className="loc-card-desc">{loc.description}</p>
                <span className="loc-card-cta">View {loc.navLabel} Services →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default LocationsPage
