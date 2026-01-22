import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import ProfileGate from './components/ProfileGate';
import Introduction from './components/Introduction';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import ProjectsView from './components/ProjectsView';
import projectsData from './data/projects.json';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      navigate('/projects');
    }
  };

  // Filter projects based on search query
  const filteredProjects = projectsData.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Group filtered projects by category
  const categories = [...new Set(filteredProjects.map(p => p.category))];
  
  const projectsByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredProjects.filter(p => p.category === category);
    return acc;
  }, {});

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<ProfileGate />} />
        <Route path="/intro" element={<Introduction onSearch={handleSearch} />} />
        <Route path="/achievements" element={<Achievements onSearch={handleSearch} />} />
        <Route path="/certifications" element={<Certifications onSearch={handleSearch} />} />
        <Route path="/hobbies" element={<Hobbies onSearch={handleSearch} />} />
        <Route path="/contact" element={<Contact onSearch={handleSearch} />} />
        <Route path="/projects" element={
          <ProjectsView 
            categories={categories}
            projectsByCategory={projectsByCategory}
            onProjectClick={handleProjectClick}
            handleCloseModal={handleCloseModal}
            selectedProject={selectedProject}
            onSearch={handleSearch}
          />
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
