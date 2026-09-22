import "../styles/home-content.css"

const steps = [
  {
    title: "The No-BS Audit",
    description:
      "We dissect your current digital footprint, competitor strategies, and search health to uncover immediate revenue opportunities.",
  },
  {
    title: "The Growth Blueprint",
    description:
      "We build a custom roadmap combining organic search, paid media, and conversion optimization aligned directly with your target goals.",
  },
  {
    title: "Agile Execution",
    description:
      "Our senior team launches campaigns fast, continuously testing ad copy, landing page layouts, and search signals.",
  },
  {
    title: "Transparent Scaling",
    description:
      "Access clear reporting dashboards and regular strategic alignment calls to double down on winning campaigns and eliminate wasted spend.",
  },
]

const HomeProcess = () => {
  return (
    <section className="home-process-section" id="process">
      <div className="home-section-container">
        <div className="home-section-header scroll-reveal">
          <span className="home-section-badge">● Our Process</span>
          <h2 className="home-section-title">4 Steps to Predictable Digital Growth</h2>
        </div>

        <ol className="home-process-steps scroll-reveal delay-2">
          {steps.map((step, i) => (
            <li key={step.title} className="home-process-step">
              <span className="home-process-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="home-process-title">{step.title}</h3>
              <p className="home-process-desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HomeProcess
