import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      try {
        const response = await axios.post("http://localhost:3000/creaionusers/iniciar-sesion", { name, password });
        alert("Inicio de sesión exitoso");
        console.log(response.data.token);
      } catch (error) {
        alert("No se pudo iniciar sesión");
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={iniciarSesion}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeat-password">Repetir Contraseña:</label>
          <input
            type="password"
            id="repeat-password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className="register-link">
        <p>¿No tiene una cuenta? <Link to="/register">Registrarse</Link></p>
      </div>
    </div>
  );
}
