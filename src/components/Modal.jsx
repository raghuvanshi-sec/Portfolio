import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/Modal.css';

const Modal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
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
            {project.duration && <span className="duration">{project.duration}</span>}
          </div>

          <p className="modal-description">{project.description}</p>

          {project.techStack && (
            <div className="modal-tech-stack">
              <h3>Tech Stack:</h3>
              <div className="tags">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.links && (
            <div className="modal-actions">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  ▶  Live Demo
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Code Repository
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
