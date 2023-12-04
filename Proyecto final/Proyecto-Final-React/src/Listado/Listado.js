import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "./Listado.css";

const Listado = () => {
  const [viviendas, setViviendas] = useState([]);
  const [viviendasFiltradas, setViviendasFiltradas] = useState([]);
  const [viviendaSeleccionada, setViviendaSeleccionada] = useState(null);
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [mensajeContacto, setMensajeContacto] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  let pepe = [];
  const [formData, setFormData] = useState({
    direccion: "",
    barrio: "",
    tipoVivienda: "",
    metrosCuadradosTotales: "",
    metrosCuadradosCubierta: "",
    luminosidad: "",
    banios: "",
    cocheras: "",
    ambientes: "",
  });

  useEffect(() => {

    let url = "http://localhost:5000/Vivienda";

    if (JSON.parse(localStorage.getItem('IdUsuario')) !== null) {
      url = "http://localhost:5000/Vivienda/" + localStorage.getItem('IdUsuario');
    }

    axios.get(url).then((res) => {
      console.log(res.data);
      pepe = res.data;
      setViviendas(res.data);
      setViviendasFiltradas(res.data);
      
    });
  }, []);

  const handleEditar = (vivienda) => {
    console.log(vivienda);
    navigate('/EditarVivienda/' + vivienda.Id);
  };

  const handleAlquilar = (vivienda) => {
    setViviendaSeleccionada(vivienda);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAlquilarSubmit = (event) => {
    event.preventDefault();
    setMensajeContacto(`Estaremos en contacto: ${email}`);
    // handleCloseModal(); // Comentado para mantener abierto el modal después de enviar el formulario
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));

    const viviendasFiltradas = viviendas.filter((vivienda) =>
      vivienda.Barrio.toLowerCase().includes(inputValue.toLowerCase())
    );
    setViviendas(viviendasFiltradas);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filtrarPorBarrio = (barrio) => {
    const viviendasFiltradas = viviendas.filter((vivienda) =>
      vivienda.Barrio.toLowerCase().includes(barrio.toLowerCase())
    );
    setViviendasFiltradas(viviendasFiltradas);
  };

  return (
    <div className="card-container">
      <div>
        {/* Input para el filtro de barrio */}
        <input
          type="text"
          onChange={(e) => filtrarPorBarrio(e.target.value)}
          placeholder="Filtrar por barrio..."
        />
      </div>
      {viviendasFiltradas.map((viv, index) => (
        <div className="card-container" key={index}>
          <Card className="card">
            <div className="card-content">
              <Card.Title className="card-title">{viv.Direccion}</Card.Title>
              <Card.Text className="card-text">Descripcion: {viv.Descripcion}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Dirección: {viv.Direccion}</ListGroup.Item>
                <ListGroup.Item>Barrio: {viv.Barrio}</ListGroup.Item>
                <ListGroup.Item>Tipo de Vivienda: {viv.TipoVivienda}</ListGroup.Item>
                <ListGroup.Item>
                  Metros Cuadrados Totales: {viv.MetrosCuadradosTotales}
                </ListGroup.Item>
                <ListGroup.Item>
                  Metros Cuadrados Cubierta: {viv.MetrosCuadradosCubierta}
                </ListGroup.Item>
                <ListGroup.Item>Luminosidad: {viv.Luminosidad}</ListGroup.Item>
                <ListGroup.Item>Baños: {viv.Baños}</ListGroup.Item>
                <ListGroup.Item>Cocheras: {viv.Cocheras}</ListGroup.Item>
                <ListGroup.Item>Ambientes: {viv.Ambientes}</ListGroup.Item>
              </ListGroup>
              {
                JSON.parse(localStorage.getItem("IdUsuario")) ? (
                  <>
                    <button onClick={() => handleEditar(viv)}>Editar</button>
                    <button onClick={() => handleAlquilar(viv)}>Alquilar</button>
                  </>
                ) : <button onClick={() => handleAlquilar(viv)}>Alquilar</button>
              }
            </div>
          </Card>
        </div>
      ))}
      {/* Modal para el botón "Alquilar" */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Alquilar Vivienda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAlquilarSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ingrese su correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Alquilar
            </Button>
            {/* Mensaje de contacto dentro del Modal.Body */}
            {mensajeContacto && (
              <div className="mensaje-contacto">{mensajeContacto}</div>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Listado;
