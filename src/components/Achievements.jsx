import { useState } from 'react';
import '../styles/Section.css';
import '../styles/Achievements.css';
import Navbar from './Navbar';
import Modal from './Modal';

const Achievements = ({ onSearch }) => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleEpisodeClick = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const handleCloseModal = () => {
    setSelectedAchievement(null);
  };

  const achievements = [
    {
      id: 2,
      title: "Spark Tank Champion",
      subline: "College Startup Pitch Competition",
      impact: "1st Place Winner among 50+ teams",
      description: "Led a startup idea from concept to pitch, presenting a market-ready solution before a jury panel. Evaluated on innovation, feasibility, UI/UX, and business impact.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
      durationLabel: "Winner – 2025",
      skills: ["Pitching", "Product Strategy", "UI/UX", "Leadership", "Entrepreneurship"],
      episode: 1,
      progress: 100
    },
    {
      id: 3,
      title: "SIH 2025: Round 2 Qualifier", 
      subline: "National-Level Hackathon",
      impact: "Selected for Round 2 at SIH 2025",
      description: "Qualified for the second round of India’s premier hackathon by developing a real-world problem-solving solution evaluated on technical depth, innovation, and scalability.",
      image: "/sih-2025-win.jpg",
      durationLabel: "Qualified – 2025",
      skills: ["Problem Solving", "Teamwork", "Full-Stack", "Innovation"],
      episode: 2,
      progress: 60
    },
    {
      id: 1,
      title: "Best Photographer",
      subline: "NSS Campaign Recognition",
      impact: "Awarded “Best Photographer” for capturing authentic moments during the NSS social impact campaign.",
      description: "Recognized for visual storytelling and creative composition while documenting real-world social initiatives. My work helped amplify the campaign’s reach and emotional resonance.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop",
      durationLabel: "Awarded 2024",
      skills: ["Photography", "Visual Storytelling", "Branding", "Creativity"],
      episode: 3,
      progress: 100
    }
  ];

  return (
    <div className="section-page achievements-page">
      <Navbar onSearch={onSearch} />
      
      <div className="achievements-hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">MY JOURNEY</h1>
          <p className="hero-subtitle">A timeline of milestones, wins, and growth.</p>
          <div className="meta-info">
             <span className="cred-badge">🏆 Spark Tank Winner</span>
             <span className="cred-badge">📸 Best Photographer</span>
             <span className="cred-badge">🇮🇳 SIH Qualifier</span>
          </div>
          <p className="hero-desc">
            From classroom curiosity to real-world impact — this is the story of how I turned ideas into outcomes.
          </p>
          <div className="hero-actions">
            <button className="btn-play">
              <span className="icon">⬇</span> Download Resume
            </button>
          </div>
        </div>
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="achievements-container">
        <div className="episodes-header">
          <h2 className="section-title">Milestones</h2>
        </div>

        <div className="episodes-list">
          {achievements.map((item) => (
            <div className="episode-row" key={item.id} onClick={() => handleEpisodeClick(item)}>
              <div className="episode-index">{item.episode}</div>
              <div className="episode-thumbnail-wrapper">
                <img src={item.image} alt={item.title} className="episode-thumbnail" />
                <div className="play-overlay">
                    {/* Icon can be changed to eye/info */}
                  <span className="play-icon">👁</span>
                </div>
              </div>
              <div className="episode-info">
                <div className="episode-header-row">
                  <div>
                      <h3 className="episode-title">{item.title}</h3>
                      <span className="episode-subline">{item.subline}</span>
                  </div>
                  <span className="episode-duration-label">{item.durationLabel}</span>
                </div>
                
                <p className="episode-impact">{item.impact}</p>
                <p className="episode-desc">{item.description}</p>
                
                <div className="skill-chips">
                    {item.skills.slice(0, 4).map((skill, i) => (
                        <span key={i} className="skill-chip">{skill}</span>
                    ))}
                </div>
                <span className="episode-cta">View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        project={selectedAchievement} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Achievements;
