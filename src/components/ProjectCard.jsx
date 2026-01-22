import '../styles/ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <article className="project-card" onClick={() => onClick(project)}>
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="card-info">
        <h3>{project.title}</h3>
        <div className="tags">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
