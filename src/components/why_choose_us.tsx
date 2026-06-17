"use client"

import { useState } from "react"
import "../styles/why_choose_us.css"

const Why_choose_us = () => {
    // Tracks the currently active panel. Initialized to 0 (first bar open).
    const [activeIndex, setActiveIndex] = useState(0);

    const chooseUsData = [
      {
        title: "Results-Driven Solutions",
        description: "We target meaningful outcomes, ensuring that our efforts align with your core business goals—whether it's boosting traffic, increasing engagement, or driving conversions.",
        image: "https://i.ibb.co/DPbJVvF2/result-driven.png"
      },
      {
        title: "Technical Expertise",
        description: "Our team brings strong technical knowledge across modern web technologies, performance optimization, and ad platforms. This ensures fast, secure, and scalable solutions.",
        image: "https://i.ibb.co/4Zr2N06K/technical-expertise.png"
      },
      {
        title: "Tailored Approaches",
        description: "Every business is unique, and so are our strategies. We analyze your goals, audience, and challenges to create customized strategies that align perfectly.",
        image: "https://i.ibb.co/VpwzZrz5/tailored-approach.png"
      },
      {
        title: "Transparent Communication",
        description: "We value transparency and keep you informed with detailed reports and updates, providing full insight into our progress and results.",
        image: "https://i.ibb.co/27NfcskY/communication.png"
      },
      {
        title: "Advanced Technology",
        description: "Stay ahead of the competition with our use of the latest digital tools and technologies that accelerate your growth and efficiency.",
        image: "https://i.ibb.co/vCv8h0jv/advance-tech.png"
      },
      {
        title: "Dedicated Support",
        description: "Our strong client relationships are built on trust. Our support team stands ready to assist, providing expert guidance whenever required.",
        image: "https://i.ibb.co/9mnLJWwH/support.png"
      },
      {
        title: "Proven Success",
        description: "Our portfolio of successful projects and satisfied clients demonstrates our commitment to excellence and transformative results.",
        image: "https://i.ibb.co/4nL9G3Sy/proven-success.png"
      }
    ];

    return (
        <section className="choose-us-section">
            <div className="choose-us-container">
                <div className="choose-us-header scroll-reveal">
                    <span className="choose-us-badge">● Discover Our Advantage</span>
                    <h2 className="choose-us-title">
                        Maximize Your Growth With <br />
                        <span className="choose-us-highlight">Expert Digital Strategies</span>
                    </h2>
                    <p className="choose-us-subtitle">
                        Harness the power of proven methodologies and cutting-edge techniques to elevate your business
                    </p>
                </div>
            </div>

            <div className="accordion-wrapper scroll-reveal delay-2">
                {chooseUsData.map((item, index) => (
                    <div
                        key={index}
                        className={`accordion-panel ${activeIndex === index ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)} // Ensures mobile functionality
                    >
                        <div
                            className="panel-bg"
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <div className="panel-overlay"></div>

                        <div className="panel-content">
                            <div className="panel-vertical-label">
                                <h3 className="v-text">{item.title}</h3>
                            </div>

                            <div className="expanded-content">
                                <div className="expanded-top">
                                    <span className="item-index">0{index + 1}</span>
                                    <div className="arrow-circle">↗</div>
                                </div>
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-desc">{item.description}</p>
                                <button className="explore-btn">Explore Service</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Why_choose_us;