import "../styles/home-content.css"

const columns = ["Web and Ads Solution", "Legacy Retainer Agencies", "Solo Freelancers"]

const rows = [
  {
    feature: "AI Search Optimization (AEO/GEO)",
    cells: ["Integrated natively", "Rarely offered / outdated", "Hit or miss"],
  },
  {
    feature: "Account Management",
    cells: ["Senior growth strategists", "Junior account coordinators", "Single point of failure"],
  },
  {
    feature: "Strategy & Alignment",
    cells: ["Customized growth roadmaps", "One-size-fits-all templates", "Task-focused / reactive"],
  },
  {
    feature: "Reporting Focus",
    cells: ["Pipeline, leads & cost-per-lead", "Clicks & vanity metrics", "Basic output logs"],
  },
]

const HomeComparison = () => {
  return (
    <section className="home-compare-section">
      <div className="home-section-container">
        <div className="home-section-header scroll-reveal">
          <span className="home-section-badge">● Comparison Grid</span>
          <h2 className="home-section-title">
            Why Brands Choose Our Digital Marketing Company Over Traditional Agencies
          </h2>
        </div>

        <div className="home-compare-scroll scroll-reveal delay-2">
          <table className="home-compare-table">
            <thead>
              <tr>
                <th scope="col">Feature / Capability</th>
                {columns.map((col, i) => (
                  <th key={col} scope="col" className={i === 0 ? "home-compare-us" : undefined}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  {row.cells.map((cell, i) => (
                    <td key={cell} className={i === 0 ? "home-compare-us" : undefined}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default HomeComparison
