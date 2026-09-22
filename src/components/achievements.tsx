"use client"
import Link from "next/link"
import ContactForm from "./contact-form"
import "../styles/achievements.css"

const Achievements = () => {
    return (
        <section className="achievements-section">
            <div className="achievements-container">
                {/* Left Side: CTA copy */}
                <div className="achievements-left scroll-reveal from-left">
                    <div className="achievements-header">
                        <h2 className="achievements-title">
                            Ready to Partner with a Results-Driven Digital Marketing Agency?
                        </h2>
                        <p className="achievements-desc">
                            Partner with a digital marketing agency focused on real business outcomes, transparent
                            communication, and predictable growth. Let&apos;s build an online footprint that outranks
                            your competitors on Google and outsmarts them in AI search.
                        </p>
                        <Link href="/book-a-call" className="home-cta">Start Growing My Business Today</Link>
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