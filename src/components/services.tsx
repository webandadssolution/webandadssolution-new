import React from "react"
import "../styles/services.css"

const Services = () => {
  // --scroll-ratio is now driven by GSAP ScrollTrigger in gsap_effects.js

  const services = [
    {
      id: 0,
      icon: "https://i.ibb.co/LhdczyFZ/pay-per-click.png",
      title: "Paid Campaigns (PPC)",
      bullets: [
        "Google Ads",
        "Social media ads",
        "Lead generation funnels",
        "E-commerce campaigns"
      ],
      image: "/ppc-advertising-illustration.jpg",
      colorClass: "orange"
    },
    {
      id: 1,
      icon: "https://i.ibb.co/21zRdf3D/development.png",
      title: "Websites Design & Development",
      bullets: [
        "Fast and mobile-friendly",
        "Structured around user experience",
        "Built with conversion in mind",
        "Ready to support SEO, AEO, GEO and paid campaigns"
      ],
      image: "/images/WEBSITE DEVELOPMENT.jpg",
      colorClass: "green"
    },
    {
      id: 2,
      icon: "https://i.ibb.co/mr1rjry4/SMO.png",
      title: "Social Media",
      bullets: [
        "Defined content themes",
        "Thoughtful design",
        "Clear positioning",
        "Engagement strategies that build trust"
      ],
      image: "/images/Social media.jpg",
      colorClass: "dark-blue"
    },
    {
      id: 3,
      icon: "https://i.ibb.co/3mBHsC3n/seo-2.png",
      title: "Search Engine Optimization (SEO)",
      bullets: [
        "Search strategies that improve visibility",
        "Keyword alignment and on-page optimization",
        "Long-term organic presence",
        "Searchable, structured, and sustainable."
      ],
      image: "/images/seo.jpg",
      colorClass: "gold"
    },
    {
      id: 4,
      icon: "https://i.ibb.co/rfxzD8Hx/content-creation.png",
      title: "Content Marketing",
      bullets: [
        "Content that supports the entire funnel",
        "Blogs, landing pages, and campaign copy that converts",
        "Creative storytelling backed by business clarity"
      ],
      image: "/images/Content marketing.jpg",
      colorClass: "pink"
    },
    {
      id: 5,
      icon: "/images/tech-wave.png",
      title: "AEO & GEO",
      bullets: [
        "Optimize content for featured snippets, direct answers, and zero-click searches",
        "Structure pages around real user questions and conversational intent",
        "Improve visibility in voice search and AI-driven search experiences",
        "Future-proof your brand's visibility beyond traditional search rankings"
      ],
      image: "/seo-services-illustration.jpg",
      colorClass: "amber"
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header scroll-reveal">
          <span className="services-badge">● Our Services That Drive Success</span>
          <h2 className="services-title">Creative Execution backed by Clear Strategy.</h2>

        </div>

        <div className="services-cards-wrapper scroll-reveal delay-2">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card-wrapper card-fan-${index}`}>
              <div className={`service-card card-bg-${service.colorClass}`}>
                <div className="services-card-top-content">
                  <h3 className="services-card-title">{service.title}</h3>
                  <ul className="services-card-bullets">
                    {service.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="services-card-bottom-area">
                  <div className={`services-card-icon card-icon-${service.colorClass}`}>
                    <img src={service.icon || "/placeholder.svg"} alt={service.title} className="services-icon-inner" />
                  </div>
                  <div className="services-card-image-container">
                    <img src={service.image || "/placeholder.svg"} alt={service.title} className="services-card-img" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services