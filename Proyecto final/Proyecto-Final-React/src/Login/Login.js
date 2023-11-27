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
    const url = 'http://localhost:5000/Usuario/' + email
    // const requestOptions = {
    //   method:'get',
    //   headers: {'Content-type': 'application/json'},
    //   //body: JSON.stringify({Mail: email, password: password})
    //   body:  {Mail: email, password: password}
    // }
    const response = await axios.get(url);
    console.log("recibi: " + JSON.stringify(response.data));
    const token = response.data.token;

    localStorage.setItem('token', token);
    if (response.data === "") {
      alert("Usuario inexistente")
    }
    else{
      navigate('/Home');
    }

    
  } catch (error) {
    console.error('Error during login:', error);
    alert("Usuario inexistente")
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