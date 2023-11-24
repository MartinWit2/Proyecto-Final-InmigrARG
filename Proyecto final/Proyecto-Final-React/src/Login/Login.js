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

  const handleLogin = async () => {
    try {
      const url = 'http://localhost:5000/Usuario/' + email
      // const requestOptions = {
      //   method:'get',
      //   headers: {'Content-type': 'application/json'},
      //   //body: JSON.stringify({Mail: email, password: password})
      //   body:  {Mail: email, password: password}
      // }
      const response = await axios.get(url);
  
      // Assuming the API responds with a token upon successful login
      const token = response.data.token;
  
      // Store the token in local storage or state for future requests
      localStorage.setItem('token', token);
  
      // Redirect to another page after successful login
      // You can replace '/' with the desired route
      // or use react-router navigation methods
      window.location.href = '/';
    } catch (error) {
      console.error('Error during login:', error);
      alert("Usuario inexistente")
      // Handle authentication error here (e.g., show error message to the user)
    }
  };

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