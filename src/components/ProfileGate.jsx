import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileGate.css';

const ProfileGate = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const recruiterBtnRef = useRef(null);

  // Keyboard Shortcuts & Scroll Lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'r') {
        setShowModal(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Auto-focus recruiter button on load
    if (recruiterBtnRef.current) {
      // recruiterBtnRef.current.focus(); // Optional: visual focus only if desired
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);
  
  /* Elite Entry UI Configuration */
  const profiles = [
    { 
      id: 'projects', 
      name: 'Projects', 
      subtitle: 'Flagship builds', 
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
      badge: 'START HERE',
      path: '/projects'
    },
    { 
      id: 'contact', 
      name: 'Hire Me', 
      subtitle: 'Available for full-time',
      img: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=400&auto=format&fit=crop',
      path: '/contact'
    },
    { 
      id: 'intro', 
      name: 'Introduction', 
      subtitle: 'Who I am', 
      img: '/images/profile-intro.jpg',
      path: '/intro'
    },
    { 
      id: 'credentials', 
      name: 'Credentials', 
      subtitle: 'Awards & Certs', 
      img: '/images/profile-credentials-new.png',
      path: '/achievements' // Merged entry point
    },
    { 
      id: 'creative', 
      name: 'Creative Mode', 
      subtitle: 'Hobbies & Mindset', 
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop',
      path: '/hobbies'
    }
  ];

  return (
    <div className="profile-gate">
      <div className="gate-content">
        
        {/* SECTION 1: Identity Strip */}
        <div className="gate-identity-strip">
          <p>Hi, I’m <strong>Satyam Raghuvanshi</strong>. I sit at the intersection of Cybersecurity, AI, and Design—building systems that are as safe as they are smart.</p>
        </div>

        {/* SECTION 2: Core CTA Hero */}
        <div className="gate-hero-section">
          <h1 className="gate-title">Choose Your Journey</h1>
          <p className="gate-subtitle">Built for recruiters, founders, and collaborators.<br/>Start fast — or explore deeply.</p>
          
          <div className="hero-actions-row">
            <div className="recruiter-btn-wrapper">
              <button 
                ref={recruiterBtnRef}
                className="recruiter-pulse-btn" 
                onClick={() => setShowModal(true)}
              >
                ⚡ 60-Second Recruiter Mode
              </button>
              <span className="recommended-badge">Recommended</span>
            </div>
            
            <a href="/resume.pdf" download className="resume-btn-outline">
              ⚪ Download Resume
            </a>
          </div>

          <div className="trust-strip">
            <div className="trust-pill">🏆 Spark Tank Winner</div>
            <div className="trust-pill">📜 Industry Certified</div>
            <div className="trust-pill">🛡 Cybersecurity + AI</div>
            <div className="trust-pill">🚀 5+ Projects</div>
          </div>
        </div>

        {/* SECTION 3: Exploration Grid */}
        <div className="gate-exploration-section">
          <h3 className="section-title">Explore My World</h3>
          <div className="profiles-container">
            {profiles.map((profile) => (
              <div 
                key={profile.id} 
                className={`profile-item profile-${profile.id}`}
                onClick={() => navigate(profile.path)}
              >
                <div className="avatar-wrapper">
                  <div 
                    className="profile-avatar"
                    style={{ backgroundImage: `url(${profile.img})` }}
                  ></div>
                  {profile.badge && <span className="profile-badge">{profile.badge}</span>}
                </div>
                <span className="profile-name">{profile.name}</span>
                <span className="profile-meta">{profile.subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Footer Micro CTA */}
        <div className="gate-footer-cta">
          <p>Not sure where to start? <span className="text-link" onClick={() => setShowModal(true)}>Try Recruiter Mode</span> for a 60-second overview.</p>
        </div>

      </div>

      {/* Recruiter Fast Track Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="fast-track-modal" onClick={(e) => e.stopPropagation()}>
            
            {/* Progress Bar Header */}
            <div className="modal-progress-bar">
              <div className="progress-fill"></div>
            </div>

            <div className="modal-header-row">
              <div className="header-text">
                <h2>⚡ Recruiter Fast Track (60s)</h2>
                <p>Everything you need to evaluate me in under one minute.</p>
              </div>
              <div className="header-meta">
                <span className="time-badge">⏱ 60s Overview</span>
                <button className="exit-btn" onClick={() => setShowModal(false)}>Exit Fast Track</button>
              </div>
            </div>
            
            <div className="modal-body-scroll">
              
              {/* Flagship Projects */}
              <div className="modal-section">
                <h3 className="section-heading">🔥 Flagship Projects</h3>
                <div className="project-action-cards">
                  
                  {/* Project 1 */}
                  <div className="action-card">
                    <div className="card-info">
                      <h4>PhishGuard</h4>
                      <p className="card-sub">AI Phishing Detection System</p>
                      <div className="tech-tags">
                        <span>Python</span><span>FastAPI</span><span>ML</span><span>MongoDB</span>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="btn-mini-primary" onClick={() => window.open('https://phishguard-demo.com', '_blank')}>▶ View Demo</button>
                      <button className="btn-mini-outline" onClick={() => navigate('/projects')}>📄 Case Study</button>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="action-card">
                    <div className="card-info">
                      <h4>Spark Tank</h4>
                      <p className="card-sub">Award-Winning Startup Pitch</p>
                      <div className="tech-tags">
                        <span>Innovation</span><span>Leadership</span><span>Product</span>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="btn-mini-primary" onClick={() => navigate('/achievements')}>▶ View Pitch</button>
                      <button className="btn-mini-outline" onClick={() => navigate('/projects')}>📄 Case Study</button>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="action-card">
                    <div className="card-info">
                      <h4>Interactive Portfolio</h4>
                      <p className="card-sub">Developer Showcase Experience</p>
                      <div className="tech-tags">
                        <span>React</span><span>Three.js</span><span>UI/UX</span>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="btn-mini-primary" onClick={() => navigate('/')}>▶ Explore</button>
                      <button className="btn-mini-outline" onClick={() => navigate('/projects')}>📄 Case Study</button>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Credibility Signals */}
              <div className="modal-section">
                <h3 className="section-heading">🛡 Credibility Signals</h3>
                <div className="trust-signal-grid">
                  <div className="trust-card">
                    <span className="trust-icon">🏆</span>
                    <div>
                      <h5>Spark Tank Champion</h5>
                      <p>Recognized for product innovation and pitch execution.</p>
                    </div>
                  </div>
                  <div className="trust-card">
                    <span className="trust-icon">📜</span>
                    <div>
                      <h5>CCNA + Ethical Hacking</h5>
                      <p>Industry-validated cybersecurity foundation.</p>
                    </div>
                  </div>
                  <div className="trust-card">
                    <span className="trust-icon">🚀</span>
                    <div>
                      <h5>Smart India Hackathon</h5>
                      <p>Selected for national-level problem solving.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Sticky Conversion Footer */}
            <div className="modal-conversion-footer">
              <div className="footer-actions">
                <button className="cta-interview" onClick={() => window.open('mailto:satyam@example.com', '_blank')}>
                  📅 Schedule Interview
                </button>
                <a href="/resume.pdf" download className="cta-resume">
                  📥 Download Resume
                </a>
              </div>
              <div className="footer-micro">
                <p>I respond within 24 hours. Open to internships, full-time, and freelance roles.</p>
                <span className="text-link" onClick={() => navigate('/contact')}>💬 Contact Me</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileGate;

