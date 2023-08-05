import React from 'react';

import 'animate.css/animate.min.css'; // Import animate.css styles
const MainContent = () => {
  return (
    <main>
      <h1>Welcome to our website</h1>
      <p>
        We have <strong>fantastic products</strong> and{' '}
        <strong>services</strong> to offer.
      </p>
      <button>
        <i className="fas fa-envelope"></i> Contact Us
      </button>
      <section className="hero">
        <h1>Welcome to our website</h1>
        <p>We have <strong>fantastic products</strong> and <strong>services</strong> to offer.</p>
        <button><i className="fas fa-envelope"></i> Contact Us</button>
      </section>

      <section className="cta">
        <h2>Join our community now!</h2>
        <p>Subscribe to our newsletter for the latest updates and special offers.</p>
        <button><i className="fas fa-arrow-right"></i> Subscribe</button>
      </section>
      <section className="hero animate__animated animate__fadeIn">
        {/* ... Hero section content ... */}
      </section>

      <section className="cta animate__animated animate__fadeInUp">
        {/* ... Call-to-action section content ... */}
      </section>
    </main>
  );
};

export default MainContent;
