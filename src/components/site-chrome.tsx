"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

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

    const observeNew = (root: ParentNode) => {
      root.querySelectorAll(".scroll-reveal:not(.is-visible)").forEach((el) => observer.observe(el))
    }

    observeNew(document)

    // Content added after the initial scan (tab/filter switches, client-side
    // re-renders, etc.) still needs to be picked up — otherwise it keeps the
    // scroll-reveal class with no .is-visible and stays invisible forever.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches(".scroll-reveal:not(.is-visible)")) observer.observe(node)
          observeNew(node)
        })
      })
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [pathname])

  return null
}

// ── Custom cursor (desktop/mouse only) — fully imperative, no React state ────
function CustomCursor() {
  useEffect(() => {
    // Skip on touch / stylus devices
    if (window.matchMedia("(hover: none)").matches) return

    const dot  = document.createElement("div")
    const ring = document.createElement("div")
    dot.className  = "cursor-dot"
    ring.className = "cursor-ring"
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let rafId: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      dot.style.transform  = `translate(${mx - 5}px,${my - 5}px)`
      rx += (mx - rx - 19) * 0.13
      ry += (my - ry - 19) * 0.13
      ring.style.transform = `translate(${rx}px,${ry}px)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const over = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.("a,button,[role='button'],.service-card,.review-card")) {
        dot.classList.add("is-hovering"); ring.classList.add("is-hovering")
      }
    }
    const out = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.("a,button,[role='button'],.service-card,.review-card")) {
        dot.classList.remove("is-hovering"); ring.classList.remove("is-hovering")
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover",  over)
    document.addEventListener("mouseout",   out)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover",  over)
      document.removeEventListener("mouseout",   out)
      cancelAnimationFrame(rafId)
      dot.remove(); ring.remove()
    }
  }, [])

  return null
}

export default function SiteChrome() {
  return (
    <>
      <CustomCursor />
      <ScrollAnimator />
    </>
  )
}
