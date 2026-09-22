import { FaStore, FaRocket, FaBuilding } from "react-icons/fa"
import "../styles/home-content.css"

const audiences = [
  {
    Icon: FaStore,
    title: "Digital Marketing for Small Business",
    description:
      "If you need an agile marketing agency for small business growth, we build local search systems and targeted ad funnels designed to out-rank enterprise competitors. Whether you need a full-service digital marketing agency for small business scaling, a dedicated digital marketing company for small business lead generation, or a practical marketing company for small business ROI, our modern approach to digital marketing for small business delivers immediate local visibility.",
  },
  {
    Icon: FaRocket,
    title: "Marketing Agency for Startups",
    description:
      "Early-stage companies need rapid testing, lean customer acquisition, and fast validation loops. As a specialized marketing agency for startups, we help you test messaging, build early traction, and capture market share without blowing through your capital.",
  },
  {
    Icon: FaBuilding,
    title: "Enterprise & Multi-Location Brands",
    description:
      "Maintain multi-state search dominance, align complex conversion funnels, and manage high-volume ad spend with structured enterprise systems engineered for multi-location scale.",
  },
]

const HomeAudience = () => {
  return (
    <section className="home-audience-section">
      <div className="home-section-container">
        <div className="home-section-header scroll-reveal">
          <span className="home-section-badge">● Audience Solutions</span>
          <h2 className="home-section-title">Marketing Engines for Every Growth Stage</h2>
        </div>

        <div className="home-audience-grid scroll-reveal delay-2">
          {audiences.map(({ Icon, title, description }) => (
            <article key={title} className="home-audience-card">
              <div className="home-audience-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="home-audience-title">{title}</h3>
              <p className="home-audience-desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeAudience
