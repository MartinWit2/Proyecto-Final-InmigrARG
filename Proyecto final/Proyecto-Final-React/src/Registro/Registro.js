import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, ListGroup  } from 'react-bootstrap';
import './Registro.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Registro.css"; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
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
      const response = await axios.get(`http://localhost:5000/Usuario/${email}`, {
        params: {
          password: password
        }
      });
  
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
      // Handle authentication error here (e.g., show error message to the user)
    }
  };

  return (
    
    <Container className="login-container">
      
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh', marginTop:'-85px' }}>
        <Col xs={12} md={6} lg={4}>
          <div className="login-form">
            <h2 className="text-center mb-4">Registrate</h2>
            <Form>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={handleEmailChange} />
              </Form.Group>
              <Form.Group controlId="apellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" value={apellido} onChange={handleEmailChange} />
              </Form.Group>
              <Form.Group controlId="numero">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="text" value={numero} onChange={handleEmailChange} />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handlePasswordChange} />
              </Form.Group>
              <Form.Group controlId="pais">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" value={pais} onChange={handleEmailChange} />
              </Form.Group>
              <Form.Group controlId="ciudad">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" value={ciudad} onChange={handleEmailChange} />
              </Form.Group>
              <Button variant="primary" block onClick={HandleRegister}>
                Registrarse
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      
    </Container>
    
  );
}

export default Login;
