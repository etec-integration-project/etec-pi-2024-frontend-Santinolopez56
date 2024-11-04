import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState(''); // Cambiado de "name" a "username"

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      try {
        // Usar "username" en lugar de "name"
        const response = await axios.post("/app/creacionusers/registrar", { username, password, email });
        alert(response.data.mensaje);
      } catch (error) {
        // Mejor manejo del error para mostrar el mensaje de la respuesta
        alert(error.response?.data?.mensaje || "No se pudo crear la cuenta");
      }
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  return (
    <div className="register-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
