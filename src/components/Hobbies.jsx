import { useNavigate } from 'react-router-dom';
import '../styles/Section.css';
import '../styles/Hobbies.css';
import Navbar from './Navbar';

const Hobbies = ({ onSearch }) => {
  const navigate = useNavigate();

  const hobbiesData = [
    {
      id: 1,
      title: "Photography",
      subtitle: "The Art of Visual Storytelling",
      description: "Exploring real-world moments through a disciplined creative lens. Photography sharpened my attention to detail, visual hierarchy, and storytelling — skills I now apply directly to UI/UX design and product presentation.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
      tags: ["Creativity", "Visual Storytelling", "Detail Oriented"],
      metric: "🏆 Best Photographer Award"
    },
    {
      id: 2,
      title: "Competitive Sports",
      subtitle: "District-Level Kabaddi Champion",
      description: "District-level champion trained in high-intensity team sports. Competitive athletics built my discipline, leadership under pressure, and resilience — traits that directly translate into high-stakes engineering and collaborative problem-solving.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600",
      tags: ["Leadership", "Resilience", "Teamwork"],
      metric: "🥇 District-Level Champion"
    },
    {
      id: 3,
      title: "Hackathons",
      subtitle: "Building Under Fire",
      description: "Active innovator in national-level challenges like Smart India Hackathon. Hackathons strengthened my ability to prototype fast, adapt to constraints, and build production-grade systems in extreme time pressure with cross-functional teams.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      tags: ["Innovation", "Rapid Prototyping", "Problem Solving"],
      metric: "🚀 SIH 2025 Qualifier"
    },
    {
      id: 4,
      title: "Green Tech",
      subtitle: "Purpose-Driven Innovation",
      description: "Driven by impact-first product thinking through sustainability-focused projects. Green tech initiatives shaped my long-term vision, ethical engineering mindset, and commitment to building technology that creates measurable real-world value.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600",
      tags: ["Sustainability", "Strategy", "Impact"],
      metric: "🌱 Impact Project Winner"
    }
  ];

  const scrollToGrid = () => {
    const grid = document.querySelector('.hobbies-container');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
  };

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
            <span className="genre-tag">Leadership</span>
            <span className="quality-badge">HD</span>
          </div>

          <p className="hero-desc">
            Technical skills build the product. Mindset builds the legacy. 
            These disciplines shape how I think, build, and lead — from crafting visual stories to thriving under competitive pressure and building impact-first technology.
          </p>

          {/* Micro-Hook CTA */}
          <div className="hero-hook" onClick={scrollToGrid}>
            <span className="hook-label">Why this matters</span>
            <span className="hook-arrow">→</span>
            <p className="hook-text">Because great engineers are built beyond code.</p>
          </div>
        </div>
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hobbies-container">
        <h2 className="section-title">The Backstory: Leadership & Mindset</h2>
        
        <div className="hobbies-grid">
          {hobbiesData.map((item) => (
            <div className="hobby-card" key={item.id}>
              <div className="hobby-image-wrapper">
                <img src={item.image} alt={item.title} className="hobby-image" />
                <div className="hobby-overlay">
                  {item.metric && <span className="metric-badge">{item.metric}</span>}
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

        {/* Section Level CTA */}
        <div className="hobbies-footer">
            <button className="cta-button" onClick={() => navigate('/projects')}>
                See How This Shapes My Work →
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
