import React, { useState } from "react";
import instagram from "../../multimedia/instagram.png";
import twitter from "../../multimedia/twitter.png";
import github from "../../multimedia/github.png";
import "./footer.css";

function Footer() {
  const pilotos = [
    "Max Verstappen: Red Bull",
    "Sergio Perez: Red Bull",
    "Lewis Hamilton: Mercedes",
    "George Rusell: Mercedes",
    "Fernando Alonso: Aston Martin",
    "Lance Stroll: Aston Martin",
    "Charles Leclerc: Ferrari",
    "Carlos Sainz: Ferrari",
    "Franco Colapinto: Williams",
    "Alex Albon: Williams",
    "Guanyu Zhou: Kick Sauber",
    "Valtteri Bottas: Kick Sauber",
    "Pierre Gasly: Alpine",
    "Estabon Ocon: Alpine",
    "Yuki Tsunoda. RB Racing",
    "Liam Lawsom: RB Racing",
    "Kevin Magnussen: Haas",
    "Nico Hulkenberg: Haas",
    "Lando Norris: McLaren",
    "Oscar piastri: McLaren"
  ];

  const [pilotoFavorito, setPilotoFavorito] = useState("");
  const [opinionPagina, setOpinionPagina] = useState("");

  
  async function enviarPilotoFavorito(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/piloto-favorito", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ piloto: pilotoFavorito }),
      });
      if (response.ok) {
        alert("Piloto favorito guardado exitosamente");
        setPilotoFavorito("");
      } else {
        alert("Error al guardar el piloto favorito");
      }
    } catch (error) {
      console.error("Error al enviar el piloto favorito:", error);
    }
  }

  
  async function enviarOpinionPagina(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/opinion-pagina", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ opinion: opinionPagina }),
      });
      if (response.ok) {
        alert("Opinión guardada exitosamente");
        setOpinionPagina("");
      } else {
        alert("Error al guardar la opinión");
      }
    } catch (error) {
      console.error("Error al enviar la opinión:", error);
    }
  }

  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>

        {/* Formulario: Piloto Favorito */}
        <div className="footer-form">
          <h3>Elige tu Piloto Favorito</h3>
          <form onSubmit={enviarPilotoFavorito}>
            <select
              value={pilotoFavorito}
              onChange={(e) => setPilotoFavorito(e.target.value)}
              required
            >
              <option value="">Selecciona un piloto</option>
              {pilotos.map((piloto, index) => (
                <option key={index} value={piloto}>
                  {piloto}
                </option>
              ))}
            </select>
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Formulario: Opinión de la Página */}
        <div className="footer-form">
          <h3>Deja tu Opinión sobre la Página</h3>
          <form onSubmit={enviarOpinionPagina}>
            <textarea
              value={opinionPagina}
              onChange={(e) => setOpinionPagina(e.target.value)}
              placeholder="Escribe tu opinión..."
              rows="3"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 F1 Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
