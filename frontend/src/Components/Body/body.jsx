import React from 'react';
import './body.css';

function body() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#home">Inicio</a>
          <a href="#schedule">Calendario</a>
          <a href="#teams">Equipos</a>
          <a href="#drivers">Pilotos</a>
        </nav>
      </header>
      <div className="content">
        <button className="view-drivers" onClick={() => window.location.href = '/drivers'}>Ver Pilotos</button>
      </div>
    </div>
  );
}

export default body;
