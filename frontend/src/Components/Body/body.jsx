import React from 'react';
import './body.css';
import Slider from './slider';
import Calendar from './calendar';
import SocialFooter from './SocialFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#home">Inicio</a>
          <a href="#news">Noticias</a>
          <a href="#schedule">Calendario</a>
          <a href="#teams">Equipos</a>
          <a href="#drivers">Pilotos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>
      <Slider />
      <div className="content">
        <button className="view-drivers" onClick={() => window.location.href = '/drivers'}>Ver Pilotos</button>
      </div>
      <Calendar />
      <SocialFooter />
    </div>
  );
}

export default App;
