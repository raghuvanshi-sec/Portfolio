import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Search Navigation Map
  const searchMap = {
    '/intro': ['home', 'intro', 'start', 'welcome'],
    '/projects': ['projects', 'work', 'case studies', 'portfolio', 'builds', 'apps'],
    '/contact': ['contact', 'hire', 'email', 'social', 'call'],
    '/achievements': ['achievements', 'awards', 'trophies', 'credentials', 'winning', 'hackathon'],
    '/certifications': ['certifications', 'certs', 'certificates', 'licenses', 'courses'],
    '/hobbies': ['hobbies', 'creative', 'photos', 'photography', 'interests', 'about'],
    '/resume.pdf': ['resume', 'cv', 'download resume']
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = searchQuery.toLowerCase().trim();

      if (!query) return;

      // Find matching route
      let targetRoute = null;

      // Direct PDF download check
      if (searchMap['/resume.pdf'].some(k => query.includes(k))) {
        window.open('/resume.pdf', '_blank');
        setIsSearchOpen(false);
        setSearchQuery('');
        setIsMobileMenuOpen(false);
        return;
      }

      for (const [route, keywords] of Object.entries(searchMap)) {
        if (route === '/resume.pdf') continue; // Skip PDF route for navigation
        if (keywords.some(k => query.includes(k)) || route.includes(query)) {
          targetRoute = route;
          break;
        }
      }

      if (targetRoute) {
        navigate(targetRoute);
        setIsSearchOpen(false);
        setSearchQuery('');
        setIsMobileMenuOpen(false);
      } else {
        // Fallback: Use the existing onSearch prop if it was for filtering items within a page
        if (onSearch) onSearch(query);
      }
    }
  };

  useEffect(() => {
     // ... existing scroll logic
     const handleScroll = () => {
         if (window.scrollY > 50) setIsScrolled(true);
         else setIsScrolled(false);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-brand" onClick={handleNavClick}>
          <img src="/images/logo.png" alt="Satyam Raghuvanshi" className="logo-img" />
          <span className="logo-text">PORTFOLIO</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/intro" className="nav-link" onClick={handleNavClick}>Home</Link>
          <Link to="/projects" className="nav-link" onClick={handleNavClick}>Projects</Link>
          <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contact</Link>

          <div
            className={`search-box ${isSearchOpen ? 'active' : ''}`}
            onMouseEnter={() => setIsSearchOpen(true)}
            onMouseLeave={() => {
              // Only close if not focused - handled by CSS mostly, but logic helps
              const activeElement = document.activeElement;
              if (activeElement && activeElement.classList.contains('search-input')) return;
              setIsSearchOpen(false);
            }}
          >
            <button className="nav-icon-btn search-btn" aria-label="Search">
              <span style={{fontSize: '1.2rem'}}>🔍</span>
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Jump to page..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>

          <Link
            to="/"
            className="btn-switch-profile" 
            onClick={handleNavClick}
            style={{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center'}}
          >
            Switch Profile
          </Link>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
