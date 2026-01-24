import '../styles/ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  const cardSizeClass = project.size === 'large' ? 'card-large' : 'card-medium';

  return (
    <article className={`project-card ${cardSizeClass}`} onClick={() => onClick(project)}>
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
        
        {/* Badges */}
        <div className="card-badges">
          {project.badge && <span className="badge-featured">{project.badge}</span>}
          {project.metadata && <span className="badge-meta">{project.metadata}</span>}
        </div>
        
        <h3 className="static-card-title">{project.title}</h3>
        
        {/* Hover Overlay */}
        <div className="card-overlay">
          <div className="overlay-content">
            <h3 className="overlay-title">{project.title}</h3>
            <p className="overlay-desc">{project.shortDescription || project.description.substring(0, 60) + '...'}</p>
            
            <div className="overlay-tech">
              {project.techStack.slice(0, 3).map((tech, index) => (
                <span key={index} className="tech-chip">{tech}</span>
              ))}
            </div>
            
            <span className="overlay-cta">View Case Study →</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
