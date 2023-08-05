import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the "Back to Top" button when user scrolls below 400px
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'inline-block' : 'none' }}
    >
      Back to Top
    </button>
  );
};

export default ScrollToTop;
