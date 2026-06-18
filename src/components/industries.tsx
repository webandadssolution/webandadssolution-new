import "../styles/industries.css";

const Industries = () => {
  const rowOne = [
    {
      name: "Marketing",
      tag: "Digital Growth",
      icon: "/home-icon/Marketing.png",
    },
    {
      name: "E-commerce",
      tag: "Online Retail",
      icon: "/home-icon/E commerce.png",
    },
    {
      name: "Healthcare",
      tag: "Digital Health",
      icon: "/home-icon/health care.png",
    },
    {
      name: "Real Estate",
      tag: "Property Tech",
      icon: "/home-icon/real estate.png",
    },
    {
      name: "Education",
      tag: "EdTech",
      icon: "/home-icon/Education.png",
    },
    {
      name: "Technology",
      tag: "SaaS & Apps",
      icon: "/home-icon/technology-icon.png",
    },
  ];

  const rowTwo = [
    {
      name: "Finance",
      tag: "FinTech",
      icon: "/home-icon/Finance.png",
    },
    {
      name: "Logistics",
      tag: "Supply Chain",
      icon: "/home-icon/Logistics.png",
    },
    {
      name: "Manufacturing",
      tag: "Industry 4.0",
      icon: "/home-icon/Manufacturing.png",
    },
    {
      name: "Hospitality",
      tag: "Travel & Tourism",
      icon: "/home-icon/Hospitality.png",
    },
    {
      name: "Legal",
      tag: "LegalTech",
      icon: "/home-icon/Legal.png",
    },
    {
      name: "Food & Beverage",
      tag: "Restaurant Tech",
      icon: "/home-icon/Food & Beverage.png",
    },
  ];

  const Card = ({
    item,
    index,
  }: {
    item: { name: string; tag: string; icon: string }
    index: number
  }) => (
    <div className="industry-card">
      <div className="industry-card-glow" />

      <div className="industry-card-header">
        <span className="industry-card-num">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="industry-card-dot" />
      </div>

      <div className="industry-card-body">
        <div className="industry-card-icon-wrapper">
          <img
            src={item.icon}
            alt={item.name}
            className="industry-card-icon-img"
          />
        </div>

        <div className="industry-card-info">
          <h3 className="industry-card-name">{item.name}</h3>
          <span className="industry-card-tag">{item.tag}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <span className="industries-badge">● Industries We Serve</span>

          <h2 className="industries-title">
            Built for Every
            <br />
            <span className="industries-title-accent">Industry.</span>
          </h2>

          <p className="industries-subtitle">
            From startups to enterprises — we deliver results across every
            vertical.
          </p>
        </div>
      </div>

      <div className="industries-slider">
        <div className="industries-track track-left">
          {[...rowOne, ...rowOne].map((item, i) => (
            <Card
              key={`r1-${i}`}
              item={item}
              index={i % rowOne.length}
            />
          ))}
        </div>
      </div>

      <div className="industries-slider">
        <div className="industries-track track-right">
          {[...rowTwo, ...rowTwo].map((item, i) => (
            <Card
              key={`r2-${i}`}
              item={item}
              index={i % rowTwo.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;