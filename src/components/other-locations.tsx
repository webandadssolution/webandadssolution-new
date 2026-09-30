"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { locations } from "../data/locations"
import "../styles/other-locations.css"

const OtherLocations = () => {
  const pathname = usePathname().replace(/\/$/, "")
  const others = locations.filter((loc) => loc.href !== pathname)

  if (others.length === 0) return null

  return (
    <section className="other-locations">
      <div className="other-locations-container">
        <h2 className="other-locations-title scroll-reveal">Other Locations We Serve</h2>
        <div className="other-locations-grid scroll-reveal">
          {others.map((loc) => (
            <Link key={loc.href} href={loc.href} className="other-location-chip">
              <h3 className="other-location-name">{loc.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherLocations
