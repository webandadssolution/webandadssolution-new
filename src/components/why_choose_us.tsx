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
        title: "Built for Bottom-Line Revenue",
        description: "We operate as a performance based marketing agency. We track qualified leads, sales pipeline, and acquisition costs—not just empty clicks and vanity impressions.",
        image: "images/Monitoring.jpg"
      },
      {
        title: "No Fluff, No Locked Retainers",
        description: "As a flexible digital marketing agency, we focus on earning your business every single month through clear execution and open communication—not locking you into rigid 12-month contracts.",
        image: "images/Alignment.jpg"
      },
      {
        title: "Senior Strategists in Your Corner",
        description: "You get direct access to experienced growth marketers who actually run your campaigns, offering custom strategies instead of automated support scripts.",
        image: "images/Planning.jpg"
      }
    ];

    return (
        <section className="choose-us-section">
            <div className="choose-us-container">
                <div className="choose-us-header scroll-reveal">
                    <h2 className="choose-us-title">
                        Why Choose Our Performance Based Marketing Agency{" "}
                        <span className="choose-us-highlight">Over Legacy Providers?</span>
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="choose-us-cta-row">
                <a href="#process" className="home-cta">Explore Our Growth Framework</a>
            </div>
        </section>
    )
}

export default Why_choose_us;
