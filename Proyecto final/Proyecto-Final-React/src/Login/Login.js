import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handlePasswordChange} />
              </Form.Group>

              <Button variant="primary" block onClick={handleLogin}>
                Iniciar Sesión
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
