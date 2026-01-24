import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        <Link to="/" className="logo" onClick={handleNavClick}>PORTFOLIO</Link>
        
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
              placeholder="Titles, people, genres"
              onBlur={() => setIsSearchOpen(false)}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(e) => onSearch && onSearch(e.target.value)}
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
