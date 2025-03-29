import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import CTASection from './components/CTASection';
import TagsSection from './components/TagsSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <CTASection />
      <TagsSection />
      <Footer />
    </div>
  );
}

export default App;
