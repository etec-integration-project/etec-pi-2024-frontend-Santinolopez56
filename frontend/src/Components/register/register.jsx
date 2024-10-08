import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      try {
        const response = await axios.post("http://localhost:3000/creacionusers/registrar", { name, password, email });
        alert(response.data.mensaje);
      } catch (error) {
        alert("No se pudo crear la cuenta");
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
          <label htmlFor="name">Nombre de Usuario:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
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
