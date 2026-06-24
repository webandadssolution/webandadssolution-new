import React from "react"
import "../styles/our_team.css"

const Our_team = () => {
   const teamMembers = [
  {
    name: "Nitesh",
    designation: "CEO",
    img: "/team/nitesh.png",
  },
  {
    name: "Aastha",
    designation: "DIRECTOR",
    img: "/team/aashtha.jpg",
  },
  {
    name: "Shivam",
    designation: "Vice President",
    img: "/team/shivam.png",
  },
  {
    name: "Shruti",
    designation: "Chief Financial Officer",
    img: "/team/shruti.png",
  },

 {
    name: "Ikra",
    designation: "HR Executive",
    img: "/team/ikra.png",
  },

{
    name: "Nikita",
    designation: "Sales Head",
    img: "/team/nicki.png",
  },
{
    name: "Arjit",
    designation: "Sales Manager",
    img: "/team/nash.png",
  },



  
  {
    name: "Amit",
    designation: "Head of Developer",
    img: "/team/Amit.png",
  },
 {
    name: "Sumit",
    designation: " Senior Developer",
    img: "/team/Sumit.png",
  },
  {
    name: "Musharraf",
    designation: "Developer",
    img: "/team/Musaaraf.png",
  },
  
  {
    name: "Simran",
    designation: "Project Manager",
    img: "/team/simi.png",
  },
  {
    name: "Ayush",
    designation: "BDM",
    img: "/team/Ayush.png",
  },

  
  
  
  {
    name: "Ashish",
    designation: "SEO Mangager",
    img: "/team/Ashish.png",
  },
  
  {
    name: "Rekha",
    designation: "SEO Executive",
    img: "/team/rekha.png",
  },
  
  
 
  
   
  {
    name: "Vatsala",
    designation: "SEO Executive",
    img: "/team/Vatsla.png",
  },
  {
    name: "Vrijesh",
    designation: "SEO Executive",
    img: "/team/Virjesh.png",
  },
  {
    name: "Yukta",
    designation: "Virtual Assistant",
    img: "/team/yukta.png",
  },
  {
    name: "Abhishek",
    designation: "Head of Content ",
    img: "/team/Abhishek.png",
  },
  {
    name: "Aman",
    designation: "SEO Mangager",
    img: "/team/aman.png",
  },
];

    // Double the array for a seamless infinite scroll effect
    const displayMembers = [...teamMembers, ...teamMembers];

    return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header scroll-reveal">
          <span className="team-badge">● Our Team</span>
          <h2 className="team-title">Meet Our Experienced Team</h2>
          <p className="team-subtitle">
            Expertise, collaboration, and passion come together to drive exceptional results
          </p>
        </div>

        <div className="team-scroller-viewport scroll-reveal delay-2">
            <div className="team-grid scroller-animation">
                {displayMembers.map((member, index) => (
                    <div key={index} className="team-member-card">
                        <div className="image-wrapper">
                            <img src={member.img} alt={member.name} />
                            <div className="team-overlay">
                                <div className="social-box">
                                    <a href="#" className="linkedin-link" aria-label="LinkedIn">
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="#0A66C2"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                    </a>
                                </div>
                                <div className="member-info">
                                    <h4 className="m-name">{member.name}</h4>
                                    <p className="m-role">{member.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
   )
}

export default Our_team