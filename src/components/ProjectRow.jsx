import ProjectCard from './ProjectCard';
import '../styles/ProjectRow.css';

const ProjectRow = ({ title, projects, onProjectClick }) => {
  return (
    <section className="project-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <div className="row-slider">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={onProjectClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectRow;
