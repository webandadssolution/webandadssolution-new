import "../styles/who_we_are.css"

const Who_we_are = () => {
  const images = [
    "/virtual-assistant-working-remotely-with-laptop-and.jpg",
    "/website-development-team-illustration.jpg",
    "/content-marketing-team-illustration.jpg",
    "/social-media-marketing-team-illustration.jpg"
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
                    We help
                    <span>
                        <img src="https://paimage.picode.in/aivora/php/assets/img/icon/original-66948a0d81d.gif" alt='image' />
                    </span>
                    businesses grow and
                    <span>
                        <img src="https://paimage.picode.in/aivora/php/assets/img/icon/0deec720000b2066289b.gif" alt='image' />
                    </span>
                    scale with smart, data-driven AI agency
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