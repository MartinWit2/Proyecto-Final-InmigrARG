import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormVivienda() {
  const [objVivienda, setObjVivienda] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setObjVivienda((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con el objeto objVivienda, como enviarlo al servidor.
    console.log(objVivienda);
  };

  return (
    <Form onSubmit={handleSubmit} className="FormVivienda">
      <Form.Group controlId="input1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          name="direccion"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input2">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          name="descripcion"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input3">
        <Form.Label>m2</Form.Label>
        <Form.Control
          type="text"
          name="metrosCuadrados"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input4">
        <Form.Label>Cocheras</Form.Label>
        <Form.Control
          type="text"
          name="cocheras"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input5">
        <Form.Label>Ambientes</Form.Label>
        <Form.Control
          type="text"
          name="ambientes"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input6">
        <Form.Label>Input 6:</Form.Label>
        <Form.Control
          type="text"
          name="input6"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input7">
        <Form.Label>Input 7:</Form.Label>
        <Form.Control
          type="text"
          name="input7"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="input8">
        <Form.Label>Input 8:</Form.Label>
        <Form.Control
          type="text"
          name="input8"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="imageInput">
        <Form.Label>Subir Imagen (opcional):</Form.Label>
        <Form.Control
          type="file"
          name="imagen"
          accept="image/*"
        />
      </Form.Group>

      <Button variant="primary" type="submit">Enviar</Button>
    </Form>
  );
}

export default FormVivienda;