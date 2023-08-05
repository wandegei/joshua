// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
    <p>&copy; {new Date().getFullYear()} My React Website</p>
    <div className="social-icons">
      <a href="https://www.facebook.com/gizambaDanial" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.linkedin.com/in/wandegei-joshua-8284b9247/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
    </div>
  </footer>
  );
};

export default Footer;
