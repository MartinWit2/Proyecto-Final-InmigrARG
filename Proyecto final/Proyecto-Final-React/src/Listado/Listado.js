import "./Listado.css";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Listado = ({ Vivienda }) => {
  if(Array.isArray(Vivienda)){
    return Vivienda.map((viv) => {
      const imagen = viv.imagen
      const direccion = viv.Direccion;
      const desc = viv.Descripcion;
      const m2=viv.MetrosCuadradosTotales;
      const cocheras = viv.Cocheras;
      const ambientes = viv.Ambientes;
    return(
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src='{imagen}'/>
      <Card.Body>
        <Card.Title>{direccion}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>m2:{m2}</ListGroup.Item>
        <ListGroup.Item>cocheras:{cocheras}</ListGroup.Item>
        <ListGroup.Item>Ambientes:{ambientes}</ListGroup.Item>
      </ListGroup>
    </Card>
    )
  });
  }
  return null;
};

export default Listado;
