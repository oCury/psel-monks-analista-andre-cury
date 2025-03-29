import React from "react";
import "./Cylinder3D.css";

const Cylinder3D = () => {
  const numSegments = 10;      // Quantas faixas de texto
  const textContent = "monks"; // Texto que será repetido
  const translateZ = 100;      // Raio do cilindro (distância do centro)

  return (
    <div className="scene">
      <div className="cylinder">
        {Array.from({ length: numSegments }).map((_, i) => {
          const angle = (360 / numSegments) * i;
          return (
            <div
              key={i}
              className="segment"
              style={{
                transform: `rotateX(${angle}deg) translateZ(${translateZ}px)`
              }}
            >
              {textContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cylinder3D;
