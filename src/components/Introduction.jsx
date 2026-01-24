import { useNavigate } from 'react-router-dom';
import '../styles/Section.css';
import '../styles/Introduction.css';
import Navbar from './Navbar';

const Introduction = ({ onSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="section-page intro-container">
      <Navbar onSearch={onSearch} />
      
      {/* Hero Section */}
      <div className="intro-hero fade-in">
        <h1 className="intro-title">SATYAM RAGHUVANSHI</h1>
        
        <div className="role-container">
          <span className="role-primary">Full-Stack Developer</span>
          <div className="role-secondary">
            <span>UI/UX</span>
            <span className="dot">•</span>
            <span>Machine Learning</span>
            <span className="dot">•</span>
            <span>Cybersecurity</span>
          </div>
        </div>

        <div className="intro-metadata">
          <span className="cred-badge">Spark Tank Winner</span>
          <span className="cred-badge">Best Photographer</span>
          <span className="cred-badge">5+ Major Projects</span>
        </div>

        <div className="intro-content-wrapper">
          <p className="intro-synopsis">
            I’m a developer who believes technology should feel magic, not just functional.<br/>
            Blending the precision of cybersecurity with the creativity of AI, I build digital experiences that are intuitive, secure, and—above all—impactful.
          </p>
          <div className="intro-image-container">
            <img src="/images/profile-intro.jpg" alt="Satyam Raghuvanshi" className="intro-profile-img" />
          </div>
        </div>

        <div className="intro-actions">
          <a href="/resume.pdf" download="Satyam_Raghuvanshi_Resume.pdf" className="btn-primary" style={{textDecoration: 'none'}}>
            🔥 Download Resume
          </a>
          <button className="btn-outline" onClick={() => document.getElementById('episodes-section').scrollIntoView({behavior: 'smooth'})}>
            🚀 Explore My Work
          </button>
        </div>

        {/* Proof of Work Navigation */}
        <div className="intro-secondary-actions" style={{marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center'}}>
          <button 
            className="nav-pill-btn" 
            onClick={() => navigate('/achievements')}
          >
            View Achievements
          </button>
          <button 
            className="nav-pill-btn" 
            onClick={() => navigate('/certifications')}
          >
            View Certifications
          </button>
        </div>
      </div>

      {/* Episodes Section (Timeline) */}
      <div className="section-divider" id="episodes-section">
        <span className="section-label">Episodes (Journey)</span>
      </div>

      <div className="episodes-list">
        {/* Episode 1 */}
        <div className="episode-row">
          <span className="episode-number">1</span>
          <div className="episode-thumbnail">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=500&auto=format&fit=crop" alt="Schooling" />
          </div>
          <div className="episode-details">
            <div className="episode-header">
              <span className="episode-title">BPM International School</span>
              <span className="episode-date">2020</span>
            </div>
            <p className="episode-desc">
              **Matriculation (10th)** - Completed secondary education with a GPA of 8.1. 
              The pilot episode where the curiosity for science and technology began.
            </p>
          </div>
        </div>

        {/* Episode 2 */}
        <div className="episode-row">
          <span className="episode-number">2</span>
          <div className="episode-thumbnail">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=500&auto=format&fit=crop" alt="College" />
          </div>
          <div className="episode-details">
            <div className="episode-header">
              <span className="episode-title">RD and DJ College Munger</span>
              <span className="episode-date">2022</span>
            </div>
            <p className="episode-desc">
              **Intermediate (12th)** - Focused on Science stream. Achieved a GPA of 6.1. 
              Laid the groundwork for higher engineering studies.
            </p>
          </div>
        </div>

        {/* Episode 3 */}
        <div className="episode-row">
          <span className="episode-number">3</span>
          <div className="episode-thumbnail">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop" alt="University" />
          </div>
          <div className="episode-details">
            <div className="episode-header">
              <span className="episode-title">RGPV University</span>
              <span className="episode-date">2023 - Present</span>
            </div>
            <p className="episode-desc">
              Pursuing B.Tech in Computer Science (GPA: 8.3). Building a strong foundation 
              in algorithms, data structures, and software engineering principles.
            </p>
          </div>
        </div>

        {/* Episode 4 */}
        <div className="episode-row">
          <span className="episode-number">4</span>
          <div className="episode-thumbnail">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop" alt="Experience" />
          </div>
          <div className="episode-details">
            <div className="episode-header">
              <span className="episode-title">Cybersecurity Intern - Threat Analyst</span>
              <span className="episode-date">3 Months (Virtual)</span>
            </div>
            <p className="episode-desc">
              Completed a 3-month virtual internship as a Threat Analyst. 
              Focused on identifying security vulnerabilities, analyzing threat intelligence, 
              and mitigating potential cyber risks in a simulated environment.
            </p>
          </div>
        </div>

        {/* Episode 5 */}
        <div className="episode-row">
          <span className="episode-number">5</span>
          <div className="episode-thumbnail">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500&auto=format&fit=crop" alt="Certifications" />
          </div>
          <div className="episode-details">
            <div className="episode-header">
              <span className="episode-title">Certified Expert</span>
              <span className="episode-date">2024 - 2025</span>
            </div>
            <p className="episode-desc">
              Achieved certifications in Ethical Hacking, CCNA, and Cyber Security 
              from Cisco and Fortinet. Continuously upgrading skills via Forage simulations.
            </p>
          </div>
        </div>
      </div>

      {/* Cast Section (Skills) */}
      <div className="section-divider" style={{marginTop: '50px'}}>
        <span className="section-label">Cast & Crew (Tech Stack)</span>
      </div>

      <div className="skills-grid">
        <div className="skill-item">
          <div className="skill-circle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
          </div>
          <span className="skill-name">React</span>
        </div>
        <div className="skill-item">
          <div className="skill-circle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
          </div>
          <span className="skill-name">Node.js</span>
        </div>
        <div className="skill-item">
          <div className="skill-circle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
          </div>
          <span className="skill-name">Python</span>
        </div>
        <div className="skill-item">
          <div className="skill-circle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" />
          </div>
          <span className="skill-name">HTML5</span>
        </div>
        <div className="skill-item">
          <div className="skill-circle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />
          </div>
          <span className="skill-name">CSS3</span>
        </div>
        <div className="skill-item">
          <div className="skill-circle">
             <div style={{fontSize: '2rem'}}>💻</div>
          </div>
          <span className="skill-name">JavaScript</span>
        </div>
        <div className="skill-item">
          <div className="skill-circle">
             <div style={{fontSize: '2rem'}}>🔐</div>
          </div>
          <span className="skill-name">Ethical Hacking</span>
        </div>
        <div className="skill-item">
          <div className="skill-circle">
             <div style={{fontSize: '2rem'}}>🌐</div>
          </div>
          <span className="skill-name">CCNA</span>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="section-divider" style={{marginTop: '50px'}}>
        <span className="section-label">Connect & Follow</span>
      </div>

      <div className="skills-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))'}}>
        <a href="https://www.linkedin.com/in/satyam-0x/" target="_blank" rel="noopener noreferrer" className="skill-item" style={{textDecoration: 'none'}}>
          <div className="skill-circle" style={{borderColor: '#0077b5', background: 'white'}}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style={{width: '60%', height: '60%', objectFit: 'contain'}} />
          </div>
          <span className="skill-name" style={{color: '#fff'}}>LinkedIn</span>
        </a>
        
        <a href="https://github.com/raghuvanshi-sec" target="_blank" rel="noopener noreferrer" className="skill-item" style={{textDecoration: 'none'}}>
          <div className="skill-circle" style={{borderColor: '#fff', background: 'white'}}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub" style={{width: '70%', height: '70%', objectFit: 'contain'}} />
          </div>
          <span className="skill-name" style={{color: '#fff'}}>GitHub</span>
        </a>

        <a href="mailto:satyamraghuvanshi220ct@gmail.com" className="skill-item" style={{textDecoration: 'none'}} title="satyamraghuvanshi220ct@gmail.com">
          <div className="skill-circle" style={{borderColor: '#ea4335', background: 'white'}}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_(2020).svg" alt="Gmail" style={{width: '60%', height: '60%', objectFit: 'contain'}} />
          </div>
          <span className="skill-name" style={{color: '#fff'}}>Gmail</span>
        </a>

        <a href="https://www.instagram.com/_.satyamrajput._" target="_blank" rel="noopener noreferrer" className="skill-item" style={{textDecoration: 'none'}}>
           <div className="skill-circle" style={{borderColor: '#E1306C', background: 'white'}}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{width: '60%', height: '60%', objectFit: 'contain'}} />
          </div>
          <span className="skill-name" style={{color: '#fff'}}>Instagram</span>
        </a>

        <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="skill-item" style={{textDecoration: 'none'}}>
           <div className="skill-circle" style={{borderColor: '#FFA116', background: 'white'}}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style={{width: '60%', height: '60%', objectFit: 'contain'}} />
          </div>
          <span className="skill-name" style={{color: '#fff'}}>LeetCode</span>
        </a>

        <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer" className="skill-item" style={{textDecoration: 'none'}}>
           <div className="skill-circle" style={{borderColor: '#5B4638', background: 'white'}}>
             <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/codechef-jeoniltoi0j9tldjswosdb.png/codechef-lgxo38awg4olg9ip1e9wwf.png?_a=DATAg1AAZAA0" alt="CodeChef" style={{width: '70%', height: '70%', objectFit: 'contain'}} />
          </div>
          <span className="skill-name" style={{color: '#fff'}}>CodeChef</span>
        </a>
      </div>

    </div>
  );
};

export default Introduction;
