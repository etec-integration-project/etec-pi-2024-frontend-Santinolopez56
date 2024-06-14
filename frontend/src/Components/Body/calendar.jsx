import React from 'react';
import './calendar.css';

const races = [
  { race: 'GP de Australia', practice: '08:00', qualifying: '10:00', race: '14:00' },
  { race: 'GP de Bahréin', practice: '09:00', qualifying: '11:00', race: '15:00' },
  // Agrega las demás carreras aquí
];

const Calendar = () => {
  return (
    <div className="calendar">
      <h2>Calendario de Carreras</h2>
      <ul>
        {races.map((race, index) => (
          <li key={index}>
            <h3>{race.race}</h3>
            <p>Prácticas: {race.practice}</p>
            <p>Clasificación: {race.qualifying}</p>
            <p>Carrera: {race.race}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
