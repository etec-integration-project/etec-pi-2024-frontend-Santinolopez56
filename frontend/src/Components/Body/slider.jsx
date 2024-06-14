import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <img src="imagen1.jpg" alt="Fórmula 1 - Imagen 1" />
        <img src="imagen2.jpg" alt="Fórmula 1 - Imagen 2" />
        <img src="imagen3.jpg" alt="Fórmula 1 - Imagen 3" />
        <img src="imagen4.jpg" alt="Fórmula 1 - Imagen 4" />
        <img src="imagen5.jpg" alt="Fórmula 1 - Imagen 5" />
      </div>
    </div>
  );
}

export default Slider;
