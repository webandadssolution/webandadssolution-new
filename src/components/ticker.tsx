import { Fragment } from "react"
import "../styles/ticker.css"

const items = [
  "SEO & AI Search (AEO & GEO)",
  "High-Intent PPC & Paid Media",
  "Web & App Development",
  "Direct-Response Content",
  "Social Media Management",
  "Virtual Assistant Operations",
]

const Ticker = () => {
  return (
    <section className="services-ticker">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...items, ...items].map((item, i) => (
            <Fragment key={i}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-separator">✦</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ticker
