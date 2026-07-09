import Link from "next/link"
import "../styles/thank-you-page.css"

const PARTICLE_COUNT = 14

const ThankYouPage = () => {
  return (
    <div className="ty-page">
      <div className="ty-grid" />
      <div className="ty-glow" />
      <div className="ty-particles">
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
          <span key={i} className="ty-particle" />
        ))}
      </div>

      <div className="ty-card">
        <div className="ty-check-wrap">
          <svg className="ty-check-svg" viewBox="0 0 120 120">
            <circle className="ty-check-ring" cx="60" cy="60" r="54" />
            <path className="ty-check-mark" d="M36 62 L52 78 L86 42" />
          </svg>
        </div>
        <h1 className="ty-title">Thank You!</h1>
        <p className="ty-sub">
          Your message has been sent successfully. Our team will get back to you within 2 business hours.
        </p>
        <Link href="/" className="ty-btn">Back to Home</Link>
      </div>
    </div>
  )
}

export default ThankYouPage
