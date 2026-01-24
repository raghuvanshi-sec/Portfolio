import { useState, useMemo } from 'react';
import '../styles/Section.css';
import '../styles/Certifications.css';
import Navbar from './Navbar';
import certificationsData from '../data/certifications.json';

const CATEGORIES = ["All", "AI / ML", "Cybersecurity", "Web Development", "Data Science"];

const Certifications = ({ onSearch }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCerts = useMemo(() => {
    let filtered = certificationsData;
    
    if (activeFilter !== "All") {
      filtered = filtered.filter(cert => cert.category === activeFilter || (activeFilter === "Other" && !CATEGORIES.includes(cert.category)));
    }

    // Sort: Featured first, then newest year first
    return filtered.sort((a, b) => {
      if (a.featured === b.featured) {
        return parseInt(b.year) - parseInt(a.year);
      }
      return a.featured ? -1 : 1;
    });
  }, [activeFilter]);

  const handleCardClick = (fileName) => {
    // Check if filename is a full URL or local path
    const url = fileName.startsWith('http') ? fileName : `/certificates/${fileName}`;
    window.open(url, '_blank');
  };

  return (
    <div className="section-page">
      <Navbar onSearch={onSearch} />
      <div className="section-content fade-in">
        
        {/* Section Header */}
        <div className="cert-header">
          <h1>Certifications</h1>
          <p className="cert-subtitle">
            Industry-recognized credentials validating my expertise in AI, cybersecurity, and full-stack development.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="cert-filters">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`filter-chip ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Certificate Grid */}
        <div className="cert-grid">
          {filteredCerts.map((cert) => (
            <div 
              key={cert.id} 
              className="cert-card" 
              onClick={() => handleCardClick(cert.file)}
            >
              {/* Card Background (Thumbnail) */}
              <div className="cert-thumbnail">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className="cert-overlay-gradient"></div>
              </div>
              
              {/* Visible Content (Default) */}
              <div className="cert-content-visible">
                <div className="cert-top-row">
                   {cert.badge && <span className="cert-badge">{cert.badge}</span>}
                </div>
                <div className="cert-main-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="cert-hover-overlay">
                <div className="hover-content">
                  <h3 className="hover-title">{cert.title}</h3>
                  <p className="hover-issuer">{cert.issuer} • {cert.year}</p>
                  
                  <div className="hover-skills">
                    {cert.skills.slice(0, 4).map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <button className="view-cert-btn">
                    View Certificate →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="cert-footer">
            <a href="#" className="download-all-btn">
                📄 Download All Certificates (ZIP) →
            </a>
        </div>

      </div>
    </div>
  );
};

export default Certifications;

