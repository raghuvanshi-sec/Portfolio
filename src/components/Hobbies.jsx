import '../styles/Section.css';
import '../styles/Hobbies.css';
import Navbar from './Navbar';

const Hobbies = ({ onSearch }) => {

  const hobbiesData = [
    {
      id: 1,
      title: "Photography",
      subtitle: "The Art of Visual Storytelling",
      description: "Exploring real-world moments through a disciplined lens, blending composition, light, and emotion into narratives that resonate. Awarded Best Photographer during the NSS campaign for documenting impact-driven stories with clarity and purpose.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
      tags: ["Creativity", "Visual Storytelling", "Detail Oriented"]
    },
    {
      id: 2,
      title: "Competitive Sports",
      subtitle: "Where Discipline Meets Grit",
      description: "District-level champion at the U-14 level (Kabaddi), trained in a high-intensity team sport that demands strategy, resilience, and performance under pressure. Years of competitive play forged mental toughness and leadership instincts.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600",
      tags: ["Leadership", "Resilience", "Teamwork"]
    },
    {
      id: 3,
      title: "Hackathons",
      subtitle: "Building Under Fire",
      description: "Active innovator in national-level challenges like Smart India Hackathon 2025, qualifying for Round 2. Thrives in rapid prototyping environments where ideas must become working systems—fast.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      tags: ["Innovation", "Rapid Prototyping", "Problem Solving"]
    },
    {
      id: 4,
      title: "Green Tech",
      subtitle: "Purpose-Driven Innovation",
      description: "Driven by impact-first product thinking through projects like UniGreen, blending environmental responsibility with business viability. Innovation isn’t just about building—it’s about building what matters.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600",
      tags: ["Sustainability", "Strategy", "Impact"]
    }
  ];

  return (
    <div className="section-page hobbies-page">
      <Navbar onSearch={onSearch} />
      
      <div className="hobbies-hero">
        <div className="hobbies-hero-content">
          <div className="netflix-original-badge">
            <span className="n-logo">N</span>
            <span className="original-text">A NETFLIX ORIGINAL SERIES</span>
          </div>
          <h1 className="hero-title">BEYOND CODE</h1>
          
          <div className="intro-metadata">
            <span className="match-score">98% Match</span>
            <span className="year">2026</span>
            <span className="maturity-rating">U/A 13+</span>
            <span className="seasons">Bonus Features</span>
            <span className="genre-tag">Motivational</span>
            <span className="quality-badge">HD</span>
          </div>

          <p className="hero-desc">
            Technical skills build the product. Mindset builds the legacy. 
            Exploring the disciplines and passions that fuel my approach to engineering and leadership.
          </p>
        </div>
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hobbies-container">
        <h2 className="section-title">Bonus Features: The Backstory</h2>
        
        <div className="hobbies-grid">
          {hobbiesData.map((item) => (
            <div className="hobby-card" key={item.id}>
              <div className="hobby-image-wrapper">
                <img src={item.image} alt={item.title} className="hobby-image" />
                <div className="hobby-overlay">
                  <span className="hobby-subtitle">{item.subtitle}</span>
                </div>
              </div>
              
              <div className="hobby-content">
                <div className="hobby-header">
                  <h3 className="hobby-title">{item.title}</h3>
                  <div className="hobby-tags">
                    {item.tags.map(tag => <span key={tag} className="tag-badge">{tag}</span>)}
                  </div>
                </div>
                
                <div className="hobby-body">
                  <p className="hobby-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
