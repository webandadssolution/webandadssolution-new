import Hero from "../components/hero"
import Ticker from "../components/ticker"
import Who_we_are from "../components/who_we_are"
import Stats from "../components/stats"
import Services from "../components/services"
import FAQ from "../components/faq"
import Our_team from "../components/our_team"
// import Portfolio from "../components/portfolio"
import Review from "../components/review"
import Why_choose_us from "../components/why_choose_us"
import Ai_showcase from "../components/ai_showcase"
import Ai_visibility from "../components/ai_visibility"
import Industries from "../components/industries"
import Achievements from "../components/achievements"

// Each entry becomes a sticky card that slides over the one before it
const stackedSections = [
  { id: "services",   el: <Services /> },
  { id: "team",       el: <Our_team /> },
  { id: "who-we-are", el: <Who_we_are /> },
    // { id: "portfolio",  el: <Portfolio /> },  
  { id: "why-us",     el: <Why_choose_us /> },
  { id: "ai",         el: <Ai_showcase /> },
  { id: "ai-visibility", el: <Ai_visibility /> },
  { id: "industries", el: <Industries /> },
  { id: "achieve",    el: <Achievements /> },
  { id: "review",     el: <Review /> },
  { id: "faq",        el: <FAQ /> },
]

const Home = () => {
  return (
    <div className="home-container">
      <div className="global-decorations">
        <img src="/images/tech-circle.png" alt="" className="decoration decoration-tech-circle" />
        <img src="/images/gears-spinner.png" alt="" className="decoration decoration-gears" />
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
