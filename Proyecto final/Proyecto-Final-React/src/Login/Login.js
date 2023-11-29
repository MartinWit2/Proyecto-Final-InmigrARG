import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const HandleRegister = (event) => {
    event.preventDefault();
        navigate('/Registro');
    
  };

// ... (código anterior)

const handleLogin = async () => {
  try {
    const url = 'http://localhost:5000/Usuario/' + email;
    const response = await axios.get(url);

    if (response.data === "") {
      alert("Usuario inexistente");
    } else {
      localStorage.setItem('nombreUsuario', JSON.stringify(email));
      navigate('/');
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 404) {
        alert("Usuario inexistente");
      } else {
        console.error('Error during login:', error);
        alert('Error durante el inicio de sesión');
      }
    } else {
      console.error('Error during login:', error);
      alert('Error durante el inicio de sesión');
    }
  }
};



// ... (código posterior)


  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">Iniciar Sesión</h2>
        <Form>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="login-input"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              className="login-input"
            />
          </Form.Group>

          <Button variant="primary" block onClick={handleLogin} className="login-button">
            Iniciar Sesión
          </Button>
          <Button variant="secondary" block onClick={HandleRegister} className="register-button">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;