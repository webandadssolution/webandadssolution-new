"use client"

import { useEffect, useState } from "react"
import "../styles/ai_showcase.css"

type DataItem = { verb: string; code: string; url: string; color: "green" | "red" | "blue" }

const dataPool: DataItem[] = [
    { verb: "GET",    code: "200", url: "/users/8a3f1c2e-77b0-4d91/profile",      color: "green" },
    { verb: "POST",   code: "201", url: "/campaigns/2b6e9d44-19aa-4cf2/create",   color: "green" },
    { verb: "DELETE", code: "500", url: "/sessions/f0a7c318-5d2b-49ee/revoke",    color: "red" },
    { verb: "PUT",    code: "204", url: "/ads/9c4d2b71-3e88-46af/update",         color: "blue" },
    { verb: "POST",   code: "300", url: "/leads/61fa8e02-bb14-4d6c/route",        color: "blue" },
    { verb: "GET",    code: "200", url: "/analytics/3d9b5c10-7a44-4e2f/report",   color: "green" },
    { verb: "DELETE", code: "404", url: "/cache/aa12f6e3-90cd-4b8a/purge",        color: "red" },
    { verb: "POST",   code: "200", url: "/payments/e75c2a9f-1086-4dd1/capture",   color: "green" },
    { verb: "PATCH",  code: "300", url: "/audience/5b8e0d27-cc41-4a93/segment",   color: "blue" },
    { verb: "GET",    code: "200", url: "/insights/d04c9a6b-2e57-4f18/fetch",     color: "green" },
    { verb: "DELETE", code: "500", url: "/queue/772b4f1e-a93c-40d6/clear",        color: "red" },
    { verb: "POST",   code: "201", url: "/keywords/c19e6a02-5f37-48bb/index",     color: "green" },
    { verb: "PUT",    code: "300", url: "/budgets/0e8d3c91-447a-4ab2/sync",       color: "blue" },
    { verb: "GET",    code: "200", url: "/reports/b6f2a805-8e19-4dc3/export",     color: "green" },
    { verb: "DELETE", code: "404", url: "/drafts/4a91c7d0-6b2e-4f55/discard",     color: "red" },
]

const rotate = (offset: number, count: number) =>
    Array.from({ length: count }, (_, i) => dataPool[(offset + i) % dataPool.length])

const Ai_showcase = () => {
    const [reqPerSec, setReqPerSec] = useState(1240)
    const [latency, setLatency] = useState(42)

    useEffect(() => {
        const id = setInterval(() => {
            setReqPerSec((v) => Math.min(1860, Math.max(960, v + Math.round((Math.random() - 0.5) * 90))))
            setLatency((v) => Math.min(68, Math.max(24, v + Math.round((Math.random() - 0.5) * 10))))
        }, 1300)
        return () => clearInterval(id)
    }, [])

    const Column = ({ items, speed, delay }: { items: DataItem[]; speed: string; delay: string }) => (
        <div className="ai-column-wrapper">
            <div className="ai-column-track" style={{ animationDuration: speed, animationDelay: delay }}>
                {[...items, ...items, ...items].map((item, idx) => (
                    <div
                        key={idx}
                        className={`ai-data-card ${item.color}`}
                        style={{ animationDelay: `${(idx % items.length) * 0.3}s` }}
                    >
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
            <div className="ai-grid-overlay" />
            <div className="ai-side-line ai-side-line-left" />
            <div className="ai-side-line ai-side-line-right" />

            <div className="ai-showcase-container">
                <div className="ai-showcase-header scroll-reveal">
                    <span className="ai-showcase-badge">● Professional & Trust-Building</span>
                    <h2 className="ai-showcase-title">Real-time AI for smarter business</h2>

                    <div className="ai-metrics-bar">
                        <span className="ai-metrics-live">
                            <span className="ai-metrics-dot" />
                            Live
                        </span>
                        <span className="ai-metrics-item"><strong>{reqPerSec.toLocaleString()}</strong> req/s</span>
                        <span className="ai-metrics-item"><strong>{latency}ms</strong> avg latency</span>
                        <span className="ai-metrics-item"><strong>99.98%</strong> uptime</span>
                    </div>
                </div>

                <div className="ai-visual-wrapper scroll-reveal scale-in delay-2">
                    <div className="ai-particles">
                        {Array.from({ length: 14 }, (_, i) => (
                            <span
                                key={i}
                                className="ai-particle"
                                style={{
                                    left: `${(i * 7.3) % 100}%`,
                                    animationDuration: `${5 + (i % 5)}s`,
                                    animationDelay: `${i * 0.4}s`,
                                }}
                            />
                        ))}
                    </div>

                    <div className="ai-scan-zone">
                        <div className="ai-scanner-beam">
                            <img src="https://paimage.picode.in/aivora/php/assets/img/industries/gradient02.png" alt="scanner" />
                        </div>
                    </div>

                    <div className="ai-streams-container">
                        <Column items={rotate(0, 5)}  speed="2s"   delay="0s" />
                        <Column items={rotate(3, 5)}  speed="3.5s" delay="-4s" />
                        <Column items={rotate(6, 5)}  speed="4.5s" delay="-8s" />
                        <Column items={rotate(9, 5)}  speed="3s"   delay="-2s" />
                        <Column items={rotate(12, 5)} speed="4s"   delay="-10s" />
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
                        <div className="ai-core-glow" />
                        <div className="ai-core-ring ai-core-ring-outer" />
                        <div className="ai-core-ring ai-core-ring-inner" />
                        <img src="https://paimage.picode.in/aivora/php/assets/img/industries/indus-logo.png" alt="AI Center" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ai_showcase;
