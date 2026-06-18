"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function createProgressBar(): HTMLDivElement {
  const existing = document.querySelector(".gsap-scroll-progress") as HTMLDivElement | null
  if (existing) return existing
  const bar = document.createElement("div")
  bar.className = "gsap-scroll-progress"
  document.body.appendChild(bar)
  return bar
}

const GsapEffects = () => {
  const pathname = usePathname()

  useEffect(() => {
    let ctx: ReturnType<typeof gsap.context> | undefined

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {

        // ── 1. SCROLL PROGRESS BAR ──────────────────────────────────────────
        const progressBar = createProgressBar()
        gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" })
        ScrollTrigger.create({
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => gsap.set(progressBar, { scaleX: self.progress })
        })

        // ── 2. HERO PARALLAX ────────────────────────────────────────────────
        if (document.querySelector(".hero-content")) {
          gsap.to(".hero-text-wrapper", {
            y: -80, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 }
          })
          gsap.to(".hero-image-strip img", {
            y: 60, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 }
          })
        }

        // ── 3. SECTION HEADING REVEALS (clip-path slide up) ─────────────────
        const headings = [
          ".who-we-are-title", ".services-title", ".portfolio-title",
          ".team-title", ".choose-us-title", ".ai-showcase-title",
          ".industries-title", ".achievements-title", ".review-title",
          ".blog-title", ".faq-title",
        ]
        headings.forEach((sel) => {
          const el = document.querySelector(sel)
          if (!el) return
          gsap.fromTo(el,
            { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" },
            {
              y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)",
              duration: 1, ease: "power4.out",
              scrollTrigger: { trigger: el, start: "top 95%", once: true }
            }
          )
        })

        // ── 4. BADGE REVEALS ────────────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>([
          ".services-badge", ".portfolio-badge", ".team-badge",
          ".choose-us-badge", ".industries-badge", ".achievements-badge",
          ".review-badge", ".blog-badge", ".who-we-are-badge",
          ".stats-badge", ".ai-showcase-badge", ".faq-badge"
        ]).forEach((el) => {
          if (!el) return
          gsap.fromTo(el,
            { opacity: 0, y: 14, scale: 0.9 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(2)",
              scrollTrigger: { trigger: el, start: "top 96%", once: true }
            }
          )
        })

        // ── 5. SECTION TITLE (.section-title class) ─────────────────────────
        const sectionTitle = document.querySelector(".section-title")
        if (sectionTitle) {
          gsap.fromTo(sectionTitle,
            { y: 50, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: sectionTitle, start: "top 95%", once: true }
            }
          )
        }

        // ── 6. SECTION SUBTITLES / DESCRIPTIONS ─────────────────────────────
        gsap.utils.toArray<HTMLElement>([
          ".services-subtitle", ".portfolio-subtitle", ".team-subtitle",
          ".who-we-are-subtitle", ".choose-us-subtitle", ".industries-subtitle",
          ".achievements-subtitle", ".review-subtitle", ".blog-subtitle",
          ".faq-subtitle", ".section-subtitle", ".section-desc",
          ".who-we-are-desc", ".services-desc"
        ]).forEach((el) => {
          if (!el) return
          gsap.fromTo(el,
            { opacity: 0, y: 28 },
            {
              opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 95%", once: true }
            }
          )
        })

        // ── 7. ANIMATED NUMBER COUNTERS ─────────────────────────────────────
        gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
          const original = (el.textContent || "").trim()
          const numStr   = original.replace(/[^0-9.]/g, "")
          const final    = parseFloat(numStr)
          const suffix   = original.replace(/[0-9.,]/g, "")
          if (!final) return
          const proxy = { val: 0 }
          gsap.to(proxy, {
            val: final, duration: 2.2, ease: "power2.out",
            onUpdate() { el.textContent = Math.round(proxy.val).toLocaleString() + suffix },
            scrollTrigger: { trigger: el, start: "top 94%", once: true }
          })
        })

        // ── 8. STAT CARDS STAGGER ────────────────────────────────────────────
        const statCards = gsap.utils.toArray<HTMLElement>(".stat-card")
        if (statCards.length) {
          gsap.fromTo(statCards,
            { opacity: 0, y: 50, scale: 0.92 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.7, stagger: 0.12, ease: "back.out(1.4)",
              clearProps: "opacity,transform",
              scrollTrigger: { trigger: ".stats-container", start: "top 92%", once: true }
            }
          )
        }

        // ── 9. SERVICE CARDS STAGGER ─────────────────────────────────────────
        const serviceCards = gsap.utils.toArray<HTMLElement>(".service-card")
        if (serviceCards.length) {
          gsap.fromTo(serviceCards,
            { opacity: 0, y: 55, rotateX: 10 },
            {
              opacity: 1, y: 0, rotateX: 0,
              duration: 0.75, stagger: 0.09, ease: "back.out(1.3)",
              clearProps: "opacity,transform",
              scrollTrigger: { trigger: serviceCards[0].closest("section, .services-section") || serviceCards[0], start: "top 92%", once: true }
            }
          )
        }

        // ── 10. PORTFOLIO CARDS STAGGER ──────────────────────────────────────
        const portfolioCards = gsap.utils.toArray<HTMLElement>(".portfolio-card")
        if (portfolioCards.length) {
          gsap.fromTo(portfolioCards,
            { opacity: 0, y: 60, scale: 0.92 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.75, stagger: 0.1, ease: "power3.out",
              clearProps: "opacity,transform",
              scrollTrigger: {
                trigger: portfolioCards[0].parentElement || portfolioCards[0],
                start: "top 92%", once: true
              }
            }
          )
        }

        // ── 11. TEAM CARDS STAGGER ───────────────────────────────────────────
        const teamCards = gsap.utils.toArray<HTMLElement>(".team-card")
        if (teamCards.length) {
          gsap.fromTo(teamCards,
            { opacity: 0, y: 50, scale: 0.94 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.65, stagger: 0.08, ease: "power3.out",
              clearProps: "opacity,transform",
              scrollTrigger: { trigger: ".team-scroller-viewport", start: "top 92%", once: true }
            }
          )
        }

        // ── 12. REVIEW CARDS STAGGER ─────────────────────────────────────────
        const reviewCards = gsap.utils.toArray<HTMLElement>(".review-card")
        if (reviewCards.length) {
          gsap.fromTo(reviewCards,
            { opacity: 0, x: -40, scale: 0.95 },
            {
              opacity: 1, x: 0, scale: 1,
              duration: 0.6, stagger: 0.08, ease: "power2.out",
              clearProps: "opacity,transform",
              scrollTrigger: { trigger: ".review-track", start: "top 94%", once: true }
            }
          )
        }

        // ── 13. BLOG CARDS STAGGER ───────────────────────────────────────────
        const blogCards = gsap.utils.toArray<HTMLElement>(".blog-card")
        if (blogCards.length) {
          gsap.fromTo(blogCards,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out",
              clearProps: "opacity,transform",
              scrollTrigger: { trigger: ".blog-cards-right-group", start: "top 92%", once: true }
            }
          )
        }

        // ── 14. INDUSTRY CARDS STAGGER ───────────────────────────────────────
        const industryCards = gsap.utils.toArray<HTMLElement>(".industry-card")
        if (industryCards.length) {
          gsap.fromTo(industryCards,
            { opacity: 0, scale: 0.88, y: 30 },
            {
              opacity: 1, scale: 1, y: 0,
              duration: 0.5, stagger: 0.06, ease: "back.out(1.6)",
              scrollTrigger: { trigger: ".industries-slider", start: "top 92%", once: true }
            }
          )
        }

        // ── 15. FAQ ITEMS STAGGER ────────────────────────────────────────────
        const faqItems = gsap.utils.toArray<HTMLElement>(".faq-item")
        if (faqItems.length) {
          gsap.fromTo(faqItems,
            { opacity: 0, x: 40 },
            {
              opacity: 1, x: 0,
              duration: 0.55, stagger: 0.08, ease: "power2.out",
              scrollTrigger: { trigger: ".faq-accordion", start: "top 92%", once: true }
            }
          )
        }

        // ── 16. WHO WE ARE — image + content reveal ──────────────────────────
        const whoImg = document.querySelector(".who-we-are-image, .who-we-are-img")
        if (whoImg) {
          gsap.fromTo(whoImg,
            { opacity: 0, x: -50, scale: 0.96 },
            {
              opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: whoImg, start: "top 94%", once: true }
            }
          )
          gsap.to(whoImg, {
            y: -30, ease: "none",
            scrollTrigger: { trigger: ".who-we-are-section", start: "top bottom", end: "bottom top", scrub: 1.4 }
          })
        }

        const whoContent = document.querySelector(".who-we-are-content, .who-we-are-text")
        if (whoContent) {
          gsap.fromTo(whoContent,
            { opacity: 0, x: 50 },
            {
              opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: whoContent, start: "top 94%", once: true }
            }
          )
        }

        // ── 17. WHY CHOOSE US — accordion/feature items ──────────────────────
        const whyItems = gsap.utils.toArray<HTMLElement>(".choose-item, .why-item, .accordion-item")
        if (whyItems.length) {
          gsap.fromTo(whyItems,
            { opacity: 0, x: 35 },
            {
              opacity: 1, x: 0,
              duration: 0.55, stagger: 0.08, ease: "power2.out",
              scrollTrigger: { trigger: whyItems[0].closest("section") || whyItems[0], start: "top 92%", once: true }
            }
          )
        }

        // ── 18. ACHIEVEMENTS — stats + form ──────────────────────────────────
        const achieveItems = gsap.utils.toArray<HTMLElement>(".achievement-stat, .achieve-item, .achievements-stat")
        if (achieveItems.length) {
          gsap.fromTo(achieveItems,
            { opacity: 0, y: 35 },
            {
              opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
              scrollTrigger: { trigger: ".achievements-container", start: "top 92%", once: true }
            }
          )
        }
        if (document.querySelector(".achievements-contact-form-card")) {
          gsap.fromTo(".achievements-contact-form-card",
            { opacity: 0, x: 50 },
            {
              opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
              scrollTrigger: { trigger: ".achievements-container", start: "top 92%", once: true }
            }
          )
        }

        // ── 19. SLIDER PAUSE OUT OF VIEWPORT ────────────────────────────────
        [
          { el: ".slider-track",    trigger: ".who-we-are-slider" },
          { el: ".review-track",    trigger: ".review-section" },
          { el: ".industries-track",trigger: ".industries-slider" },
          { el: ".team-grid",       trigger: ".team-scroller-viewport" },
        ].forEach(({ el: sel, trigger }) => {
          const el = document.querySelector(sel) as HTMLElement | null
          if (!el) return
          ScrollTrigger.create({
            trigger,
            start: "top bottom", end: "bottom top",
            onEnter:     () => (el.style.animationPlayState = "running"),
            onLeave:     () => (el.style.animationPlayState = "paused"),
            onEnterBack: () => (el.style.animationPlayState = "running"),
            onLeaveBack: () => (el.style.animationPlayState = "paused"),
          })
        })

        // ── 20. SECTION ENTRANCE ANIMATION (works on every screen size) ──────
        gsap.utils.toArray<HTMLElement>(".stack-panel").forEach((panel) => {
          gsap.fromTo(panel,
            { y: 70, opacity: 0, scale: 0.97 },
            {
              y: 0, opacity: 1, scale: 1,
              duration: 0.9,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: panel,
                start: "top 92%",
                once: true,
              }
            }
          )
        })

        // ── 21. SERVICES FAN ANIMATION ───────────────────────────────────────
        const servicesSection = document.querySelector(".services-section") as HTMLElement | null
        const servicesWrapper = document.querySelector(".services-cards-wrapper") as HTMLElement | null
        if (servicesSection && servicesWrapper && window.innerWidth >= 1200) {
          const servicesPanel = servicesSection.closest(".stack-panel")
          ScrollTrigger.create({
            trigger: servicesPanel || servicesSection,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              servicesSection.style.setProperty("--scroll-ratio", String(self.progress))
              servicesWrapper.style.setProperty("--scroll-ratio", String(self.progress))
            }
          })
        }

        // ── 22. FAQ IMAGES PARALLAX ──────────────────────────────────────────
        if (document.querySelector(".faq-images")) {
          gsap.to(".faq-images", {
            y: -60, ease: "none",
            scrollTrigger: { trigger: ".faq-section", start: "top bottom", end: "bottom top", scrub: 1.2 }
          })
        }

        // ── 23. FOOTER REVEAL ────────────────────────────────────────────────
        if (document.querySelector(".footer-site")) {
          gsap.fromTo(".footer-site",
            { opacity: 0.5, y: 50 },
            {
              opacity: 1, y: 0, duration: 1, ease: "power3.out",
              scrollTrigger: { trigger: ".footer-site", start: "top 92%", once: true }
            }
          )
        }

        // ── 24. SECTION DIVIDER LINE REVEAL ──────────────────────────────────
        gsap.utils.toArray<HTMLElement>(".section-divider").forEach((el) => {
          gsap.fromTo(el,
            { scaleX: 0 },
            {
              scaleX: 1, duration: 1, ease: "power3.inOut",
              scrollTrigger: { trigger: el, start: "top 95%", once: true }
            }
          )
        })

        // ── 25. SCROLL-REVEAL CLASS (IntersectionObserver fallback) ──────────
        // Extra scrub-based depth parallax on feature/highlight images
        gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
          gsap.to(el, {
            yPercent: -15, ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") || el,
              start: "top bottom", end: "bottom top", scrub: 1.5
            }
          })
        })

        // ── 26. TICKER SPEED BURST ON ENTER ─────────────────────────────────
        const ticker = document.querySelector(".ticker-wrapper, .ticker-section")
        const track  = document.querySelector(".ticker-track")
        if (ticker && track) {
          ScrollTrigger.create({
            trigger: ticker,
            start: "top 90%",
            once: true,
            onEnter: () => {
              gsap.fromTo(track,
                { x: 0 },
                { x: -20, duration: 0.3, ease: "power2.in",
                  onComplete: () => gsap.set(track, { x: 0 }) }
              )
            }
          })
        }

        // ── 27. HORIZONTAL CARD ROWS — alternating left/right slide ─────────
        document.querySelectorAll(".who-we-are-slider .slider-card").forEach((card, i) => {
          gsap.fromTo(card,
            { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
            {
              opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 95%", once: true }
            }
          )
        })

        // ── 28. AI SHOWCASE — streams fade in ────────────────────────────────
        const aiSection = document.querySelector(".ai-showcase-section")
        if (aiSection) {
          gsap.fromTo(".ai-streams-container",
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1, scale: 1, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: aiSection, start: "top 92%", once: true }
            }
          )
          gsap.fromTo(".ai-scan-zone",
            { opacity: 0 },
            {
              opacity: 1, duration: 0.6, delay: 0.4,
              scrollTrigger: { trigger: aiSection, start: "top 92%", once: true }
            }
          )
        }

        // ── 29. SCROLL-TRIGGERED BG TINT ON SECTIONS ────────────────────────
        // Subtle scale-up for section inner containers as they enter
        gsap.utils.toArray<HTMLElement>(".services-section, .portfolio-section, .team-section").forEach((sec) => {
          if (!sec) return
          const inner = sec.querySelector(".services-container, .portfolio-container, .team-container")
          if (!inner) return
          gsap.fromTo(inner,
            { scale: 0.98 },
            {
              scale: 1, duration: 0.8, ease: "power2.out",
              scrollTrigger: { trigger: sec, start: "top 95%", once: true }
            }
          )
        })

        // ── 30. BLOG FEATURED (left col) SLIDE IN ────────────────────────────
        const blogFeatured = document.querySelector(".blog-featured, .blog-main-card, .blog-cards-left")
        if (blogFeatured) {
          gsap.fromTo(blogFeatured,
            { opacity: 0, x: -50 },
            {
              opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
              clearProps: "opacity,transform",
              scrollTrigger: { trigger: blogFeatured, start: "top 92%", once: true }
            }
          )
        }

        // Force ScrollTrigger to refresh and calculate correct offsets
        ScrollTrigger.refresh()
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      if (ctx) {
        ctx.revert()
      }
      const pb = document.querySelector(".gsap-scroll-progress")
      if (pb) pb.remove()
    }
  }, [pathname])

  return null
}

export default GsapEffects
