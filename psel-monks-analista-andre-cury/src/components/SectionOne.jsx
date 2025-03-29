import React from 'react';
import './SectionOne.css';
// Exemplo de import de imagens
// import city1 from '../assets/city1.jpg';
// import city2 from '../assets/city2.jpg';
// import city3 from '../assets/city3.jpg';

function SectionOne() {
  return (
    <section className="section-one">
      <h2>Lorem ipsum dolor sit amet consectetur</h2>
      <p>Subtítulo ou descrição breve sobre esta seção.</p>
      <div className="cards-container">
        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="city1" />
          <h3>Card 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="city2" />
          <h3>Card 2</h3>
          <p>Curabitur ac semper sapien. Integer feugiat ex et eros varius.</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="city3" />
          <h3>Card 3</h3>
          <p>Id feugiat orci consectetur. Aenean vitae sapien sit amet dui.</p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
