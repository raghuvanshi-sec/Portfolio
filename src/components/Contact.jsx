import '../styles/Section.css';
import '../styles/Contact.css';
import Navbar from './Navbar';

const Contact = ({ onSearch }) => {
  return (
    <div className="section-page">
      <Navbar onSearch={onSearch} />
      <div className="section-content fade-in">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <p className="contact-text">
            Have a question or want to work together? Drop me a message below!
          </p>
          
          <form 
            action="https://formsubmit.co/satyamraghuvanshi220ct@gmail.com" 
            method="POST" 
            className="contact-form"
          >
            {/* Honeypot */}
            <input type="text" name="_honey" style={{display: 'none'}} />
            
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />
            
            {/* Success Page (Optional - redirects back to site) */}
            <input type="hidden" name="_next" value="http://localhost:5173" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
