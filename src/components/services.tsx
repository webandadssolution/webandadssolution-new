import React from "react"
import "../styles/services.css"

const Services = () => {
  // --scroll-ratio is now driven by GSAP ScrollTrigger in gsap_effects.js

  const services = [
    {
      id: 0,
      icon: "https://i.ibb.co/xtt30RYz/app-development-2.png",
      title: "Application Development",
      description: "Bring your innovative ideas to life with applications that combine functionality and elegance. Our development process is focused on creating seamless user experiences that align with your business goals. Smart architecture and thoughtful design.",
      image: "/application-development-team-illustration.jpg",
      colorClass: "purple"
    },
    {
      id: 1,
      icon: "https://i.ibb.co/LhdczyFZ/pay-per-click.png",
      title: "Pay-Per-Click(PPC) Advertising",
      description: "Elevate your marketing with PPC campaigns that get results. We design targeted ads that work. We design targeted ads that speak directly to your ideal audience, ensuring every click counts.",
      image: "/ppc-advertising-illustration.jpg",
      colorClass: "orange"
    },
    {
      id: 2,
      icon: "https://i.ibb.co/21zRdf3D/development.png",
      title: "Website Development",
      description: "Your website is your digital handshake—make it count. We develop sleek, responsive websites. Every detail is meticulously crafted to provide an exceptional user experience and drive conversions. Fast, flexible, and optimized for every screen.",
      image: "/responsive-website-design-on-multiple-devices-lapt.jpg",
      colorClass: "green"
    },
    {
      id: 3,
      icon: "https://i.ibb.co/mr1rjry4/SMO.png",
      title: "Social Media Optimization (SMO)",
      description: "Transform your social media platforms into dynamic communities. Our SMO strategies boost presence. Our strategies are designed to boost your brand's presence, turning every post into an opportunity for engagement.",
      image: "/social-media-marketing.jpg",
      colorClass: "dark-blue"
    },
    {
      id: 4,
      icon: "https://i.ibb.co/3mBHsC3n/seo-2.png",
      title: "Search Engine Optimization (SEO)",
      description: "Imagine your business popping up exactly when customers need it. That's the magic of our SEO. We craft customized strategies that improve your search rankings, bringing you the visibility you need to grow.",
      image: "/seo-services-illustration.jpg",
      colorClass: "gold"
    },
    {
      id: 5,
      icon: "https://i.ibb.co/rfxzD8Hx/content-creation.png",
      title: "Content Marketing",
      description: "Engage and educate your audience with content that sparks interest and fosters trust. Our content marketing strategies turn your brand's message into compelling stories that connect with your audience's needs and desires.",
      image: "/content-marketing-illustration.jpg",
      colorClass: "pink"
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header scroll-reveal">
          <span className="services-badge">● Our Services That Drive Success</span>
          <h2 className="services-title">360° Digital Marketing Innovation</h2>
          <p className="services-subtitle">
            Transform your brand's digital footprint and achieve excellence with our comprehensive marketing approach
          </p>
        </div>

        <div className="services-cards-wrapper scroll-reveal delay-2">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card-wrapper card-fan-${index}`}>
              <div className="service-card">
                <div className="services-card-top-content">
                  <h3 className="services-card-title">{service.title}</h3>
                  <p className="services-card-desc">{service.description}</p>
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