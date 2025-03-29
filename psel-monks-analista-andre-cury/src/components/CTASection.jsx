import React from 'react';
import './CTASection.css';

// import appStoreBadge from '../assets/app-store-badge.png';
// import googlePlayBadge from '../assets/google-play-badge.png';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>Baixe nosso app agora mesmo!</p>
        <div className="store-buttons">
          <img 
            src="https://via.placeholder.com/150x50?text=App+Store" 
            alt="App Store" 
          />
          <img 
            src="https://via.placeholder.com/150x50?text=Google+Play" 
            alt="Google Play" 
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
