import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Perfil.css'; 
import { useNavigate } from 'react-router-dom';

function Perfil (){

    const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <div className="container">
      <h1>Perfil de Usuario</h1>

      {/* Datos Personales */}
      <h2>Datos Personales</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <label htmlFor="dni">DNI:</label>
      <input
        type="text"
        id="dni"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />

      {/* Contacto */}
      <h2>Contacto</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="tel"
        id="telefono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
    </div>
  );
}
export default Perfil;
