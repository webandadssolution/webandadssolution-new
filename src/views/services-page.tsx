import Link from "next/link"
import {
  MdOutlineQuestionAnswer,
  MdOutlineSmartToy,
  MdOutlineEdit,
  MdOutlinePsychology,
  MdOutlineBrush,
  MdOutlineCampaign,
  MdOutlineSearch,
  MdOutlineShare,
  MdOutlineSupportAgent,
  MdOutlineCode,
  MdOutlinePalette,
  MdOutlineSpeed,
  MdArrowForward,
} from "react-icons/md"
import "../styles/services-page.css"

const services = [
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    blurb: "Expert SEO that improves visibility, from local SEO to full-scale organic strategy that ranks and converts.",
    image: "/images/seo.jpg",
    icon: <MdOutlineSearch />,
  },
  {
    slug: "ppc",
    title: "Pay-Per-Click (PPC) Advertising",
    blurb: "Qualified leads through Google Ads, social ads, and e-commerce campaigns backed by 10+ years managing ad spend.",
    image: "/images/ppc-hero.jpg",
    icon: <MdOutlineCampaign />,
  },
  {
    slug: "smo",
    title: "Social Media Optimization (SMO)",
    blurb: "Social media management with defined content themes, thoughtful design, and engagement strategies built on trust.",
    image: "/images/smo-hero.jpg",
    icon: <MdOutlineShare />,
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    blurb: "Blogs, landing pages, and campaign copy that rank in search and get cited in AI answers.",
    image: "/images/Content marketing.jpg",
    icon: <MdOutlineEdit />,
  },
  {
    slug: "web-development",
    title: "Web Development",
    blurb: "Fast, mobile-friendly websites built around user experience and conversion, ready to support SEO and paid campaigns.",
    image: "/images/WEBSITE DEVELOPMENT.jpg",
    icon: <MdOutlineCode />,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    blurb: "Social creatives, marketing materials, digital ads, and brand assets designed to build trust.",
    image: "/images/gd-hero.jpg",
    icon: <MdOutlinePalette />,
  },
  {
    slug: "website-look-feel",
    title: "Website Look & Feel Updation",
    blurb: "Refresh your website's design, layout, and user experience without rebuilding from scratch.",
    image: "/images/wlf-hero.jpg",
    icon: <MdOutlineBrush />,
  },
  {
    slug: "website-optimization",
    title: "Website Optimization",
    blurb: "Improve your site's speed, mobile experience, and conversions to turn more visitors into customers.",
    image: "/images/wo-hero.jpg",
    icon: <MdOutlineSpeed />,
  },
  {
    slug: "aeo",
    title: "Answer Engine Optimization (AEO)",
    blurb: "Get discovered by ChatGPT, Gemini, Google AI Overviews, and voice assistants as search becomes conversational.",
    image: "/images/aeo-hero.jpg",
    icon: <MdOutlineQuestionAnswer />,
  },
  {
    slug: "geo",
    title: "Generative Engine Optimization (GEO)",
    blurb: "Improve your visibility across AI-powered search platforms like ChatGPT, Gemini, and Perplexity.",
    image: "/images/geo-hero.jpg",
    icon: <MdOutlineSmartToy />,
  },
  {
    slug: "ai-visibility",
    title: "AI Visibility",
    blurb: "Strengthen your presence across AI-powered search platforms so you get discovered where customers are searching.",
    image: "/images/aiv-hero.jpg",
    icon: <MdOutlinePsychology />,
  },
  {
    slug: "virtual-assistant",
    title: "Virtual Assistant Services",
    blurb: "Hire a trained, dedicated virtual assistant in 48 hours and save up to 70% vs a full-time hire.",
    image: "/images/va-hero.jpg",
    icon: <MdOutlineSupportAgent />,
  },
]

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

          <div className="services-grid">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="service-tile">
                <div className="service-tile-img-wrap">
                  <img src={service.image} alt={service.title} className="service-tile-img" />
                  <div className="service-tile-icon">{service.icon}</div>
                </div>
                <div className="service-tile-body">
                  <h3 className="service-tile-title">{service.title}</h3>
                  <p className="service-tile-blurb">{service.blurb}</p>
                  <span className="service-tile-cta">
                    Explore Service <MdArrowForward />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
