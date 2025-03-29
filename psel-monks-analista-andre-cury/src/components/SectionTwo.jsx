import React from 'react';
import './SectionTwo.css';
// import skyline from '../assets/skyline.jpg';

function SectionTwo() {
  return (
    <section className="section-two">
      <div className="image-container">
        <img src="https://via.placeholder.com/600x400" alt="skyline" />
      </div>
      <div className="text-container">
        <h2>Outra Seção Importante</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer ac risus nec magna pharetra fringilla eu eu metus.
        </p>
        <p>
          Aliquam erat volutpat. In fermentum, risus eget luctus commodo, 
          diam mi dapibus purus, non facilisis eros velit eu elit.
        </p>
      </div>
    </section>
  );
}

export default SectionTwo;
