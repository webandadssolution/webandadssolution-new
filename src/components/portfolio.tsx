import React from "react"
import "../styles/portfolio.css"
import { FaArrowUp } from "react-icons/fa";

const Portfolio = () => {
    // Divided the 8 projects into two rows as requested
    const rowOneData = [
        { src: "/responsive-website-design-on-multiple-devices-lapt.jpg", title: "TechNova SaaS Platform Revamp", category: "Web Development / UI-UX Design" },
        { src: "/ppc-advertising-team-illustration.jpg", title: "UrbanCart E-commerce Growth Campaign", category: "Performance Marketing / Paid Ads" },
        { src: "/website-development-team-illustration.jpg", title: "FinEdge Corporate Website Development", category: "Custom Web Development" },
        { src: "/social-media-marketing.jpg", title: "LocalMart Digital Launch Strategy", category: "Social Media Ads / Lead Generation" }
    ];

    const rowTwoData = [
        { src: "/content-marketing-illustration.jpg", title: "CloudSync Landing Page Optimization", category: "Conversion Rate Optimization (CRO)" },
        { src: "/modern-mobile-app-development-illustration-with-co.jpg", title: "EduSmart Online Course Platform", category: "Full-Stack Web Application" },
        { src: "/seo-services-illustration.jpg", title: "HealthPlus Multi-Location SEO Campaign", category: "SEO & Digital Strategy" },
        { src: "/ppc-advertising-illustration.jpg", title: "BuildPro Real Estate Lead Funnel", category: "Funnel Design / Performance Marketing" }
    ];

    const renderCards = (
        data: { src: string; title: string; category: string }[],
        idPrefix: string,
        isReverse = false
    ) => (
        <>
            {data.map((portfolio, i) => (
                <div key={`${idPrefix}-${i}`} className={`portfolio-card ${isReverse ? "is-reverse" : ""}`}>
                    <div className="portfolio-card-inner">
                        <img src={portfolio.src} alt="portfolio" className="portfolio-img" />
                        <div className="portfolio-overlay">
                            <div className="portfolio-overlay-content">
                                <p className="portfolio-category-tag">{portfolio.category}</p>
                                <h3 className="portfolio-card-title">{portfolio.title}</h3>
                                <div className="portfolio-arrow-circle">
                                    <FaArrowUp className="portfolio-arrow-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header scroll-reveal">
                    <span className="portfolio-badge">● Portfolio</span>
                    <h2 className="portfolio-title">Our Recently
                        <span>
                            <img src = "https://paimage.picode.in/aivora/php/assets/img/icon/animated-gif02.gif" alt="image"/>
                        </span>
                        Completed Projects
                    </h2>
                </div>

                <div className="portfolio-marquee-wrapper scroll-reveal delay-2">
                    {/* First Row: Items 1 to 4 */}
                    <div className="portfolio-marquee-row row-rtl">
                        <div className="portfolio-marquee-content">
                            {renderCards(rowOneData, "top")}
                            {renderCards(rowOneData, "top-dup")}
                        </div>
                    </div>

                    {/* Second Row: Items 5 to 8 (with reverse logic) */}
                    <div className="portfolio-marquee-row row-ltr">
                        <div className="portfolio-marquee-content">
                            {renderCards(rowTwoData, "bot", true)}
                            {renderCards(rowTwoData, "bot-dup", true)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;