import { useNavigate } from 'react-router-dom';
import '../styles/ProfileGate.css';

const ProfileGate = () => {
  const navigate = useNavigate();
  const profiles = [
    { id: 'intro', name: 'Introduction', color: '#e50914', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' },
    { id: 'achievements', name: 'Achievements', color: '#b81d24', img: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=400&auto=format&fit=crop' },
    { id: 'certifications', name: 'Certifications', color: '#221f1f', img: 'https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg' },
    { id: 'projects', name: 'Projects', color: '#f5f5f1', img: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' },
    { id: 'hobbies', name: 'Hobbies', color: '#ffa500', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop' },
    { id: 'contact', name: 'Contact Us', color: '#0071eb', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png' },
  ];

  return (
    <div className="profile-gate">
      <div className="gate-content">
        <h1 className="gate-title">Who's watching?</h1>
        <div className="profiles-container">
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              className="profile-item" 
              onClick={() => navigate(`/${profile.id}`)}
            >
              <div 
                className="profile-avatar"
                style={{ backgroundImage: `url(${profile.img})` }}
              ></div>
              <span className="profile-name">{profile.name}</span>
            </div>
          ))}
        </div>
        <button className="manage-btn">Manage Profiles</button>
      </div>
    </div>
  );
};

export default ProfileGate;
