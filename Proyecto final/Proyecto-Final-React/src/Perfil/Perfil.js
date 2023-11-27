// Perfil.js
import React, { useState, useEffect } from 'react';
import { useUser } from '../User/UserContext';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Perfil() {
  const { userData, setUserData } = useUser();

  // Estados locales para manejar la edición de datos
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  // Función para cargar los datos del usuario desde la base de datos
  const cargarDatosUsuario = async () => {
    try {
      // Realizar una solicitud POST al servidor para obtener los datos del usuario
      const response = await axios.get('http://localhost:5000/Usuario/'+ { email: userData.email });
      console.log(response);
  
      // Actualizar el estado local con los datos del usuario
      const usuario = response.data; // Asegúrate de que el servidor devuelve los datos correctamente
      setNombre(usuario.nombre);
      setApellido(usuario.apellido);
      setNacionalidad(usuario.nacionalidad);
      setCiudad(usuario.ciudad);
      setEmail(usuario.email);
      setTelefono(usuario.telefono);
    } catch (error) {
      console.error('Error al cargar datos del usuario:', error);
    }
  };

  // Efecto para cargar los datos del usuario al montar el componente
  useEffect(() => {
    cargarDatosUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h1>Perfil de Usuario</h1>

      <div>
        <strong>Nombre:</strong> {nombre}
      </div>

      <div>
        <strong>Apellido:</strong> {apellido}
      </div>

      <div>
        <strong>País:</strong> {nacionalidad}
      </div>

      <div>
        <strong>Ciudad:</strong> {ciudad}
      </div>

      <div>
        <strong>Email:</strong> {email}
      </div>

      <div>
        <strong>Teléfono:</strong> {telefono}
      </div>

      <Button variant="primary" onClick={() => cargarDatosUsuario()}>
        Recargar Datos
      </Button>
    </div>
  );
}

export default Perfil;

