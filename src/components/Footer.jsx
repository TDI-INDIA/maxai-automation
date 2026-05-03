const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MaxAI Automation</h3>
          <p>Advanced AI-powered automation solutions for enterprises.</p>
          <div className="social-links">
            <a href="https://github.com/TDI-INDIA" rel="noopener noreferrer" target="_blank">GitHub</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/about">About</a></li>
            <li><a href="/#/services">Services</a></li>
            <li><a href="/#/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} MaxAI Automation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;