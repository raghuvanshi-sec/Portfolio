import '../styles/HeroBanner.css';

const HeroBanner = () => {
  return (
    <header className="hero-banner" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Creative Developer</h1>
        <p className="hero-subtitle">
          Building immersive web experiences, robust AI models, and secure systems.
        </p>
        <p className="hero-context-subtitle">
          Selected projects showcasing my expertise in full-stack development, cybersecurity, and AI-driven systems.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('project-list')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="icon">▶</span> View My Work
          </button>
          <button className="btn btn-secondary">
            <span className="icon">ℹ</span> More Info
          </button>
        </div>
        
        <a href="https://github.com/raghuvanshi-sec/PhishGuard" target="_blank" rel="noopener noreferrer" className="hero-mini-cta">
          Or explore my flagship project →
        </a>
      </div>
      <div className="hero-overlay"></div>
    </header>
  );
};

export default HeroBanner;
