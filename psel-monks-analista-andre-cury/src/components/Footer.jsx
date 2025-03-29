import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2025 .monks. Todos os direitos reservados.</p>
        <div className="social-media">
          <a href="#facebook">Facebook</a> | 
          <a href="#instagram">Instagram</a> | 
          <a href="#twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
