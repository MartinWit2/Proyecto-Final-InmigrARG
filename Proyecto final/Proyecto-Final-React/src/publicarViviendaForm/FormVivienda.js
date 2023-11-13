import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormVivienda.css'; // Asegúrate de ajustar el nombre del archivo CSS
import { useNavigate } from 'react-router-dom';

function FormVivienda() {
  const [objVivienda, setObjVivienda] = useState({});
  const navigate = useNavigate();
  const [image, setImage] = useState(null); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setObjVivienda((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
    console.log(objVivienda);
  };

  const agregarVivienda = async (objVivienda) => {
    const formData = new FormData();
    formData.append('image', image); // Agregamos la imagen al formData
    formData.append('data', JSON.stringify(objVivienda));
  
    let url = 'http://localhost:5000/Vivienda';
    return axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    agregarVivienda(objVivienda).then(() => {
      navigate('/Viviendas');
    });
  };



const handleImageChange = (event) => {
  const file = event.target.files[0];
  setImage(file);
};

  return (
    <div className="FormViviendaContainer">
      <div className="FormViviendaBox">
        <Form onSubmit={handleSubmit} className="FormVivienda">
          <Form.Group controlId="input1">
            <Form.Label>Dirección: </Form.Label>
            <Form.Control
              type="text"
              name="Direccion"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input2">
            <Form.Label>Barrio: </Form.Label>
            <Form.Control
              type="text"
              name="Barrio"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input3">
            <Form.Label>Tipo de Vivienda: </Form.Label>
            <Form.Control
              type="text"
              name="TipoVivienda"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input4">
            <Form.Label>Metros Cuadrados Totales: </Form.Label>
            <Form.Control
              type="number"
              name="MetrosCuadradosTotales"
              min="1"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input5">
            <Form.Label>Metros Cuadrados Cubierta: </Form.Label>
            <Form.Control
              type="number"
              name="MetrosCuadradosCubierta"
              min="1"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input6">
            <Form.Label>Luminosidad: </Form.Label>
            <Form.Control
              type="text"
              name="Luminosidad"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input7">
            <Form.Label>Baños: </Form.Label>
            <Form.Control
              type="number"
              name="Baños"
              min="1"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input8">
            <Form.Label>Cocheras: </Form.Label>
            <Form.Control
              type="number"
              name="Cocheras"
              min="0"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input9">
            <Form.Label>Ambientes: </Form.Label>
            <Form.Control
              type="number"
              name="Ambientes"
              min="1"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input10">
            <Form.Label>Descripción: </Form.Label>
            <Form.Control
              type="text"
              name="Descripcion"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="imageInput">
            <Form.Label>Subir Imagen (Opcional):</Form.Label>
            <Form.Control
              type="file"
              name="Imagen"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Form.Group>

          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </div>
  );
}

export default FormVivienda;
