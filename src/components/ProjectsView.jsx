import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import ProjectRow from './ProjectRow';
import Modal from './Modal';
import Footer from './Footer';

const ProjectsView = ({ 
  categories, 
  projectsByCategory, 
  onProjectClick, 
  handleCloseModal, 
  selectedProject,
  onSearch
}) => {
  return (
    <>
      <Navbar onSearch={onSearch} />
      <HeroBanner />
      
      <div id="project-list" style={{ marginTop: '-150px', position: 'relative', zIndex: 10, paddingBottom: '50px' }}>
        {categories.map(category => (
          <ProjectRow 
            key={category} 
            title={category} 
            projects={projectsByCategory[category]} 
            onProjectClick={onProjectClick} 
          />
        ))}
      </div>

      <Modal 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />
      
      <Footer />
    </>
  );
};

export default ProjectsView;
