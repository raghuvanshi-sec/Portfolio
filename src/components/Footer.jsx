import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Questions? Contact me at <a href="mailto:satyamraghuvanshi220ct@gmail.com">satyamraghuvanshi220ct@gmail.com</a></p>
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Help Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Satya's Portfolio. Layout inspired by Netflix.</p>
      </div>
    </footer>
  );
};

export default Footer;
