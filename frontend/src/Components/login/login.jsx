import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      try {
            await axios.post("http://localhost:3000/creacionuser/login", { email, password, repeatPassword });
            alert("Su cuenta ha sido creada exitosamente");
          } catch (error) {
          alert("Hubo un error al crear la cuenta");
          }
    } else {
      alert("Sus contraseñas no coinciden");
  }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className="register-link">
        <p>¿No tiene una cuenta? <Link to="/register">Registrarse</Link></p>
      </div>
    </div>
  );
}

export default Login;
