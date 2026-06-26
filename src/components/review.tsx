"use client"

import React, { useEffect, useRef, useState } from "react"
import "../styles/review.css"

const reviews = [
    {
        rating: 5.0,
        text: "Nash and Yukta have truly become an invaluable part of both Bevilacqua Deck Building and Bevilacqua Homes. From day one, they brought a level of professionalism and care that you don't always find and it shows in everything they do.",
        name: "Anthony Bevilacqua",
        role: "United States",
        image: "/images/New Project (29) (1).jpg"
    },
    {
        rating: 5.0,
        text: "I highly recommend this company for their exceptional SEO services. Although I was initially hesitant about potential scams, their professional communication via phone and email put me at ease. After two months of working together, their results have been outstanding; they successfully ranked my business on the first page of Google.",
        name: "Tafarie Moses",
        role: "United Kingdom",
        image: "https://i.pravatar.cc/150?u=tafarie-moses"
    },
    {
        rating: 5.0,
        text: "Merci super wow gros gros merci",
        name: "Math-reparation",
        role: "Canada",
        image: "https://i.pravatar.cc/150?u=math-reparation"
    },
    {
        rating: 5.0,
        text: "I have worked with website builders before. The web and ads solution people have been outstanding. Always very patient to help me navigate their excellent instructions! They really know the best way to market a brand and my business! Aastha is the project manager. She is marvelous, well spoken and knowledgeable. I ask her to make a change and she gets right on it. Always available and happy to help!",
        name: "Chuck Rogers",
        role: "United States",
        image: "/client/chuck-rogers.jpg"
    },
    {
        rating: 5.0,
        text: "I am delighted to share my experience working with Aastha and Simi, two of the most experienced website builders I have ever known. From the very beginning, they were patient, attentive, and genuinely interested in understanding my ideas and goals. They guided me through every step of the process, explaining options clearly and making sure I felt confident about each decision.",
        name: "Wayne Bowen",
        role: "United Kingdom",
        image: "https://i.pravatar.cc/150?u=wayne-bowen"
    },
    {
        rating: 5.0,
        text: "Aastha and the webandadssolution team helped me with my business...Aastha is very patient and professional..my business now is better; can't wait to upgrade to their social media services..",
        name: "Jacky Huang",
        role: "United States",
        image: "https://i.pravatar.cc/150?u=jacky-huang"
    },
    {
        rating: 5.0,
        text: "Aastha and her team are excellent to work with. They have delivered consistent positive results in a very difficult product category. Routinely I have challenged them to better understand our products and our industry and they step up each time. Aastha is a pro and is great to work with on all account matters.",
        name: "Tim",
        role: "United States",
        image: "https://i.pravatar.cc/150?u=tim-us"
    },
    {
        rating: 5.0,
        text: "Web and ads solutions was a great choice for me. I was frustrated with former companies and i was lucky to find these guys. I found them to be very knowledgeable, honest, and dependable. I dealt with Aastha and she was sweet, patient and extremely easy to get along with and creative. I would recommend them to anyone.",
        name: "Anthony Calderaio",
        role: "United States",
        image: "/client/anthony-calderaio.jpg"
    },
    {
        rating: 5.0,
        text: "I have found Aastha and team at Webandadssolution to be fantastic to work with. Their communication and attention to detail was very much appreciated by me.",
        name: "David Soellaart",
        role: "Australia",
        image: "https://i.pravatar.cc/150?u=david-soellaart"
    },
    {
        rating: 4.0,
        text: "The project manager assigned to our site was very quick to respond to questions and was able to fix quite a few issues with our website in a very short period of time. I am very pleased I went with their service.",
        name: "Linda L.",
        role: "United States",
        image: "https://i.pravatar.cc/150?u=linda-l"
    },
    {
        rating: 5.0,
        text: "They were great and they explained everything to me throughout the process!",
        name: "Mortellis Huddleston",
        role: "United States",
        image: "https://i.pravatar.cc/150?u=mortellis-huddleston"
    },
    {
        rating: 5.0,
        text: "I was pleased with the work that this company did, the team worked very hard and working with me sending documentation to them, pictures of how I wanted it. They were very understanding. I recommend this company.",
        name: "Jose Cofresi",
        role: "United States",
        image: "/client/jose-cofresi.jpg"
    },
    {
        rating: 5.0,
        text: "Perfect coordination. Choice of words. The use of unique selling point was displayed. Good customer relationship was superb. Staff was easily approachable.",
        name: "Francis Mensah",
        role: "United Kingdom",
        image: "https://i.pravatar.cc/150?u=francis-mensah"
    },
    {
        rating: 5.0,
        text: "I've had a very positive experience with Webandadssolution - they were very professional, responsive and easy to work with. Nelson was my main point of contact and couldn't have been more helpful and explained everything very clearly.",
        name: "Fiona",
        role: "United Kingdom",
        image: "https://i.pravatar.cc/150?u=fiona-gb"
    },
    {
        rating: 5.0,
        text: "I had a great experience with Webandadssolution. Nelson and Aastha really know what they're doing when it comes to advertising and marketing. They were extremely patient, professional, and always helpful, taking the time to explain things clearly and make sure I was comfortable with every step.",
        name: "Smile & Shine Denture Clinic",
        role: "United Kingdom",
        image: "https://i.pravatar.cc/150?u=smile-shine-denture"
    },
    {
        rating: 5.0,
        text: "It was a great experience with Aastha and her team. We have worked on a big project starting from scratch. If I would have to start all over I would have chosen Aastha again.",
        name: "Ekrem Yilmaz",
        role: "Netherlands",
        image: "/client/ekrem-yilmaz.jpg"
    },
    {
        rating: 5.0,
        text: "Aastha has been conscientious and detail-oriented at every step of re-creating our website, starting with the eradication of all the malware that had plagued us. She also developed a robust SEO strategy, and has protected our site with strong firewalls.",
        name: "Peter Falk",
        role: "United States",
        image: "/client/peter-falk.jpg"
    },
    {
        rating: 5.0,
        text: "Aastha handles all matters relating to our website, including the creation of new sites. Her work is absolutely perfect and highly competent. I greatly appreciate her work.",
        name: "Steffan Zeh",
        role: "Germany",
        image: "https://i.pravatar.cc/150?u=steffan-zeh"
    },
    {
        rating: 5.0,
        text: "Great company. Great service. Nelson works hard with Yukta to provide the best service. They are very attentive to details.",
        name: "Jay Behl",
        role: "Canada",
        image: "https://i.pravatar.cc/150?u=jay-behl"
    },
    {
        rating: 5.0,
        text: "I am very sceptical about working with businesses that I meet online. I have been burned several times before. Working with Aastha was an absolute pleasure. Really good value for the investment and really easy to work with. I cannot rate them highly enough.",
        name: "Mathew Muldoon",
        role: "United States",
        image: "https://i.pravatar.cc/150?u=mathew-muldoon"
    }
];

const Review = () => {
    // Helper to render stars based on rating number
    const renderStars = (rating: number) => {
        const stars: React.ReactElement[] = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                // Full Star
                stars.push(<span key={i} className="review-star">★</span>);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                // Half Star (using a specialized class)
                stars.push(
                    <span key={i} className="review-star review-star-half">★</span>
                );
            } else {
                // Empty Star
                stars.push(<span key={i} className="review-star review-star-empty">★</span>);
            }
        }
        return stars;
    };

    // Double the array for a seamless infinite scroll effect
    const displayReviews = [...reviews, ...reviews];

    const trackRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(430); // fallback: card width + gap
    const offsetRef = useRef(0);
    const pausedRef = useRef(false);
    const inViewRef = useRef(false);

    useEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            const card = track?.querySelector(".review-card") as HTMLElement | null;
            if (!track || !card) return;
            const gap = parseFloat(getComputedStyle(track).gap || "0");
            setStep(card.getBoundingClientRect().width + gap);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Only animate while the carousel is actually on screen — keeps the
    // main thread free during scroll through the rest of the page
    useEffect(() => {
        const wrapper = trackRef.current?.closest(".review-slider-wrapper");
        if (!wrapper) return;
        const observer = new IntersectionObserver(
            ([entry]) => { inViewRef.current = entry.isIntersecting; },
            { rootMargin: "200px" }
        );
        observer.observe(wrapper);
        return () => observer.disconnect();
    }, []);

    // Continuous drift: keeps moving every frame instead of jumping and
    // pausing, looping seamlessly through the doubled review list.
    // On mobile, a single card fills almost the whole screen, so a
    // continuous drift constantly shows two half-cut cards — snap
    // discretely from one full card to the next instead.
    useEffect(() => {
        const loopWidth = reviews.length * step;

        if (window.innerWidth <= 767) {
            const id = window.setInterval(() => {
                if (pausedRef.current || !inViewRef.current) return;
                offsetRef.current = (offsetRef.current + step) % loopWidth;
                const track = trackRef.current;
                if (track) {
                    track.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.3, 1)";
                    track.style.transform = `translateX(-${offsetRef.current}px)`;
                }
            }, 3200);
            return () => window.clearInterval(id);
        }

        const pxPerMs = step / 3500;
        let last = performance.now();
        let frame = requestAnimationFrame(tick);

        function tick(now: number) {
            const dt = now - last;
            last = now;
            if (!pausedRef.current && inViewRef.current) {
                offsetRef.current = (offsetRef.current + pxPerMs * dt) % loopWidth;
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
                }
            }
            frame = requestAnimationFrame(tick);
        }

        return () => cancelAnimationFrame(frame);
    }, [step]);

    const slide = (direction: 1 | -1) => {
        const loopWidth = reviews.length * step;
        offsetRef.current = (offsetRef.current + direction * step + loopWidth) % loopWidth;
        const track = trackRef.current;
        if (track) {
            track.style.transition = "transform 0.5s ease";
            track.style.transform = `translateX(-${offsetRef.current}px)`;
            window.setTimeout(() => {
                if (track) track.style.transition = "";
            }, 500);
        }
    };

    return (
        <section className="review-section">
            <div className="review-container">
                <div className="review-header scroll-reveal">
                    <span className="review-badge">● Testimonial</span>
                    <h2 className="review-title">Hear From Our
                        <span>
                            <img src="/images/icons/icon-2.png" alt="image" />
                        </span>
                        Happy Customers
                    </h2>
                </div>

                <div
                    className="review-slider-wrapper scroll-reveal delay-2"
                    onMouseEnter={() => { pausedRef.current = true; }}
                    onMouseLeave={() => { pausedRef.current = false; }}
                >
                    <div className="review-nav-pill" role="group" aria-label="Reviews carousel navigation">
                        <button
                            type="button"
                            className="review-nav-btn"
                            aria-label="Previous review"
                            onClick={() => slide(-1)}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className="review-nav-divider" />
                        <button
                            type="button"
                            className="review-nav-btn"
                            aria-label="Next review"
                            onClick={() => slide(1)}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="review-track-mask">
                        <div ref={trackRef} className="review-track">
                            {displayReviews.map((rev, index) => (
                                <div className="review-card" key={index}>
                                    {/* Arrow Icon for Hover Effect */}
                                    <div className="review-arrow-icon">
                                        <span>↗</span>
                                    </div>

                                    <div className="review-card-header">
                                        <div className="review-rating-tag">
                                            <div className="review-stars-container">
                                                {renderStars(rev.rating)}
                                            </div>
                                            <span className="review-score">{rev.rating.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <p className="review-text">“{rev.text}”</p>

                                    {/* Quote Icon for Hover Effect */}
                                    <div className="review-quote-icon">”</div>

                                    <div className="review-footer">
                                        <div className="review-user-flex">
                                            <img src={rev.image} alt={rev.name} className="review-user-img" />
                                            <div className="review-user-info">
                                                <h4 className="review-user-name">{rev.name}</h4>
                                                <p className="review-user-role">{rev.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;