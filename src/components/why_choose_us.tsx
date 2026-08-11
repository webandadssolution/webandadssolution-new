"use client"

import { useState } from "react"
import "../styles/why_choose_us.css"

const Why_choose_us = () => {
    // Tracks the currently active panel. Initialized to 0 (first bar open).
    const [activeIndex, setActiveIndex] = useState(0);

    // Mobile-only: each flip card opens independently of the others.
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

    const toggleFlip = (index: number) => {
        setFlippedCards((prev) => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    const chooseUsData = [
      {
        title: "Understanding",
        description: "We learn about your business, goals, and current challenges.",
        image: "images/Understanding.jpg"
      },
      {
        title: "Planning",
        description: "We outline a strategy customized to your stage of growth.",
        image: "images/Planning.jpg"
      },
      {
        title: "Research & Audit",
        description: "We review your website structure and content presence to identify opportunities and gaps.",
        image: "images/Research & Audit.jpg"
      },
      {
        title: "Alignment",
        description: "Messaging, design, and performance goals are aligned across channels.",
        image: "images/Alignment.jpg"
      },
      {
        title: "Monitoring",
        description: "We track performance consistently through dashboards and reports.",
        image: "images/Monitoring.jpg"
      },
      {
        title: "Executing",
        description: "We build, launch, and manage with attention to detail.",
        image: "images/Executing.jpg"
      },
      {
        title: "Improving",
        description: "We review performance consistently and understand what needs improvement.",
        image: "images/Improving.jpg"
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

            {/* ── DESKTOP / TABLET — unchanged hover accordion ── */}
            <div className="accordion-wrapper choose-us-desktop-only scroll-reveal delay-2">
                {chooseUsData.map((item, index) => (
                    <div
                        key={index}
                        className={`accordion-panel ${activeIndex === index ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)} // Ensures mobile functionality
                    >
                        <div
                            className="panel-bg"
                            style={{ backgroundImage: `url("${item.image}")` }}
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

            {/* ── PHONE ONLY — independent flip cards, all visible, fully
                 separate markup/classes so it can never affect desktop ── */}
            <div className="choose-us-mobile-only">
                {chooseUsData.map((item, index) => (
                    <div
                        key={index}
                        className={`mc-card ${flippedCards.has(index) ? "mc-flipped" : ""}`}
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="mc-card-inner">
                            <div
                                className="mc-face mc-face-front"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            >
                                <div className="mc-front-overlay"></div>
                                <span className="mc-index">0{index + 1}</span>
                                <h3 className="mc-title">{item.title}</h3>
                                <span className="mc-hint">Tap to view ↻</span>
                            </div>
                            <div className="mc-face mc-face-back">
                                <span className="mc-index">0{index + 1}</span>
                                <h3 className="mc-title">{item.title}</h3>
                                <p className="mc-desc">{item.description}</p>
                                <button className="mc-btn">Explore Service</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Why_choose_us;
