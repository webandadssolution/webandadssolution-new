import "../styles/blog.css"

const Blog = () => {
    const blogs = [
        {
            category: "SEO & Growth",
            title: "The Importance Of Anchor Text In Back-Links",
            excerpt: "Anchor text plays a critical role in link building. Discover why search engines prioritize natural text distribution and how to optimize your hyperlink tags for high-authority organic indexing.",
            image: "/content-marketing-team-illustration.jpg",
            date: "MARCH 24, 2025"
        },
        {
            category: "Tech & Audit",
            title: "Absolute Links Vs. Relative Links – SEO",
            excerpt: "Understanding the technical differences between absolute and relative URLs is essential for a clean crawl budget. Learn how directory resolution impacts search spiders.",
            image: "/seo-services-illustration.jpg",
            date: "APRIL 27, 2025"
        },
        {
            category: "Branding",
            title: "Incorporation Of Company Branding And SEO",
            excerpt: "Aligning your brand identity with your search engine optimization strategy creates a powerful digital presence. Discover how to sync visual branding with metadata profiles.",
            image: "/social-media-marketing.jpg",
            date: "MARCH 17, 2025"
        }
    ];

    const BlogImage = ({ src, alt }: { src: string; alt: string }) => (
        <div className="blog-card-img-wrapper">
            <img src={src} alt={alt} className="blog-card-img" />
        </div>
    );

    return (
        <section className="blog-section">
            <div className="blog-container">
                <div className="blog-grid">
                    <div className="blog-intro scroll-reveal from-left">
                        <div className="blog-header">
                            <span className="blog-badge">● Latest News</span>
                            <h2 className="blog-title">
                                Recent <br />
                                <span className="blog-title-accent">Journal</span>
                                <span>
                                    <img src="https://paimage.picode.in/aivora/php/assets/img/icon/original-9e54f87f13d.gif" alt="icon" />
                                </span>
                            </h2>
                        </div>
                        <button className="view-more-btn">
                            <span className="btn-text">EXPLORE THE JOURNAL</span>
                            <span className="btn-icon">↗</span>
                        </button>
                    </div>

                    <div className="blog-cards-right-group scroll-reveal from-right delay-2">
                        {/* Featured Post - Horizontal Editorial Layout */}
                        <div className="blog-card featured">
                            <div className="card-image">
                                <BlogImage src={blogs[0].image} alt={blogs[0].title} />
                            </div>
                            <div className="card-content">
                                <div>
                                    <span className="card-meta">
                                        {blogs[0].category} 
                                        <span className="card-meta-dot"></span> 
                                        <span className="card-date">{blogs[0].date}</span>
                                    </span>
                                    <h3>{blogs[0].title}</h3>
                                    <p className="card-excerpt">{blogs[0].excerpt}</p>
                                </div>
                                <span className="card-read-more">
                                    Read Story <span className="arrow">→</span>
                                </span>
                            </div>
                        </div>

                        {/* Subgrid - Two Column Cards */}
                        <div className="blog-cards-subgrid">
                            <div className="blog-card">
                                <div className="card-image">
                                    <BlogImage src={blogs[1].image} alt={blogs[1].title} />
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-meta">
                                            {blogs[1].category} 
                                            <span className="card-meta-dot"></span> 
                                            <span className="card-date">{blogs[1].date}</span>
                                        </span>
                                        <h3>{blogs[1].title}</h3>
                                    </div>
                                    <span className="card-read-more">
                                        Read Story <span className="arrow">→</span>
                                    </span>
                                </div>
                            </div>

                            <div className="blog-card">
                                <div className="card-image">
                                    <BlogImage src={blogs[2].image} alt={blogs[2].title} />
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-meta">
                                            {blogs[2].category} 
                                            <span className="card-meta-dot"></span> 
                                            <span className="card-date">{blogs[2].date}</span>
                                        </span>
                                        <h3>{blogs[2].title}</h3>
                                    </div>
                                    <span className="card-read-more">
                                        Read Story <span className="arrow">→</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;