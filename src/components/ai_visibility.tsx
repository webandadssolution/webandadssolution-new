"use client"

import { useEffect, useRef, useState } from "react"
import type { MouseEvent as ReactMouseEvent } from "react"
import gsap from "gsap"
import { FaComments, FaRobot, FaGlobe, FaSearch } from "react-icons/fa"
import "../styles/ai_visibility.css"

const FULL_QUERY = "wedding photographers in Westland, MI"
const FULL_ANSWER =
  "That Personal Touch Photography is a top-rated local studio with 20+ years of experience, offering albums, prints, engagement shoots, and full wedding coverage — known for personalized service and attention to detail."
const BRAND = "That Personal Touch Photography"
const BRAND_URL = "https://www.thatpersonaltouchphotography.com/"

type Phase = "idle" | "query" | "thinking" | "answer" | "sourcing" | "done"

const jitter = (base: number, spread: number) => base + Math.random() * spread

const Ai_visibility = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const demoRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  const [phase, setPhase] = useState<Phase>("idle")
  const [queryText, setQueryText] = useState("")
  const [answerText, setAnswerText] = useState("")

  // Kick off the demo once it scrolls into view, then it loops on its own
  useEffect(() => {
    const el = demoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          setPhase("query")
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Type the search query, char by char with human-like jitter
  useEffect(() => {
    if (phase !== "query") return
    setQueryText("")
    setAnswerText("")
    let i = 0
    let timeoutId: ReturnType<typeof setTimeout>
    const tick = () => {
      i++
      setQueryText(FULL_QUERY.slice(0, i))
      if (i < FULL_QUERY.length) {
        timeoutId = setTimeout(tick, jitter(20, 40))
      } else {
        timeoutId = setTimeout(() => setPhase("thinking"), 500)
      }
    }
    timeoutId = setTimeout(tick, jitter(20, 40))
    return () => clearTimeout(timeoutId)
  }, [phase])

  // "AI thinking" pause
  useEffect(() => {
    if (phase !== "thinking") return
    const t = setTimeout(() => setPhase("answer"), jitter(700, 500))
    return () => clearTimeout(t)
  }, [phase])

  // Type the AI answer, char by char with human-like jitter
  useEffect(() => {
    if (phase !== "answer") return
    let i = 0
    let timeoutId: ReturnType<typeof setTimeout>
    const tick = () => {
      i++
      setAnswerText(FULL_ANSWER.slice(0, i))
      if (i < FULL_ANSWER.length) {
        timeoutId = setTimeout(tick, jitter(8, 20))
      } else {
        timeoutId = setTimeout(() => setPhase("sourcing"), 350)
      }
    }
    timeoutId = setTimeout(tick, jitter(8, 20))
    return () => clearTimeout(timeoutId)
  }, [phase])

  // Brief "finding sources" spinner before citations land
  useEffect(() => {
    if (phase !== "sourcing") return
    const t = setTimeout(() => setPhase("done"), 700)
    return () => clearTimeout(t)
  }, [phase])

  // Hold the finished answer, then loop back to the query for a live feel
  useEffect(() => {
    if (phase !== "done") return
    const t = setTimeout(() => setPhase("query"), 4200)
    return () => clearTimeout(t)
  }, [phase])

  const renderAnswer = (text: string) => {
    const parts = text.split(new RegExp(`(${BRAND})`, "g"))
    return parts.map((part, idx) =>
      part === BRAND ? (
        <strong key={idx} className="ai-chat-highlight">{part}</strong>
      ) : (
        <span key={idx}>{part}</span>
      )
    )
  }

  const items = [
    {
      icon: FaComments,
      title: "AEO (Answer Engine Optimization)",
      description:
        "Search is becoming more conversational, with users asking complete questions instead of typing simple keywords. Our AEO strategies help position your content for featured snippets, voice search, and direct answer results, making it easier for search engines to recognize your business as a trusted source of information.",
    },
    {
      icon: FaRobot,
      title: "GEO (Generative Engine Optimization)",
      description:
        "As AI-powered search experiences continue to evolve, visibility depends on more than rankings alone. GEO focuses on optimizing your content, authority signals, and website structure so AI platforms can better understand, reference, and recommend your business within generated search responses.",
    },
    {
      icon: FaGlobe,
      title: "AI Platform Visibility",
      description:
        "Customers are increasingly discovering businesses through AI tools and conversational platforms. We help strengthen your presence across emerging AI-driven search environments by creating well-structured, authoritative content that improves discoverability and helps your brand remain visible wherever users seek answers and recommendations.",
    },
  ]

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index]
    if (!card || window.innerWidth < 768) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    card.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    card.style.setProperty("--my", `${e.clientY - rect.top}px`)

    gsap.to(card, {
      rotateY: x * 0.045,
      rotateX: -y * 0.045,
      transformPerspective: 800,
      y: -8,
      ease: "power2.out",
      duration: 0.5,
    })

    const icon = card.querySelector(".ai-visibility-icon")
    if (icon) {
      gsap.to(icon, {
        x: x * 0.07,
        y: y * 0.07,
        z: 50,
        rotateY: x * 0.03,
        ease: "power2.out",
        duration: 0.5,
      })
    }
  }

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index]
    if (!card) return

    gsap.to(card, { rotateY: 0, rotateX: 0, y: 0, ease: "power3.out", duration: 0.7 })

    const icon = card.querySelector(".ai-visibility-icon")
    if (icon) {
      gsap.to(icon, { x: 0, y: 0, z: 0, rotateY: 0, ease: "power3.out", duration: 0.7 })
    }
  }

  return (
    <section className="ai-visibility-section">
      <div className="ai-visibility-container">
        <div className="ai-visibility-header scroll-reveal">
          <span className="ai-visibility-badge">● The Future of Search</span>
          <h2 className="ai-visibility-title">Built for the AI Search Era</h2>
        </div>

        <div className="ai-chat-demo scroll-reveal scale-in delay-1" ref={demoRef}>
          <div className="ai-chat-demo-border" />
          <div className="ai-chat-demo-window">
            <div className="ai-chat-demo-topbar">
              <span className="ai-chat-demo-dot dot-red" />
              <span className="ai-chat-demo-dot dot-yellow" />
              <span className="ai-chat-demo-dot dot-green" />
              <span className="ai-chat-live-badge">
                <span className="ai-chat-live-dot" />
                Live Preview
              </span>
            </div>

            <div className="ai-chat-message-row ai-chat-message-user">
              <div className="ai-chat-bubble ai-chat-user-bubble">
                <FaSearch className="ai-chat-search-icon" />
                <span className="ai-chat-query-text">
                  {queryText}
                  {phase === "query" && <span className="ai-chat-cursor" />}
                </span>
              </div>
              <div className="ai-chat-avatar ai-chat-user-avatar">You</div>
            </div>

            <div className="ai-chat-message-row ai-chat-message-ai">
              <div className="ai-chat-answer-avatar">
                <FaRobot />
              </div>
              <div className="ai-chat-answer-body">
                <span className="ai-chat-answer-label">AI Overview</span>

                <div className="ai-chat-bubble ai-chat-ai-bubble">
                  {phase === "thinking" && (
                    <div className="ai-chat-thinking">
                      <span /><span /><span />
                    </div>
                  )}

                  {(phase === "answer" || phase === "sourcing" || phase === "done") && (
                    <p className="ai-chat-answer-text">
                      {renderAnswer(answerText)}
                      {phase === "answer" && <span className="ai-chat-cursor" />}
                    </p>
                  )}

                  {phase === "sourcing" && (
                    <div className="ai-chat-sourcing">
                      <span className="ai-chat-spinner" />
                      Finding sources…
                    </div>
                  )}

                  {phase === "done" && (
                    <div className="ai-chat-sources">
                      <a
                        href={BRAND_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ai-chat-source-chip"
                      >
                        <span className="source-index">1</span>thatpersonaltouchphotography.com
                      </a>
                      <span className="ai-chat-source-chip"><span className="source-index">2</span>WeddingWire</span>
                      <span className="ai-chat-source-chip"><span className="source-index">3</span>Google Business Profile</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="ai-chat-composer">
              <span className="ai-chat-composer-text">Ask anything about your business…</span>
              <span className="ai-chat-composer-send">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </span>
            </div>
          </div>
          <p className="ai-chat-demo-caption">Based on a real ChatGPT result — this is how strong AEO/GEO gets a business cited in AI answers.</p>
        </div>

        <div className="ai-visibility-grid scroll-reveal delay-2">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className="ai-visibility-card"
                style={{ animationDelay: `${i * 0.08}s` }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <div className="ai-visibility-card-glow" />
                <div className="ai-visibility-icon">
                  <Icon />
                </div>
                <h3 className="ai-visibility-card-title">{item.title}</h3>
                <p className="ai-visibility-card-desc">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Ai_visibility
