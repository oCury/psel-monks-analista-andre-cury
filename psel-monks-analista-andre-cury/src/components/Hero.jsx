import React from 'react';
import './Hero.css';
// Importe sua imagem ou 3D text aqui, ex: import heroImage from '../assets/hero-image.png';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur ac semper sapien. Integer feugiat ex et eros varius, 
          id feugiat orci consectetur.
        </p>
        <button className="hero-button">Saiba Mais</button>
      </div>
      <div className="hero-image">
        <div class="scene">
          <div class="cylinder" id="cylinder">
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
