import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FASHION</h3>
          <p>Complete your style with awesome clothes from us.</p>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Quick Link</h4>
            <ul>
              <li><a href="#">Share Location</a></li>
              <li><a href="#">Orders Tracking</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms & conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;