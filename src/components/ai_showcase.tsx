import "../styles/ai_showcase.css"

const Ai_showcase = () => {
    const dataItems = [
        { verb: "GET", code: "200", url: "/users/d72d9c38-f0d7-32b6-8c53-508d21343454/1", color: "green" },
        { verb: "DELETE", code: "500", url: "/users/d72d9c38-f0d7-32b6-8c53-508d21343454/1", color: "red" },
        { verb: "POST", code: "300", url: "/users/d72d9c38-f0d7-32b6-8c53-508d21343454/1", color: "blue" },
        { verb: "POST", code: "200", url: "/users/d72d9c38-f0d7-32b6-8c53-508d21343454/1", color: "green" },
        { verb: "DELETE", code: "500", url: "/users/d72d9c38-f0d7-32b6-8c53-508d21343454/1", color: "red" },
    ];

    const Column = ({ speed, delay }: { speed: string; delay: string }) => (
        <div className="ai-column-wrapper">
            <div className="ai-column-track" style={{ animationDuration: speed, animationDelay: delay }}>
                {[...dataItems, ...dataItems, ...dataItems].map((item, idx) => (
                    <div key={idx} className={`ai-data-card ${item.color}`}>
                        <span className="ai-code">{item.code}</span>
                        <span className="ai-verb">{item.verb}</span>
                        <span className="ai-url">{item.url}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="ai-showcase-section">
            <div className="ai-showcase-container">
                <div className="ai-showcase-header scroll-reveal">
                    <span className="ai-showcase-badge">● Professional & Trust-Building</span>
                    <h2 className="ai-showcase-title">Real-time AI for smarter business</h2>
                </div>

                <div className="ai-visual-wrapper scroll-reveal scale-in delay-2">
                    <div className="ai-scan-zone">
                        <div className="ai-scanner-beam">
                            <img src="https://paimage.picode.in/aivora/php/assets/img/industries/gradient02.png" alt="scanner" />
                        </div>
                    </div>

                    <div className="ai-streams-container">
                        <Column speed="2s" delay="0s" />
                        <Column speed="3.5s" delay="-4s" />
                        <Column speed="4.5s" delay="-8s" />
                        <Column speed="3s" delay="-2s" />
                        <Column speed="4s" delay="-10s" />
                    </div>

                    {/* SEPARATE TOP PATHS OVERLAY */}
                    <div className="ai-lines-top-overlay">
                        <svg viewBox="0 0 1000 400" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="topLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#00ffaa" stopOpacity="0" />
                                    <stop offset="20%" stopColor="#00ffaa" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#00ffaa" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                            <g className="top-paths">
                                <path d="M100,0 L100,150 C100,260 410,230 460,340" className="ai-path" style={{ stroke: "url(#topLineGradient)" }} />
                                <path d="M260,150 C260,260 460,240 480,340" className="ai-path" style={{ stroke: "url(#topLineGradient)" }} />
                                <path d="M330,150 C330,260 500,240 495,340" className="ai-path" style={{ stroke: "url(#topLineGradient)" }} />
                                <path d="M670,150 C670,260 500,240 500,340" className="ai-path" style={{ stroke: "url(#topLineGradient)" }} />
                                <path d="M740,150 C740,260 530,240 518,340" className="ai-path" style={{ stroke: "url(#topLineGradient)" }} />
                                <path d="M900,0 L900,150 C900,260 560,240 535,340" className="ai-path" style={{ stroke: "url(#topLineGradient)" }} />
                            </g>
                        </svg>
                    </div>

                    {/* SEPARATE BOTTOM PATHS OVERLAY */}
                    <div className="ai-lines-bottom-overlay">
                        <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="bottomLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#00ffaa" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#00ffaa" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <g className="bottom-paths">
                                <path d="M490,0 C470,80 250,80 350,200" className="ai-path" style={{ stroke: "url(#bottomLineGradient)" }} />
                                <path d="M470,0 C470,80 350,80 350,200" className="ai-path" style={{ stroke: "url(#bottomLineGradient)" }} />
                                <path d="M490,0 C490,80 430,80 430,200" className="ai-path" style={{ stroke: "url(#bottomLineGradient)" }} />
                                <path d="M510,0 C510,80 570,80 570,200" className="ai-path" style={{ stroke: "url(#bottomLineGradient)" }} />
                                <path d="M530,0 C530,80 650,80 650,200" className="ai-path" style={{ stroke: "url(#bottomLineGradient)" }} />
                                <path d="M510,0 C530,80 750,80 650,200" className="ai-path" style={{ stroke: "url(#bottomLineGradient)" }} />
                            </g>
                        </svg>
                    </div>

                    <div className="ai-central-logo">
                        <img src="https://paimage.picode.in/aivora/php/assets/img/industries/indus-logo.png" alt="AI Center" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ai_showcase;