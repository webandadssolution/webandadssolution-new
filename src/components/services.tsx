import Link from "next/link"
import { FaSearch, FaBullseye, FaLaptopCode, FaPenNib, FaShareAlt, FaHeadset } from "react-icons/fa"
import "../styles/services.css"

const services = [
  {
    id: 0,
    Icon: FaSearch,
    title: "SEO & AI Search Dominance (AEO & GEO)",
    description:
      "Rank at the top of traditional Google search results while earning direct recommendations inside conversational engines like ChatGPT, Gemini, and Perplexity. As an integrated digital marketing and seo company, we structure your digital footprint so search engines and AI models identify your brand as the primary authority.",
    image: "/images/seo.jpg",
    colorClass: "gold",
  },
  {
    id: 1,
    Icon: FaBullseye,
    title: "High-Intent PPC & Paid Media",
    description:
      "Stop burning ad budget on cold clicks that bounce. We build hyper-targeted paid search and social campaigns engineered to capture active buyers at the exact moment they are ready to purchase, delivering a refined google digital marketing strategy built for speed.",
    image: "/images/ppc.jpg",
    colorClass: "orange",
  },
  {
    id: 2,
    Icon: FaLaptopCode,
    title: "Conversion-Optimized Web & App Development",
    description:
      "A great website shouldn't just look pretty—it should function as your best salesperson. We build ultra-fast, mobile-responsive websites and custom web applications optimized to convert cold traffic into paid accounts and qualified inquiries through complete digital marketing solutions.",
    image: "/images/WEBSITE DEVELOPMENT.jpg",
    colorClass: "green",
  },
  {
    id: 3,
    Icon: FaPenNib,
    title: "Direct-Response Content & Copywriting",
    description:
      "We write landing pages, educational guides, and authority-building content that turns passive readers into active buyers without sounding like a generic corporate template.",
    image: "/images/Content marketing.jpg",
    colorClass: "pink",
  },
  {
    id: 4,
    Icon: FaShareAlt,
    title: "Turnkey Social Media & Community Management",
    description:
      "Maintain an active, sharp presence across the platforms your audience frequents, building long-term brand trust before a prospect ever fills out a lead form.",
    image: "/images/Social media.jpg",
    colorClass: "dark-blue",
  },
  {
    id: 5,
    Icon: FaHeadset,
    title: "Specialized Virtual Assistant Operations",
    description:
      "Scale your operational execution and lead management without adding massive administrative overhead. Our specialized support team handles execution tasks so your leadership stays focused on high-level growth.",
    image: "/images/va-hero.jpg",
    colorClass: "amber",
  },
]

const Services = () => {
  // --scroll-ratio is now driven by GSAP ScrollTrigger in gsap_effects.js

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header scroll-reveal">
          <span className="services-badge">● Core Capabilities</span>
          <h2 className="services-title">Full-Service Digital Marketing Solutions Built for Modern Buying Habits</h2>

        </div>

        <div className="services-cards-wrapper scroll-reveal delay-2">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card-wrapper card-fan-${index}`}>
              <div className={`service-card card-bg-${service.colorClass}`}>
                <div className="services-card-top-content">
                  <h3 className="services-card-title">{service.title}</h3>
                  <p className="services-card-desc">{service.description}</p>
                </div>

                <div className="services-card-bottom-area">
                  <div className={`services-card-icon card-icon-${service.colorClass}`}>
                    <service.Icon className="services-icon-svg" aria-hidden="true" />
                  </div>
                  <div className="services-card-image-container">
                    <img src={service.image || "/placeholder.svg"} alt={service.title} className="services-card-img" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta-row">
          <Link href="/book-a-call" className="home-cta">Talk to a Growth Specialist</Link>
        </div>
      </div>
    </section>
  )
}

export default Services