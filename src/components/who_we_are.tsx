import "../styles/who_we_are.css"

const Who_we_are = () => {
  const images = [
    "images/New Project (24).png",
    "images/New Project (25).png",
    "images/New Project (26).png",
    "images/New Project (27).png",
    "images/New Project (28).png",
    "images/New Project (29).png"
    
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
                    Creative Digital 
                    <span>
                        <img src="https://paimage.picode.in/aivora/php/assets/img/icon/original-66948a0d81d.gif" alt='image' />
                    </span>
                   Marketing, Designed Around 
                    <span>
                        <img src="https://paimage.picode.in/aivora/php/assets/img/icon/0deec720000b2066289b.gif" alt='image' />
                    </span>
                    Business Goals.
                    <span>
                        <img src="https://paimage.picode.in/aivora/php/assets/img/icon/b10c3e43e836d32554bf.gif" alt='image' />
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