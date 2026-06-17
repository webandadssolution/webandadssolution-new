"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"

// ── Scroll-reveal via IntersectionObserver ───────────────────────────────────
function ScrollAnimator() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    )

    const targets = document.querySelectorAll(".scroll-reveal:not(.is-visible)")
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return null
}

// ── Custom magnetic cursor ────────────────────────────────────────────────────
function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const rafRef    = useRef<number | null>(null)
  const mouse     = useRef({ x: 0, y: 0 })
  const follower  = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Instant dot follows mouse precisely
    const onMove = (e: MouseEvent) => {
      setIsVisible(true)
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      gsap.set(dot, { x: e.clientX - 4, y: e.clientY - 4 })
    }

    // Ring lags behind for smooth follow
    const tick = () => {
      follower.current.x += (mouse.current.x - follower.current.x - 19) * 0.13
      follower.current.y += (mouse.current.y - follower.current.y - 19) * 0.13
      gsap.set(ring, { x: follower.current.x, y: follower.current.y })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    // Hover state on interactive elements
    const onEnter = () => {
      dot.classList.add("is-hovering")
      ring.classList.add("is-hovering")
    }
    const onLeave = () => {
      dot.classList.remove("is-hovering")
      ring.classList.remove("is-hovering")
    }

    window.addEventListener("mousemove", onMove)

    // Delegate hover tracking to document
    const delegateEnter = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest("a, button, [role='button'], .portfolio-card, .industry-card, .review-card, .service-card")) {
        onEnter()
      }
    }
    const delegateLeave = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest("a, button, [role='button'], .portfolio-card, .industry-card, .review-card, .service-card")) {
        onLeave()
      }
    }

    document.addEventListener("mouseover", delegateEnter)
    document.addEventListener("mouseout", delegateLeave)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", delegateEnter)
      document.removeEventListener("mouseout", delegateLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease" }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease" }} />
    </>
  )
}

export default function SiteChrome() {
  return (
    <>
      <CustomCursor />
      <ScrollAnimator />
    </>
  )
}
