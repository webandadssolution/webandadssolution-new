"use client"

import { useEffect, useRef, useState } from "react"
import "../styles/strategies.css"

const Strategies = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const strategies = [
    {
      id: 1,
      title: "Industry Expertise",
      description:
        "Our team consists of seasoned professionals with deep knowledge across various sectors, offering innovative, industry-specific insights and strategies.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Results-Driven Focus",
      description:
        "We target meaningful outcomes, ensuring that our efforts align with your core business goals—whether it's boosting traffic, increasing engagement, or driving conversions.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 20V10M12 20V4M6 20V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Tailored Approaches",
      description:
        "Every business is unique, and so are our strategies. We dive into your specific needs to deliver customized solutions that make a real impact.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Clear Communication",
      description:
        "We value transparency and keep you informed with detailed reports and updates, providing full insight into our progress and results.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Advanced Technology",
      description:
        "Stay ahead of the competition with our use of the latest digital tools and technologies that accelerate your growth and efficiency.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Dedicated Support",
      description:
        "Our strong client relationships are built on trust. Our support team stands ready to assist, providing expert guidance whenever required.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Proven Success",
      description:
        "Our portfolio of successful projects and satisfied clients demonstrates our commitment to excellence and transformative results.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])])
              }, index * 150)
            }
          })
        },
        { threshold: 0.2 },
      )

      if (card) observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="strategies-section">
      <div className="strategies-container">
        <div className="strategies-header">
          <span className="strategies-badge">DISCOVER OUR ADVANTAGE</span>
          <h2 className="strategies-title">
            Maximize Your Growth With <br />
            <span className="highlight">Expert Digital Strategies</span>
          </h2>
          <p className="strategies-description">
            Harness the power of proven methodologies and cutting-edge techniques to elevate your business to new
            heights
          </p>
        </div>

        <div className="strategies-orbital-wrapper">
          {/* Central Team Image */}
          <div className="strategies-center-image">
            <div className="center-image-border"></div>
            <img
              src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/10/team-02.png"
              alt="Team Member"
              className="team-image"
            />
          </div>

          {/* Orbital Cards */}
          <div className="strategies-orbital-cards">
            {strategies.map((strategy, index) => (
              <div
                key={strategy.id}
                ref={(el) => { cardsRef.current[index] = el }}
                className={`strategy-card orbital-card-${index + 1} ${visibleCards.includes(index) ? "visible" : ""}`}
              >
                <div className="strategy-icon">{strategy.icon}</div>
                <h3 className="strategy-title">{strategy.title}</h3>
                <p className="strategy-description">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategies
