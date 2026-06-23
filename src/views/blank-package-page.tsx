import "../styles/sp-base.css"

const BlankPackagePage = ({ title }: { title: string }) => (
  <div className="sp-page">
    <div className="sp-container" style={{ paddingTop: 160, paddingBottom: 160, textAlign: "center" }}>
      <h1 className="sp-h2">{title}</h1>
    </div>
  </div>
)

export default BlankPackagePage
