import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Perfil.css'; 
import { useNavigate } from 'react-router-dom';
import { useUser } from '../User/UserContext';


function Perfil (){

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const { userData } = useUser();


  return (
    <div className="container">
      <h1>Perfil de Usuario</h1>

      {/* Datos Personales */}
      <h2>Datos Personales</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={userData.nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        value={userData.apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <label htmlFor="pais">Pais:</label>
      <input
        type="text"
        id="pais"
        value={userData.pais}
        onChange={(e) => setPais(e.target.value)}
      />

      <label htmlFor="ciudad">Ciudad:</label>
      <input
        type="text"
        id="ciudad"
        value={userData.ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />

      {/* Contacto */}
      <h2>Contacto</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={userData.email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="tel"
        id="telefono"
        value={userData.telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
    </div>
  );
}
export default Perfil;
