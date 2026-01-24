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
        
        <div className="view-all-container" style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
          <a href="https://github.com/raghuvanshi-sec?tab=repositories" target="_blank" rel="noopener noreferrer" 
             style={{
               background: '#e50914', 
               color: 'white', 
               padding: '12px 30px', 
               textDecoration: 'none', 
               fontWeight: 'bold', 
               borderRadius: '4px',
               fontSize: '1.2rem',
               display: 'flex',
               alignItems: 'center',
               gap: '10px'
             }}>
             View All Projects →
          </a>
        </div>
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
