import "./Listado.css";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

const Listado = () => {
  const [viviendas, setViviendas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/Vivienda/1").then((res) => {
      setViviendas(res.data);
    });
  }, []);

  return (
    <div className="card-container">
      {viviendas.map((viv, index) => {
        const imagen = viv.imagen;
        const direccion = viv.Direccion;
        const desc = viv.Descripcion;
        const m2 = viv.MetrosCuadradosTotales;
        const cocheras = viv.Cocheras;
        const ambientes = viv.Ambientes;
        const barrio = viv.Barrio;
        const m2cubierta = viv.MetrosCuadradosCubierta;
        const luminosidad = viv.Luminosidad;
        const baños = viv.Baños;
        const tipovivienda = viv.tipoVivienda;
        const descripcion = viv.Descripcion;

        return (
          <Card key={index} className="card">
            <Card.Img variant="top" src={imagen} className="card-img" />
            <div className="card-content">
              <Card.Title className="card-title">{direccion}</Card.Title>
              <Card.Text className="card-text">{desc}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Dirección: {direccion}</ListGroup.Item>
                <ListGroup.Item>Barrio: {barrio}</ListGroup.Item>
                <ListGroup.Item>Tipo de Vivienda: {tipovivienda}</ListGroup.Item>
                <ListGroup.Item>
                  Metros Cuadrados Totales: {m2}
                </ListGroup.Item>
                <ListGroup.Item>
                  Metros Cuadrados Cubierta: {m2cubierta}
                </ListGroup.Item>
                <ListGroup.Item>Luminosidad: {luminosidad}</ListGroup.Item>
                <ListGroup.Item>Baños: {baños}</ListGroup.Item>
                <ListGroup.Item>Cocheras: {cocheras}</ListGroup.Item>
                <ListGroup.Item>Ambientes: {ambientes}</ListGroup.Item>
                <ListGroup.Item>Descripcion: {descripcion}</ListGroup.Item>
                <ListGroup.Item>Imagen: {imagen}</ListGroup.Item>
              </ListGroup>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Listado;
