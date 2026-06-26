import "../styles/who_we_are.css"

const Who_we_are = () => {
  const images = [
    
    "images/New Project (24).png",
    "images/New Project (29).png",
    "images/New Project (25).png",
    "images/New Project (26).png",
    "images/New Project (27).png",
    "images/New Project (28).png",      
  ];

  // Creates a 4-layer stack for the "inside-out" tunnel effect
  const ImageStack = ({ src, alt }: { src: string; alt: string }) => (
    <div className="who-we-are-img-stack">
      <img src={src} alt={alt} className="who-we-are-img-layer who-we-are-layer-1" />
      <img src={src} alt={alt} className="who-we-are-img-layer who-we-are-layer-2" />
      <img src={src} alt={alt} className="who-we-are-img-layer who-we-are-layer-3" />
      <img src={src} alt={alt} className="who-we-are-img-layer who-we-are-layer-4" />
    </div>
  );

  return (
    <section className="who-we-are-section">
        <div className="who-we-are-container">
            <div className="who-we-are-header scroll-reveal">
                <span className="who-we-are-badge">● Who We Are</span>
                <h2 className="who-we-are-title">
                    Ai Driven-Creative 
                    <span>
                        <img src="/images/icons/icon-3.png" alt='image' />
                    </span>
                   Digital Marketing,Designed
                    <span>
                        <img src="/images/icons/icon-4.png" alt='image' />
                    </span>
                    Business Goals.
                    <span>
                        <img src="/images/icons/icon-1.png" alt='image' />
                    </span>
                </h2>
            </div>

            <div className="who-we-are-slider scroll-reveal delay-2">
                <div className="slider-track">
                    {images.map((img, index) => (
                        <ImageStack key={`img-1-${index}`} src={img} alt={`Slide ${index}`} />
                    ))}
                    {images.map((img, index) => (
                        <ImageStack key={`img-2-${index}`} src={img} alt={`Slide ${index}-dup`} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Who_we_are