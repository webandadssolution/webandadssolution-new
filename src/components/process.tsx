"use client"
import { useEffect, useRef, useState } from "react"
import "../styles/process.css"

const Process = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProcess, setSelectedProcess] = useState(1)
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({})
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const autoCycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const processSteps = [
    {
      id: 1,
      title: "Research",
      color: "purple",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description:
        "We execute deep-dive market intelligence by vetting competitors, analyzing industry trends, and conducting stakeholder interviews. This foundational phase pinpoints critical white-space opportunities and establishes the key performance benchmarks that guide the entire strategic lifecycle.",
    },
    {
      id: 2,
      title: "Analysis",
      color: "green",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="8" y="2" width="8" height="4" rx="1" strokeWidth="2" />
          <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" strokeWidth="2" />
          <path d="M9 14h6M9 18h6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description:
        "We translate the raw insights from Research into a concrete strategic roadmap. This involves facilitating requirements workshops, defining the Minimum Viable Product (MVP), and documenting a robust solution architecture with clear, measurable business objectives.",
    },
    {
      id: 3,
      title: "Design",
      color: "pink",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
          <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
          <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
          <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
        </svg>
      ),
      description:
        "Our team crafts the visual and structural blueprint by developing high-fidelity wireframes, detailed user flows (UX), and captivating mockups (UI). We define the system architecture and select the optimal technology stack, guaranteeing the final product is both intuitive and highly scalable.",
    },
    {
      id: 4,
      title: "Develop",
      color: "blue",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description:
        "Our developers adhere to agile methodologies, translating the approved design into a fully functional product. We rigorously write clean, well-documented code and perform continuous unit and integration testing to ensure the final solution is robust, secure, and ready for deployment.",
    },
    {
      id: 5,
      title: "Implement",
      color: "orange",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description:
        "We manage the systematic launch of the product into the live environment. This includes careful configuration of infrastructure, meticulous data migration, and comprehensive end-user training, ensuring your team is fully prepared to manage and utilize the new system effectively.",
    },
    {
      id: 6,
      title: "Evaluate",
      color: "red",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="m9 12 2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description:
        "Our partnership continues post-launch with a focus on optimization and long-term success. We deploy real-time monitoring to track KPIs, actively gather user feedback, and rapidly deploy iterative improvements to guarantee sustained competitive advantage and maximum ROI.",
    },
  ]

  const toggleStep = (stepId: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }))
  }

  useEffect(() => {
    if (isVisible && !isMobile) {
      autoCycleTimerRef.current = setInterval(() => {
        setSelectedProcess((prev) => {
          return prev >= 6 ? 1 : prev + 1
        })
      }, 4000)
    }

    return () => {
      if (autoCycleTimerRef.current) {
        clearInterval(autoCycleTimerRef.current)
      }
    }
  }, [isVisible, isMobile, selectedProcess])

  const handleProcessClick = (processId: number) => {
    setSelectedProcess(processId)

    if (!isMobile) {
      if (autoCycleTimerRef.current) {
        clearInterval(autoCycleTimerRef.current)
      }
      autoCycleTimerRef.current = setInterval(() => {
        setSelectedProcess((prev) => {
          return prev >= 6 ? 1 : prev + 1
        })
      }, 4000)
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-container">
        <div className="process-hero">
          <div className="earth-globe">
            <img src="/images/earth-image.png" alt="Global Process" className="earth-image" />

            <div className="circles-container">
              {processSteps.map((step) => (
                <div key={`circle-${step.id}`} className={`circle-node circle-${step.id}`}></div>
              ))}
            </div>
          </div>

          <div className={`process-content ${isVisible ? "fade-in" : ""}`}>
            <div className="section-label">
              <span className="label-icon">✦</span>
              <span className="label-text">OUR INNOVATION PROCESS</span>
            </div>
            <h2 className="section-title">
              Step-By-Step Journey To <span className="highlight-text">Digital Excellence</span>
            </h2>
            <p className="section-description">
              We follow a proven methodology that transforms your vision into reality through systematic innovation and
              strategic execution.
            </p>
          </div>

          <div className="process-steps-container">
            {processSteps.map((step) => (
              <div
                key={`step-${step.id}`}
                className={`process-step-box step-box-${step.id} ${selectedProcess === step.id ? "active" : ""}`}
                onClick={() => handleProcessClick(step.id)}
              >
                <div className="step-icon-circle">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <div className="step-arrow-cap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {isMobile ? (
            // Show all process cards vertically on mobile
            processSteps.map((step) => (
              <div
                key={`card-${step.id}`}
                className={`process-content-card card-${step.color} ${isVisible ? "visible" : ""}`}
              >
                <div className="process-card-header">
                  <div className="card-icon-circle">{step.icon}</div>
                  <h3 className="process-card-title">{step.title}</h3>
                </div>
                <p className="process-card-description">{step.description}</p>
              </div>
            ))
          ) : (
            // Show single interactive card on desktop
            <div
              className={`process-content-card card-${processSteps[selectedProcess - 1].color} ${isVisible ? "visible" : ""}`}
              key={selectedProcess}
            >
              <div className="process-card-header">
                <div className="card-icon-circle">{processSteps[selectedProcess - 1].icon}</div>
                <h3 className="process-card-title">{processSteps[selectedProcess - 1].title}</h3>
              </div>
              <p className="process-card-description">{processSteps[selectedProcess - 1].description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Process
