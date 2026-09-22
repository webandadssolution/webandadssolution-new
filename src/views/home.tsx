import Hero from "../components/hero"
import Ticker from "../components/ticker"
import Who_we_are from "../components/who_we_are"
import Services from "../components/services"
import FAQ from "../components/faq"
import Our_team from "../components/our_team"
import Why_choose_us from "../components/why_choose_us"
import Ai_showcase from "../components/ai_showcase"
import Ai_visibility from "../components/ai_visibility"
import HomeAiShift from "../components/home_ai_shift"
import Industries from "../components/industries"
import Review from "../components/review"
import HomeAudience from "../components/home_audience"
import HomeProcess from "../components/home_process"
import HomeComparison from "../components/home_comparison"
import Achievements from "../components/achievements"
import "../styles/home-content.css"

// Each entry becomes a sticky card that slides over the one before it
const stackedSections = [
  { id: "services",      el: <Services /> },
  {
    id: "team",
    el: (
      <Our_team
        badge="● Team & Footprint"
        title="A Dedicated Digital Marketing Agency in USA Serving Ambitious Brands"
        subtitle="We are a dedicated digital marketing agency in USA serving ambitious brands nationwide. Our strategists bring hands-on experience in search optimization, performance ad management, and conversion engineering. When you work with Web and Ads Solution, you get an agile team that operates as a direct extension of your business."
      />
    ),
  },
  { id: "who-we-are",    el: <Who_we_are /> },
  { id: "why-us",        el: <Why_choose_us /> },
  
  { id: "ai-shift",      el: <HomeAiShift /> },
  { id: "audience",      el: <HomeAudience /> },
  { id: "process",       el: <HomeProcess /> },
  { id: "comparison",    el: <HomeComparison /> },
  
  { id: "ai",            el: <Ai_showcase /> },
  { id: "ai-visibility", el: <Ai_visibility /> },
  { id: "industries",    el: <Industries /> },
  { id: "achieve",       el: <Achievements /> },
  { id: "review",        el: <Review /> },
  { id: "faq",           el: <FAQ /> },
]

const Home = () => {
  return (
    <div className="home-container">
      <div className="global-decorations">
        <img src="/images/tech-circle.png" alt="Technology circle background decoration" className="decoration decoration-tech-circle" />
        <img src="/images/gears-spinner.png" alt="Spinning gears background decoration" className="decoration decoration-gears" />
      </div>

      {/* Hero & Ticker scroll normally — GSAP parallax applies to hero */}
      <Hero />
      <Ticker />

      {/* Stacking card sections — each one slides over the previous */}
      {stackedSections.map(({ id, el }, i) => (
        <div
          key={id}
          className="stack-panel"
          data-panel={i}
          style={{ zIndex: i + 2 }}
        >
          {el}
        </div>
      ))}
    </div>
  )
}

export default Home
