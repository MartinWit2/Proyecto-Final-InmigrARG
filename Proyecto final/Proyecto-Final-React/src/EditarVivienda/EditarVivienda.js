import "./EditarVivienda.css";
import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";


const EditarVivienda = () => {
    const [objVivienda, setObjVivienda] = useState({});
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:5000/ViviendaById/" + id).then((res) => {
          console.log(res.data);
          setObjVivienda(res.data);
        });
      }, []);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setObjVivienda((prevObj) => ({
          ...prevObj,
          [name]: value,
        }));
    
      };


      const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Viviendas');

        axios.put("http://localhost:5000/Vivienda/" + id, objVivienda).then((res) => {
          console.log(res.data);
          setObjVivienda(res.data);
        });

        /*editarVivienda(formData).then(() => {
          navigate('/Viviendas');
        });*/
      };

    return(
        <div className="FormViviendaContainer">
      <div className="FormViviendaBox">
        <Form onSubmit={handleSubmit} className="FormVivienda" encType="multipart/form-data">
          <Form.Group controlId="input1">
            <Form.Label>Dirección: </Form.Label>
            <Form.Control
              type="text"
              name="Direccion"
              onChange={handleInputChange}
              value={ objVivienda.Direccion }
              required
            />
          </Form.Group>

          <Form.Group controlId="input2">
            <Form.Label>Barrio: </Form.Label>
            <Form.Control
              type="text"
              name="Barrio"
              value={ objVivienda.Barrio }
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input3">
            <Form.Label>Tipo de Vivienda: </Form.Label>
            <Form.Control
              type="text"
              name="TipoVivienda"
              value={ objVivienda.TipoVivienda }
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input4">
            <Form.Label>Metros Cuadrados Totales: </Form.Label>
            <Form.Control
              type="number"
              name="MetrosCuadradosTotales"
              value={ objVivienda.MetrosCuadradosTotales }
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
              value={ objVivienda.MetrosCuadradosCubierta }
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
              value={ objVivienda.Luminosidad }
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input7">
            <Form.Label>Baños: </Form.Label>
            <Form.Control
              type="number"
              name="Baños"
              value={ objVivienda.Baños }
              min="1"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="input8">
            <Form.Label>Cocheras: </Form.Label>
            <Form.Control
              type="number"
              value={ objVivienda.Cocheras }
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
              value={ objVivienda.Ambientes }
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
              value={ objVivienda.Descripcion }
              onChange={handleInputChange}
              required
            />
          </Form.Group>


          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </div>
    );
}


export default EditarVivienda