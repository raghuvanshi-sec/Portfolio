import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/Modal.css';

const Modal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    
    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    // Using a timeout to ensure DOM is rendered before observing
    setTimeout(() => {
        const sections = document.querySelectorAll('.case-section');
        sections.forEach(section => observer.observe(section));
    }, 100);

    return () => {
      document.body.style.overflow = 'auto';
      observer.disconnect();
    };
  }, [project]);

  if (!project) return null;

  // Check if we have the full "Authority" content structure
  const isAuthorityMode = project.caseStudy && project.caseStudy.caseHero;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content ${isAuthorityMode ? 'authority-mode' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {isAuthorityMode ? (
          /* --- AUTHORITY LAYOUT --- */
          <div className="case-study-container">
            
            {/* 1. HERO SECTION */}
            <section className="case-hero" style={{backgroundImage: `url(${project.image})`}}>
              <div className="case-overlay"></div>
              <div className="case-hero-content">
                <h1>{project.title}</h1>
                <p className="case-subtitle">{project.caseStudy.caseHero.subtitle}</p>
                <p className="case-impact">{project.caseStudy.caseHero.impact}</p>
                <div className="case-meta-chips">
                  {project.caseStudy.caseHero.metaChips.map((chip, i) => (
                    <span key={i} className="meta-chip">{chip}</span>
                  ))}
                </div>
                <div className="case-actions">
                  {project.links?.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🔴 View Live Demo</a>}
                  {project.links?.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">⚪ GitHub Repo</a>}
                </div>
              </div>
            </section>

            {/* 2. OVERVIEW */}
            <section className="case-section overview-section">
              <h2>{project.caseStudy.overview.title}</h2>
              <p>{project.caseStudy.overview.text}</p>
            </section>

            {/* 3. PROBLEM STATEMENT */}
            <section className="case-section problem-section">
              <h2>{project.caseStudy.problem.title}</h2>
              <p>{project.caseStudy.problem.text}</p>
            </section>

            {/* 4. SOLUTION & APPROACH */}
            <section className="case-section approach-section">
              <h2>{project.caseStudy.approach.title}</h2>
              <ul className="approach-list">
                {project.caseStudy.approach.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>

            {/* 5. TECH STACK */}
            <section className="case-section tech-section">
              <h2>Technology Stack</h2>
              <div className="tech-chip-grid">
                {project.caseStudy.techStackDetail ? project.caseStudy.techStackDetail.map((tech, i) => (
                  <span key={i} className="tech-chip-large">{tech}</span>
                )) : project.techStack.map((tech, i) => (
                  <span key={i} className="tech-chip-large">{tech}</span>
                ))}
              </div>
            </section>

            {/* 6. SYSTEM ARCHITECTURE */}
            {project.caseStudy.architecture && (
              <section className="case-section architecture-section">
                <h2>{project.caseStudy.architecture.title}</h2>
                <p>{project.caseStudy.architecture.text}</p>
                {project.caseStudy.architecture.image && (
                  <div className="architecture-image">
                    <img src={project.caseStudy.architecture.image} alt="Architecture Diagram" />
                  </div>
                )}
              </section>
            )}

            {/* 7. KEY FEATURES */}
            {project.caseStudy.features && (
              <section className="case-section features-section">
                <h2>Key Features</h2>
                <div className="features-grid">
                  {project.caseStudy.features.map((feature, i) => (
                    <div key={i} className="feature-card">
                      <span className="feature-icon">{feature.icon || '🚀'}</span>
                      <h3>{feature.title || feature}</h3>
                      {feature.desc && <p>{feature.desc}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 8. IMPACT & RESULTS */}
            {project.caseStudy.impact && (
              <section className="case-section impact-section">
                <h2>Impact & Results</h2>
                <ul className="impact-list">
                  {project.caseStudy.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 9. CHALLENGES */}
            {project.caseStudy.challenges && (
              <section className="case-section challenges-section">
                <h2>{project.caseStudy.challenges.title}</h2>
                <p>{project.caseStudy.challenges.text}</p>
              </section>
            )}

            {/* 10. GALLERY */}
            {project.caseStudy.gallery && (
              <section className="case-section gallery-section">
                <h2>Screenshots & Demo</h2>
                <div className="gallery-grid">
                  {project.caseStudy.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`Screenshot ${i+1}`} />
                  ))}
                </div>
              </section>
            )}

            {/* 11. FINAL CTA */}
            <section className="case-footer">
              <h2>Want to Explore More?</h2>
              <div className="footer-actions">
                {project.links?.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🔴 View Live Demo</a>}
                {project.links?.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">⚪ GitHub Repository</a>}
                <button className="btn btn-text" onClick={onClose}>🔥 Back to Projects</button>
              </div>
            </section>

          </div>
        ) : (
          /* --- FALLBACK LEGACY LAYOUT --- */
          <>
            <div className="modal-image-container">
              <img src={project.image} alt={project.title} />
              <div className="modal-image-overlay">
                <h2>{project.title}</h2>
              </div>
            </div>

            <div className="modal-details">
              <div className="modal-meta">
                <span className="match-score">98% Match</span>
                <span className="year">{project.year || '2024'}</span>
                <span className="age-rating">{project.rating || project.category || 'TV-14'}</span>
              </div>

              <p className="modal-description">{project.description}</p>

              {/* Keep existing fallback sections for simple projects */}
              {project.techStack && (
                <div className="modal-tech-stack">
                  <h3>Tech Stack</h3>
                  <div className="tags">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {project.links && (
                <div className="modal-actions">
                  {project.links.demo && <a href={project.links.demo} className="btn btn-primary">Live Demo</a>}
                  {project.links.github && <a href={project.links.github} className="btn btn-secondary">GitHub</a>}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};
export default Modal;
