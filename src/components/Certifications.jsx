import { useState } from 'react';
import '../styles/Section.css';
import '../styles/Certifications.css';
import Navbar from './Navbar';

const certificates = [
  { 
    name: "AI/ML Certificate", 
    file: "Ai-Ml certificate.pdf", 
    org: "Course", 
    img: "thumb_ai.png",
    description: "Comprehensive course calling Machine Learning algorithms, Neural Networks, and AI ethics." 
  },
  { 
    name: "Android Development", 
    file: "Android Dev Certificate.pdf", 
    org: "Course", 
    img: "thumb_code.png",
    description: "Built native Android apps using Java/Kotlin, covering UI design, fragments, and API integration." 
  },
  { 
    name: "Business Analyst", 
    file: "Business Analyst Certificate.pdf", 
    org: "Course", 
    img: "thumb_data.png",
    description: "Learned data-driven decision making, requirements gathering, and stakeholder management." 
  },
  { 
    name: "CCNA", 
    file: "CCNA certificate.pdf", 
    org: "Cisco", 
    img: "thumb_network.png",
    description: "Network fundamentals, IP connectivity, security fundamentals, and automation." 
  },
  { 
    name: "Ethical Hacking", 
    file: "Ethical Hacker Certificate.pdf", 
    org: "Course", 
    img: "thumb_security.png",
    description: "Penetration testing methodologies, vulnerability assessment, and network defense strategies." 
  },
  { 
    name: "Gemini Student", 
    file: "Gemini student certificate.pdf", 
    org: "Google", 
    img: "thumb_ai.png",
    description: "Specialized training on Google's Gemini models and prompt engineering." 
  },
  { 
    name: "Generative AI", 
    file: "GenAI certificate.pdf", 
    org: "Course", 
    img: "thumb_ai.png",
    description: "Deep dive into GANs, Transformers, LLMs, and content generation pipelines." 
  },
  { 
    name: "ISC2 CPE Credits", 
    file: "ISC2_CPE_credits_-_lecture.pdf", 
    org: "ISC2", 
    img: "thumb_security.png",
    description: "Continuing professional education credits in cybersecurity topics." 
  },
  { 
    name: "Cybersecurity Intro", 
    file: "Introduction_to_Cybersecurity_certificate_satyamraghuvanshi220ct-gmail-com_4a995ad0-8aa6-4713-b085-876de47d8612.pdf", 
    org: "Cisco", 
    img: "thumb_security.png",
    description: "Foundational concepts of information security, threats, and countermeasures." 
  },
  { 
    name: "IoT & Digital Trans", 
    file: "IoT and Digital Transmission certificate.pdf", 
    org: "Course", 
    img: "thumb_network.png",
    description: "Internet of Things architecture, sensor integration, and data transmission protocols." 
  },
  { 
    name: "Microchip AICTE", 
    file: "Microchip AICTE certificate.pdf", 
    org: "AICTE", 
    img: "thumb_ai.png",
    description: "Internship program focused on embedded systems and microcontroller applications." 
  },
  { 
    name: "Network Security", 
    file: "Network Security Certificate.pdf", 
    org: "Course", 
    img: "thumb_security.png",
    description: "Securing network infrastructure, firewalls, VPNs, and intrusion detection systems." 
  },
  { 
    name: "Oracle Certificate", 
    file: "Oracle certificate.pdf", 
    org: "Oracle", 
    img: "thumb_data.png",
    description: "Database management, SQL proficiency, and Oracle cloud infrastructure basics." 
  },
  { 
    name: "Forage Job Sim", 
    file: "forage certificate.pdf", 
    org: "Forage", 
    img: "thumb_data.png",
    description: "Virtual work experience program simulating real-world tasks in software engineering." 
  },
  { 
    name: "Certificate", 
    file: "_certificate_satyamraghuvanshi220ct-gmail-com_0864ff79-67ef-4309-804a-1341442a560f.pdf", 
    org: "Course", 
    img: "thumb_code.png",
    description: "General certification of completion for technical coursework." 
  }
];

const Certifications = ({ onSearch }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCardClick = (fileName) => {
    window.open(`/certificates/${fileName}`, '_blank');
  };

  const handleInfoClick = (e, cert) => {
    e.stopPropagation(); // Prevent card click
    setSelectedCert(cert);
  };

  const closeInfo = () => setSelectedCert(null);

  return (
    <div className="section-page">
      <Navbar onSearch={onSearch} />
      <div className="section-content fade-in">
        <h1>Certifications</h1>
        
        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card" 
              onClick={() => handleCardClick(cert.file)}
              title="Click to view PDF"
            >
              <div className="cert-image-container">
                <img 
                  src={`/certificates/${cert.img}`} 
                  alt={cert.name} 
                />
              </div>
              
              <div className="cert-details-overlay">
                <div className="cert-title">{cert.name}</div>
                <div className="cert-org">{cert.org}</div>
                <div className="cert-actions">
                  <button className="cert-btn">
                    <span>▶</span> View
                  </button>
                  <button 
                    className="cert-btn secondary"
                    onClick={(e) => handleInfoClick(e, cert)}
                  >
                    <span>+</span> Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Modal */}
        {selectedCert && (
          <div className="modal-overlay" onClick={closeInfo}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeInfo}>×</button>
              <div className="modal-header">
                 <h2>{selectedCert.name}</h2>
                 <span className="modal-badge">{selectedCert.org}</span>
              </div>
              <div className="modal-body">
                <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc'}}>
                  {selectedCert.description}
                </p>
                <button 
                  className="btn-primary" 
                  style={{marginTop: '20px', width: '100%'}}
                  onClick={() => handleCardClick(selectedCert.file)}
                >
                  View Certificate PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;
