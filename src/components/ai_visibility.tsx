import "../styles/ai_visibility.css"

const Ai_visibility = () => {
  const items = [
    {
      icon: "💬",
      title: "AEO (Answer Engine Optimization)",
      description:
        "Search is becoming more conversational, with users asking complete questions instead of typing simple keywords. Our AEO strategies help position your content for featured snippets, voice search, and direct answer results, making it easier for search engines to recognize your business as a trusted source of information.",
    },
    {
      icon: "🤖",
      title: "GEO (Generative Engine Optimization)",
      description:
        "As AI-powered search experiences continue to evolve, visibility depends on more than rankings alone. GEO focuses on optimizing your content, authority signals, and website structure so AI platforms can better understand, reference, and recommend your business within generated search responses.",
    },
    {
      icon: "🌐",
      title: "AI Platform Visibility",
      description:
        "Customers are increasingly discovering businesses through AI tools and conversational platforms. We help strengthen your presence across emerging AI-driven search environments by creating well-structured, authoritative content that improves discoverability and helps your brand remain visible wherever users seek answers and recommendations.",
    },
  ]

  return (
    <section className="ai-visibility-section">
      <div className="ai-visibility-container">
        <div className="ai-visibility-header scroll-reveal">
          <span className="ai-visibility-badge">● The Future of Search</span>
          <h2 className="ai-visibility-title">Built for the AI Search Era</h2>
        </div>

        <div className="ai-visibility-grid scroll-reveal delay-2">
          {items.map((item, i) => (
            <div key={i} className="ai-visibility-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="ai-visibility-icon">{item.icon}</div>
              <h3 className="ai-visibility-card-title">{item.title}</h3>
              <p className="ai-visibility-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ai_visibility
