"use client"
import ContactForm from "./contact-form"
import "../styles/achievements.css"

const Achievements = () => {
    return (
        <section className="achievements-section">
            <div className="achievements-container">
                {/* Left Side: Title and Stats Card */}
                <div className="achievements-left scroll-reveal from-left">
                    <div className="achievements-header">
                        <span className="achievements-badge">● Our Achievements</span>
                        <h2 className="achievements-title">
                            We are trusted <br />
                            <span className="achievements-ai-text-wrapper">
                                <img
                                    src="/images/icons/icon-1.png"
                                    alt="ai-icon"
                                    className="achievements-ai-graphic"
                                /> Ai Driven-Marketing Agency
                            </span>
                        </h2>
                    </div>

                    <div className="achievements-stats-card-container">
                        <div className="achievements-card-ribbon-strap achievements-left-strap"></div>
                        <div className="achievements-card-ribbon-strap achievements-right-strap"></div>

                        <div className="achievements-stats-card">
                            <div className="achievements-stat-item">
                                <h3>500+</h3>
                                <p>Projects Successfully <br /> Delivered</p>
                            </div>
                            <div className="achievements-stat-item">
                                <h3>95%</h3>
                                <p>Client Satisfaction <br /> Rate on Our Results</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="achievements-right scroll-reveal from-right delay-2">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Achievements;