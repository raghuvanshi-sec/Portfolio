import { useState } from 'react';
import '../styles/Section.css';
import '../styles/Achievements.css';
import Navbar from './Navbar';
import Modal from './Modal';

const Achievements = ({ onSearch }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleEpisodeClick = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const handleCloseModal = () => {
    setSelectedAchievement(null);
  };

  const achievements = [
    {
      id: 1,
      title: "Best Photographer",
      description: "Recognized as Best Photographer during the NSS campaign for capturing authentic moments that told the story of service, leadership, and community impact. Each frame balanced technical precision with emotional clarity, transforming live action into lasting narrative.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop",
      duration: "45m",
      year: "2023",
      rating: "TV-MA",
      episode: 1,
      progress: 85
    },
    {
      id: 2,
      title: "SparkTank Champion",
      description: "Winner of SparkTank, the flagship startup pitch competition organized by the college Entrepreneurship Cell (E-Cell), for Project UniGreen—a sustainability-driven innovation built to solve real-world environmental challenges. The project stood out for its clarity of vision, practical impact, and execution-ready design.\n\nFrom concept to pitch deck, UniGreen fused environmental responsibility with business viability. The winning presentation demonstrated strong problem framing, solution architecture, and persuasive storytelling—proving that innovation isn’t just about ideas, it’s about direction, discipline, and delivery.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
      duration: "58m",
      year: "2024",
      rating: "TV-14",
      episode: 2,
      progress: 40
    },
    {
      id: 3,
      title: "SIH 2025: Round 2 Qualifier",
      description: "Selected for Round 2 of Smart India Hackathon 2025. This milestone validates problem-solving depth and technical execution, transforming abstract concepts into a working prototype under strict constraints, among thousands of competing teams.",
      image: "/sih-2025-win.jpg",
      duration: "Ongoing",
      year: "2025",
      rating: "TV-MA",
      episode: 3,
      progress: 60
    }
  ];

  return (
    <div className="section-page achievements-page">
      <Navbar onSearch={onSearch} />
      
      <div className="achievements-hero-banner">
        <div className="hero-content">
          <div className="series-logo">N SERIES</div>
          <h1 className="hero-title">MY JOURNEY</h1>
          <div className="meta-info">
            <span className="match-score">98% Match</span>
            <span className="year">2021-2025</span>
            <span className="maturity-rating">TV-MA</span>
            <span className="seasons">1 Season</span>
            <span className="badge-hd">HD</span>
          </div>
          <p className="hero-desc">
            From humble beginnings to major victories. Witness the evolution of a developer through a series of defining moments, challenges, and triumphs.
          </p>
          <div className="hero-actions">
            <button className="btn-play">
              <span className="icon">▶</span> Play It All
            </button>
            <button className="btn-my-list">
              <span className="icon">+</span> My List
            </button>
          </div>
        </div>
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="achievements-container">
        <div className="episodes-header">
          <h2 className="section-title">Episodes</h2>
          <div className="season-selector-wrapper">
            <select 
              className="season-selector" 
              value={selectedSeason} 
              onChange={(e) => setSelectedSeason(Number(e.target.value))}
            >
              <option value={1}>Season 1 (2025)</option>
              <option value={2}>Season 2</option>
            </select>
          </div>
        </div>

        {selectedSeason === 1 ? (
          <div className="episodes-list">
            {achievements.map((item) => (
              <div className="episode-row" key={item.id} onClick={() => handleEpisodeClick(item)}>
                <div className="episode-index">{item.episode}</div>
                <div className="episode-thumbnail-wrapper">
                  <img src={item.image} alt={item.title} className="episode-thumbnail" />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: `${item.progress}%`}}></div>
                  </div>
                </div>
                <div className="episode-info">
                  <div className="episode-header-row">
                    <h3 className="episode-title">{item.title}</h3>
                    <span className="episode-duration">{item.duration}</span>
                  </div>
                  <p className="episode-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="coming-soon-container">
            <div className="coming-soon-content">
              <h2>Season 2 Coming Soon</h2>
              <p>New achievements are currently in production.</p>
            </div>
          </div>
        )}
      </div>

      <Modal 
        project={selectedAchievement} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Achievements;
