import React from 'react';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
