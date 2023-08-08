import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormVivienda.css'; // Asegúrate de ajustar el nombre del archivo CSS

function FormVivienda(props) {
  const [objVivienda, setObjVivienda] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setObjVivienda((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
    console.log(objVivienda);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(objVivienda);
    console.log("llegue");
    props.agregarVivienda(objVivienda);
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

      <Form.Group controlId="input8">
        <Form.Label>Ambientes: </Form.Label>
        <Form.Control
          type="number"
          name="Ambientes"
          min="1"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input8">
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
          onChange={handleInputChange}
        />
      </Form.Group>
          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </div>
  );
}

export default FormVivienda;
