import "../styles/services-page.css"

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <div className="badge">OUR SERVICES</div>
          <h1 className="services-hero-title">
            Comprehensive Digital <span className="highlight">Marketing Solutions</span>
          </h1>
          <p className="services-hero-description">
            Transform your business with our full suite of digital marketing services designed to drive growth,
            engagement, and measurable results
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="services-container">
          <div className="section-intro">
            <h2>What We Offer</h2>
            <p>
              Explore our range of expert services tailored to elevate your brand and achieve your business objectives
            </p>
          </div>

          {/* Service sections will be added here */}
          <div className="coming-soon">
            <p>Service details coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
