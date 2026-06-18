"use client"

import { useState } from "react"
import "../styles/why_choose_us.css"

const Why_choose_us = () => {
    // Tracks the currently active panel. Initialized to 0 (first bar open).
    const [activeIndex, setActiveIndex] = useState(0);

    const chooseUsData = [
      {
        title: "Understanding",
        description: "We learn about your business, goals, and current challenges.",
        image: "https://i.ibb.co/DPbJVvF2/result-driven.png"
      },
      {
        title: "Planning",
        description: "We outline a strategy customized to your stage of growth.",
        image: "https://i.ibb.co/4Zr2N06K/technical-expertise.png"
      },
      {
        title: "Research & Audit",
        description: "We review your website structure and content presence to identify opportunities and gaps.",
        image: "https://i.ibb.co/VpwzZrz5/tailored-approach.png"
      },
      {
        title: "Alignment",
        description: "Messaging, design, and performance goals are aligned across channels.",
        image: "https://i.ibb.co/27NfcskY/communication.png"
      },
      {
        title: "Monitoring",
        description: "We track performance consistently through dashboards and reports.",
        image: "https://i.ibb.co/vCv8h0jv/advance-tech.png"
      },
      {
        title: "Executing",
        description: "We build, launch, and manage with attention to detail.",
        image: "https://i.ibb.co/9mnLJWwH/support.png"
      },
      {
        title: "Improving",
        description: "We review performance consistently and understand what needs improvement.",
        image: "https://i.ibb.co/4nL9G3Sy/proven-success.png"
      }
    ];

    return (
        <section className="choose-us-section">
            <div className="choose-us-container">
                <div className="choose-us-header scroll-reveal">
                    <span className="choose-us-badge">● Discover Our Advantage</span>
                    <h2 className="choose-us-title">
                        Web development, social media, and <br />
                        <span className="choose-us-highlight">performance advertising designed to help growing businesses.</span>
                    </h2>
                   
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